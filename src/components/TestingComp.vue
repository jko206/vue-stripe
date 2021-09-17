<template>
  <div class="text-blue-400 text-lg bg-red-300">Test component</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestingComp',
  methods: {
    doSomething() {
      console.log(this.$store.state.someVal)
    },
  },
})
</script>

<style></style>
