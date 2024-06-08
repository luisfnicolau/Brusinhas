import axios from 'axios';
import { Materia, Parlamentar } from '../types';

axios.defaults.baseURL = 'http://legis.senado.gov.br/dadosabertos';

export async function fetchParlamentares(): Promise<Parlamentar[]> {
    const res = await axios.get('/senador/lista/atual');
    const data = res.data;
    const parlamentares = data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar;
    return parlamentares;
}

export async function fetchParlamentar(code: string) {
    const res = await axios.get(`/senador/${code}`);
    const data = res.data;
    const parlamentar = data.DetalheParlamentar.Parlamentar;
    return parlamentar;
}

export async function fetchMateriaAutor(code: string) {
    const res = await axios.get(`/autor/lista/atual`);
    const data = res.data;
    const autores = data.ListaAutores.Autores;
    return autores;
}

export async function fetchMateria(code: string): Promise<Materia> {
    const res = await axios.get(`/materia/${code}`);
    const data = res.data;
    const materia = data.DetalheMateria.Materia;
    return materia;
}

export async function fetchMateriaVotacoes(code: string) {
    const res = await axios.get(`/materia/votacoes/${code}`);
    const data = res.data;
    const votacoes = data.VotacaoMateria.Materia.Votacoes.Votacao[0].Votos;
    return votacoes;
}

export async function fetchMateriaAtualizadas() {
    const res = await axios.get(`/materia/atualizadas`);
    const data = res.data;
    const materias = data.ListaMateriasAtualizadas.Materias.Materia;
    return materias;
}
