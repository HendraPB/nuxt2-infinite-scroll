<template>
  <header class="header">
    <figure class="logo"><a href="#" @click="serachNew('', true)"><img src="/logo.png" alt="Logo"></a></figure>
    <nav class="menu">
      <ul>
        <li><a href="#" class="home" @click="serachNew('', true)">Home</a></li>
        <li class="mobsearch">
          <div class="mobform">
            <input type="text" class="mobsearchfield" placeholder="Search" v-model="search" @change="serachNew(false)">
            <input type="text" class="mobsearchfield" placeholder="Year" v-model="year" @change="serachNew(false)">
          </div>
        </li>
        <li><a>{{ genre }}</a>
          <ul>
            <li><a href="#" v-for="(item, index) in genres" @click="serachNew(index)">{{ item }}</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="search">
      <input type="submit" value="" class="searchsubmit">
      <input type="text" class="searchfield" placeholder="Search" v-model="search" @change="serachNew(false)">
      <input type="submit" value="" class="searchsubmit">
      <input type="text" class="searchfield" placeholder="Year" v-model="year" @change="serachNew(false)">
    </div>
    <div class="toggle"><img src="/menu.svg"></div>
  </header>
</template>

<script>
export default {
  computed: {
    genre () {
      return (this.$store.state.genre == '' ? 'All Genre' : this.$store.state.genre.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      ))
    },
    search: {
      set(title) {
        this.$store.commit('setTitle', title)
      },
      get() {
        return this.$store.state.title
      }
    },
    year: {
      set(year) {
        this.$store.commit('setYear', year)
      },
      get() {
        return this.$store.state.year
      }
    },
    genres () {
      return this.$store.state.genres
    }
  },
  methods : {
    serachNew (genre, reset = false) {
      if(reset){
        this.search = 'marvel'
        this.year = ''
      }
      if(genre !== false)
        this.$store.commit('setGenre', genre)
      this.$store.commit('resetFilm')
      this.$store.commit('resetPage')
      if($nuxt.$route.path == '/'){
        this.$store.commit('getFilms')
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