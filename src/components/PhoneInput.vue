<template>
  <input
    type="text"
    :placeholder="PLACE_HOLDER"
    class="border-gray"
    @input="handleInput"
    :value="formattedPhoneNumber"
  />
  <div>
    {{ formattedPhoneNumber }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const PLACE_HOLDER = '(425) 220-5899'

export default defineComponent({
  name: 'PhoneInput',
  data: () => ({
    PLACE_HOLDER,
    phoneNumber: '',
  }),
  methods: {
    handleInput(event: any) {
      const value = event.target.value as string
      const digits = value.match(/\d+/g)
      console.log(value, digits)
      this.phoneNumber = digits?.join('') || ''
    },
  },
  computed: {
    formattedPhoneNumber() {
      const phoneNumber = this.phoneNumber
      switch (phoneNumber.length) {
        case 0:
          return ''
        case 1:
        case 2:
        case 3:
          return `(${phoneNumber}`
        case 4:
        case 5:
        case 6: {
          const areaCode = phoneNumber.substring(0, 3)
          const part1 = phoneNumber.substring(3)
          return `(${areaCode}) ${part1}`
        }
        default: {
          const areaCode = phoneNumber.substring(0, 3)
          const part1 = phoneNumber.substring(3, 6)
          const part2 = phoneNumber.substring(6, 10)
          return `(${areaCode}) ${part1}-${part2}`
        }
      }
    },
  },
})
</script>

<style></style>
