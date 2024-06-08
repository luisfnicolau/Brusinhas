<script setup lang="ts">
import { type Ref, ref } from "vue";
import { fetchMateria } from "../repository/repository";
import { type Materia } from "../types";

const props = defineProps<{
  proposalCode: string;
}>();

const proposalInfo: Ref<Materia | null> = ref(null);

async function fetchPropositionInfo() {
  const res = await fetchMateria(props.proposalCode);
  proposalInfo.value = res;
}

fetchPropositionInfo();
</script>

<template>
  <div v-if="proposalInfo" class="grid justify-center my-4">
    <div class="text-4xl font-bold mx-auto my-2">
      {{ proposalInfo.IdentificacaoMateria.DescricaoIdentificacaoMateria }}
    </div>
    <div class="grid justify-center border rounded-lg px-5">
      <div class="my-2 max-w-screen-md text-sm">
        {{ proposalInfo.DadosBasicosMateria.EmentaMateria }}
      </div>
      <div class="my-4">
        <h1 class="text-2xl mb-2">Resumo do Projeto de Lei</h1>
        <h2>Programa Mobilidade Verde e Inovação (Programa Mover)</h2>
        <ul>
          <li>
            Promover a neoindustrialização e inovação tecnológica no setor
            automotivo.
          </li>
          <li>
            Estabelecer requisitos para comercialização e importação de veículos
            novos.
          </li>
          <li>Incentivar pesquisa, desenvolvimento e inovação industrial.</li>
        </ul>
        <h2>Política de Conteúdo Local</h2>
        <ul>
          <li>
            Definir conteúdo local mínimo obrigatório para exploração e produção
            de petróleo e gás natural.
          </li>
        </ul>
        <h2>Tributação e Incentivos Fiscais</h2>
        <ul>
          <li class="font-bold">
            Remover a isenção de imposto para compras internacionais de até 50
            dólares, com nova alíquota de 20%.
          </li>
          <li>
            Definir novas alíquotas do IPI baseadas em atributos dos veículos.
          </li>
          <li>
            Estabelecer multas para descumprimento de metas de eficiência
            energética e desempenho estrutural.
          </li>
        </ul>
        <h2>Regime de Autopeças Não Produzidas</h2>
        <ul>
          <li>
            Criar um regime específico para importação de autopeças sem produção
            nacional, com investimentos obrigatórios em P&D.
          </li>
        </ul>
        <h2>Capítulo de Veículos Sustentáveis</h2>
        <ul>
          <li>
            Incentivar a produção e uso de bicicletas, com redução gradual do
            IPI para bicicletas convencionais e elétricas.
          </li>
        </ul>

        <div class="justify-center flex">
          <a
            href="https://www25.senado.leg.br/web/atividade/materias/-/materia/163889"
            target="_blank"
            class="text-blue-500 underline"
            >Acesse o projeto de lei completo</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
ul {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 16px;
}
</style>
