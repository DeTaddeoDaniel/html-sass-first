
<template>
    <div class="alert" v-text="message"></div>
</template>

<script>
export default {
    data() {
        return {
            message: 'componente vue alert passato corretamente.'
        };
    }
};
</script>

<style>
.alert {
    background: green;
}
</style>