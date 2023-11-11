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
```mermaid
erDiagram
  Curso ||--|{ Aluno : "estão inscritos em"
  Curso ||--|{ Ementa : "possui"
  Curso ||--|{ Laboratorio : "é de um"
  Professor }|--|| Laboratorio : "é de um"
  Professor }|--|| PreferenciaHorario : "tem preferência por"
  Professor ||--|{ ProfessorDisciplina : "ministra"
  Disciplina ||--|{ ProfessorDisciplina : "ministra"
  Disciplina ||--|{ DisciplinaAluno : "cursa"
  Disciplina }|--o{ PreRequisitos : "pre requisita"
  PreRequisitos }o--|| Disciplina : "pre requisita"
  Disciplina ||--o{ coRequisita : "co requisitam"
  coRequisita }o--|{ Disciplina : "co requisitam"
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

  coRequisita {
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
    String codigoMatricula
    string NomeAluno
  }
  DisciplinaAluno {
    string IdTurma FK
    int IdAluno FK
    int IdSituacao FK
    %% "string codigoDisciplina FK"
  }
  DisciplinaEmenta {
    id IdEmenta FK
    string IdDisciplina FK
    int IdCurso FK
    int PeriodoEsperado
  }
  AlunoTurma {
    int IdTurma FK
    int IdAluno FK
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
    int QuantidadeCadeiras
    int QuantidadeComputadores
    string Edificio "Fora do escopo"
    bool PossuiMonitor "Fora do escopo"
    bool PossuiProjetor "Fora do escopo"
    bool PossuiQuadroGiz "Fora do escopo"
    bool PossuiQuadroPiloto "Fora do escopo"
  }
  Ementa {
    id IdEmenta PK
    id IdCurso FK
    string IdDisciplina FK
    date DataVigor
  }
  %% Entidades estáticas Nível 1
  Situacao {
    int IdSituacao PK
    string DescricaoSituacao
    %% "1: Aprovado, 2: Reprovado, 3: Cursando, 4: Não Cursado, 5: Outro"
  }
  Curso {
    id CodigoCurso PK
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
