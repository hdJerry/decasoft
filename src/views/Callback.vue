<template>
  <div class="callback">Callback</div>
</template>

<script>
export default {
  name: 'callback',
  data(){
    return{

    }
  },
  mounted() {
    this.$auth.handleAuthentication().then((data) => {


      this.$router.push({ name: 'home' })
    })
  }
}
</script>
