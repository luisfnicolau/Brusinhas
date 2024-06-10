<script setup lang="ts">
import { type Ref, ref } from "vue";
import { fetchDeputado } from "~/repository/deputados";

const relator: Ref<any> = ref({});

async function sendEmail(email: string) {
  window.open(`mailto:${email}`);
}

async function getRelator() {
  const relatorRes = await fetchDeputado();
  return (relator.value = relatorRes);
}

getRelator();
</script>

<template>
  <div class="mt-12">
    <div
      v-if="relator.ultimoStatus"
      class="grid grid-cols-1 text-center bg-gray-100 mx-8 py-4 rounded-lg md:bg-white"
    >
      <img
        :src="relator.ultimoStatus.urlFoto"
        alt="Foto do parlamentar"
        class="mx-auto rounded-full"
        width="200em"
      />
      <span>Deputado Federal</span>
      <span class="font-bold">Relator do Projeto de Lei</span>
      <span class="text-3xl">{{ relator.ultimoStatus.nome }}</span>
      <div class="flex justify-center gap-2 text-sm">
        <span>{{ relator.ultimoStatus.siglaPartido }}</span>
        -
        <span>{{ relator.ultimoStatus.siglaUf }}</span>
      </div>
      <div class="justify-center mt-2">
        <button
          @click="sendEmail(relator.ultimoStatus.email)"
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
          :href="`tel:${relator.ultimoStatus.gabinete.telefone}`"
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
          {{ relator.ultimoStatus.gabinete.telefone }}
        </a>
      </div>
      <div class="grid gap-3 justify-center text-sm mt-6">
        <a
          :href="`tel:${relator.ultimoStatus.gabinete.telefone}`"
          v-for="(redeSocial, index) in relator.redeSocial"
          class="px-1 rounded-md text-[#1a9fcb] mx-1 flex items-center gap-1"
        >
          <svg
            v-if="index === 0"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#1a9fcb"
              d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083"
            />
          </svg>
          <svg
            v-if="index === 1"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#1a47cb"
              d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999"
            />
          </svg>
          <svg
            v-if="index === 2"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#dd00fa"
              d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709m-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246m4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078"
            />
            <circle cx="11.994" cy="11.979" r="3.003" fill="#dd00fa" />
          </svg>
          {{ redeSocial }}
        </a>
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
