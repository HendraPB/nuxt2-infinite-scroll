<template>
  <main class="content">
    <section class="centered">
      <h3 v-if="genre != ''">{{ genre }}</h3>
      <h4 v-if="error">{{ error }}</h4>
      <div class="movies">
        <div class="mov" v-for="item in films" @click="openDetail(item.imdbID)">
          <a href="#">
            <img v-lazy="item.Poster">
            <h2 class="movietitle">{{ item.Title }}</h2>
          </a>
        </div>
      </div>
      <div v-if="load" class="center">
        <img src="loading.gif">
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    genre () {
      return this.$store.state.genre.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      )
    },
    films () {
      return this.$store.state.films
    },
    error () {
      return this.$store.state.error
    },
    leng () {
      return this.$store.state.leng
    },
    load () {
      return this.$store.state.load
    }
  },
  mounted () {
    this.$store.commit('getFilms')
    this.scroll()
  },
  methods : {
    scroll () {
      window.onscroll = () => {
        if ((document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 1 && this.leng > 9 && !this.load) || this.leng === false) {
          this.$store.commit('getFilms')
        }
      };
    },
    openDetail (id) {
      this.$store.commit('resetFilm')
      this.$store.commit('setFilm', id)
      this.$router.replace({ 'path': '/detail' })
    }
  }, 
}
</script>
<style>
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