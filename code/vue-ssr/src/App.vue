<template>
  <div id="app">
    <p>{{ message }}</p>
    <input type="text" v-model="message">
    <p @click="onClick"> 点我</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: '拉勾教育'
    }
  },
  methods: {
    onClick () {
      console.log('Hello World!')
    }
  }
}
</script>

<style>

</style>
