import axios from 'axios';
import type { Deputado } from '../types';

const baseURL = 'https://dadosabertos.camara.leg.br/api/v2/';

export async function fetchDeputado(): Promise<Deputado[]> {
    const res = await axios.get(`${baseURL}/deputados/123086`);
    const data = res.data;
    return data.dados;
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