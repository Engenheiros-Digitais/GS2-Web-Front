import { useState } from 'react';
import { SENSORES } from '../services/sensoresSimulados';

// Formulário de relato (criar ou editar). Não pede nome nem telefone (LGPD).
function FormRelato({ relatoInicial, onSalvar, onCancelar }) {
  const [sensorId, setSensorId] = useState(relatoInicial ? relatoInicial.sensorId : '');
  const [descricao, setDescricao] = useState(relatoInicial ? relatoInicial.descricao : '');

  function enviar(e) {
    e.preventDefault();

    if (!sensorId) {
      alert('Erro: escolha o trecho do alagamento.');
      return;
    }
    if (descricao.trim().length < 10) {
      alert('Erro: descreva o que você viu (mínimo de 10 caracteres).');
      return;
    }

    const sensor = SENSORES.find((s) => s.id === sensorId);
    onSalvar({ sensorId, rua: sensor.rua, descricao: descricao.trim() });

    if (!relatoInicial) {
      setSensorId('');
      setDescricao('');
    }
  }

  return (
    <form onSubmit={enviar} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow">
      <label className="text-sm font-bold">
        Trecho
        <select value={sensorId} onChange={(e) => setSensorId(e.target.value)} className="mt-1 w-full rounded border border-gray-300 p-2">
          <option value="">Selecione a rua</option>
          {SENSORES.map((sensor) => (
            <option key={sensor.id} value={sensor.id}>{sensor.rua}</option>
          ))}
        </select>
      </label>

      <label className="text-sm font-bold">
        O que você viu
        <textarea
          rows="3"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="mt-1 w-full rounded border border-gray-300 p-2"
        ></textarea>
      </label>

      <div className="flex gap-3">
        <button type="submit" className="rounded-full bg-secundaria px-6 py-2 font-semibold text-white">
          {relatoInicial ? 'Salvar alteração' : 'Enviar relato'}
        </button>
        {onCancelar && (
          <button type="button" onClick={onCancelar} className="rounded-full border border-gray-300 px-6 py-2">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default FormRelato;
