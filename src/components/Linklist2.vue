<template>
  <ul>
    <li><button @click="sendQueryChange1()">Set name</button></li>
    <li><button @click="sendQueryChange2()">Set info</button></li>
    <li><button @click="sendQueryChange3()">Clear name</button></li>
    <li><button @click="sendQueryChange4()">Clear all</button></li>
  </ul>
  <div>
    Linktest2: DEBUG: {{ JSON.stringify({name, info}) }}
  </div>
</template>

<script>
export default {
  emits: ['queryChange'],
  props: ['name', 'info'],
  data: () => {
  },
  methods: {
    sendQueryChange1() {
      this.$emit('queryChange', {name: "Name was set"})
    },
    sendQueryChange2() {
      this.$emit('queryChange', {info: "Info was set"})
    },
    sendQueryChange3() {
      this.$emit('queryChange', {name: undefined})
    },
    sendQueryChange4() {
      this.$emit('queryChange', {name: undefined, info: undefined, role: undefined})
    }
  }
}
</script>

<style scoped>
ul li {
  list-style-type: none;
  display: inline-block;
  margin-right: 5px;
}

ul {
  padding-left: 0;
}

</style>