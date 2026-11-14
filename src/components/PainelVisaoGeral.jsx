// Resumo da lateral do mapa (quando nada está selecionado)
function PainelVisaoGeral({ sensores, relatos }) {
  function contar(estado) {
    return sensores.filter((sensor) => sensor.estadoTrecho === estado).length;
  }

  const resumo = [
    { texto: 'Sensores ativos', valor: sensores.length },
    { texto: 'Em atenção', valor: contar('atencao') },
    { texto: 'Crítico', valor: contar('critico') },
    { texto: 'Alagado', valor: contar('alagado') },
  ];

  return (
    <div className="p-5">
      <p className="text-xs font-bold text-secundaria">VISÃO GERAL</p>
      <h2 className="text-xl font-bold">Situação agora</h2>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {resumo.map((item) => (
          <div key={item.texto} className="rounded-lg border border-gray-200 p-3">
            <strong className="block text-2xl">{item.valor}</strong>
            <small className="text-xs text-gray-500">{item.texto}</small>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-600">{relatos.length} relatos de moradores registrados.</p>
      <p className="mt-2 text-xs text-gray-400">Clique em um trecho ou sensor no mapa para ver os detalhes. Atualiza a cada 5 segundos.</p>
    </div>
  );
}

export default PainelVisaoGeral;
