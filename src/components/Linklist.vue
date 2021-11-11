<template>
  <ul>
    <li><button @click="sendQueryChange1()">Set name</button></li>
    <li><button @click="sendQueryChange2()">Set info</button></li>
    <li><button @click="sendQueryChange3()">Clear name</button></li>
    <li><button @click="sendQueryChange4()">Clear all</button></li>
  </ul>
  <div>
    Linktest: DEBUG: {{ JSON.stringify({name, info}) }}
  </div>
</template>

<script>
export default {
  emits: ['queryChange'],
  props: ['name', 'info'],
  setup(props, {emit}) {
    function sendQueryChange1() {
      emit('queryChange', {name: "Name was set"})
    }
    function sendQueryChange2() {
      emit('queryChange', {info: "Info was set"})
    }
    function sendQueryChange3() {
      emit('queryChange', {name: undefined})
    }
    function sendQueryChange4() {
      emit('queryChange', {name: undefined, info: undefined, role: undefined})
    }

    return {
      sendQueryChange1,
      sendQueryChange2,
      sendQueryChange3,
      sendQueryChange4,
    }
  },
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