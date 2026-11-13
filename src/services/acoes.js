// O que fazer em cada estado, para cada perfil
export const ACOES = {
  Morador: {
    normal: 'Acompanhe o mapa se a chuva aumentar.',
    atencao: 'Prepare-se para sair da área baixa.',
    critico: 'Afaste-se do córrego e saia da área baixa.',
    alagado: 'Não tente atravessar. Fique em local elevado.',
    relatado: 'Redobre a atenção e acompanhe a confirmação.',
  },
  Comerciante: {
    normal: 'Deixe seu plano de proteção à mão.',
    atencao: 'Proteja as mercadorias e suba os produtos.',
    critico: 'Interrompa o atendimento e deixe a área baixa.',
    alagado: 'Não acesse o trecho. Aguarde nova atualização.',
    relatado: 'Verifique os acessos e prepare barreiras.',
  },
  Motorista: {
    normal: 'O trecho não tem alerta no momento.',
    atencao: 'Reduza a velocidade e considere outro caminho.',
    critico: 'Evite este trecho. Procure outro caminho.',
    alagado: 'Não atravesse. Volte por uma via alternativa.',
    relatado: 'Evite o trecho até a ocorrência ser verificada.',
  },
};

// Texto da placa instalada na rua
export const PLACAS = {
  normal: 'SEM ALERTA. Córrego monitorado. Fique atento à chuva.',
  atencao: 'ATENÇÃO. Água subindo. Evite a beira do córrego e esteja pronto para sair.',
  critico: 'CRÍTICO. A água pode transbordar. Afaste-se do córrego e saia da área baixa.',
  alagado: 'ALAGADO. Não atravesse. Procure outro caminho.',
  relatado: 'RELATADO POR MORADORES. O sensor ainda não confirmou. Redobre a atenção.',
};
