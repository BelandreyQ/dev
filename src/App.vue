<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import CreditBlockComponent from "./components/CreditBlockComponent.vue";
import OpportunitiesBlockComponent from "./components/opportunitiesBlockComponent.vue";
import ThirdBlockComponent from "./components/ThirdBlockComponent.vue";
import SingleRowComponent from "./components/SingleRowComponent.vue";
import PageComponent from "./components/PageComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ThreeRowComponent from "./components/ThreeRowComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CreditBlockComponent,
    OpportunitiesBlockComponent,
    ThirdBlockComponent,
    SingleRowComponent,
    ThreeRowComponent,
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
        <SingleRowComponent/>
        <ThreeRowComponent/>
        <PageComponent/>
        <FooterComponent/>
    </div>
</template>

<style scoped>

</style>