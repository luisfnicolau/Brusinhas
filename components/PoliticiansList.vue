<script setup lang="ts">
import { type Ref, ref, computed } from "vue";
import {
  fetchMateriaVotacoes,
  fetchParlamentares,
} from "../repository/senadores";
import { type Voto, type IdentificacaoParlamentar } from "../types";
import DropdownMenu from "./DropdownMenu.vue";
import { brazilianStatesMap, voteStatusMap } from "../constants";

const props = defineProps<{
  proposalCode: string;
}>();

const parlamentares: Ref<IdentificacaoParlamentar[]> = ref([]);
const votacoes: Ref<Array<Voto>> = ref([]);
const selectedState: Ref<{ label: string; value: string } | null> = ref(null);

const statesFilterOption = computed(() => {
  const optionsArray: { label: string; value: string }[] = [
    { label: "Todos", value: "Todos" },
  ];
  for (const [value, key] of Object.entries(brazilianStatesMap)) {
    optionsArray.push({ label: key, value });
  }
  return optionsArray;
});

const filteredParlamentares = computed(() => {
  if (!selectedState.value) {
    return parlamentares.value;
  }
  return parlamentares.value.filter(
    (p) =>
      p.UfParlamentar === selectedState.value?.value ||
      selectedState.value?.value === "Todos"
  );
});

async function fetchPoliticians() {
  const res = await fetchParlamentares();
  parlamentares.value = res.map((p) => p.IdentificacaoParlamentar);
}

async function fetchVotes() {
  const res = await fetchMateriaVotacoes(props.proposalCode);
  votacoes.value = res.VotoParlamentar;
}

async function sendEmail(email: string) {
  window.open(`mailto:${email}`);
}

function getVotacao(parlamentar: IdentificacaoParlamentar) {
  const votacao = votacoes.value.find(
    (v) =>
      v.IdentificacaoParlamentar.CodigoParlamentar ===
      parlamentar.CodigoParlamentar
  );
  if (!votacao) {
    return "Não votou";
  }
  return voteStatusMap[votacao.SiglaVoto].name;
}

function getVoteBgColor(parlamentar: IdentificacaoParlamentar) {
  const votacao = votacoes.value.find(
    (v) =>
      v.IdentificacaoParlamentar.CodigoParlamentar ===
      parlamentar.CodigoParlamentar
  );
  return votacao?.SiglaVoto;
}

fetchPoliticians();
fetchVotes();
</script>

<template>
  <div class="mt-12">
    <div class="flex justify-center font-bold text-2xl">Votação</div>
    <div class="flex justify-center my-2">
      <DropdownMenu
        :name="selectedState?.value || 'Meu estado'"
        :options="statesFilterOption"
        @select="selectedState = $event"
      ></DropdownMenu>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div
        v-for="parlamentar in filteredParlamentares"
        :key="parlamentar.CodigoParlamentar"
        class="my-4"
      >
        <div
          class="grid grid-cols-1 text-center bg-gray-100 mx-8 py-4 rounded-lg md:bg-white"
        >
          <img
            :src="parlamentar.UrlFotoParlamentar"
            alt="Foto do parlamentar"
            class="mx-auto rounded-full"
            width="200em"
          />
          <span>{{ parlamentar.FormaTratamento }}</span>
          <span class="text-3xl">{{ parlamentar.NomeParlamentar }}</span>
          <div class="flex justify-center gap-2 text-sm">
            <span>{{ parlamentar.SiglaPartidoParlamentar }}</span>
            -
            <span>{{ parlamentar.UfParlamentar }}</span>
          </div>
          <div class="flex justify-center gap-1">
            Voto:
            <div
              class="text-white px-1 rounded-md"
              :class="
                getVoteBgColor(parlamentar) === 'Sim'
                  ? 'bg-green-500'
                  : getVoteBgColor(parlamentar) === 'Presidente (art. 51 RISF)'
                  ? 'bg-blue-700'
                  : 'bg-gray-700'
              "
            >
              {{ getVotacao(parlamentar) }}
            </div>
          </div>
          <div class="justify-center mt-2">
            <button
              @click="sendEmail(parlamentar.EmailParlamentar)"
              class="px-2 rounded-md bg-blue-500 outline outline-blue-400 text-white flex items-center mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="mr-2"
              >
                <path
                  fill="white"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                />
              </svg>
              Mande um email
            </button>
          </div>
          <div class="flex justify-center text-sm mt-2">
            <a
              :href="`tel:${telefone.NumeroTelefone}`"
              v-for="(telefone, index) in parlamentar.Telefones.Telefone"
              class="outline outline-blue-400 px-1 rounded-md text-blue-700 mx-1 flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1736ce"
                  d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                />
              </svg>
              {{ telefone.NumeroTelefone }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- {
    "CodigoParlamentar": "5672",
    "CodigoPublicoNaLegAtual": "800",
    "NomeParlamentar": "Alan Rick",
    "NomeCompletoParlamentar": "Alan Rick Miranda",
    "SexoParlamentar": "Masculino",
    "FormaTratamento": "Senador ",
    "UrlFotoParlamentar": "http://www.senado.leg.br/senadores/img/fotos-oficiais/senador5672.jpg",
    "UrlPaginaParlamentar": "http://www25.senado.leg.br/web/senadores/senador/-/perfil/5672",
    "EmailParlamentar": "sen.alanrick@senado.leg.br",
    "Telefones": {
        "Telefone": [
            {
                "NumeroTelefone": "33036333",
                "OrdemPublicacao": "1",
                "IndicadorFax": "Não"
            }
        ]
    },
    "SiglaPartidoParlamentar": "UNIÃO",
    "UfParlamentar": "AC",
    "Bloco": {
        "CodigoBloco": "336",
        "NomeBloco": "Bloco Parlamentar Democracia",
        "NomeApelido": "BLDEM",
        "DataCriacao": "2023-02-03"
    },
    "MembroMesa": "Não",
    "MembroLideranca": "Sim"
} -->
