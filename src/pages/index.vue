<template>
  <main class="content">
      <section class="centered">
        <h3 v-if="error">{{ error }}</h3>
        <h3 v-else :hidden="genre == ''">{{ genre }}</h3>
        <div class="movies">
          <div class="mov" v-for="item in films" v-bind:key="item.key" @click="openDetail(item.imdbID)">
            <a href="#">
              <img :src="item.Poster">
              <h2 class="movietitle">{{ item.Title }}</h2>
            </a>
          </div>
        </div>
      </section>
    </main>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      first: 0,
      last: 0
    }
  },
  mounted () {
    this.$store.commit('resetPage')
    this.$store.commit('getFilm')
    this.first = this.last = this.$store.state.film.length
    this.scroll(this.$store.state.film)
  },
  computed: {
    films () {
      return this.$store.state.film
    },
    error () {
      return this.$store.state.error
    },
    genre () {
      return this.$store.state.genre.replace(
          /\w\S*/g,
          function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      )
    }
  },
  methods : {
    scroll (film) {
      window.onscroll = () => {
        if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight && this.first == this.last) {
          this.$store.commit('nextPage');
          this.$store.commit('getFilm');
          this.last = this.$store.state.film.length
        }
      };
    },
    openDetail (id) {
      this.$store.commit('setId', id)
      this.$router.replace({ 'path': '/detail' })
    }
  }, 
}
</script>