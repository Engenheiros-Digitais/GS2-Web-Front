import { useState, useEffect } from 'react';
import { API_URL, API_CONFIGURADA } from '../services/api';
import { SENSORES, simularMinuto } from '../services/sensoresSimulados';
import { classificarEstado } from '../services/estados';

// Acrescenta o estado calculado em cada sensor
function comEstado(lista) {
  return lista.map((sensor) => ({ ...sensor, estado: classificarEstado(sensor) }));
}

// Hook customizado: busca os sensores e atualiza a cada 5 segundos
function useSensores() {
  const [sensores, setSensores] = useState(comEstado(SENSORES));
  const [erro, setErro] = useState('');

  useEffect(() => {
    function atualizar() {
      // Sem API configurada: simula 1 minuto de chuva
      if (!API_CONFIGURADA) {
        setSensores((atuais) => comEstado(atuais.map(simularMinuto)));
        return;
      }

      fetch(`${API_URL}/sensores`)
        .then((resposta) => {
          if (!resposta.ok) throw new Error('Erro ao carregar os sensores.');
          return resposta.json();
        })
        .then((lista) => setSensores(comEstado(lista)))
        .catch((e) => setErro(e.message));
    }

    const timer = setInterval(atualizar, 5000);
    return () => clearInterval(timer);
  }, []);

  return { sensores, erro };
}

export default useSensores;
