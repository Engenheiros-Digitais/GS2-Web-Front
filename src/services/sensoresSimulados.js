// Sensores simulados (nenhum sensor real é instalado).
// Coordenadas APROXIMADAS: conferir no mapa e ajustar antes da entrega.
// Cota, área, coeficiente e capacidade da drenagem são valores de exemplo.
export const SENSORES = [
  {
    id: 'MV-01', corrego: 'Moinho Velho', rua: 'Rua das Juntas Provisórias',
    lat: -23.5935, lon: -46.6008,
    trecho: [[-23.5922, -46.6019], [-23.5935, -46.6008], [-23.5949, -46.5996]],
    cotaCm: 200, nivelCm: 150, velocidadeCmMin: 0, chuvaMmH: 0,
    areaM2: 20000, coeficiente: 0.8, capacidadeLs: 300,
  },
  {
    id: 'MV-02', corrego: 'Moinho Velho', rua: 'Rua Abagiba',
    lat: -23.6035, lon: -46.6045,
    trecho: [[-23.6024, -46.6055], [-23.6035, -46.6045], [-23.6047, -46.6034]],
    cotaCm: 180, nivelCm: 70, velocidadeCmMin: 0, chuvaMmH: 0,
    areaM2: 15000, coeficiente: 0.8, capacidadeLs: 250,
  },
  {
    id: 'IP-01', corrego: 'Ipiranga', rua: 'Av. Dr. Ricardo Jafet',
    lat: -23.5990, lon: -46.6130,
    trecho: [[-23.5972, -46.6136], [-23.5990, -46.6130], [-23.6008, -46.6124]],
    cotaCm: 250, nivelCm: 85, velocidadeCmMin: 0, chuvaMmH: 0,
    areaM2: 30000, coeficiente: 0.85, capacidadeLs: 400,
  },
  {
    id: 'IP-02', corrego: 'Ipiranga', rua: 'Rua dos Patriotas',
    lat: -23.5905, lon: -46.6095,
    trecho: [[-23.5893, -46.6101], [-23.5905, -46.6095], [-23.5918, -46.6089]],
    cotaCm: 220, nivelCm: 125, velocidadeCmMin: 0, chuvaMmH: 0,
    areaM2: 20000, coeficiente: 0.8, capacidadeLs: 300,
  },
  {
    id: 'IP-03', corrego: 'Ipiranga', rua: 'Av. Teresa Cristina',
    lat: -23.5870, lon: -46.6120,
    trecho: [[-23.5862, -46.6138], [-23.5870, -46.6120], [-23.5878, -46.6103]],
    cotaCm: 250, nivelCm: 180, velocidadeCmMin: 0, chuvaMmH: 0,
    areaM2: 25000, coeficiente: 0.85, capacidadeLs: 400,
  },
];

// Simula 1 minuto: a chuva muda um pouco e o nível sobe ou desce
export function simularMinuto(sensor) {
  const chuva = Math.max(0, Math.min(80, sensor.chuvaMmH + Math.round(Math.random() * 20 - 10)));
  const velocidade = chuva / 10 - 2;
  const nivel = Math.max(20, Math.min(sensor.cotaCm * 1.1, sensor.nivelCm + velocidade));

  return {
    ...sensor,
    chuvaMmH: chuva,
    velocidadeCmMin: Number(velocidade.toFixed(1)),
    nivelCm: Math.round(nivel),
  };
}
