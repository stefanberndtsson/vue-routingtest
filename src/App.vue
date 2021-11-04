<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{path: '/', query: {name: 'Home 2'}}">Home 2</router-link> |
    <router-link to="/about">About</router-link>
    <div>
      <button @click="seturl">Seturl</button>
    </div>
  </div>

  <router-view/>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()

    function seturl() {
      router.push({query: {name: "new name"}})
    }
    return {
      seturl
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
