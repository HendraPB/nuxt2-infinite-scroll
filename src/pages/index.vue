<template>
  <main class="content">
      <section class="centered">
        <h3 v-if="genre != ''">{{ genre }}</h3>
        <h4 v-if="error">{{ error }}</h4>
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
  mounted () {
    this.$store.commit('resetPage')
    this.$store.commit('getFilm')
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
        if ((document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 1 && this.$store.state.leng > 9) || !this.$store.state.leng) {
          this.$store.commit('nextPage')
          this.$store.commit('getFilm')
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
<style scoped>
  h4 {
    padding: 20px 10px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 14px;
  }
  h3 {
    display: none;
  }
  @media (max-width: 1024px){
    h3 {
      display: block;
    }
    h4 {
      text-align: center;
    }
  }
</style>