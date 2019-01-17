import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      films: [],
      error: false,
      loading: false,
      id: '',
      title: 'marvel',
      genre: '',
      genres: {
        '': 'All Genre' ,
        'movie': 'Movie',
        'series': 'Series',
        'episode': 'Episode',
        'games': 'Games'
      },
      year: '',
      page: 1,
      leng: false
    },
    mutations: {
      getFilms (state) {
        state.loading = true
        axios('https://www.omdbapi.com/?apikey=9cdf600&s='+state.title+'&type='+state.genre+'&y='+state.year+'&page='+state.page)
        .then(({ data }) => {
          if(data.Response != "False"){
            state.error = false,
            state.leng = data.Search.length
            data.Search.map((item, key) => {
              state.films.push(item)
            })
          }
          else{
            if(state.page < 2){
              state.error = data.Error
            }
            state.leng = 0
          }
          state.loading = false
        })
      },
      resetFilm (state) {
        state.films = [];
      },
      setId (state, data) {
        state.id = data
      },
      setTitle (state, data) {
        state.title = data
      },
      setGenre (state, data) {
        state.genre = data
      },
      setYear (state, data) {
        state.year = data
      },
      resetPage (state) {
        state.page = 1
      },
      nextPage (state) {
        state.page++
      }
    }
  })
}

export default createStore