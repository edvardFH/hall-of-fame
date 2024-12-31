<script setup lang="ts">
import type {Duration, PersonalRecord} from "~/components/model";

defineProps<{
  personalRecord: PersonalRecord
}>()

function formatDuration(duration: Duration) {
  const { hours, minutes, seconds } = duration

  const format = (num) => (num < 10 ? '0' + num : num)

  if (hours > 0) {
    return format(hours) + ':' + format(minutes) + ':' + format(seconds)
  } else {
    return format(minutes) + ':' + format(seconds)
  }
}
</script>

<template>
  <div class="personal-record">
    <div class="title">
      <span>{{ personalRecord.type }}</span>
      <span>{{ personalRecord.distance.value }} {{ personalRecord.distance.unit }}</span>
    </div>
    <table>
      <tr>
        <th>Durée</th>
        <td>{{ formatDuration(personalRecord.duration) }}</td>
      </tr>
      <tr>
        <th>Allure</th>
        <td>{{ formatDuration(personalRecord.pace.duration) }}/{{ personalRecord.pace.unit }}</td>
      </tr>
      <tr>
        <th>Date</th>
        <td>{{ personalRecord.date }}</td>
      </tr>
      <tr>
        <th>Athlète</th>
        <td>{{ personalRecord.athleteName }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.personal-record {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding: 32px;
  border-radius: 8px;
  min-width: 300px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.title span {
  font-size: x-large;
  font-weight: bold;
}


table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}
</style>