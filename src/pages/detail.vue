<template>
  <main class="content">
    <div class="single">
      <h4 v-if="error">{{ error }}</h4>
      <section class="movie" v-else-if="item">
        <img v-lazy="item.Poster">
        <ul>
          <li>{{ item.Title }}</li>
          <li>{{ item.Plot }}</li>
          <li>{{ item.Genre }}</li>
          <li>{{ item.Runtime }}</li>
        </ul>
      </section>
      <div v-else class="center">
        <img src="loading.gif">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted () {
    if(this.load === true)
      this.$router.replace({ 'path' : '/' })
  },
  computed: {
    item () {
      return this.$store.state.film
    },
    error () {
      return this.$store.state.error
    },
    load () {
      return this.$store.state.load
    }
  }
}
</script>