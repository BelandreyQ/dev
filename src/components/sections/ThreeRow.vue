<script>
import InfoBlock from '../ui/InfoBlock.vue';

export default {
    name: "ThreeRow",
    components:{
        InfoBlock
    }
}
</script>

<template>
    <div class="block block--style--margins">
        <div class="article">
            <img src="@/assets/images/plus.svg" alt="Заявление" class="article__plus">
            <h2 class="article__title">Требования для получения льготного кредита</h2>
        </div>
        <div class="grid">
            <InfoBlock
                text="Постановка на учет в качестве налогоплательщика на территории Москвы"
            >
                <img src="@/assets/images/block-five-request-icon.svg" alt="Заявление" class="block__image">
            </InfoBlock>
            <InfoBlock
                text="Наличие статуса участника Московского инновационного кластера"
            >
                <img src="@/assets/images/block-five-member-icon.svg" alt="Статус участника" class="block__image">
            </InfoBlock>
            <InfoBlock
                text="Наличие статуса субъекта малого и среднего предпринимательства"
            >
                <img src="@/assets/images/block-five-priority-icon.svg" alt="Статус субъекта" class="block__image">
            </InfoBlock>
            <InfoBlock
                text="Продолжительность регистрации в качестве юрлица или ИП составляет не менее 12 месяцев до дня подачи заявки"
            >
                <img src="@/assets/images/block-five-date-icon.svg" alt="Календарный год" class="block__image">
            </InfoBlock>
            <InfoBlock
                text="Площадка в Москве (земельный участок, объект капитального строительства в собственности/аренде), на которой планируется реализация инвестиционного проекта"
            >
                <img src="@/assets/images/block-five-city-icon.svg" alt="Площадка на карте" class="block__image">
            </InfoBlock>
            <InfoBlock
                text="Положительные значения чистых активов и чистой прибыли за последний отчетный период"
            >
                <img src="@/assets/images/block-five-investor-icon.svg" alt="Рост активов" class="block__image">
            </InfoBlock>
            <InfoBlock
                text="Доля расходов на оборотные средства при реализации проекта не более 30% (закупка сырья, материалов)от суммы кредита"
            >
                <img src="@/assets/images/block-five-graph-icon.svg" alt="Расход оборотных средств" class="block__image">
            </InfoBlock>
            <InfoBlock
                text="Доля собственных средств в проекте не менее 25% от суммы бюджета проекта"
            >
                <img src="@/assets/images/block-five-money-icon.svg" alt="Прибыль" class="block__image">
            </InfoBlock>
            <InfoBlock
                text="Готовность реализации проекта на территории Москвы"
            >
                <img src="@/assets/images/block-five-kremlin-icon.svg" alt="Кремль" class="block__image">
            </InfoBlock>
        </div>
    </div>
</template>

<style>

</style>