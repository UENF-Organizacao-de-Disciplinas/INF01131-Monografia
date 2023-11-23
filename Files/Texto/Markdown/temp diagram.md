# Diagramas

<!--
- Nome de entidade e atributo em português
- Nome de entidade e atributo no singular
- Não usar preposição
- No início do nome do atributo colocar a natureza do dado que será armazenado.
Ex.:
DataMatricula
NomeAluno
NumeroCPF
- Centralizar a entidade que possui maior número de relacionamentos para que as linhas não se cruzem, melhorando a visibilidade e consequentemente o entendimento do modelo
-->

<!-- Pesquisar sobre algum livro que informe sobre o uso do Id versus uso de chave composta -->
<!-- ALUNOS EM VÁRIOS CURSOS -->
<!-- PRESENTE VS VOZ PASSIVA -->
## A

```mermaid
erDiagram
  Aluno ||--|{ AlunoCurso : "cursa"
  Curso ||--|{ AlunoCurso : "cursa"
  Curso ||--|{ Ementa : "possui"
  Curso ||--|{ Laboratorio : "é de um"
  Professor }|--|| Laboratorio : "é de um"
  Professor }|--|| PreferenciaHorario : "tem preferência por"
  Professor ||--|{ ProfessorDisciplina : "ministra"
  Disciplina ||--|{ ProfessorDisciplina : "ministra"
  Disciplina ||--|{ DisciplinaAluno : "cursa"
  Disciplina }|--o{ PreRequisitos : "pre requisita"
  PreRequisitos }o--|| Disciplina : "pre requisita"
  Disciplina ||--o{ CoRequisita : "co requisitam"
  CoRequisita }o--|{ Disciplina : "co requisitam"
  Disciplina }|--o{ Equivalencia : "equivale a"
  Equivalencia }o--|{ Disciplina : "equivale a"
  Disciplina ||--|{ DisciplinaEmenta : "refere a"
  Ementa ||--|{ DisciplinaEmenta : "contém"
  Situacao ||--|{ DisciplinaAluno : "define status de"
  Aluno ||--|{ DisciplinaAluno : "cursa"
  Aluno ||--|{ AlunoTurma : "integra"
  Turma ||--|{ AlunoTurma : "integra"
  Turma ||--|{ HorarioTurma : "é alocada em"
  Turma ||--|{ Sala : "está em uma"
  Turma }|--|| Professor : "é ministrada por"

  AlunoCurso {
    int Id FK
  }
  CoRequisita {
    int IdCoRequisitante FK
    int IdCoRequisitado FK
    int IdEmenta FK
  }
  PreRequisitos {
    int IdPreRequisitante FK
    int IdPreRequisitado FK
    int IdEmenta FK
  }
  Equivalencia {
    int IdEquivalente FK
    int IdEquivalida FK
    int IdEmenta FK
  }
  Aluno {
    id IdAluno PK
    int IdCurso FK
    int AnoIngresso
    int SemestreIngresso
    String CodigoMatricula
    string NomeAluno
  }
  DisciplinaAluno {
    string IdTurma FK
    int IdAluno FK
    int IdAlunoSituacaoDisciplina FK
    %% "string codigoDisciplina FK"
  }
  DisciplinaEmenta {
    string IdDisciplina FK
    id IdEmenta FK
    int IdCurso FK
    int PeriodoEsperado
  }
  AlunoTurma {
    int IdAluno PK, FK
    int IdTurma PK, FK
  }
  Turma {
    int IdTurma PK
    int IdSala FK
    string IdDisciplina FK
    int IdIdProfessor FK
    int Ano
    int Semestre
    int NumeroVagas
    int NumeroAlunosInscritos
  }
  HorarioTurma {
    int IdHorarioTurma PK
    int IdTurma FK
    string IdSala FK
    int TempoDuracao
    %% "% Separar horários numa classe separada?"
    int DiaSemana
    time HoraInicio
  }
  ProfessorDisciplina {
    int IdProfessor FK
    string NomeProfessor FK
    string CodigoDisciplina FK
  }
  PreferenciaHorario {
    id IdPreferencias PK
    int IdProfessor FK
    int GrauPreferencia
    %% "% Separar horários numa classe separada?"
    int DiaSemana
    time HoraInicio
  }
  %% Entidades estáticas Nível 2
  Disciplina {
    string IdDisciplina PK
    %%string codigoLaboratorio %% Precisa desse?
    string NomeDisciplina
    int NumeroHoraTeorica
    int NumeroHoraPratica
    int HorasExtraclasse "Opcional pro nosso escopo"
    int NumeroCredito
  }
  Professor {
    string IdProfessor PK
    string IdLaboratorio FK
    string NomeProfessor
  }
  Sala {
    id IdSala PK
    string CodigoSala
    int QuantidadeCadeira
    int QuantidadeComputador
    string NomeEdificio "Fora do escopo"
    bool IndicadorPossuiMonitor "Fora do escopo"
    bool IndicadorPossuiProjetor "Fora do escopo"
    bool IndicadorPossuiQuadroGiz "Fora do escopo"
    bool IndicadorPossuiQuadroPiloto "Fora do escopo"
  }
  Ementa {
    id IdEmenta PK
    date DataVigor PK
    id IdCurso FK
    string IdDisciplina FK
  }
  %% Entidades estáticas Nível 1
  Situacao {
    int IdSituacao PK
    string DescricaoSituacao
    %% "1: Aprovado, 2: Reprovado, 3: Cursando, 4: Não Cursado, 5: Outro"
  }
  Curso {
    id IdCurso PK
    string idLaboratorio FK
    string NomeCurso
  }
  Laboratorio {
    id IdLaboratorio PK
    string SiglaLaboratorio
    %% LAMET, LCFIS, LECIV, LCQUI, LAMAV, LCMAT, LEPROD, LENEP
    string NomeLaboratorio
  }
```

## B

```mermaid
erDiagram
  Aluno ||--|{ AlunoCurso : "cursa"
  Curso ||--|{ AlunoCurso : "cursa"
  Curso ||--|{ Ementa : "possui"
  Curso ||--|{ Laboratorio : "é de um"
  Professor }|--|| Laboratorio : "é de um"
  Professor }|--|| PreferenciaHorario : "tem preferência por"
  Professor ||--|{ ProfessorDisciplina : "ministra"
  Disciplina ||--|{ ProfessorDisciplina : "ministra"
  Disciplina ||--|{ DisciplinaAluno : "cursa"
  Disciplina }|--o{ PreRequisitos : "pre requisita"
  PreRequisitos }o--|| Disciplina : "pre requisita"
  Disciplina ||--o{ CoRequisita : "co requisitam"
  CoRequisita }o--|{ Disciplina : "co requisitam"
  Disciplina }|--o{ Equivalencia : "equivale a"
  Equivalencia }o--|{ Disciplina : "equivale a"
  Disciplina ||--|{ DisciplinaEmenta : "refere a"
  Ementa ||--|{ DisciplinaEmenta : "contém"
  Situacao ||--|{ DisciplinaAluno : "define status de"
  Aluno ||--|{ DisciplinaAluno : "cursa"
  Aluno ||--|{ AlunoTurma : "integra"
  Turma ||--|{ AlunoTurma : "integra"
  Turma ||--|{ HorarioTurma : "é alocada em"
  Turma ||--|{ Sala : "está em uma"
  Turma }|--|| Professor : "é ministrada por"

```

## C

```mermaid
graph TD
  A[Aluno]         -->|"(1:1)"| id1{cursa}                 -->|"(1:N)"| C[Curso]
  C                -->|"(1:1)"| id3{possui}                -->|"(1:N)"| D[Ementa]
  C                -->|"(1:1)"| id4{é de um}               -->|"(1:N)"| E[Laboratorio]
  F[Professor]     -->|"(1:N)"| id5{é de um}               -->|"(1:1)"| E
  F                -->|"(1:N)"| id6{tem preferência por}   -->|"(1:1)"| G[PreferenciaHorario]
  I[Disciplina]    -->|"(1:1)"| id8{ministra}              -->|"(1:N)"| F
  I                -->|"(1:1)"| id9{cursa}                 -->|"(1:N)"| A
  I                -->|"(1:N)"| id10{pre requisita}        -->|"(0:N)"| K[PreRequisitos]
  K                -->|"(0:N)"| id11{pre requisita}        -->|"(1:1)"| I
  I                -->|"(1:1)"| id12{co requisitam}        -->|"(0:N)"| L[CoRequisita]
  L                -->|"(0:N)"| id13{co requisitam}        -->|"(1:N)"| I
  I                -->|"(1:N)"| id14{equivale a}           -->|"(0:N)"| M[Equivalencia]
  M                -->|"(0:N)"| id15{equivale a}           -->|"(1:N)"| I
  I                -->|"(1:1)"| id16{refere a}             -->|"(1:N)"| D
  O[Situacao]      -->|"(1:1)"| id18{define status de}     -->|"(1:N)"| J[DisciplinaAluno]
  A                -->|"(1:1)"| id19{cursa}                -->|"(1:N)"| J
  Q[Turma]         -->|"(1:1)"| id21{integra}              -->|"(1:N)"| A
  Q                -->|"(1:1)"| id22{é alocada em}         -->|"(1:N)"| R[HorarioTurma]
  Q                -->|"(1:1)"| id23{está em uma}          -->|"(1:N)"| S[Sala]
  Q                -->|"(1:N)"| id24{é ministrada por}     -->|"(1:1)"| F
```

## D
