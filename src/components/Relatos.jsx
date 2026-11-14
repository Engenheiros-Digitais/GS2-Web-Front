import { useState } from 'react';
import useRelatos from '../hooks/useRelatos';
import FormRelato from '../components/FormRelato';
import ListaRelatos from '../components/ListaRelatos';

function Relatos() {
  const { relatos, carregando, erro, criarRelato, editarRelato, apagarRelato } = useRelatos();
  const [editando, setEditando] = useState(null);

  function salvarEdicao(dados) {
    editarRelato(editando.id, dados);
    setEditando(null);
  }

  function confirmarApagar(id) {
    if (window.confirm('Apagar este relato?')) {
      apagarRelato(id);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-3xl font-bold">Relatos de alagamento</h1>
      <p className="mb-6 text-gray-600">
        Viu uma rua alagada? Avise os vizinhos. Não coloque nome, telefone ou endereço.
      </p>

      {editando ? (
        <FormRelato key={editando.id} relatoInicial={editando} onSalvar={salvarEdicao} onCancelar={() => setEditando(null)} />
      ) : (
        <FormRelato onSalvar={criarRelato} />
      )}

      <h2 className="mt-8 mb-3 text-xl font-bold">Relatos registrados</h2>
      {carregando && <p>Carregando...</p>}
      {erro && <p className="text-critico">{erro}</p>}
      <ListaRelatos relatos={relatos} onEditar={setEditando} onApagar={confirmarApagar} />
    </main>
  );
}

export default Relatos;