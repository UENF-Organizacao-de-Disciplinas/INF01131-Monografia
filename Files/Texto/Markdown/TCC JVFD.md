# TCC

## Capa

**Autor:** João Vítor Fernandes Dias
**Título:** _Timetabling Problem_: desafios no desenvolvimento de um sistema de decisão voltado ao problema de organização de grade horária do ensino superior
**Local:** Campos dos Goytacazes, RJ
\local{}

**Orientador:** Prof. Dr. Fermín Alfredo Tang Montané
**Instituição:** Universidade Estadual do Norte Fluminense Darcy Ribeiro
**Curso:** Ciência da Computação

**Preambulo:** Trabalho de Conclusão de Curso apresentado ao Curso de Graduação em Ciência da Computação da Universidade Estadual do Norte Fluminense Darcy Ribeiro, sob orientação do Prof. Dr. Fermín Alfredo Tang Montané

## 1. Introdução

<!--
% \chapter[Introdução]{Introdução}
-->

<!--    Coisas a dizer
- A realidade do ensino superior brasileiro
  - Muitas reprovações
  - Grade horária confusa
  - Professores limitados
  - Preferências diversas     X
    - Professores             X
      - Horários              X
    - Alunos
      - Estágio               X
      - Trabalho
      - Formar rápido
  - Demanda variada
  - Caso específico da UENF   X
-->

No ensino superior brasileiro, cada curso de uma instituição de ensino tem em seu projeto pedagógico, ou seja, no documento que rege quais as atribuições e justificativas de existência do curso, uma listagem de disciplinas a serem ministradas em cada semestre ao longo de sua duração esperada. Disciplinas estas que para serem cursadas os discentes precisam cumprir determinados requisitos. Por exemplo, é esperado que o discente apenas curse a disciplina Cálculo 2 após haver obtido a aprovação prévia na disciplina Cálculo 1.

<!-- Perguntas
% - Pesquisar quais são as regras que todos os cursos superiores devem seguir para serem reconhecidos pelo MEC
% - Qual a definição de projeto pedagógico?
% - Todos os PPCs dos cursos apresentam a listagem das disciplinas?
-->

Embora haja este planejamento de duração do curso, diversos fatores podem influenciar esta previsão, dentre eles podemos citar eventos como:

<!--
\begin{itemize}
-->

- Quebra de pré-requisitos: onde o discente solicita permissão para inscrição em uma disciplina cujos pré-requisitos não são completamente cumpridos por si
- Trancamento de matrícula: onde o discente suspende temporariamente seus estudos na instituição
- Transferência interna: onde o discente migra entre cursos dentro da mesma instituição
- Transferência externa: onde o discente migra entre cursos entre diferentes instituições
- Reprovações: onde o discente não cumpre com o mínimo desempenho esperado na disciplina, geralmente está associado a ausência nas aulas e/ou desempenho inferior ao mínimo esperado nas avaliações.
- Disponibilidade de professores: onde os docentes não são suficientes para ministrar todas as disciplinas demandadas pelos discentes em um mesmo semestre.

<!--
\end{itemize}
-->

Estes eventos tendem a, no geral, aumentar o tempo médio para conclusão do curso. Situação em sua maioria indesejada tanto pelos alunos, que mesmo durante seu estudo já visam o mercado de trabalho, quanto pelos professores e a instituição, visto que a evasão do ensino superior brasileiro é um problema existente e estudado a fim de ser minimizado.

<!--
- Pesquisar sobre motivos de evasão do ensino superior
- Adicionar citação
-->

Com isso, é esperado que a instituição busque alternativas para tornar mais dinâmica e atrativa a experiência dos discentes durante sua jornada. Uma dessas formas é tentando minimizar o impacto que as reprovações nas disciplinas causam nos semestres consecutivos. Para isso sendo então necessária uma análise das disciplinas que devem ser ministradas no próximo semestre, sendo então necessário definir **quais**, **quando**, **onde**, **por quem** e **para quem** serão ministradas. Esta tarefa, entretanto, não é trivial.

### 1.1. Problemáticas

<!-- ## \section{Problemáticas} % -->

Embora seja um problema atualmente, isso não significa que seja recente. Desde 1978 \cite{barham_simple_1978} o termo \textit{timetabling} encontra-se no meio acadêmico como o termo referente ao tabelamento de grade horária, sendo assim, é este o termo que será principalmente utilizado neste trabalho. Neste artigo de 1978 já se propunha uma forma para que se obtivesse um tabelamento otimizado, e demonstrava que o método utilizado gerava bons resultados.

Outra característica é informada por Joshua \cite{thomas_visualization_2009} que fala sobre a multidimensional do problema de timetabling. Por causa dessa questão há uma complexidade elevada para conseguir conceber visual e mentalmente de que forma os dados relacionados ao problema se estruturam, assim dificultando a elaboração de sistemas computacionais que auxiliem nessa tarefa.

Dada a grande quantidade de variáveis interconectadas e as características específicas de cada instituição \cite{miranda_udpskeduler_2012}, a organização destas informações buscando a melhor solução possível apresenta-se como um desafio. Principalmente se considerarmos que esta solução é, muitas vezes, buscada manualmente, estando também passível de erros humanos como ilustram as Figuras \ref{Academico} e \ref{CCT}.

![Disciplina atribuída no sistema acadêmico à determinada hora e local](img/Falha_de_alocacao/Metodologia-Quinta.png)

![Disciplina não atribuída à determinada hora e local na grade de horários do CCT](img/Falha_de_alocacao/Aulas-CCT-105-2023_1.png)

<!-- \begin{figure}[htbp]\centering
    \caption{\label{Academico}Disciplina atribuída no sistema acadêmico à determinada hora e local}
    \includegraphics[angle=0,scale=0.8]{files/img/Falha_de_alocacao/Metodologia-Quinta.png}
    \legend{Fonte: o autor}
\end{figure}    % Imagem acadêmico

\begin{figure}[htbp]\centering
    \caption{\label{CCT}Disciplina não atribuída à determinada hora e local na grade de horários do CCT}
    \includegraphics[angle=0,scale=0.5]{files/img/Falha_de_alocacao/Aulas-CCT-105-2023_1.png}
    \legend{Fonte: o autor}
\end{figure}    % Imagem representando o erro humano na alocação de salas -->

Nestas imagens, fica exemplificado um dos possíveis problemas que podem ocorrer durante a criação de grades horárias, que é, mesmo quando uma seção da universidade (o Sistema Acadêmico, ilustrado pela Figura \ref{Academico}) aloca uma turma a uma determinada sala, outra seção da mesma instituição (o Centro de Ciência e Tecnologia, ilustrado pela Figura \ref{CCT}) pode não estar ciente do mesmo, ou mesmo estando ciente pode acabar não delimitando aquela lacuna de tempo como ocupada, assim estando passível de uma segunda alocação naquele período de tempo naquela sala, assim gerando problemas.

Também segundo J. Miranda, embora o problema de atribuição de salas não seja novo e tenha extensa literatura a seu respeito, são poucos os que de fato implementaram um sistema para suporte de decisões. Isso se dá por diversos fatores, também listado pelo autor fazendo referência a trabalhos anteriores, sendo alguns deles a resistência organizacional a mudanças e adoção de novas tecnologias, nível de dificuldade do problema, dentre outros.

<!--  Pegar a referência original? -->

Algumas outras características que se apresentam como problemas são a falta de otimalidade das grades horárias desenvolvidas em boa parte das instituições de ensino superior e a quantidade de tempo necessária para a criação dessas grades não-ótimas.

Considerando que situações como a descrita acima são passíveis de ocorrer, e que a tarefa de criação de grades horárias é recorrente, um sistema de suporte à decisão que supra às necessidades dos seus usuários se faz necessário.

<!-- \section{Hipótese} -->

### 1.2. Hipótese

Dada as características intrínsecas ao problema de agendamento de grade horária, é esperado que os softwares atualmente existentes que lidam com este problema não apresentem completas capacidades de se moldar ao caso de uma instituição específica.

E, caso a primeira hipótese se apresente correta, o software a ser desenvolvido, assim como seus similares, se apresentará como uma solução plausível para a resolução do problema proposto embora ainda apresente melhorias possíveis a serem implementadas. O software se apresentará de tal forma que os \textit{stakeholders} que, esperadamente, decidirem não o utilizar não causarão a impossibilidade do uso do sistema.

<!--
%- Os softwares existentes não são adequados para o caso específico
%- Embora seja possível implementar
%  - Será trabalhoso
%  - Precisará atender muitos requisitos
%  - Nem todos stakeholders aceitarão facilmente a mudança
%  - O sistema não será tão intuitivo quanto poderia ser
%  - Muitos não veem essa questão como um problema
%  - Alguns não acham necessário haver mudança no método de elaboração das grades
-->

<!-- \section{Objetivos} -->

### 1.3. Objetivos

Os objetivos deste documento podem ser divididos entre gerais e específicos, não havendo relação de superioridade de um em relação ao outro, visto que ambos igualmente nortearão o desenvolvimento da pesquisa.

<!-- \subsection{Gerais} -->

#### 1.3.1. Gerais

<!--
%- Sistema de suporte à decisão
%  - Eficiente
%  - Eficaz
%  - Efetivo
%- Criar grades horárias melhores, preferencialmente ótimas
%- Reduzir tempo necessário para criação das tabelas
%- Reduzir conflitos
%- Aumentar satisfação geral com as disciplinas e horários ofertados
-->

Como objetivos gerais, espera-se conseguir desenvolver um sistema de suporte à decisão tal que aumente a eficiência, eficácia e efetividade do processo de criação de grades horárias que semestralmente demandam extensa quantidade de tempo dos coordenadores de curso na UENF e não alcançam a otimalidade. Nesse processo, também é esperado que as grades horárias finais tragam benefícios aos alunos como forma de mais disciplinas à sua disposição. Visto que estes muitas vezes lidam com grades horárias que não contemplam suas reais demandas. Dessa forma aumentando a satisfação de todos os participantes do processo, desde os coordenadores de curso até os alunos.

<!-- \subsection{Específicos} -->

#### 1.3.2. Específicos

Como objetivos mais específicos, podemos listar os seguintes:

<!--
\begin{itemize}
    \item Entender de que forma os setores administrativos da UENF atualmente lidam com a questão do \textit{timetabling}
    \item Obter as demandas de aprimoramentos desejadas pelos diferentes centros e laboratórios
    \item Modelar o sistema de resolução de \textit{timetabling} de acordo com os requisitos demandados
    \item Encontrar o que é necessário para a adoção da aplicação de tabelamento de horário
    \item Incentivar o uso de uma ferramenta centralizada para a otimização do \textit{Timetabling Problem}
\end{itemize}
-->

- Entender de que forma os setores administrativos da UENF atualmente lidam com a questão do \textit{timetabling}
- Obter as demandas de aprimoramentos desejadas pelos diferentes centros e laboratórios
- Modelar o sistema de resolução de \textit{timetabling} de acordo com os requisitos demandados
- Encontrar o que é necessário para a adoção da aplicação de tabelamento de horário
- Incentivar o uso de uma ferramenta centralizada para a otimização do \textit{Timetabling Problem}

<!-- ## \section{Justificativas} -->

### 1.4. Justificativas

Levando em conta a problemática evidenciada e os sucessos prévios dos artigos anteriores, vê-se grande potencial de auxílio e aumento na satisfação de todos os que utilizarem os métodos propostos. Não havendo um sistema geral que solucione todos os casos como evidenciado pelos pesquisadores da área, resta aos interessados rumarem em busca de uma solução entalhada nos moldes de sua instituição específica. Considerando que é um problema existente atualmente e que uma solução está disponível, o que se torna necessário é realizar o esforço inicial suficiente para que ocorra a quebra da inércia em que se encontram os processos ineficientes usuais para assim alcançar um melhor. Sendo assim, faz-se válida a pesquisa e desenvolvimento de um software que vise este propósito.

<!--
% - Levando em conta a problemática e o os sucessos prévios de artigos anteriores
% - As instituições públicas idealmente deveriam ter um sistema próprio para a resolução de seus próprios conflitos
% - Não havendo o interesse ou conhecimento geral para este fim, resta aos alunos e pesquisadores interessados buscarem uma solução entalhada nos moldes de sua instituição
% - Considerando que é um problema existente na instituição e que é resolvível, sendo necessário o esforço inicial de quebrar a inércia dos processos usuais para se alcançar um melhor, faz-se válida a pesquisa e desenvolvimento de um software que vise este propósito.
-->

<!-- ## \section{Metodologia} -->

### 1.5. Metodologia

<!--
% - Entrevistas qualitativas com stakeholders     x
%   - Adicionar perguntas aqui                    .
% - Formulário quantitativo com alunos            x
%   - Adicionar perguntas aqui                    .
% - Elicitação de requisitos                      x
%   - Falar sobre o SWEBOK                        x
% - Desenvolvimento do software                   .
%   - CI/CD                                       .
%     - Testes                                    .
%     - GitHub                                    .
%   - Programação modular                         SWEBOK
%   - Obtenção de demanda                         .
%     - Extratos                                  .
%       - Processamento e limpeza                 .
%       - Estruturando dados                      .
%     - Acadêmico                                 .
%     - Formulário                                .
%   - Criando solução inicial                     .
%   - Otimizando                                  .
%     - Algoritmos                                .
%     - Interatividade                            .
%       - Visualização                            .
-->

Considerando as dificuldades encontradas em trabalhos anteriores, entende-se que o maior desafio será superar as especificidades que serão encontradas durante a modelagem da universidade em questão. Para isso, será inicialmente necessária uma pesquisa bibliográfica com foco no estudo das abordagens qualitativas realizadas anteriormente que obtiveram sucesso em elicitar os requisitos adequados para as instituições de ensino.

<!--
% Adicionar referência sobre pesquisa qualitativa?
-->

Com este conhecimento, um material inicial para a pesquisa exploratória e qualitativa deve ser desenvolvido levando em conta as questões próprias da universidade em questão, visando também coletar dados relevantes para uma futura pesquisa com maior enfoque em características emergentes que a pesquisa anterior pode levantar, similar à como foi proposto e realizado por \cite{andre_interaction_2018}.

Nesta pesquisa exploratória em formato de entrevista, algumas informações esperadas revolvem em torno das percepções dos \textit{stakeholders} do sistema proposto, sendo esses principalmente os professores, coordenadores de cursos, chefes de laboratório e diretores de centro. Estas percepções incluem o entendimento deles quanto ao método atual e às alternativas existentes, nível de insatisfação com o método atual, nível de desejo quanto à um novo método. Além disso, espera-se aproveitar o ensejo para elicitar as características e funcionalidades que gostariam de ter em um sistema de suporte à decisão, solicitando também que deem informações adicionais que gostariam de acrescentar.

Essas informações serão relevantes para se atingir a satisfação e uso futuro do sistema proposto. Pois, como é informado no \cite{bourque_swebok_2014}, uma das fontes de requisitos é o ambiente organizacional e como o software muitas vezes visa auxiliar em algum processo da instituição, processo este já condicionado à sua estrutura, cultura e políticas externas, o engenheiro de software precisa estar atento a elas, visto que o novo software não deve forçar mudanças não planejadas em processos de negócios.

Questionamentos similares também serão realizados com alunos, porém em formato de formulário online para facilitar o processamento dos dados coletados.

<!--
\def\LinkParadigm{https://www.visual-paradigm.com/}
\def\LinkDrawio{https://www.drawio.com/}
\def\LinkMermaid{https://mermaid.js.org/}
-->

[LinkDrawio]: https://www.drawio.com/
[LinkMermaid]: https://mermaid.js.org/
[LinkVisualParadigm]: https://www.visual-paradigm.com/

Tendo obtido as informações dos \textit{stakeholders} primários, será então necessário modelar quais são as regras que ditam a estrutura organizacional em foco. Para este fim, serão utilizados diagramas conceituais utilizando softwares de suporte como o [Visual Paradigm][LinkVisualParadigm], [draw.io][LinkDrawio] e a [ferramenta Mermaid][LinkMermaid].

<!--
% Essa parte de baixo tá muito estranha. Revisar depois
-->

Esta etapa será de grande importância pois guiará a pesquisa para quais serão os detalhes dos módulos existentes durante o desenvolvimento do projeto, bem como esclarecerá visualmente quais são as informações sobre os recursos que são necessárias para se calcular a grade ótima. Como por exemplo:

<!--

\begin{enumerate}
    \item Salas
    \begin{enumerate}
        \item Quais são as salas disponíveis?
        \item Quais as capacidades de cada um?
        \item Em quais horários estão disponíveis?
        \item Quais são suas peculiaridades?
        \begin{enumerate}
            \item Têm computadores?
            \item Têm quadro?
            \item Têm televisão?
            \item Têm projetor?
        \end{enumerate}
    \end{enumerate}
    \item Alunos
    \begin{enumerate}
        \item Quantos são?
        \item Quais matérias demandam?
    \end{enumerate}
    \item Professores
    \begin{enumerate}
        \item Quais disciplinas ministram?
        \item Quantas disciplinas podem ministrar?
        \item Quais seus horários de preferência?
    \end{enumerate}
\end{enumerate}
-->

- Salas
  - Quais são as salas disponíveis?
  - Quais as capacidades de cada um?
  - Em quais horários estão disponíveis?
  - Quais são suas peculiaridades?
    - Têm computadores?
    - Têm quadro?
    - Têm televisão?
    - Têm projetor?
- Alunos
  - Quantos são?
  - Quais matérias demandam?
- Professores
  - Quais disciplinas ministram?
  - Quantas disciplinas podem ministrar?
  - Quais seus horários de preferência?

Com as regras organizacionais e variáveis bem definidas, serão testados alguns softwares que visam a criação de grades horárias para confirmar se há a real necessidade de se desenvolver um software específico para a instituição. Após realizados os testes, caso os softwares existentes supram as necessidades, este será utilizado nos passos seguintes. De outro modo, haverá a necessidade de desenvolvimento de um sistema de suporte à decisão como ferramenta centralizada para este fim.

Independente de qual dos softwares será testada a aplicabilidade do mesmo no contexto universitário e será mensurada a satisfação dos \textit{stakeholders} durante o seu uso, assim buscando assegurar o seu uso na criação de grades horárias ótimas futuras.

<!--
% \section{Organização}
-->

### 1.6. Estrutura/Organização

Este trabalho abordará capítulos que de forma resumida lidam com os seguintes tópicos:

<!--
\begin{itemize}
    \item O capítulo 1 de introdução traça informações gerais sobre o assunto do trabalho, elaborando mais detalhadamente quanto à sua problemática, hipótese, objetivos, justificativas, a metodologia escolhida e a organização de suas informações.
    \item O capítulo 2 de revisão literária informa mais detalhadamente sobre os problemas de agendamento, suas categorias, soluções, desafios e definições de termos.
    \item O capítulo 3 de desenvolvimento apresenta as informações coletadas durante as entrevistas. Apresenta também a estrutura geral dos códigos feitos, principalmente ilustrando quais os comportamentos esperados em cada um dos módulos, bem como quais foram as ferramentas utilizadas e as práticas seguidas.
    \item O Capítulo 4 de resultados e discussões demonstra o software final utilizado, apresenta comparações das qualidades entre grades horárias geradas pelo software e as que foram utilizadas nos últimos semestres. Apresenta também a pesquisa de satisfação realizada com os \textit{stakeholders} entrevistados no início do desenvolvimento.
    \item O Capítulo 5 da conclusão e trabalhos futuros finaliza o presente trabalho com os pensamentos gerais sobre a pesquisa e desenvolvimento, apresentando as características não abordadas e indicando caminhos a serem seguidos por pesquisadores posteriormente.
\end{itemize}
-->

- O capítulo 1 de introdução traça informações gerais sobre o assunto do trabalho, elaborando mais detalhadamente quanto à sua problemática, hipótese, objetivos, justificativas, a metodologia escolhida e a organização de suas informações.
- O capítulo 2 de revisão literária informa mais detalhadamente sobre os problemas de agendamento, suas categorias, soluções, desafios e definições de termos.
- O capítulo 3 de desenvolvimento apresenta as informações coletadas durante as entrevistas. Apresenta também a estrutura geral dos códigos feitos, principalmente ilustrando quais os comportamentos esperados em cada um dos módulos, bem como quais foram as ferramentas utilizadas e as práticas seguidas.
- O Capítulo 4 de resultados e discussões demonstra o software final utilizado, apresenta comparações das qualidades entre grades horárias geradas pelo software e as que foram utilizadas nos últimos semestres. Apresenta também a pesquisa de satisfação realizada com os \textit{stakeholders} entrevistados no início do desenvolvimento.
- O Capítulo 5 da conclusão e trabalhos futuros finaliza o presente trabalho com os pensamentos gerais sobre a pesquisa e desenvolvimento, apresentando as características não abordadas e indicando caminhos a serem seguidos por pesquisadores posteriormente.

## 2. Contexto do _Timetabling Problem_ no meio acadêmico

<!-- \chapter{Contexto acadêmico do \textit{Timetabling Problem}} -->

Antes de prosseguirmos com o desenrolar deste trabalho, é adequado que primeiro definamos alguns parâmetros para o melhor entendimento do que está por vir.

<!-- \section{Definição de termos} -->

### 2.1 Definição de termos

Ao longo dos anos de desenvolvimento acadêmico, diversos assuntos vão se aprofundando e se tornando mais específicos, assim, os estudiosos acabam cunhando novos termos que o auxiliam a desvencilhar as novas áreas específicas das suas áreas originárias. Porém, existe o potencial de que haja um crescimento desestruturado destes novos termos, assim vários termos diferentes podem se referir a um mesmo conceito, enquanto que um mesmo tempo pode se referir a vários conceitos diferentes de acordo com o autor.

Assim como feito por \cite{goos_scheduling_1996}, definiremos os conceitos dos termos que serão usados ao longo deste trabalho.

O termo "\textit{timetable}" tem o mesmo valor que "grade horária" e serão usadas como se fossem sinônimos mesmo sendo de línguas diferentes. Segundo \cite{goos_scheduling_1996}, podemos definir \textit{timetable} como uma estrutura que mostra quando que eventos ocorrerão, não havendo necessariamente a alocação de recursos.

Vale ressaltar que este termo não tem seu uso limitado para os fins desta pesquisa, sendo também usado para problemas de alocação de enfermeiros, esportes, funcionários e transportes \cite{arratia-martinez_university_2021}. Entretanto, neste trabalho, abordaremos principalmente os termos relacionados ao que pode ser chamado de \textit{Educational Timetabling} (Ed-TT) \cite{alencar_visualization_2019}, que é o que tende a envolver um conjunto específico de recursos relacionados à educação.

Wren também define os conceitos para \textit{class timetable}, \textit{university examination timetable} e \textit{university class timetable}, tendo relevância apenas o último, que considera a disponibilidade de professores e salas, a quantidade de alunos e os requisitos que determinada disciplina exige.

Exemplo: Enquanto que a disciplina "Laboratório de Física" exige que a aula seja ministrada em um tipo de sala específica com os equipamentos necessários, a disciplina "computação e sociedade" não apresenta esta restrição, ficando limitada apenas à quantidade de pessoas na turma.

Aqui, visto que uma solução final envolverá várias dimensões (Professores x Disciplinas x Sala x Alunos x Horários x Dias), consideraremos \textit{timetable} como esse pacote de valores distribuídos em uma só estrutura. Para que esses valores sejam distribuídos, daremos o nome de \textbf{alocação} ao ato de criar qualquer relação entre as dimensões. Como a relação de horários e dias será considerada fixa, a \textbf{alocação} se referirá à atribuição como a de professores a disciplinas, disciplinas a salas, disciplinas a um determinado padrão de dias e horários, etc.

Para que esta alocação ocorra, é necessário atender a certos critérios, e aí entra o "problema de organização de grade horária", também chamado de \textit{timetabling problem}. Esta é uma subcategoria do \textbf{problema de agendamento} (\textit{scheduling Optimization Problem}) \cite{alencar_visualization_2019} que por sua vez é definido por \cite{goos_scheduling_1996} como sendo:

<!--
\begin{quote}\footnotesize
    Resolver problemas práticos relacionados à alocação, sujeito a restrições, de recursos a objetos sendo colocados no espaço-tempo, usando ou desenvolvendo quaisquer ferramentas que possam ser apropriadas. Os problemas irão frequentemente se relacionar à satisfação de certos objetivos.
\end{quote}
-->
> Resolver problemas práticos relacionados à alocação, sujeito a restrições, de recursos a objetos sendo colocados no espaço-tempo, usando ou desenvolvendo quaisquer ferramentas que possam ser apropriadas. Os problemas irão frequentemente se relacionar à satisfação de certos objetivos.

Outro termo relevante a se pontuar são as \textit{hard and soft constraints} que podemos chamar de restrições rígidas e flexíveis. \cite{alencar_visualization_2019} as define dizendo que as restrições rígidas são de atendimento obrigatório, enquanto as restrições flexíveis são opcionais, mas convenientes para melhorar a qualidade da solução obtida.

Exemplo de restrição rígida: nem professores nem alunos podem ser alocados simultaneamente a duas salas ou disciplinas simultaneamente. Uma solução que viole esta restrição se torna automaticamente inviável.

Exemplo de restrição flexível: professor J. prefere não dar aulas nas tardes de sexta-feira, e prefere dar aula nas manhãs da segunda-feira. Uma solução que viole esta restrição não se torna inviável, porém tende a ter menos valor neste critério do que uma solução que siga as preferências definidas.

Alguns outros termos similares a este campo de pesquisa encontrados na literatura são \textit{periodic event scheduling problem}, \textit{timetable scheduling}, \textit{class scheduling}, \textit{student scheduling}, \textit{university course timetabling}, dentre outros.

<!--
\section{Métodos de resolução}
-->

### 2.2. Métodos de resolução

<!--
% - O problema de timetabling   a
%   - Origem                    a
%   - Repartições               a
%   - Escopo maior              a
%     - Scheduling              a
%   - Escopo menor              a
%     - Exam                    a
%     - Class                   a
% - TT
%   - Soluções
%   - Desafios
%   - Diversas formas de resolução
%     - Graph Coloring
%     - Heurísticas
%     - Meta-heurísticas
%     - IA
%     - etc.
% - Visualização de informações
%   - Benefícios
%   - Motivações
%   - Relação com timetabling
% - Problema geral a ser resolvido
%   - Multi dimensionalidade
%     - Professores
%     - Alunos
%     - Salas
%     - Departamentos
%       - Preferências
%       - Concorrências
%   - Otimalidade
%   - Erros humanos
%   - Número de possibilidades
%   - Interface intuitiva e relevante é um desafio com poucos estudos nos últimos anos
% - Problemas específicos
%   - Regras específicas
%   - Prioridades diferentes
%   - estrutura organizacional semi-exclusiva
-->

<!--
% Pesquisar posteriormente sobre imagens que ilustrem bem as diferentes sub categorias de scheduling
-->

Existem diversas implementações já realizadas, utilizando uma miríade de métodos. Em seu trabalho \cite{miranda_udpskeduler_2012}, J. Miranda informa sobre diversos sistemas baseados em computador para auxiliar na tarefa de agendamento. J. Miranda também cita um dos métodos de resolução como sendo o \textbf{modelo de programação inteira} e \textbf{heurísticas}.

Outros trabalhos buscaram condensar em forma de tabela as informações encontradas. Abaixo estão dispostas algumas das tabelas encontradas durante o estudo bibliográfico e que foram elaboradas por diversos autores.

Na figura \ref{Desenvolvimento}, \cite{alegre_desenvolvimento_2012} traça a relação entre os diversos autores, ano de sua publicação e seu país de origem com os dados encontrados em seus trabalhos quanto aos parâmetros utilizados na elaboração da grade horária, quão grandes eram cada um de seus parâmetros, quanto tempo foi necessário para achar uma solução e quais foram as técnicas utilizadas.

% Entender o que tá dando errado aqui depois

![Resumo de trabalhos, parâmetros, dimensões, tempo e técnicas.](img/tabelas/Desenvolvimento.png)

<!--
\begin{figure}[htbp]\centering
    \caption{\label{Desenvolvimento}Resumo de trabalhos, parâmetros, dimensões, tempo e técnicas.}
    \includegraphics[angle=0,scale=1]{files/img/tabelas/Desenvolvimento.png}
    \legend{Fonte: \cite{alegre_desenvolvimento_2012}}
\end{figure}    % Desenvolvimento
-->

Na figura \ref{University}, \cite{arratia-martinez_university_2021}, apresenta uma comparação similar à anterior, porém não separada em categorias, apenas categorizando entre verdadeiro e falso algumas características como alocação de salas, professores, nível institucional e método exato ou inexato.

![Comparação entre artigos que solucionam o problema de grade horária](img/tabelas/University.png)

<!--
\begin{figure}[htbp]\centering
    \caption{\label{University}Comparação entre artigos que solucionam o problema de grade horária}
    \includegraphics[angle=0,scale=0.37]{files/img/tabelas/University.png}
    \legend{Fonte: \cite{arratia-martinez_university_2021} - editado}
\end{figure}    % University
-->

Na figura \ref{Visualization}, \cite{alencar_visualization_2019} explora uma categoria mais específica do problema, que é a característica da interatividade das interfaces desenvolvidas. Este apresenta características qualitativas quanto aos métodos, os dados dispostos, as técnicas de interação e o método utilizado para solucionar o problema de grade horária educacional. Nesta figura, os autores usam "Y" para simbolizar "Sim", "N" para "Não" e "-" para "Inconclusivo".

![Análise de publicações aceitas.](img/tabelas/Visualization.png)

<!--
\begin{figure}[htbp]\centering
    \caption{\label{Visualization}Análise de publicações aceitas.}
    \includegraphics[angle=0,scale=0.7]{files/img/tabelas/Visualization.png}
    \legend{Fonte: \cite{alencar_visualization_2019} - editado}
\end{figure}    % Visualization
-->

<!--
\section{Desafios recorrentes}
-->

### 2.3. Desafios recorrentes

Apesar da vasta quantidade de trabalhos realizados com este fim, o \textit{Timetabling Problem} segue sendo uma área sem uma solução definitiva.

Tomáš Müller \cite{burke_modeling_2007} traz a questão da modelagem como um dos maiores obstáculos. À medida em que a complexidade aumenta, se torna cada vez mais difícil desenvolver uma solução efetiva. Assim fazendo com que a solução para uma universidade possa não ter utilidade para outras, ou até mesmo não seja capaz de lidar com todos os problemas de uma mesma universidade.

Apesar do contrafluxo encontrado na resolução desse problema, Tomáš cita que, apesar da complexidade, é sim possível desenvolver soluções que tenham uso prático, mesmo que não seja um processo fácil. As ferramentas existem e estão disponíveis. Restando então considerar e resolver as preocupações dos usuários às questões, visto que as técnicas de resolução já se encontram vastamente documentados.

Com isso, entramos também no ramo da Interação Homem-Máquina, ramo abordado por Dinata \cite{andre_interaction_2018} que visou em seu desenvolvimento a criação de uma interface focada no usuário. Assim minimizando o atrito na abordagem desse problema complexo. Também sendo área de enfoque de \cite{alencar_visualization_2019} em sua revisão literária

<!--
% ### 2.5. Contexto histórico e origem

% - Como surgiu essa área? Em que momento ela se dividiu? Devo falar sobre isso?

% ### 2.6. Técnicas existentes(?)

% - Falar sobre técnicas existentes e quem já fez. Tipo o que aquele artigo sem DOI fez
-->

### 2.4. Projetos anteriores

### 2.4.1. Rodrigo

### 2.4.2. Sânya

## 3. Modelagem geral do sistema

<!--
\chapter{Modelagem geral do sistema}
-->

Tendo esclarecido sobre as questões gerais do trabalho e da área de estudo. Agora nos aprofundaremos um pouco mais na modelagem e criação de diagramas que ilustrem o funcionamento geral do sistema e a forma como se dará a execução da metodologia proposta.

<!--
\section{Estágios de execução}
-->

### 3.1 Estágios de execução

Em seu trabalho de aplicação prática, \cite{miranda_udpskeduler_2012} estruturou estágios que compõem o processo necessário para que enfim se alcance a definição de \textit{timetables} ótimas.

![Estágios para a obtenção de grade horária ótima](img/Arquitetura/Arquitetura-UDP.png)

<!--
\begin{figure}[htbp]\centering
    \caption{\label{fig:geral} Estágios para a obtenção de grade horária ótima}
    \includegraphics[scale=0.5]{files/img/Arquitetura/Arquitetura-UDP.png}
    \legend{Fonte: \cite{miranda_udpskeduler_2012}}
\end{figure}
-->

Na Figura \ref{fig:geral}, estão dispostos 4 estágios principais. O primeiro dispõe da aquisição de informações. O meio de aquisição não é relevante para o momento atual, apenas considera-se que esta informação será obtida. No segundo estágios são definidas grades horárias preliminares para se atribuir os alunos. No terceiro, os alunos se inscrevem e a demanda é ajustada, por fim, no quarto estágio, ocorre a alocação final das salas.

<!--
\section{Iteração}
-->

### 3.2 Iteração

Para se alcançar uma alta satisfação por parte dos \textit{stakeholders}, vê-se necessária a constante interação com os mesmos. Para isto, será seguida a estrutura utilizada por \cite{andre_interaction_2018}.

![Etapas do Design de Interação](img/Arquitetura/Arquitetura-IxD.png)

<!--
\begin{figure}[htbp]\centering
    \caption{\label{fig:IxD} Etapas do Design de Interação}
    \includegraphics[scale=1]{files/img/Arquitetura/Arquitetura-IxD.png}
    \legend{Fonte: o autor}
\end{figure}    % University
-->

Seguindo o conceito do Design de Interação, a Figura \ref{fig:IxD} ilustra o ciclo de ações a serem tomadas durante o desenvolvimento do sistema, caso este venha a ser necessário. Neste modelo de pesquisa, os \textit{stakeholders} serão consultados continuamente enquanto lhes é apresentado protótipos do sistema, para que assim informem quanto às suas percepções. Esta dinâmica tem como finalidade encontrar um design tal que seja adequado aos desejos e necessidades de seus usuários finais.

<!--
\section{Funcionamento}
-->

### 3.3 Funcionamento

O sistema final seguirá uma dinâmica similar à que foi ilustrada por \cite{bebis_information_2019} em seu trabalho sobre o uso da Visualização de Informações em relação às Ed-TTPs.

![Funcionamento geral do sistema](img/Arquitetura/Arquitetura_bebis_information_2019.png)

<!--
\begin{figure}[htbp]\centering
    \caption{\label{fig:sistema} Funcionamento geral do sistema}
    \includegraphics[scale=0.6]{files/img/Arquitetura/Arquitetura_bebis_information_2019.png}
    \legend{Fonte: \cite{bebis_information_2019}}
\end{figure}
-->

A Figura \ref{fig:sistema} apresenta o comportamento geral do sistema, como seus diferentes segmentos interagem entre si e de que forma o usuário interage com o mesmo. O usuário poderá ajustar os objetivos da otimização e suas restrições, elas serão utilizadas nos métodos de otimização. Estes métodos serão utilizados para se alcançar soluções para estes critérios, as melhores serão então armazenadas. Em posso destes dados, a aplicação apresentará visualmente estas informações ao usuário, permitindo que ele interaja dinamicamente a fim de alcançar seus objetivos.

## 4. Estrutura organizacional <!-- WIP -->

Para que se possa entender melhor o problema, é necessário que se entenda a estrutura organizacional da UENF disposta no [Estatuto da UENF][LinkEstatutoUENF]. A [Universidade Estadual do Norte Fluminense Darcy Ribeiro (UENF)][LinkUENF], ainda que limitando ao que convém neste trabalho.

[LinkEstatutoUENF]: https://www.uenf.br/UENF_ARQUIVOS/Downloads/REITORIA_1360_1101117875.pdf
[LinkUENF]: https://uenf.br/portal/

### 4.1. A UENF e seu estatuto <!-- Provavelmente eu deveria adicionar informações sobre a secretaria acadêmica --> <!-- Precisa de revisão --> <!-- Sinto que falta falar sobre secretaria acadêmica e Conselho de Centro -->

Segundo o estatuto, a UENF compreende:

- órgãos da Administração Superior de política, gestão e supervisão;
- unidades universitárias de ensino, pesquisa e extensão;
- órgãos e serviços especiais, destinados a auxiliar na administração e a suplementar as atividades de ensino, pesquisa, extensão e apoio técnico.

Quanto aos órgãos da Administração Superior devemos enfocar o órgão executivo, constituído unicamente pela reitoria, cujos órgãos auxiliares englobam a Secretaria Acadêmica, que por sua vez tem como algumas de suas atribuições as seguintes:

> I - coordenar a divulgação do horário escolar dos vários cursos da UENF, de modo a otimizar os recursos humanos, ampliar as opções de disciplinas para os alunos e tornar acessíveis os dados escolares;
>
> II - **centralizar os serviços de registro da vida escolar dos alunos**, compreendendo **inscrição**, admissão, **matrícula**, **créditos**, **opções**, transferências, **promoções**, graduações e preparação dos respectivos diplomas, dentro das normas estabelecidas;

Já quanto as unidades universitárias de ensino, temos no estatuto que:

> As unidades universitárias de ensino, pesquisa e extensão, definidas por áreas de conhecimento, são constituídas em Centros, que por sua vez congregam Laboratórios afins.
>
> O Laboratório é a menor parte da estrutura universitária para todos os efeitos de organização administrativa, didático-científica, distribuição de pessoal e de representação nos órgãos colegiados da UENF

A administração do Centro é da competência do Diretor e seu Conselho. Os Laboratórios, por sua vez, são administrados pelos Chefes de Laboratório.

O Conselho de Centro, tem como uma de suas atribuições:

> XVII- **designar, semestralmente, os professores responsáveis pelas disciplinas dos Cursos de Graduação** e Programas de Pós-Graduação, ouvidos os respectivos Laboratórios, os Colegiados de Curso e Comissões de Coordenação;

Atualmente, segundo o site da UENF, a universidade possui 4 Centros, sendo eles:

- Centro de Ciências do Homem - [CCH][LinkCCH]
- Centro de Ciência e Tecnologia - [CCT][LinkCCT]
- Centro de Biociências e Biotecnologia - [CBB][LinkCBB]
- Centro de Ciências e Tecnologias Agropecuárias - [CCTA][LinkCCTA]

[LinkCCH]: https://uenf.br/
[LinkCCT]: https://uenf.br/cct/
[LinkCBB]: https://uenf.br/
[LinkCCTA]: https://uenf.br/

E também existem 8 laboratórios vinculados ao Centro de Ciência e Tecnologia (CCT) possui 8 laboratórios, sendo eles:

- Laboratório de Meteorologia – [LAMET][LinkLCFIS]
- Laboratório de Ciências Físicas – [LCFIS][LinkLCMAT]
- Laboratório de Engenharia Civil – [LECIV][LinkLCQUI]
- Laboratório de Ciências Químicas – [LCQUI][LinkLECIV]
- Laboratório de Materiais Avançados – [LAMAV][LinkLENEP]
- Laboratório de Ciências Matemáticas – [LCMAT][LinkLEPROD]
- Laboratório de Engenharia de Produção – [LEPROD][LinkLAMAV]
- Laboratório de Engenharia e Exploração de Petróleo – [LENEP][LinkLAMET]

[LinkLCFIS]: https://uenf.br/cct/administracao/laboratorios/
[LinkLCMAT]: https://uenf.br/cct/lcmat/
[LinkLCQUI]: https://uenf.br/cct/administracao/laboratorios/
[LinkLECIV]: https://uenf.br/cct/administracao/laboratorios/
[LinkLENEP]: https://uenf.br/cct/administracao/laboratorios/
[LinkLEPROD]: https://uenf.br/cct/administracao/laboratorios/
[LinkLAMAV]: https://uenf.br/cct/administracao/laboratorios/
[LinkLAMET]: https://uenf.br/cct/administracao/laboratorios/

Os Laboratórios englobam os Cursos de Graduação e Pós-Graduação, que são administrados pelos Coordenadores de Curso.

Além disso, o LCMAT mantém dois cursos de graduação e um programa de pós-graduação stricto sensu. Sendo eles:

- [Licenciatura em Matemática][LinkLicMat]
- [Bacharelado em Ciência da Computação][LinkCC]
- [Mestrado Profissional em Matemática][LinkMestradoMat] – [PROFMAT][LinkPROFMAT] / [SBM][LinkSBM]

[LinkLicMat]: https://uenf.br/posgraduacao/licenciatura-matematica/
[LinkCC]: https://cc.uenf.br/
[LinkMestradoMat]: https://uenf.br/posgraduacao/matematica/apresentacao/
[LinkPROFMAT]: https://uenf.br/posgraduacao/programas/pos-graduacao-stricto-sensu/
[LinkSBM]: https://www.profmat-sbm.org.br/

### 4.2. Progressão usual da criação de grades horárias <!-- Estou com dúvida novamente de qual é a progressão e de quem faz o quê -->

Abaixo está listada a progressão usual da elaboração de grades horárias

1. Período ocorrendo normalmente
2. Coordenadores enviam para Chefes de Laboratório <!-- ? --> uma demanda estimada de cada uma das disciplinas que serão ofertadas
3. Chefes de Laboratório enviam para Diretores de Centro a demanda estimada
4. O Diretor aloca provisoriamente as disciplinas em horários e salas <!-- ? -->
5. O Coordenador de Curso analisa possíveis mudanças de horários que possam ser mais eficientes na distribuição dos alunos
6. Dependendo das disponibilidade dos professores, cabendo solicitar a abertura de uma bolsa para docência complementar <!-- Descobrir qual o nome correto para isso -->
7. O Período letivo acaba
8. Estima-se mais precisamente a demanda de cada disciplina
9. Turmas são abertas com a quantidade de vagas de acordo com as demandas estimadas
10. Alunos se inscrevem
11. Período de inclusão e exclusão
12. Período ocorrendo normalmente
13. Alguns possíveis ajustes finais

Uma das etapas de criação das grades horárias é a coleta de uma demanda esperada. Cada Coordenador faz isso do seu próprio jeito. Uma possibilidade seria analisar quantos alunos costumam reprovar em determinada disciplina pela visualização estatística anterior, somado aos que possivelmente aprovarão na disciplina que é pré-requisito. <!-- Essa parte tá mal escrita -->

Porém, toda essa pesquisa e estimativa é dispendiosa e pode desagradar a alguns coordenadores, ou então gerar estimativas incondizentes com a realidade.

## 5. Desenvolvimento

### 5.1. Pré desenvolvimento

- Projeto pessoal: Andamento dos alunos

Como interesse próprio, cogitou-se o desenvolvimento de uma plataforma onde se pudesse ver em que ponto os alunos se encontram em relação ao andamento de seus cursos. Para isso, seria necessária a obtenção dos dados dos alunos, seja por parte dos mesmos, do coordenador ou por integração com o sistema acadêmico. Com estes dados, seria possível criar uma interface que mostrasse o andamento dos alunos, quais matérias já foram cursadas, quais estão sendo cursadas e quais ainda faltam. Além disso, seria possível mostrar quais matérias são pré-requisitos para outras. Assim, o aluno e a coordenação poderia ter uma visão geral de seu andamento e de quais matérias ele precisará cursar para se formar. Infelizmente esse projeto não saiu do mundo das ideias. Entretanto, lá permaneceu sendo maturado.

- Projeto pessoal: Cálculo de demanda

Ao longo dos semestres, foi percebido que durante o intervalo entre-semestres, os alunos precisam se inscrever nas matérias que desejam cursar no semestre seguinte. Para isso, é necessário que o coordenador saiba quantos alunos estão interessados em cada matéria para que ele possa definir quantas turmas serão abertas. Para isso, o coordenador dispõe de algumas alternativas como estimar quantos alunos se inscreverão em cada disciplina, checar manualmente no sistema acadêmico quais alunos podem fazer cada matéria, ou então obter diretamente dos alunos através de um formulário em quais disciplinas cada um dos alunos tem a intenção de cursar.

O método que o Coordenador de Ciência da Computação realiza consiste em baixar o extrato de todos os alunos do curso, e tabelar no excel qual é o andamento de cada um dos alunos, para que assim, através da análise manual pudesse ver qual é o andamento de cada um e de quantos alunos demandam quais disciplinas.

Entretanto, todas essas alternativas são trabalhosas e propensas a erros. Sendo assim, foi pensado em uma forma de automatizar esse processo. Para este fim, foi elaborado um código em [Python][LinkPython] que atualmente [se encontra no GitHub][LinkRepoDemanda]. Este código tem como entrada os extratos de matrícula dos alunos e como saída uma lista de disciplinas e a quantidade de alunos que estão matriculados em cada uma delas.

[LinkPython]: https://www.python.org/
[LinkRepoDemanda]: https://github.com/jvfd3/university_demand

```python

'''Obter demanda por extratos pdf'''
import code_1_set_working_directory     as swd
import code_2_get_pdf_list              as gpl
import code_3_get_string_from_pdf       as gsp
import code_4_structure_data_from_text  as sdt
import code_5_filter_structured_data    as fsd
import code_6_get_demand_list           as gdl
import code_7_merge_demands             as mgd
import code_8_output_demand_as_txt      as odt

swd.set_cwd()
pdf_path_list           = gpl.get_pdf_list()
text_list               = gsp.get_pdf_text(pdf_path_list)
structured_data_list    = sdt.structure_data(text_list)
approved_code_list      = fsd.get_approved_codes(structured_data_list)
demand_list             = gdl.get_demand_list(approved_code_list)
demand_and_values_list  = mgd.get_merged_demands(demand_list)
odt.output_to_txt(demand_and_values_list)
```

Este código foi desenvolvido em 8 etapas, cada uma com um arquivo separado. Para alcançar a lista das demandas, é necessário primeiro obter a lista dos arquivos pdf que serão processados, em seguida extrair seus dados com a biblioteca PDFminer, estruturar os dados obtidos, filtrar os dados estruturados, obter a demanda de cada disciplina, juntar as demandas de cada disciplina e salvar os dados obtidos em um arquivo txt.

Embora o código cumpra com seu objetivo, apresenta algumas características limitantes. A primeira é que os pdfs precisam ser obtidos manualmente, um por um, pelo coordenador, sendo ela por si só uma tarefa extenuante, o que não é desejado. Além disso, o seu uso não é muito intuitivo, sendo necessário que o usuário lide com o prompt de comando e instale as dependências necessárias, o que acaba trazendo uma dificuldade a mais ao usuário. O código também apresenta limitações por sistema operacional, não sendo garantido o seu funcionamento em sistemas operacionais diferentes do Windows.

Com estes empecilhos, o código acabou abandonado, visto que apesar de útil, não era prático o suficiente para ser utilizado.

### 5.2. Entrevistas

Como forma de entender melhor a percepção real daqueles que recorrentemente lidam com a tarefa de criação da grade horária, diversas entrevistas foram feitas como forma de analisar qualitativamente quais são as opiniões, pedidos, reclamações e pensamentos de diferentes níveis organizacionais da UENF.

#### 5.2.1. Diretor do CCT - Oscar <!-- Devo omitir o nome dos entrevistados? -->

O primeiro entrevistado foi o <!-- Oscar, --> atual Diretor do CCT. Ele atualmente estrutura a relação de disciplinas ofertadas pelo CCT em Excel e as publica em formato PDF no [site do CCT][LinkCCTSalas]. Seu trabalho auxilia os Chefes de Laboratório e Coordenadores de Curso a visualizarem quais são as salas disponíveis e em quais horários cada professor está alocado.

[LinkCCTSalas]: https://uenf.br/cct/secretaria-academica/distribuicao-das-salas-de-aula-do-cct/

Um dos tópicos dialogados, foi quanto às categorias das disciplinas, ou seja, quais características notáveis as disciplinas poderiam ter. Com isso podemos listar as seguintes categorias de disciplinas:

- Anuais: disciplinas que ocorrem apenas uma vez no ano.
- Ímpares: disciplinas que são ofertadas no primeiro semestre letivo.
- Pares: disciplinas que são ofertadas no segundo semestre letivo.
- De serviço: disciplinas ofertadas para mais de um curso simultaneamente
- ciclo básico: disciplinas oferecidas para todas as engenharias
- Repetentes: turmas criadas especialmente para repetentes

As disciplinas ímpares e pares geralmente estão atreladas à expectativa de que os alunos progredirão sequencialmente sem reprovação alguma. Entretanto, caso uma quantidade de alunos considerável de alunos reprove em determinada disciplina, é possível que estes se enquadrem na criação de uma turma especial para repetentes, ou não.

Uma sugestão de utilidade para o software é a de permitir que as "disciplinas de serviço" sejam fixas, visto que estas são as que têm maior complexidade de manejamento de horário posteriormente, justamente por geralmente abrangerem muitos alunos e de diversos cursos diferentes.

Uma outra característica notável é a repetição de atribuições de disciplinas em pares regulares, ou seja, alocadas no mesmo período de horário com um dia de intervalo entre elas. Um exemplo desse tipo de alocação recorrente seria "14 às 16 horas de segunda e quarta feira".

Com isso, surge a dúvida: há uma preferência ativa por aulas alocadas com este padrão? A resposta dada é que não. O que se mostra como uma restrição a menos na hora de se alocar as turmas.

Outro caso notável é a existência majoritárias de turmas criadas com dois períodos de duas horas, entretanto existem algumas que fogem deste padrão e possuem três horas de duração. A solução encontrada pelo Diretor é a de colocar esta disciplina começando às 10h, o que faz com que se alonge até as 13h, período geralmente usado pelos estudantes e servidores para se alimentar, e justamente por isso evitando que atrapalhe a distribuição das salas. Outra alternativa é alocar esta turma para as 13h, fazendo com que finalize às 16h, horário em que as disciplinas com duas horas de duração geralmente terminam.

Segundo ele, saber a demanda máxima possível seria bom, visto que podem haver casos de solicitações de vagas para disciplinas de serviço que extrapolam a quantidade esperada para a distribuição balanceada dentre os cursos.

Uma outra situação que ocorre é que algumas disciplinas historicamente têm seus horários definidos em um mesmo horário ao longo dos anos. Caso essa alocação seja alterada, ocorre a possibilidade de reclamação por parte dos professores, mesmo que esta alteração seja benéfica para os estudantes. Então por exemplo, os horários de 8h de uma segunda feira e de 16h de sexta feira, não são geralmente desajados pelos professores, mesmo que eles teoricamente tenham disponibilidade de 8 horas diárias.

Considerando a quantidade de laborátorios "concorrendo" simultaneamente às vagas, surge a dúvida: há ordem de precedência entre os laboratórios? A resposta para esta pergunta é "não. As vagas são distribuídas com prioridade na ordem de chegada".

Algumas outras informações que ele elenca:

- Os períodos ímpares são os piores
  - Essa opinião pode ser resultado do fato de que os períodos ímpares apresentam um intervalo de tempo para preparo das grades menor do que os períodos pares.
- As disciplinas básicas são grandes
  - É esperado que uma grande quantidade de alunos se inscrevam nas disciplinas essenciais e iniciais de seus cursos, sendo boa parte dela relacionada com o conceito das disciplinas de serviço e com o conceito de ciclo básico das engenharias.
- As disciplinas de serviço devem ser alocadas primeiro
  - Visto a grande quantidade de conflitos possíveis dentre os diversos cursos, ao alocá-las primeiro, os conflitos passam a ocorrer em turmas com uma quantidade menor de pessoas e/ou que sejam de um mesmo curso.
- As alterações vão até o final do período
  - Embora possa parecer que a alocação de turmas finalize após o encerramento do período de inscrição e desinscrição, na prática, a realocação ocorre durante todo o período.
- Teoricamente matérias de um mesmo período não devem conflitar
  - Isso se dá segundo a percepção de que a maioria dos alunos está seguindo a mesma linha sequencial de disciplinas, o que muitas das vezes não é a realidade.

#### 5.2.2. Desenvolvedor do Sistema Acadêmico - Rodrigo

Considerando que a integração do sistema proposto seria certamente mais eficiente se integrada ao sistema acadêmico, viu-se como apropriado entrevistar o desenvolvedor do Sistema Acadêmico para se ponderar sobre o uso dos dados e a possível integração.

Durante a entrevista, foram listados alguns dados que seriam interessantes para a análise:

- Demanda de disciplinas
- Listagem de professores
- Listagem dos alunos aprovados
- Requisitos das disciplinas

Outra questão analisada seria quanto a forma de integração. Boa parte das aplicações web se comunicam em forma de API, entretanto, devido à quantidade de alterações executadas ao longo do semestre no sistema acadêmico, o Desenvolvedor do Sistema Acadêmico utiliza o sistema de mensagerias através do [RabbitMQ][LinkRabbit].

[LinkRabbit]: https://www.rabbitmq.com/

Foi citado sobre a abordagem do Coordenador de Computação para o cálculo das demandas, quanto a isso, o Desenvolvedor citou que poderia facilmente permitir o download de um CSV dos dados necessários.

Quanto à possibilidade de aprimoramentos no Sistema Acadêmico, ele disse que "eu faço o que me pedem", se referindo ao repositório do Acadêmico disponível no [GitLab][LinkGitLab], onde alguns poucos usuários fazem solicitações de alterações e melhorias. Havendo então a possibilidade de que o Coordenador de Computação faça uma solicitação à SECACAD para que seja implementada uma funcionalidade que permita a exportação dos dados necessários para o cálculo das demandas.

[LinkGitLab]: https://about.gitlab.com/

Um outro problema apontado por ele é a falta de gente. Segundo ele, outras duas pessoas entraram junto com ele no mesmo concurso, mas foram realocadas para outras áreas da universidade. Ele cita também sobre a "cultura do trabalho opcional" existente na UENF, onde muitos servidores não se sentem obrigados a trabalhar.

Em relação a estrutura dos dados, o sistema acadêmico utiliza o SQL. Foi citado o uso de NOSQL e estrutura de Grafos como possibilidades de mudança, mas como a mesma não se mostrou necessária até o momento, não foi implementada.

Uma questão levantada pelo entrevistado diz respeito à manutenção do software desenvolvido neste trabalho. Não sabendo ele dizer se o mesmo seria mantido pela UENF.

Ele também sugere que, para evitar a complexidade de se trabalhar com dados reais de alunos, que sejam utilizados dados fictícios.

#### 5.2.3. Chefe de Laboratório de Matemática - Annabell

#### 5.2.4. Responsável pela Secretaria Acadêmica - Gustavo

#### 5.2.5. Coordenador de Computação - Tang

Diferente de como foi respondido pelo Diretor do CCT, para o Coordenador de Computação a alocação de disciplinas em pares se mostra como "didática", sendo ela então preferível, mas não necessariamente vista como obrigatória.

#### 5.2.6. Entendimento geral das entrevistas

### 5.3 Dados pessoais e a LGPD

Em sua concepção original, o presente trabalho visaria integrar o sistema desenvolvido com o atual sistema acadêmico da UENF. Essa abordagem foi descartada devido às dificuldades encontradas por parte do setor administrativo da UENF que, devido à [Lei Geral de Proteção dos Dados (LGPD)][LinkLGPD], não podem divulgar dados dos alunos, mesmo anonimizados.

[LinkLGPD]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm

Para confirmação das informações recebidas, a [LGPD][LinkLGPD] foi estudada e talvez o presente estudo recaísse na alínea b do inciso 2º do artigo 4º do capítulo 1 da Lei Nº 13.709, de 14 de agosto de 2018. Informando este que esta lei, a LGPD, não se aplica ao tratamento de dados pessoais realizado para fins exclusivamente acadêmicos.

Segundo o [Estudo Técnico sobre o tratamento de dados pessoais para fins acadêmicos][LinkANPD], é reforçado que "o tratamento de dados pessoais para fins acadêmicos deve ser sempre lícito".

[LinkANPD]: https://www.gov.br/anpd/pt-br/assuntos/noticias/sei_00261-000810_2022_17.pdf

Apesar das possibilidades de meios legalmente válidos para a aquisição dos dados, optou-se por abandonar a integração com o Sistema Acadêmico e o uso de dados reais dos alunos já existentes na plataformas. Rumando-se então para uma abordagem mais manual de inserção de dados manualmente por parte dos usuários do sistema.

## Anexo 1

Abaixo se encontram algumas perguntas feitas a discentes da UENF em relação à sua satisfação com a atual distribuição de disciplinas semestrais.

### Introdução

Olá! Desde já agradeço por ceder um pouco do seu tempo para responder a este formulário. Considerando que nosso tempo é valioso, vamos direto ao objetivo:

Me chamo João Vítor Fernandes Dias, estudante de Ciência da Computação na UENF, e estou fazendo minha Monografia. Ela trata sobre a elaboração de um sistema para a coordenação de curso poder analisar mais facilmente quais são as disciplinas que serão disponibilizadas a cada semestre e a quais salas e professores serão atribuídas.

O objetivo é que mais disciplinas possam ser oferecidas em horários que mais alunos possam se inscrever sem haver conflitos com outras disciplinas.

Este formulário tem como objetivo avaliar a sua satisfação em relação a este processo de inscrição semestral nas disciplinas.

### Perguntas

#### Objetivas

- Pessoais
  - Qual o seu curso?
  - Em que ano você ingressou na UENF?
- Vagas
  - Você já quis entrar em uma disciplina mas ela não tinha vaga?
  - Você já ficou acordado após meia-noite por medo de não ter vaga para as disciplinas que deseja cursar?
- Conflitos
  - Você já se deparou com duas ou mais disciplinas desejadas sendo ofertadas no mesmo horário?
  - Você já teve que não se inscrever em uma disciplina por causa de conflito de horário?
- Salas
  - Você já se sentiu insatisfeito com a sala de aula atribuída a uma disciplina?
  - Você já teve aula cuja sala não dispunha de cadeiras o suficiente?
- Opiniões
  - Você acha que a distribuição de disciplinas semestrais atende às necessidades dos alunos?
  - Você acha que a universidade deveria oferecer mais horários para as disciplinas mais populares para evitar conflitos de horário?

#### Multipla escolha

- Opiniões
  - Você acha que a distribuição de disciplinas semestrais é...
    - Justa: (feita de acordo a atender os desejos da maioria)
    - Variada: (bem diversa e abrange diversos interesses)
    - Contínua: (oferecida de forma a ter aulas sequenciais)
    - Eficiente: (bem sucedida em atender aos desejos dos alunos)
    - Distribuída: (bem espaçada ao longo da semana)
    - Satisfatória: (agradável aos meus desejos pessoais)
- Como você lida com conflitos de horário entre as disciplinas que deseja cursar?
  - Escolho a mais difícil
  - Escolho a mais fácil
  - Escolho a que tem mais créditos
  - Escolho a que prefiro
  - Escolho a que prende mais matérias
  - Outro

## 999. ================================ Não sei onde colocar ================================   <!-- Organizar isso depois -->

### 4.3. Explicação do processo

Dentro do contexto da universidade, o problema de agendamento se torna mais complexo pois um dos recursos que está relacionado com o problema é a existência de prazos em cada uma das etapas, assim fazendo com que uma solução ideal seja aquela que é capaz de ser executada dentro do prazo estipulado, mesmo que não seja ótima.

- Sequência de ações
  1. Estimativa
  2. Professores designados
  3. Matrícula
  4. Últimas mudanças
  5. Inclusão e exclusão

Precisa verificar manualmente quantos alunos foram aprovados em cada matéria. Ele, então, precisa fazer uma estimativa de quantos alunos irão se inscrever nas matérias que ainda não foram abertas. Com isso, ele pode definir quantas turmas serão abertas para cada matéria. Entretanto, esse processo é muito trabalhoso e propenso a erros. Assim, foi pensado em uma forma de automatizar esse processo. Para isso, seria necessário obter os dados de quantos alunos estão inscritos em cada matéria e então calcular a demanda de cada uma. Com isso, o coordenador poderia ter uma visão geral de quantas turmas serão necessárias para cada matéria. Infelizmente esse projeto também não saiu do mundo das ideias. Entretanto, lá permaneceu sendo maturado.

### 4.4 Solução Organizacional

Durante as entrevistas, uma alternativa válida para a amenização da problemática abordada é a alteração da regulamentação da UENF que define férias de duas semanas entre os semestres. Caso essa regulamentação seja alterada para que as férias sejam de duas semanas, o problema de agendamento teria maior tempo para ser resolvido, assim fazendo com que a solução ótima seja provável de ser alcançada.

Art. 28 - À Secretaria Acadêmica, órgão auxiliar da Reitoria, compete: II - elaborar a proposta de calendário escolar, ouvidas as respectivas Câmaras, para aprovação pelo Colegiado Acadêmico
§ 8o - Compete ao Colegiado Acadêmico: X - aprovar o calendário escolar;

TÍTULO III: DO REGIME ACADÊMICO
CAPÍTULO I: DOS CURSOS, CURRÍCULOS E DISCIPLINAS
SEÇÃO II: DO REGIME ESCOLAR
Art. 63

Os calendários dos cursos de graduação e programas de pós-graduação e extensão são aprovados pelas correspondentes Câmaras, com observância do calendário da Universidade.

### 4.5. Alterações de horários

Segundo as Normas de Graduação:

> Art. 36 As aulas deverão ser ministradas pelo Docente responsável da disciplina nos horários designados pela Coordenação de Curso.
>
> § 1º Qualquer alteração de horário/turno após o período de matrícula deverá ter a anuência por escrito de todos os discentes matriculados na turma.
> § 2º º A alteração de horário das aulas da turma deverá ter a anuência da Coordenação de Curso e a ciência do Chefe do Laboratório responsável pela disciplina.

Então é possível alterar os horários de aula caso desejado.
