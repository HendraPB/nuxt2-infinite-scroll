<template>
  <main class="content">
    <div class="single">
      <section class="movie" v-if="item">
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
  computed: {
    item () {
      return this.$store.state.film
    }
  }
}
</script>