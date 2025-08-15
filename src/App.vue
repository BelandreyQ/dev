<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import CreditBlockComponent from "./components/CreditBlockComponent.vue";
import OpportunitiesBlockComponent from "./components/opportunitiesBlockComponent.vue";
import ThirdBlockComponent from "./components/ThirdBlockComponent.vue";
import PageComponent from "./components/PageComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CreditBlockComponent,
    OpportunitiesBlockComponent,
    ThirdBlockComponent,
    PageComponent,
    FooterComponent
  }
}
</script>

<template>
    <div id="app">
        <HeaderComponent/>
        <CreditBlockComponent/>
        <OpportunitiesBlockComponent/>
        <ThirdBlockComponent/>
        <PageComponent/>
        <FooterComponent/>
    </div>
</template>

<style scoped>

</style>