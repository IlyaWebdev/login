<template lang="pug">
  div.open-modal
    button.show-modal-button(@click="showModal") login
    login(ref="modal")
</template>

<script>
import login from "./vue/login.vue"

export default {
    name: "App",
    components: {
        login
    },
    methods: {
        showModal: function() {
            this.$refs.modal.show=true
        },
    },
}
</script>

<style lang="scss" scoped>
</style>