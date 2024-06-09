import axios from 'axios';
import {toJson} from 'xml2json';
import type { Deputado } from '../types';

axios.defaults.baseURL = 'https://dadosabertos.camara.leg.br/api/v2/';

async function fetchDeputado(): Promise<Deputado[]> {
    const res = await axios.get('/deputados/123086');
    const data = res.data;
    console.log(data)
    return data;
}

async function fetchProposicao() {
    const res = await axios.get(`/proposicoes?siglaTipo=PL&numero=914&ano=2024`, {
        params: {
            siglaTipo: 'PL',
            numero: '914',
            ano: '2024',
        }
    });
    const data = res.data;
    console.log(data)

    return data.dados[0]
}

async function fetchProposicoesDetalhes() {
    const res = await axios.get(`/api/v2/proposicoes/2422697`, {
    });
    const xmlData = res.data;
    console.log(xmlData)
    const jsData = JSON.parse(toJson(xmlData));
    console.log(jsData)
}