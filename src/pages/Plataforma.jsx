import { Link } from 'react-router-dom';
import PlacaRua from '../components/PlacaRua';

const passos = [
  { titulo: '1. Monitoramento', texto: 'Sensores medem o nível dos córregos e a chuva em cada trecho.' },
  { titulo: '2. Análise', texto: 'O sistema compara o nível com a cota e calcula a velocidade de subida.' },
  { titulo: '3. Alerta na rua', texto: 'Luz, sirene e placa avisam quem está no local, mesmo sem internet.' },
  { titulo: '4. Mapa público', texto: 'O mapa mostra cada trecho com a cor do estado e o que fazer.' },
];

function Plataforma() {
  return (
    <main>
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold text-secundaria">Córregos Ipiranga e Moinho Velho</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Antecipar o risco. <span className="text-secundaria">Proteger pessoas.</span> Evitar prejuízos.
          </h1>
          <p className="mt-5 max-w-2xl text-gray-600">
            O Diluvium mede o nível dos córregos, avisa na própria rua quando a água sobe e mostra num mapa público quais
            trechos estão em risco e o que fazer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="rounded-lg bg-secundaria px-5 py-3 font-bold text-white">Ver o mapa</Link>
            <Link to="/relatos" className="rounded-lg border border-gray-300 px-5 py-3 font-bold">Registrar relato</Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">Protótipo acadêmico: sensores e valores simulados.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-center text-3xl font-bold">Da leitura da água ao aviso na rua</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {passos.map((passo) => (
            <div key={passo.titulo} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold">{passo.titulo}</h3>
              <p className="mt-2 text-sm text-gray-600">{passo.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primaria px-5 py-14 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">Quem está na rua também ajuda a informar</h2>
          <p className="mt-3 max-w-2xl text-gray-300">
            Moradores registram alagamentos sem se identificar. O relato aparece no mapa como "relatado por moradores" até
            o sensor do trecho confirmar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="mb-6 text-center text-3xl font-bold">A mesma informação, presente nas ruas</h2>
        <PlacaRua />
      </section>
    </main>
  );
}

export default Plataforma;