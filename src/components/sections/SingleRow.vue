<script>
import InfoBlock from '@/components/ui/InfoBlock.vue';

export default{
    name: "SingleRow",
    components:{
        InfoBlock
    }
}
</script>

<template>
    <div class="block block--style--margins">
            <div class="article">
                <img src="@/assets/images/plus.svg" alt="" class="article__plus">
                <h2 class="article__title">Если вы не состоите в Реестре стартапов и технологических компаний, то льготный кредит могут получить:</h2>
            </div>
            <div class="grid">
                <InfoBlock
                    text="Компании, занимающиеся обрабатывающим производством"
                    subtext="ОВЭД 10-33*"
                    undertext="* за исключением ОВЭД 12 — производство табачных изделий"
                    big
                >
                    <img src="@/assets/images/block-four-metall-icon.svg" alt="Обработка металла" class="block__image">
                </InfoBlock>
                <InfoBlock
                    text="Компании из сферы информации и связи"
                    subtext="ОВЭД 58-63"
                    big
                >
                    <img src="@/assets/images/block-four-tower-icon.svg" alt="Вышка связи" class="block__image">
                </InfoBlock>
                <InfoBlock
                    text="Компании, занимающиеся профессиональной, научной и технической деятельностью"
                    subtext="ОВЭД 71, 72, 74"
                    big
                >
                    <img src="@/assets/images/block-four-freelance-icon.svg" alt="Офисный работник" class="block__image">
                </InfoBlock>
            </div>
        </div>
</template>

<style>
    .block--style--info--big{
        gap: 60px;
    }
</style>