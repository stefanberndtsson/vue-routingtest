<template>
  <h1>Home1</h1>
  <div>
    <Linklist @queryChange="queryChange" :name="name" :info="info"/>
  </div>
  <div>
    DEBUG: {{ JSON.stringify({name, info, role}) }}
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import Linklist from '@/components/Linklist'
import { watch } from 'vue'

export default {
  components: {
    Linklist
  },
  props: ['name', 'info', 'role'],
  setup(props) {
    const router = useRouter()
    const route = useRoute()

    watch(() => route.query, (after, before) => {
      console.log("watch", before, after, route.query, props)
    })

    function queryChange(newQuery) {
      const old = route.query
      const query = {...old, ...newQuery}
      router.push({query})
    }

    return {
      queryChange
    }    
  },
}
</script>
