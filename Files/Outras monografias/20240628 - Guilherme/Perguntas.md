# Anotações apresentação

## Comentários

### Comentários JV

- Teria sido interessante mostrar um gif do processo erosivo
  - Seria mais animação e não é o foco da pesquisa
- No texto, como só tem 3 tabelas, acho que não precisaria de um índice de tabelas
- Aparentemente não deu problema não ter o "Figura"
- Depois de dois pontos, não se usa maiúscula (resumo)

### Comentários e perguntas Banca

- Ele poderia ter usado uma GPU potente da sala 101.
- Parabenização pela conclusão
- Rivera pediu a folha de assinaturas

#### Comentários João Luíz

- Gostou do trabalho; do tema, mesmo não sendo especialista.
- Poucos erros ortográficos.
- Ficou com dúvida em algumas partes do texto; Guilherme teve que abrir o pdf pra ver
- O que faria no algoritmo para trabalhar com areia e vento? (Perguntas abertas)
- Programou em C#
- João considera apropriado mencionar a biblioteca do Unity que já implementa o Perlin Noise
- Gostou da existência de trechos do código no texto
- Foi bem pontual nas partes importantes do código. As mais relevantes.
  - JV: ora, mas como ele vai saber o que é relevante se ele não viu tudo?

#### Comentários Ramirez

- Algumas revistas estão solicitando que os códigos sejam disponibilizados, junto com um vídeo de demonstração
- Ele também acha que poderia dar um destaque maior no Perlin Noise
- Nas conclusões, não foi mencionado se conseguiu atingir os objetivos e se a hipótese se mostrou verdadeira ou não.
- "além dessa introdução"
  - ele achou muito direto
- "Muito ilustrativo, muito bem organizado"
- "Gostei do seu trabalho"

#### comentários Rivera

## Perguntas

### Perguntas JV

- Como é calculada a permeabilidade entre dois tipos de solos diferentes?
  - Distribuia a permeabilidade de cada um dos 4 solos ao redor
- Tem cálculo da velocidade de água percorrendo um nível?
  - Exemplo: uma água que percorre um nível de 1m de altura em 100 segundos, mas percorreria 10m em 1000 segundos?
- Mas seria possível ter uma camada vegetal embaixo de uma rochosa?
  - "Pior que é"
- Desvios fracionários? Por quê?
  - Porque  teve bibliografia fazendo assim
- O movimento da partícula... de solo? De água? É a água que vai ditar o movimento da partícula?
  - O movimento de ambos, e o movimento da água dita sim o movimento da partícula.
- O que ocorre num caso em que há areia elevada com muita água, pedra abaixo e ao seu lado um espaço vazio?
  - Não existe espaço vazio
- Por que escolheu erosão?
  - É mais complexo que o térmico, e o hidráulico envolve muitos processos; e também tem várias pesquisa, mais material bibliográfico
- Por que ocultou parte das referências?
  - Porque não precisa
- Usou alguma engine? Qual?
  - Gui: Unity
  - Por que Unity?
    - Limitação de tempo
  - Quais outros cogitou
    - C++ com OpenGL
- O teu código roda onde?
  - Só localzinho no unity
- Você entregou o código em algum local específico?
  - Não
- Tá no GitHub?
  - Tá privado pq tá todo cagado
- Você desenvolveu tanto o Módulo de geração quanto o módulo de erosão?
  - Tava com preguiça de modularizar o código; a erosão tá dentro do módulo de geração
- Quais tipos de terrenos estão disponíveis? Quais foram descartados?
  - é arbitrátrio, o usuário que define
  - Areia, cascalho, pedra e terra; Mudou argila por cascalho
- Quais coisas você adicionou e removeu da tua monografia?
  - Foi completamente diferente. Eu tinha feito um geração procedural de terreno por esboço
  - Guilherme não tava satisfeito com o projeto inicial. Não achava problema de pesquisa nisso.
- O que é Kn²?
  - Notação Big O;
- A figura da complexidade teórica do algoritmo é tua ou do BENES?
  - A figura é do Guilherme, mas a referência é de quem mencionou sobre
- qual é a relação entre a geração das camadas de terreno e a distribuição da água?
  - Primeiro geram as camadas, e depois distribui a água
- Qual dos dois usa perlin?
  - Só o terreno
- E afinal não tem uma camada de água pura?!
  - Não
- Marching cubes é aquela paradinha que um bloquinho de sedimento vai andandinho até onde sedimenta?
  - É uma forma de particionar um cubo pelos vértices e com isso modelar algo.
- Os seus trabalhos futuros também foram coisas que você queria fazer e não teve tempo?
  - O GPU e o Marching cubes sim.
- Se calcula um fluxo por vez, se temos um terreno ABC, onde B tenderia principalmente a erodir para C, mas a interação AB é calculada primeiro, o que ocorre?
  - (JV): eu estava com um modelo errado da simulação em minha mente. Na real, é mais importante a visualização top-down, e então, a partícula vai sedimentar pras laterais
  - Os terrenos são gerados pelos vértices e não por superfícies.

## Anotações pra minha monografia (JV)

- Eu poderia tirar a bolinha do primeiro nível de tópicos
- É importante eu reler os artigos das figuras que mostrei
