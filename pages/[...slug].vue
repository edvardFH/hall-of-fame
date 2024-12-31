<script setup lang="ts">
import type {PersonalRecord} from "~/components/model";
import RecordCard from "~/components/content/RecordCard.vue";

const personalRecords = fetchRecords()
</script>

<template>
  <main>
    <RecordCard v-for="(personalRecord, index) in personalRecords" :personalRecord :key="index" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 20px;

  margin: 0 100px;
  height: 100vh;
}
</style>
