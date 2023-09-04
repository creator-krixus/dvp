<template>
  <div class="community">
    <Cover />
    <h1>Community</h1>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Cover from '@/components/Cover.vue'

  export default {
    name: 'Community',
    components: {
      Cover
    }
  }
</script>
<style lang="scss">
.community{
    background: rgb(243, 241, 241);
}
</style>