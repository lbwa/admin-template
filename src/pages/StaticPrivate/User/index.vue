<template functional>
  <div class="user">
    <h3>{{ parent.$t('pages.realTimeVerification') }}</h3>
    <p>
      {{ parent.$t('pages.currentRoute') }}
      <strong>{{ parent.$route.path }}</strong
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style lang="sass" scoped>
.user
  +flex-center
  height: 100%
</style>
