<template>
  <div class="news">
    <Cover />
    <h1>News</h1>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Cover from '@/components/Cover.vue'

  export default {
    name: 'News',
    components: {
      Cover
    }
  }
</script>
<style lang="scss">
.news{
    background: rgb(243, 241, 241);
}
</style>