# Estatuto

UENF, com sede e foro na cidade de Campos dos Goytacazes e unidades instaladas em outros municípios do Estado do Rio de Janeiro

## Art. 4º

Em sua organização, a Universidade deve observar os seguintes princípios:

1. I - unidade de patrimônio e administração;
2. II - organicidade de estrutura, com base em Laboratórios congregados por Centros;
3. III - racionalidade de organização, com plena utilização de recursos materiais e humanos;
4. VI - cooperação entre os Centros e os Laboratórios responsáveis pelos estudos compreendidos em cada curso, projeto ou programa.

## Art. 6º

São órgãos da Administração Superior da UENF:

1. a) Deliberativos:
   1. I – Conselho Universitário
   2. II – Colegiado Acadêmico
2. b) Consultivo:
   1. I – Conselho Consultivo
3. c) Executivo
   1. I – Reitoria
4. d) De auditoria, supervisão e indução de recursos:
   1. I – Conselho Curador

---

1. § 1o - São órgãos executivos complementares da Reitoria:
    1. I - Colegiado Executivo
    2. II – Vice-Reitoria
    3. III - Pró-Reitoria de Graduação
    4. IV - Pró-Reitoria de Pesquisa e Pós-Graduação
    5. V - Pró-Reitoria de Extensão e Assuntos Comunitários
    6. VI - Diretoria Geral Administrativa
    7. VII – Diretoria de Administração de Projetos
2. § 2o – São órgãos auxiliares da Reitoria:
    1. I - Chefia de Gabinete do Reitor
    2. II - Secretaria Acadêmica
    3. III - Auditoria Interna
    4. III - Assessoria Jurídica
    5. IV - Assessoria de Comunicação
    6. V - Assessoria de Assuntos Internacionais e Institucionais
    7. VII – Câmara de Carreira Docente
    8. VIII – Câmara de Carreira Técnico-Administrativa
3. § 3o – São órgãos normativos e deliberativos nas suas áreas específicas, complementares do Colegiado Acadêmico:
    1. I - Câmara de Graduação
    2. II - Câmara de Pesquisa e Pós-Graduação
    3. III - Câmara de Extensão e Assuntos Comunitários

## Art. 7º

As unidades universitárias de ensino, pesquisa e extensão, definidas por áreas e conhecimento, são constituídas em Centros, que por sua vez congregam Laboratórios afins.
Parágrafo único - O Laboratório é a menor parte da estrutura universitária para todos os efeitos de organização administrativa, didático-científica, distribuição de pessoal e de representação nos órgãos colegiados da UENF.

1. Art. 8º - São órgãos suplementares da UENF, subordinados diretamente à Reitoria:
    1. I- Biblioteca Central
    2. II- Casa da Cultura Villa Maria
    3. III- Núcleo de Informática
    4. IV- Núcleo Tecnológico
    5. V- Espaço da Ciência
    6. VI- Editora Universitária
    7. VII- Serviço de Atendimento à Comunidade Universitária

## Anotação JV

Abaixo se encontra um diagrama escrito em mermaid de como a UENF está organizada.

```mermaid

graph LR

    U[UENF]
        OAS[Órgãos da Administração Superior]
            OAS_Deli[Deliberativos]
                OAS_Deli_CU[Conselho Universitário]
                OAS_Deli_CA[Colegiado Acadêmico]
            OAS_Cons[Consultivo]
                OAS_Cons_CC[Conselho Consultivo]
            OAS_Exec[Executivo]
                OAS_Exec_R[Reitoria]
                    OSU[órgãos suplementares da UENF]
                        OSU_BC[Biblioteca Central]
                        OSU_CCVM[Casa da Cultura Villa Maria]
                        OSU_NI[Núcleo de Informática]
                        OSU_NT[Núcleo Tecnológico]
                        OSU_EC[Espaço da Ciência]
                        OSU_EU[Editora Universitária]
                        OSU_SACU[Serviço de Atendimento à Comunidade Universitária]
            OAS_ASI[Auditoria, supervisão e indução de recursos]
                OAS_ASI_CC[Conselho Curador]
        OECR[Órgãos executivos complementares da Reitoria]
            OECR_CE[Colegiado Executivo]
            OECR_VR[Vice-Reitoria]
            OECR_PG[Pró-Reitoria de Graduação]
            OECR_PP[Pró-Reitoria de Pesquisa e Pós-Graduação]
            OECR_PE[Pró-Reitoria de Extensão e Assuntos Comunitários]
            OECR_DGA[Diretoria Geral Administrativa]
            OECR_DAP[Diretoria de Administração de Projetos]
        OAR[Órgãos auxiliares da Reitoria]
            OAR_CR[Chefia de Gabinete do Reitor]
            OAR_SA[Secretaria Acadêmica]
            OAR_AI[Auditoria Interna]
            OAR_AJ[Assessoria Jurídica]
            OAR_AC[Assessoria de Comunicação]
            OAR_AAI[Assessoria de Assuntos Internacionais e Institucionais]
            OAR_CCD[Câmara de Carreira Docente]
            OAR_CCT[Câmara de Carreira Técnico-Administrativa]
        OND[Órgãos normativos e deliberativos nas suas áreas específicas, complementares do Colegiado Acadêmico]
            OND_CG[Câmara de Graduação]
            OND_CPG[Câmara de Pesquisa e Pós-Graduação]
            OND_CEA[Câmara de Extensão e Assuntos Comunitários]

    U --> OAS
        OAS --> OAS_Deli --> OAS_Deli_CU & OAS_Deli_CA
        OAS --> OAS_Cons --> OAS_Cons_CC
        OAS --> OAS_Exec --> OAS_Exec_R --> OSU
            OSU --> OSU_BC & OSU_CCVM & OSU_NI & OSU_NT & OSU_EC & OSU_EU & OSU_SACU
        OAS --> OAS_ASI --> OAS_ASI_CC
    U --> OECR
        OECR --> OECR_CE
        OECR --> OECR_VR
        OECR --> OECR_PG
        OECR --> OECR_PP
        OECR --> OECR_PE
        OECR --> OECR_DGA
        OECR --> OECR_DAP
    U --> OAR
        OAR --> OAR_CR
        OAR --> OAR_SA
        OAR --> OAR_AI
        OAR --> OAR_AJ
        OAR --> OAR_AC
        OAR --> OAR_AAI
        OAR --> OAR_CCD
        OAR --> OAR_CCT
    U --> OND --> OND_CG & OND_CPG & OND_CEA

```

CAPÍTULO I
DA ADMINISTRAÇÃO SUPERIOR
Art. 10 - A administração superior tem como órgão de consulta o Conselho Consultivo; como órgão supervisor, auditor e indutor na captação de recursos, o Conselho Curador; como órgãos deliberativos o Conselho Universitário, o Colegiado Acadêmico, a Câmara de Graduação, a Câmara de Pesquisa e Pós- Graduação e a Câmara de Extensão e Assuntos Comunitários; como órgãos executivos, a Reitoria, o Colegiado executivo, as Pró-Reitorias, a Diretoria Geral Administrativa e a Diretoria de administração de Projetos.

§ 3o - Os representantes dos Chefes de Laboratórios são eleitos por seus pares dos
respectivos Centros, com mandato de três anos, sendo permitida a
recondução.

Art. 15 - São atribuições do Conselho Universitário:

V- aprovar os regimentos de todos os órgãos, unidades e serviços da
Universidade;

§ 8o - Compete ao Colegiado Acadêmico:

X - aprovar o calendário escolar;

Categorias