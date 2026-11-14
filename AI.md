###    AI.md — Documentação do uso de Inteligência Artificial ao longo do Projeto

## 1 - Ferramentas utilizadas

Durante o desenvolvimento do projeto, o grupo utilizou duas ferramentas de Inteligência Artificial: **ChatGPT** e **Claude**.

- **ChatGPT:** utilizado como apoio em decisões criativas e visuais, principalmente na escolha de cores, ideias para a identidade visual e criação de conceitos para o logo do projeto.
- **Claude:** utilizado como apoio técnico durante o desenvolvimento, auxiliando na escrita, correção e organização de códigos, esclarecendo dúvidas de programação e implementação de funcionalidades.
Essas ferramentas foram utilizadas como apoio ao trabalho do grupo, não como substitutas do desenvolvimento e das decisões dos integrantes.

## 2. Interações realizadas

Ao longo do projeto, foram realizadas diferentes interações com as ferramentas, de acordo com suas finalidades;

# ChatGPT — Decisões criativas

O ChatGPT foi utilizado para explorar possibilidades visuais e auxiliar nas decisões relacionadas à identidade do projeto.

**Exemplos representativos de prompts:**
- Nos dê sugestões de combinações de cores adequadas à proposta de uma plataforma de monitoramento de alagamentos.
- Nos dê Ideias para a criação de um logo que represente o propósito e a identidade do projeto.
- Opiniões e sugestões com base em sites relacionados para melhorar a apresentação visual da interface.

As respostas foram utilizadas como referências para avaliar alternativas e auxiliar as escolhas visuais do grupo.

# Claude — Desenvolvimento e dúvidas técnicas

O Claude foi utilizado com maior frequência durante a implementação do projeto, especialmente para auxiliar na compreensão de certas tecnologias, resolução de problemas e desenvolvimento de funcionalidades.

**Exemplos representativos de prompts:**
- Como utilizar Leaflet e React-Leaflet para implementar um mapa interativo da região do Ipiranga?
- Como adicionar marcadores para representar sensores e linhas coloridas para destacar trechos no mapa?
- Como utilizar `setInterval` dentro de `useEffect` para atualizar periodicamente os dados dos sensores?
- Como interromper a atualização automática quando o componente deixar de ser utilizado?
- Nos auxilie a encontrar e corrigir erros, organizar trechos de código e identificar partes desnecessárias ou não utilizadas.
- Como projetar aspectos práticos da solução, por exemplo estimativas relacionadas às dimensões de um bueiro?.
- Nos ajude a localizar estudos e informações sobre córregos e cursos d'água da região do Ipiranga, e auxilie na síntese e posteriormente organização desse conteúdo.

As respostas serviram como orientação para a implementação, compreensão e aprimoramento de diferentes partes do projeto.

## 3. Aplicação no projeto

A Inteligência Artificial contribuiu em diferentes etapas do desenvolvimento, tanto na parte visual quanto na técnica.

# Identidade visual e interface

O ChatGPT auxiliou na exploração de cores, combinações visuais e ideias para o logo, contribuindo para a definição da identidade visual do projeto. As sugestões foram utilizadas como referências e ideias durante as decisões do grupo.

# Mapa interativo

O Claude auxiliou na implementação do mapa da região do Ipiranga, utilizando as bibliotecas **Leaflet** e **React-Leaflet**.
O mapa foi desenvolvido no arquivo `MapaAlagamento.jsx` e utiliza os seguintes componentes:

- `MapContainer`: estrutura principal do mapa.
- `TileLayer`: camada de mapas, utilizando dados do OpenStreetMap.
- `Polyline`: representação de trechos de ruas com linhas coloridas.
- `CircleMarker`: representação visual dos sensores distribuídos pelo mapa.

A utilização dessas tecnologias permitiu representar a região de interesse de maneira mais próxima da proposta do projeto, com elementos visuais para indicar informações relacionadas ao monitoramento de alagamentos.

# Atualização automática dos sensores

O Claude também auxiliou na implementação da atualização periódica dos sensores no hook `useSensores`.
Foi utilizado `setInterval` dentro de `useEffect` para executar atualizações a cada cinco segundos. Além disso, foi implementado o retorno `clearInterval(timer)` para interromper o intervalo quando o componente deixar de ser utilizado, evitando que a atualização continue desnecessariamente.

Esses trechos possuem comentários no código para identificar a utilização e o auxílio de Inteligência Artificial.

# Pesquisa e projeção da solução

A IA também foi utilizada como apoio para compreender aspectos práticos da proposta, incluindo projeções relacionadas à estrutura de drenagem urbana, como o dimensionamento de bueiros.
Além disso, auxiliou na localização, síntese e organização de informações sobre córregos e cursos d'água da região do Ipiranga, contribuindo para a contextualização do problema abordado.

## 4. Validação das respostas

As respostas geradas pelas ferramentas foram utilizadas como orientação e passaram pela análise do grupo antes de serem incorporadas ao projeto.
No desenvolvimento, os códigos sugeridos pela IA foram revisados e ajustados conforme a estrutura e as necessidades da aplicação. As funcionalidades implementadas foram verificadas durante a execução do projeto, permitindo identificar problemas e realizar correções quando necessário.
As sugestões visuais também foram avaliadas pelo grupo, que decidiu quais alternativas faziam sentido para a identidade e a proposta da plataforma.
As informações que foram obtidas durante as pesquisas e projeções com e sem auxílio de IA, foram utilizadas como apoio, e não devem ser consideradas automaticamente como dados validados em campo.

## 5. Análise crítica

O uso de Inteligência Artificial trouxe benefícios importantes para o desenvolvimento do projeto, principalmente por facilitar a compreensão de tecnologias, agilizar a resolução de dúvidas e oferecer diferentes possibilidades para decisões visuais e técnicas.

No desenvolvimento do mapa e das funcionalidades relacionadas aos sensores, por exemplo, a IA contribuiu para orientar a utilização de bibliotecas e métodos que poderiam ser mais difíceis ou complexas de implementar sem esse auxílio.

Entretanto, toda IA comete erros e possui limitações. Nem todas as sugestões apresentadas atendiam diretamente às necessidades do projeto, sendo necessário analisar, adaptar e corrigir as respostas. Em alguns casos, compreender o código sugerido e adequá-lo à estrutura existente exigiu novas interações e ajustes.

Outro ponto importante foi a necessidade de não depender exclusivamente das respostas geradas, especialmente em questões técnicas e nas informações utilizadas para contextualizar a região estudada, principalmente considerando que um membro do grupo é residente desta região.

De maneira geral, as ferramentas foram úteis para apoiar o aprendizado e otimizar algumas etapas do desenvolvimento, mas as decisões finais, a integração das funcionalidades e a responsabilidade pelo resultado permaneceram com o grupo.