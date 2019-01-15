<template>
  <header class="header">
    <figure class="logo"><a href="#" @click="goHome('')"><img src="/logo.png" alt="Logo"></a></figure>
    <nav class="menu">
      <ul>
        <li><a href="#" @click="goHome('')">Home</a></li>
        <li><a>Genres</a>
          <ul>
            <li><a href="#" @click="goHome('movie')">Movie</a></li>
            <li><a href="#" @click="goHome('series')">Series</a></li>
            <li><a href="#" @click="goHome('episode')">Episode</a></li>
            <li><a href="#" @click="goHome('games')">Games</a></li>
          </ul>
        </li>
        <li class="mobsearch">
          <div class="mobform">
            <input type="text" class="mobsearchfield" placeholder="Search" v-model="mobSearch" @change="goHome(false)">
            <input type="text" class="mobsearchfield" placeholder="Year" v-model="mobYear" @change="goHome(false)">
          </div>
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
    goHome (genre) {
      if(genre !== false)
        this.$store.commit('setGenre', genre)
      this.$store.commit('resetPage')
      this.$store.commit('resetFilm')
      this.$store.commit('getFilm')
      this.$router.replace({ 'path' : '/' })
    }
  }
}
</script>