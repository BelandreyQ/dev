<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import CreditBlockComponent from "./components/CreditBlockComponent.vue";
import OpportunitiesBlockComponent from "./components/OpportunitiesBlockComponent.vue";
import ThirdBlockComponent from "./components/ThirdBlockComponent.vue";
import SingleRowComponent from "./components/SingleRowComponent.vue";
import ThreeRowComponent from "./components/ThreeRowComponent.vue";
import StepBlockComponent from "./components/StepBlockComponent.vue";
import ConnectorBlock from "./components/ConnectorBlock.vue";
import ContactsComponent from "./components/ContactsComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CreditBlockComponent,
    OpportunitiesBlockComponent,
    ThirdBlockComponent,
    SingleRowComponent,
    ThreeRowComponent,
    StepBlockComponent,
    ConnectorBlock,
    ContactsComponent,
    FooterComponent
  }
}
</script>

<template>
    <div id="app">
        <HeaderComponent/>
        <main>
          <CreditBlockComponent/>
          <OpportunitiesBlockComponent/>
          <ThirdBlockComponent/>
          <SingleRowComponent/>
          <ThreeRowComponent/>
          <StepBlockComponent/>
          <ConnectorBlock/>
        </main>
        <FooterComponent/>
    </div>
</template>

<style scoped>

</style>