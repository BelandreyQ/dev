<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import PageComponent from "./components/PageComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PageComponent,
    FooterComponent
  }
}
</script>

<template>
    <div id="app">
        <HeaderComponent/>
        <PageComponent/>
        <FooterComponent/>
    </div>
</template>

<style scoped>

</style>