import { ESTADOS } from '../services/estados';

function LegendaEstados() {
  return (
    <div className="border-t border-gray-200 p-5">
      <h3 className="font-bold">Legenda</h3>
      <ul className="mt-3 flex flex-col gap-3">
        {Object.keys(ESTADOS).map((codigo) => (
          <li key={codigo} className="flex items-center gap-3">
            <span
              className="h-1.5 w-8 rounded-full"
              style={{ backgroundColor: ESTADOS[codigo].cor, opacity: codigo === 'relatado' ? 0.5 : 1 }}
            ></span>
            <span>
              <strong className="block text-sm">{ESTADOS[codigo].texto}</strong>
              <small className="text-xs text-gray-500">{ESTADOS[codigo].resumo}</small>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-gray-500">
        O mapa cobre só os trechos com sensor. "Sem alerta" não quer dizer que a rua é segura.
      </p>
    </div>
  );
}

export default LegendaEstados;
