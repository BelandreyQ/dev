<script setup>
defineProps({
  icon: {type: String, required: true},
  altText: {type: String, required: true},
  text: {type: String, required: true},
  subtext: {type: String, default: ""},
  undertext: {type: String, default: ""},
  big: {type: Boolean, default: false}
});

</script>

<template>
    <div class="block" :class="{
    'block--style--info': !big,
    'block--style--info block--style--info--big': big
    }">
        <img 
        :src="icon"
        :alt="altText" 
        class="block__image"
        >
        <div class="article">
            <h4 class="article__body">{{ text }}</h4>
            <div 
                v-if="big && subtext" 
                class="article__title article__title--text--extra--small"
            >
                {{ subtext }}
            </div>
            <div 
                v-if="big && undertext" 
                class="article__undertext"
            >
                {{ undertext }}
            </div>
        </div>
    </div>
</template>

<style>
.block--style--info{
    justify-content: unset;
    box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.08);
    padding: 30px;
    border-radius: 30px;
    gap: 20px;
}

.block--style--info--big{
    gap: 60px;
}
</style>