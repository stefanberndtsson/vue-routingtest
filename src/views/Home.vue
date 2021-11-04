<template>
  <div>
    <Linklist @queryChange="queryChange" />
  </div>
  <div>
    DEBUG: {{ name }}
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { onUpdated } from 'vue'
import Linklist from '@/components/Linklist'

export default {
  components: {
    Linklist
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    const name = ref("")
    onUpdated(() => {
      console.log("Simulate fetching updated data using ", route.query.name)
      name.value = route.query.name
    })

    function queryChange(a) {
      router.push({query: {name: a}})
    }

    return {
      queryChange,
      name
    }    
  },
}
</script>
