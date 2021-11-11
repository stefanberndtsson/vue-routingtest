<template>
  <h1>Home2</h1>
  <div>
    <Linklist2 @queryChange="queryChange" :name="name" :info="info"/>
  </div>
  <div>
    DEBUG: {{ JSON.stringify({name, info, role}) }}
  </div>
</template>

<script>
import Linklist2 from '@/components/Linklist2'

export default {
  components: {
    Linklist2
  },
  props: ['name', 'info', 'role'],
  data: () => {

  },
  methods: {
    queryChange(newQuery) {
      const old = this.$route.query
      const query = {...old, ...newQuery}
      this.$router.push({query})
    }
  },
  watch: {
    "$route.query": function(after, before) {
      console.log("watch", before, after, this.$route.query)
    }
  }
}
</script>
