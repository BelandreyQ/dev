<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import PageComponent from "./components/PageComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PageComponent,
  }
}
</script>

<template>
    <div id="app">
        <HeaderComponent/>
        <PageComponent/>
    </div>
</template>

<style scoped>

</style>