import { useState } from 'react';
import useSensores from '../hooks/useSensores';
import useRelatos from '../hooks/useRelatos';
import FiltroMapa from '../components/FiltroMapa';
import MapaAlagamento from '../components/MapaAlagamento';
import PainelVisaoGeral from '../components/PainelVisaoGeral';
import PainelTrecho from '../components/PainelTrecho';
import PainelSensor from '../components/PainelSensor';
import LegendaEstados from '../components/LegendaEstados';
import { estadoDoTrecho } from '../services/estados';

function Mapa() {
  const { sensores: lista, erro } = useSensores();
  const { relatos } = useRelatos();
  const [filtro, setFiltro] = useState('todos');
  const [selecionado, setSelecionado] = useState(null);

  // Estado de cada trecho (inclui "relatado por moradores")
  const sensores = lista.map((sensor) => ({ ...sensor, estadoTrecho: estadoDoTrecho(sensor, relatos) }));
  const sensor = selecionado ? sensores.find((s) => s.id === selecionado.id) : null;

  return (
    <main>
      <FiltroMapa filtro={filtro} setFiltro={setFiltro} />

      <div className="grid md:grid-cols-3">
        <section className="relative h-96 md:col-span-2 md:h-150">
          <MapaAlagamento sensores={sensores} filtro={filtro} onSelecionar={setSelecionado} />
        </section>

        <aside className="bg-white md:h-150 md:overflow-y-auto">
          {erro && <p className="m-4 text-critico">{erro}</p>}

          {sensor ? (
            <div className="p-5">
              <button onClick={() => setSelecionado(null)} className="mb-3 text-sm text-secundaria">
                ← Voltar para a visão geral
              </button>
              {selecionado.tipo === 'trecho' ? (
                <PainelTrecho sensor={sensor} relatos={relatos} />
              ) : (
                <PainelSensor sensor={sensor} />
              )}
            </div>
          ) : (
            <PainelVisaoGeral sensores={sensores} relatos={relatos} />
          )}

          <LegendaEstados />
        </aside>
      </div>
    </main>
  );
}

export default Mapa;
