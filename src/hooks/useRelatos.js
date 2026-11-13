import { useState, useEffect } from 'react';
import { API_URL, API_CONFIGURADA } from '../services/api';

// Relatos de exemplo, usados enquanto a MockAPI não estiver configurada
const EXEMPLOS = [
  { id: '1', sensorId: 'MV-01', rua: 'Rua das Juntas Provisórias', descricao: 'Água cobrindo parte da pista junto à calçada.' },
  { id: '2', sensorId: 'MV-02', rua: 'Rua Abagiba', descricao: 'Água acumulando perto do cruzamento.' },
];

// Sem API, os relatos ficam salvos no localStorage do navegador
function lerLocal() {
  const salvo = localStorage.getItem('relatosDiluvium');
  return salvo ? JSON.parse(salvo) : EXEMPLOS;
}

function salvarLocal(lista) {
  localStorage.setItem('relatosDiluvium', JSON.stringify(lista));
}

// Hook customizado com o CRUD de relatos
function useRelatos() {
  const [relatos, setRelatos] = useState(API_CONFIGURADA ? [] : lerLocal());
  const [carregando, setCarregando] = useState(API_CONFIGURADA);
  const [erro, setErro] = useState('');
  const url = `${API_URL}/relatos`;

  function atualizarLista(lista) {
    if (!API_CONFIGURADA) salvarLocal(lista);
    setRelatos(lista);
  }

  // READ: lista os relatos
  useEffect(() => {
    if (!API_CONFIGURADA) return;

    fetch(url)
      .then((resposta) => {
        if (!resposta.ok) throw new Error('Erro ao carregar os relatos.');
        return resposta.json();
      })
      .then((lista) => setRelatos(lista))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, [url]);

  // CREATE: registra um novo relato
  function criarRelato(relato) {
    if (!API_CONFIGURADA) {
      atualizarLista([...relatos, { ...relato, id: String(Date.now()) }]);
      return;
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(relato),
    })
      .then((resposta) => resposta.json())
      .then((novo) => atualizarLista([...relatos, novo]))
      .catch(() => alert('Erro ao enviar o relato.'));
  }

  // UPDATE: edita um relato
  function editarRelato(id, dados) {
    const lista = relatos.map((r) => (r.id === id ? { ...r, ...dados } : r));
    if (!API_CONFIGURADA) {
      atualizarLista(lista);
      return;
    }

    fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    })
      .then(() => atualizarLista(lista))
      .catch(() => alert('Erro ao editar o relato.'));
  }

  // DELETE: apaga um relato
  function apagarRelato(id) {
    const lista = relatos.filter((r) => r.id !== id);
    if (!API_CONFIGURADA) {
      atualizarLista(lista);
      return;
    }

    fetch(`${url}/${id}`, { method: 'DELETE' })
      .then(() => atualizarLista(lista))
      .catch(() => alert('Erro ao apagar o relato.'));
  }

  return { relatos, carregando, erro, criarRelato, editarRelato, apagarRelato };
}

export default useRelatos;
