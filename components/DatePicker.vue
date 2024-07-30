<template>
    <v-menu v-model="isMenuOpen" :close-on-content-click="true">
        <template v-slot:activator="{ props }">
            <v-text-field :label="label" :model-value="modelValue" readonly v-bind="props"
            variant="solo" append-inner-icon="mdi-calendar"></v-text-field>
        </template>

        <v-date-picker v-model="selectedDate" hide-actions title="" :color="color">

        </v-date-picker>
    </v-menu>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from "vue";
import { useDate } from "vuetify";
import moment from "moment";

const { label, color, modelValue } = defineProps([
    "label",
    "color",
    "modelValue",
]);
const date = useDate();

const emit = defineEmits("update:modelValue");

const isMenuOpen = ref(false);
const selectedDate = ref([new Date(modelValue)]);

const formattedDate = computed(() => {
    const formated = date.format(selectedDate.value, "keyboardDate");
    const fom = moment(formated).format("YYYY-MM-DD");
    return fom;
});

watch(modelValue, (newDate) => {
    selectedDate.value = newDate;
});

watch(selectedDate, () => {
    emit("update:modelValue", formattedDate.value);
});
</script>
<style>
.v-overlay__content:has(> .v-date-picker) {
    min-width: 20 !important;
}

.v-picker-title {
    padding: 0 !important;
}
</style>