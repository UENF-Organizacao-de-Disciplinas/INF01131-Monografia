# Anotações Post-it

## 20230801 - Coordenador de Computação - Tang

- Incertezas dos professores
- matérias fixas
- 7/7 → 18/7
- Fim Semestre → Chamar bolsista
- ![Esboço de turma][turma]
- Limite de salas do CCT: cadeiras
- Salas do P5 = Produção

---

- Mudar turmas em par
- Visualização Xadrez 5D
  - ![Exemplo Xadrez 5D][Xadrez 5D]
  - Usar setas para scrollar entre salas
  - Escolher a dimensão de scroll
- Seg ~ Sáb: 7h00 ~ 22h00
- A tabela é feita por Oscar
- Buscar o histórico da distribuição das salas com Oscar
- Demanda solicitada antes do fim do semestre
- Solução inicial + Visualização
- Levantamento do histórico
- Dados do acadêmico?
- Materias mais para frente: Veterano > Calouro
- Materias iniciais: Calouro > Veterano
- Falar minha ideia interativa
- Pedir dados anteriores
- Extrato - Acadêmico
- Página de estimativas de demandas parciais
- Importação de demandas parciais por forms
- Importar demandas de acadêmico
- Salas ordenadas da menor capacidade para a maior, tipo ordenar moedas
- Pode usar salas P10 e Reitoria
- Sequência de ações
  1. Estimativa
  2. Professores designados
  3. Matrícula
  4. Últimas mudanças
  5. Inclusão e exclusão
- É didático que as salas tenham mesmas salas e horários em parzinho
- Falta de procedimento claro
  - Disciplinas de serviço
- Dimensões de Scroll
  - Semestre
  - Ano
  - Sala
  - Professor
  - Aluno
  - Versão
  - Período
  - Curso
- Aquisição dos dados
  - Forms Excel
  - API Acadêmico
  - Alteração Manual
- O acadêmico tem o histórico das turmas?
- O que aconteceu com 2019.1 no acadêmico?
- Lista de disciplinas e códigos
  - Oscar
- Annabell cadastra na NUCEST
- Monitoria Prograd
  - USIT? VSIT?
- Tabelas antigas CCT

## 20230807 - Diretor do CCT - Oscar

- Esboço 2
- Arrastar para encaixar disciplinas
  - ![Arrastar para encaixar disciplinas][Slides]
- Pedir lista de disciplinas e códigos
- Qual a ferramenta usada?
  - Excel
- O que poderia melhorar?
  - Serviço, fixas (?)
- O que aconteceu com 2019.1 no acadêmico?
  - Migração
- Categorias organizacionais
  - Disciplinas de serviço
  - Anuais
    - Pares
    - Ímpares
  - Semestrais?
  - Repetente (Raro)
- Preferência por aulas em pares?
  - Não
- Preferência por salas próximas?
- Por que demanda provisória?
- Ciclo básico de engenharia
- Específica:
  - 1 por ano
    - Disciplina de 3 horas
      - 10 ~ 13; 13 ~ 15
- Saber o máximo [de demandas] seria bom
- Ímpares são piores
- Turmas especiais de repetentes
- Disciplinas básicas são grandes
- Serviço primeiro
- Diagrama de intercessões de disciplinas e cursos
- SECACAD: mudança de início e fim
- Semanas acadêmicas atrapalham
- Migração falha entre sistemas
- Existem específicas que são de serviço
- Prograd → Chefe → Bolsista
- Disciplinas grandes são pesadas de se manter
- Problema de não-pcrres [???] é por causa dos professores

> Professor não quer dar aula

- Existe ordem de precedência de Laboratório?
  - Ordem de chegada
- As alterações vão até o final do período
- Falta dinâmica com professores
- Existem eventos extra que alocam salas
  - 3~4 vezes por período
- Sistema que a Unicamp usa
  - Email
- Acadêmico limitando visualização de turmas por curso
- Específico: coordenação
- Serviço: chefe → Cadastro
- Regimento interno da UENF
- Páginas Recursos Humanos
- Teoricamente disciplinas de mesmo período não podem conflitar
- Sugestões de alocações
- Informações falsas e superestimadas
- Além de alocar, fazer reserva de espaço = Coordenador fazendo pedido ao reitor
- Organização
  - 4 Diretores
  - 8 Laboratórios
  - 9 Coordenadores

## 20230821 - Desenvolvedor do Sistema Acadêmico - Rodrigo

### 20230821 - TCC

- Dados acadêmico
  - Alunos aprovados
  - Demandas de disciplinas
  - Requisitos?
  - Professores
  - Períodos

1. Explicar o TCC
   1. Problema
   2. Objetivo
   3. Dúvidas
2. Estágio
   1. Seguir Daniel
   2. Interface UX
3. Dúvidas
   1. Acadêmico < 2019.1
   2. Integração?
       1. API?
   3. Estrutura dos dados
   4. Histórico de turmas

- Requisitos
- Demanda
  - Downlaod rar extratos
  - CSV dos dados
- Dúvidas
  - Níveis de permissão ao acesso dos dados?
  - Lista de disciplinas/dados da turma
    - Código
    - Participantes
    - Número de participantes
    - Professor
    - Sala
  - Migração do acadêmico
    - Perda de dados?
- Atalhos
- Shift + scroll: Seleciona dimensão em uma roda
  - ![Scrolling][Scroll]
  - Alt: Muda a dimensão selecionada
  - Alt + Scroll: Muda o valor
  - Shift + alt: muda de dimensão ao contrário
- Só o Rodrigo mexe no acadêmico
  - E também no administrativo das plaquinhas
- O Rodrigo poderia gerar um CSV “eu faço o que me pedem”
- Níveis de acesso
  - SECACAD
  - Pró reitoria
  - Coordenação
    - Minha limitação de escopo
  - Professor
  - Aluno
  - Diploma
  - Protocolo
- Tang passar issue para SECACAD: solicitação de alunos aprovados ou algo assim
  - Gitlab
- Falta de gente (problema)
  - Existem oturos 2 concursados
  - Reitor poderia puxar a orelha
    - “Cultura do trabalho opcional”
- Pré 2019: pra Rodrigo aparece até 2023.
- Ruby on Rails?
- Mensageria AMQP
  - Rabbit MQ
- API é ineficiente
- Não tem mais API, nem pretende
- Os dados iniciais poderiam ser feitos na mão
- Annabell e SECACAD
- Gustavo Luna → Proprietário dos dados
- Documentação legal do acesso aos dados
- Máquina SSH, IHM
- Estrutura de dado: interno vs externo
  - SQL: Martelo
    - Estudar NoSQL e Grafo
  - PPI → Mensageria
- Comunicação com outro software → Porta de acesso
- O ideal seria estágio + equipe
- Coord → SECACAD → Rodrigo
  - Lista de turma + disciplinas
- Discord: rodrigomanhaes
- Telegram: [???]
- CEAN: issue de 5 anos atrás
- O que pode ser considerado eletiva?

### 20230821 - Questões pessoais

- Carga horária VS CR
- O que pode ser considerado eletiva?
  - Secretaria acadêmica deve definir: Não sabe quem
  - Página do curso
  - Coordenador manda se eletiva feita
- Estágio
  - Título e tarefas

## 20230825 - Chefe de Laboratório de Matemática - Annabell

- Gitlab do acadêmico
  - Solicitação de posso dos dados do acadêmico (DOC)
  - Issue Secacad
- Equipe do Rodrigo?
  - Reitor
- Gustavo Luna
- Manutenção do software
- Mudança dos prazos
- Juraci interfere SECACAD e issues
- André Ginfo
- Schema: valores dos dados
- Títulos e possibilidades de valor
- O sistema não permite mudar o horário da turma após a matrícula
- Criar turmas e alterar: 1 semana antes da matrícula
- Enquanto não tem inscritos, OK. Se alguém se inscreve, [problema para alterar].
- Documento de mudança de sala
- Se não tem inscrito, pode mudar tudo
- Se tem inscrito e não tem conflito, pode trocar horário, preferencialmente com documento assinado.
- Por alunos inscritos
  - Se 1 aluno bate

## 20230901 - Responsável pela Secretaria Acadêmica - Gustavo

### 20230901 - TCC

- Explicar TCC
- Atribuição SECACAD
- Acesso aos dados
  - Solução Anna
  - Não necessário, mas ajudaria
  - Limite de acesso
- Períodos, previsões, erros
  - Lei? Regimento?
- Gitlab e issues//demandas
- Burocracia automatizada?
- Ética VS Eficiência

---

- ![Arrasta e solta][drag and drop]
- AHP, elektre
- Policani: Engenharia de Produção
- Análise multicritérios Sup. Dec
- Término do Semestre
  - Quantos precisam fazer
  - 1 → 10
  - Demanda exata
  - Preferência por veteranos
  - Por último os que se adiantam
- [3 pontos]
  - Vagas
  - Profesor
  - Sala
- Registro oficial das salas
- Disciplina X Turma
- Dá pra ter duas salas para uma turma
- O sistema não tem alocação correta pra turma
- O sistema permite que eu uma sala tenha duas turmas no mesmo horário

---

- Pró-reitoria: mudar início
  - Mar ~ Jun + Jul ~ Nov → Fev ~ Mai + Jul ~ Nov
- Bolsa IC
- Semestre
  - 1 - Agosto
  - 2 - Março
- ENEM VS Pró Reitoria
  - Adiantar início

---

- Câmara de Graduação
  - Pedir para adiantar o início
- Criação de turma
- Pedir dados falsos pro Rodrigo
- Mudança em horário após inscrição
- Expulsão de aluno é OK
- Bater a grade no final
- Quais alunos estão na beira de perder

### 20230901 - Questões pessoais

- Exclusão de disciplina fora de prazo
- Revisão que nunca veio
- Câmara de graduação
  - Coordenação: Abrir excessão
- Possível
  - Colegiado
  - Câmara

## 20230912 - Coordenador de Computação - Tang

- [Tópicos a abordar]
  - Protótipos
  - Dados anteriores e problemas
  - Estimativa de demanda
  - json/CSV do acadêmico
  - Cadastro de salas
    - Requisitos
  - Preferências de professores
    - Hora, Dia, Turma
  - Cadastro info disciplinas:
    - Eletivas, professores, cursos
  - Prazo final
  - Mérito

---

- Anotações
  - Adicionar input de estimativa
  - Turmas A, B, C
  - Remover da lista total de participantes
  - Problemas dos dados: faltantes, incompletos
  - Quadros modificáveis
  - Adicionar cor para inscritos
  - Preferência dos professores
  - [Sequência]
    1. Estimativa?
    2. Criação
    3. Renovação/Inscrição
  - Salas no acadêmico
  - Limite de alunos na sala
  - Adicionar professores e atrelar à disciplinas
  - Lista das que serão ofertadas a serem distribuídas
  - Estimativas além de dados reais sendo só números [Acho que a estimativa não precisa atrelar a matrículas]
  - Prazo final
    - Entrega: 12~18/11
    - Defender: 1/12
    - Formatura: 18/12
  - Ano de entrada dos alunos

## 20230923 - Coordenador de Computação - Tang

- Escolhas deveriam ter feito no projeto
- Excel → Json = Procrastinação
- Faça. Simplesmente faça.
- Gasto muito tempo com organização
- Previsibilidade de demanda
- Talvez eu esteja expandindo muito o escopo de modificações
- ![Expansão de prováveis turmas][class selection]
- Cores
  - Aluno inscrito
  - Preferência de professor
  - Como lidar com a nova grade?
  - Lembrar da variabilidade de horas das turmas
  - Decorar todas as cores pode ser problemático
  - Tela Inicial: apenas mudar salas

## 20231023 - Coordenador de Computação - Tang

- Quais os fundamentos teóricos que usarei?
- Usar como base as tentativas anteriores
- IHM, Engenharia de Software, Banco de Dados, Estrutura de Dados, teste de software
- Oscar e Annabell, Márcia (Professora de petróleo) (nova diretora do CCT),
- O CRUD não é tão relevante
- Importa mais a construção em si
- Fazer um cenário 23.1/23.2 e mostrar como a ferramenta influencia
- Fazer schema do BD baseado no do Sistema Acadêmico
- Limar disciplinas precisando de salas
- Sistema -> Escrita OU Escrita -> Sistema?
- O que escrever?
  - Como funciona?
  - Entrevistas
  - sistema
  - Marco teórico
    - O que e de quais disciplinas tô usando?
  - Referências
  - Desenvolvimento
    - Protótipo
    - Banco de Dados
  - Modelagem
  - Resultado/Experimentos/Cenários
- Problema específico VS Geral
- Na visualização de alunos: mostrar demandas de vários

<!-- Imagens -->

[turma]: <Images/turma.png>
[Xadrez 5D]: <Images/xadrez 5D.png>
[Slides]: <Images/Slides.png>
[Scroll]: <Images/Scroll.png>
[drag and drop]: <Images/drag and drop.png>
[class selection]: <Images/class selection.png>
