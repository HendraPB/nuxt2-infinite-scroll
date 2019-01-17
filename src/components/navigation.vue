<template>
  <header class="header">
    <figure class="logo"><a href="#" @click="goHome('', true)"><img src="/logo.png" alt="Logo"></a></figure>
    <nav class="menu">
      <ul>
        <li><a href="#" class="home" @click="goHome('', true)">Home</a></li>
        <li class="mobsearch">
          <div class="mobform">
            <input type="text" class="mobsearchfield" placeholder="Search" v-model="mobSearch" @change="goHome(false)">
            <input type="text" class="mobsearchfield" placeholder="Year" v-model="mobYear" @change="goHome(false)">
          </div>
        </li>
        <li><a>{{ genre }}</a>
          <ul>
            <li><a href="#" @click="goHome('')">All Genre</a></li>
            <li><a href="#" @click="goHome('movie')">Movie</a></li>
            <li><a href="#" @click="goHome('series')">Series</a></li>
            <li><a href="#" @click="goHome('episode')">Episode</a></li>
            <li><a href="#" @click="goHome('games')">Games</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="search">
      <input type="submit" value="" class="searchsubmit">
      <input type="text" class="searchfield" placeholder="Search" v-model="search" @change="goHome(false)">
      <input type="submit" value="" class="searchsubmit">
      <input type="text" class="searchfield" placeholder="Year" v-model="year" @change="goHome(false)">
    </div>
    <div class="toggle"><img src="/menu.svg"></div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      search: this.$store.state.title,
      year: this.$store.state.year,
      mobSearch: this.$store.state.title,
      mobYear: this.$store.state.year
    }
  },
  computed: {
    genre: function () {
      return (this.$store.state.genre == '' ? 'All Genre' : this.$store.state.genre.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      ))
    }
  },
  watch: {
    search: function () {
      this.$store.commit('setTitle', this.search)
      this.mobSearch = this.search
    },
    year: function () {
      this.$store.commit('setYear', this.year)
      this.mobYear = this.year
    },
    mobSearch: function () {
      this.$store.commit('setTitle', this.search)
      this.search = this.mobSearch
    },
    mobYear: function () {
      this.$store.commit('setYear', this.year)
      this.year = this.mobYear
    }
  },
  methods : {
    goHome (genre, reset = false) {
      if(reset){
        this.$store.commit('setTitle', 'marvel')
        this.$store.commit('setYear', '')
      }
      if(genre !== false)
        this.$store.commit('setGenre', genre)
      this.$store.commit('resetFilm')
      if($nuxt.$route.path == '/'){
        this.$store.commit('resetPage')
        this.$store.commit('getFilm')
      }
      this.$router.replace({ 'path' : '/' })
    }
  }
}
</script>
<style scope>
  .home {
    width: 100%;
  }
</style>