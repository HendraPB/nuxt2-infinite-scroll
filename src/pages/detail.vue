<template>
  <main class="content">
    <div class="single">
      <section class="movie">
        <img v-lazy="data.Poster">
        <ul>
          <li>{{ data.Title }}</li>
          <li>{{ data.Plot }}</li>
          <li>{{ data.Genre }}</li>
          <li>{{ data.Runtime }}</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    axios('https://www.omdbapi.com/?apikey=9cdf600&i='+this.$store.state.id)
    .then(({ data }) => {
      this.data = data
    })
  }
}
</script>