<script setup lang="ts">
import { ref } from "vue";

const proposalCode = ref("163889");
</script>

<template>
  <div>
    <LawProposalInfo :proposalCode="proposalCode"></LawProposalInfo>
    <Relator></Relator>
    <PoliticiansList :proposalCode="proposalCode"></PoliticiansList>
  </div>
</template>
