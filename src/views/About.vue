<template>
  <div class="home">
    <Cover />
    <h1>User</h1>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Cover from '@/components/Cover.vue'

  export default {
    name: 'About',
    components: {
      Cover
    }
  }
</script>
<style lang="scss">
</style>