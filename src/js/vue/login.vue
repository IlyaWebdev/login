<template lang="pug">
  div(v-if="show").login-window-background
    div.login-window
      div.login-window__content
        div.login-header
          div.login-exit
            button.exit-btn(@click="close") x
        div.login-body
          div.login-username
            input.username
          div.login-password
            input.password
        div.login-footer
          div.entry
            button.entry Entry
          div.registration
            button.registration Registration
</template>

<script>
export default {
    name: "modalWindow",
    
    data: function(){
        return {
            show: false,
        }
    },
    
    methods: {
        close: function(){
            this.show = false
        },
    }
}
</script>

<style lang="scss" scoped>
  .login-window-background{
    position: absolute;
    height: 100%;
    width: 100%;

    left:0;
    top:0;
    background-color: rgba(black, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-window{
    height: 600px;
    width: 600px;
    background-color: skyblue;
  }
  .login-window__content{
    display: flex;
    flex-direction: column;
  }
  .login-header{
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: coral;
    display: flex;
    justify-content: flex-end;
  }
</style>