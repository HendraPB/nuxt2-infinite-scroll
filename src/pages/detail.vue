<template>
  <main class="content">
    <div class="single">
      <section class="movie">
        <img :src="data.Poster">
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
    axios('http://www.omdbapi.com/?apikey=9cdf600&i='+this.$store.state.id)
    .then(({ data }) => {
      if(data.Poster == "N/A")
        data.Poster = "/no_image.jpg"
      this.data = data
    })
  }
}
</script>