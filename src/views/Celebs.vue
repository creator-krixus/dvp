<template>
  <div class="celebs">
    <Cover />
    <h1>Celebs</h1>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Cover from '@/components/Cover.vue'

  export default {
    name: 'Celebs',
    components: {
      Cover
    }
  }
</script>
<style lang="scss">
.celebs{
    background: rgb(243, 241, 241);
}
</style>