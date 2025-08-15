<script>
import HeaderComponent from "./components/layout/HeaderComponent.vue"
import CreditBlock from "./components/sections/CreditBlock.vue";
import OpportunitiesBlock from "./components/sections/OpportunitiesBlock.vue";
import ThirdBlock from "./components/sections/ThirdBlock.vue";
import SingleRow from "./components/sections/SingleRow.vue";
import ThreeRow from "./components/sections/ThreeRow.vue";
import StepBlock from "./components/sections/StepBlock.vue";
import ConnectorBlock from "./components/sections/ConnectorBlock.vue";
import ContactsComponent from "./components/sections/ContactsComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CreditBlock,
    OpportunitiesBlock,
    ThirdBlock,
    SingleRow,
    ThreeRow,
    StepBlock,
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
          <CreditBlock/>
          <OpportunitiesBlock/>
          <ThirdBlock/>
          <SingleRow/>
          <ThreeRow/>
          <StepBlock/>
          <ConnectorBlock/>
        </main>
        <FooterComponent/>
    </div>
</template>

<style scoped>

</style>