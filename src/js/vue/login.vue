<template lang="pug">
  div.auth-mode
    div(v-if="show" @click="close").login-window-background
    form.login-window(v-if="show" action="" method="")
      div.login-window__content
        div.login-header
          div.login-exit
            button.exit-btn(@click="close") x
        div.login-body
          div.login-username
            label(for="mail") E-mail:
            input(type="email" id="mail" name="user_email")
          div.login-password
            label(for="pass") Password: 
            input(type="password" id="pass" name="password")
        div.login-footer
          div.entry
            button(class="" type="") Entry
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
  }
  .login-window{
    position: relative;
    /* Center the form on the page */
    margin: 0 auto;
    width: 500px;
    /* Form outline */
    padding: 1em;
    border: 1px solid #CCC;
    border-radius: 1em;

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