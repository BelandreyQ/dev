<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import CreditBlockComponent from "./components/CreditBlockComponent.vue";
import PageComponent from "./components/PageComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CreditBlockComponent,
    PageComponent,
    FooterComponent
  }
}
</script>

<template>
    <div id="app">
        <HeaderComponent/>
        <CreditBlockComponent/>
        <PageComponent/>
        <FooterComponent/>
    </div>
</template>

<style scoped>

</style>