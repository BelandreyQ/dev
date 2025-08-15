<script setup>
defineProps({
    isGreen: {type: Boolean, default: false},
    stepNumber: {type: String, required: true},
    stepTitle: {type: String, default: true},
    stepDesk1: {type: String, default: ""},
    stepDesk2: {type: String, default: ""},
    stepDesk3: {type: String, default: ""}
});
</script>

<template>
    <div class="grid grid--style--step" :class="{
        'grid--style--step--two' :!isGreen,
        'grid--style--step--one' :isGreen
    }">
        <div class="block">
            <div class="explanation explanation--style--step">
                <div class="article">
                    <div class="article__image article__image--style--number article__image--style--step--one">{{stepNumber}}</div>
                </div>
                <div class="article">
                    <div class="article__title article__title--text--extra--small">{{stepTitle}}</div>
                </div>
            </div>
            <div class="article article--align--center--mobile">
                <div class="article__image article__image--style--white">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div>
            <div v-if="stepDesk1"
                class="explanation explanation--style--checkmark">
                <img src="@/assets/images/step-block-check-mark.svg" alt="Галочка">
                <div class="article">
                    <div class="article__body">{{stepDesk1}}</div>
                </div>
            </div>
            <div v-if="stepDesk2"
                class="explanation explanation--style--checkmark">
                <img src="@/assets/images/step-block-check-mark.svg" alt="Галочка">
                <div class="article">
                    <div class="article__body">{{stepDesk2}}</div>
                </div>
            </div>
            <div v-if="stepDesk3"
                class="explanation explanation--style--checkmark">
                <img src="@/assets/images/step-block-check-mark.svg" alt="Галочка">
                <div class="article">
                    <div class="article__body">{{stepDesk3}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

/* Grid */

.grid--style--step{
    grid-template-columns: 50% 50%;
    background-repeat: no-repeat;
    background-position: right center;
    padding: 40px;
    gap: 20px;
    border-radius: 60px;
}

@media(max-width:768px){
    .grid--style--step{
        grid-template-columns: auto;
        background-position: center;
    }
}

.grid--style--step--one{
    background-color: #D8FDDB;
    background-image: url(@/assets/images/block-six-texture-one.svg);
}

@media(max-width: 768px){
    .grid--style--step--one{
        background-image: url(@/assets/images/block-six-texture-one-mobile.svg);
    }
}

.grid--style--step--two{
    background-color: #BEE7FF;
    background-image: url(@/assets/images/block-six-texture-two.svg);
}

@media(max-width: 768px){
    .grid--style--step--two{
        background-image: url(@/assets/images/block-six-texture-two-mobile.svg);
    }
}

/* Article */

@media(max-width:768px){
    .article--align--center--mobile{
        justify-items: center;
    }
}
</style>