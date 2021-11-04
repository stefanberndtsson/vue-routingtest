<template>
  <ul>
    <li><button @click="sendQueryChange('Link 1')">Link 1</button></li>
    <li><button @click="sendQueryChange('Link 2')">Link 2</button></li>
    <li><button @click="sendQueryChange('Link 3')">Link 3</button></li>
  </ul>
</template>

<script>
export default {
  emits: ['queryChange'],
  setup(props, {emit}) {
    function sendQueryChange(param) {
      emit('queryChange', param)
    }

    return {
      sendQueryChange
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