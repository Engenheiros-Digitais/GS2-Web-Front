const LIMITE_ATENCAO = 50; 
const LIMITE_CRITICO = 70; 
const LIMITE_ANTECIPACAO = 30; 

export const ESTADOS = {
  normal: { texto: 'Sem alerta', cor: '#9CA3AF', resumo: 'Condições normais no momento.' },
  atencao: { texto: 'Atenção', cor: '#F59E0B', resumo: 'Nível da água subindo.' },
  critico: { texto: 'Crítico', cor: '#DC2626', resumo: 'Possibilidade de transbordamento.' },
  alagado: { texto: 'Alagado', cor: '#7C3AED', resumo: 'O córrego passou da cota.' },
  relatado: { texto: 'Relatado por moradores', cor: '#F59E0B', resumo: 'Aguardando confirmação do sensor.' },
};

export function calcularPercentual(sensor) {
  return Math.round((sensor.nivelCm / sensor.cotaCm) * 100);
}

export function tempoAteTransbordar(sensor) {
  if (sensor.velocidadeCmMin <= 0) return 0;
  return Math.round((sensor.cotaCm - sensor.nivelCm) / sensor.velocidadeCmMin);
}

export function classificarEstado(sensor) {
  const percentual = calcularPercentual(sensor);
  if (percentual >= 100) return 'alagado';

  let estado = 'normal';
  if (percentual >= LIMITE_CRITICO) {
    estado = 'critico';
  } else if (percentual >= LIMITE_ATENCAO) {
    estado = 'atencao';
  }

  const tempo = tempoAteTransbordar(sensor);
  if (tempo > 0 && tempo < LIMITE_ANTECIPACAO) {
    if (estado === 'normal') estado = 'atencao';
    else if (estado === 'atencao') estado = 'critico';
  }
  return estado;
}

export function estadoDoTrecho(sensor, relatos) {
  const relatosDoTrecho = relatos.filter((relato) => relato.sensorId === sensor.id);
  if (sensor.estado === 'normal' && relatosDoTrecho.length > 0) return 'relatado';
  return sensor.estado;
}

export function vazaoEntrada(sensor) {
  return Math.round((sensor.chuvaMmH * sensor.areaM2 * sensor.coeficiente) / 3600);
}

export function usoDrenagem(sensor) {
  return Math.round((vazaoEntrada(sensor) / sensor.capacidadeLs) * 100);
}
