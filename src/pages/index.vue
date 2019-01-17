<template>
  <main class="content">
    <section class="centered">
      <h3 v-if="genre != ''">{{ genre }}</h3>
      <h4 v-if="error">{{ error }}</h4>
      <div class="movies">
        <div class="mov" v-for="item in films" v-bind:key="item.key" @click="openDetail(item.imdbID)">
          <a href="#">
            <img v-lazy="item.Poster">
            <h2 class="movietitle">{{ item.Title }}</h2>
          </a>
        </div>
      </div>
      <div v-if="loading" class="center">
        <img src="loading.gif">
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('getFilms')
    this.scroll(this.films)
  },
  computed: {
    films () {
      return this.$store.state.films
    },
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
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
          this.$store.commit('getFilms')
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
  .center {
    text-align: center;
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