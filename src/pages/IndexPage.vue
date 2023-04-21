<template>
  <q-page class="flex flex-center">
    <BabylonScene/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import  BabylonScene  from "src/components/BabylonScene.vue"

export default defineComponent({
  name: 'IndexPage',
  components:{ BabylonScene }
})
</script>
