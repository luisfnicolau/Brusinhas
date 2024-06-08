export interface Parlamentar {
    IdentificacaoParlamentar: IdentificacaoParlamentar;
    Mandato: {
        CodigoMandato: string;
        UfParlamentar: string;
        PrimeiraLegislaturaDoMandato: {
            NumeroLegislatura: string;
            DataInicio: string;
            DataFim: string;
        };
        SegundaLegislaturaDoMandato: {
            NumeroLegislatura: string;
            DataInicio: string;
            DataFim: string;
        };
        DescricaoParticipacao: string;
        Titular: {};
        Suplentes: {
            Suplente: {
                DescricaoParticipacao: string;
                CodigoParlamentar: string;
                NomeParlamentar: string;
            }[];
        };
        Exercicios: {
            Exercicio: {
                CodigoExercicio: string;
                DataInicio: string;
            }[];
        };
    };
}

export interface IdentificacaoParlamentar {
    CodigoParlamentar: string;
    CodigoPublicoNaLegAtual: string;
    NomeParlamentar: string;
    NomeCompletoParlamentar: string;
    SexoParlamentar: string;
    FormaTratamento: string;
    UrlFotoParlamentar: string;
    UrlPaginaParlamentar: string;
    EmailParlamentar: string;
    Telefones: {
        Telefone: {
            NumeroTelefone: string;
            OrdemPublicacao: string;
            IndicadorFax: string;
        }[];
    };
    SiglaPartidoParlamentar: string;
    UfParlamentar: string;
    Bloco: {
        CodigoBloco: string;
        NomeBloco: string;
        NomeApelido: string;
        DataCriacao: string;
    };
    MembroMesa: string;
    MembroLideranca: string;
}; 

export interface Materia {
    IdentificacaoMateria: {
        CodigoMateria: string;
        SiglaCasaIdentificacaoMateria: string;
        SiglaSubtipoMateria: string;
        DescricaoSubtipoMateria: string;
        NumeroMateria: string;
        AnoMateria: string;
        DescricaoObjetivoProcesso: string;
        DescricaoIdentificacaoMateria: string;
        IndicadorTramitando: string;
        IdentificacaoProcesso: string;
    };
    DadosBasicosMateria: {
        EmentaMateria: string;
        IndexacaoMateria: string;
        Autor: string;
        CasaIniciadoraNoLegislativo: string;
        IndicadorComplementar: string;
        DataApresentacao: string;
        NaturezaMateria: {
            CodigoNatureza: string;
            NomeNatureza: string;
            DescricaoNatureza: string;
        };
    };
    Classificacoes: {
        Classificacao: {
            CodigoClasse: string;
            DescricaoClasse: string;
            DescricaoClasseHierarquica: string;
        }[];
    };
    OrigemMateria: {
        SiglaCasaOrigem: string;
    };
    MateriasRelacionadas: {
        MateriaRelacionada: {
            IdentificacaoMateria: {
                CodigoMateria: string;
                SiglaCasaIdentificacaoMateria: string;
                SiglaSubtipoMateria: string;
                NumeroMateria: string;
                AnoMateria: string;
                IndicadorTramitando: string;
                SiglaTipoRelacao: string;
            };
        }[];
    };
    DecisaoEDestino: {
        Decisao: {
            Data: string;
            Sigla: string;
            Descricao: string;
        };
        Destino: {
            Sigla: string;
            Descricao: string;
        };
    };
    OutrasInformacoes: {
        Servico: {
            NomeServico: string;
            DescricaoServico: string;
            UrlServico: string;
        }[];
    };
}

export interface Voto {
    IdentificacaoParlamentar: {
        CodigoParlamentar: string;
        NomeParlamentar: string;
        NomeCompletoParlamentar: string;
        SexoParlamentar: string;
        FormaTratamento: string;
        UrlFotoParlamentar: string;
        UrlPaginaParlamentar: string;
        EmailParlamentar: string;
        SiglaPartidoParlamentar: string;
        UfParlamentar: string;
    };
    SiglaVoto: string;
    UrlListaTiposVoto: string;
}




