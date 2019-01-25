import Vuex from 'vuex'
import axios from '~/plugins/axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      films: [],
      error: false,
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
      page: 0,
      leng: false,
      film: false,
      load: true
    },
    mutations: {
      async getFilms (state) {
        state.load = true
        state.page++
        try{
          const items = await axios({ params: {
              s: state.title,
              type: state.genre,
              y: state.year,
              page: state.page
          }})
          if(items.data.Response != "False"){
            state.films = state.films.concat(items.data.Search)
            state.error = false,
            state.leng = items.data.Search.length
          }
          else{
            if(state.page < 1){
              state.error = items.data.Error
            }
            state.leng = 0
          }
        }catch (error) {
          state.error = error.response.data.Error
          state.leng = 0
        }
        state.load = false
      },
      resetFilms (state) {
        state.films = [];
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
        state.page = 0
      },
      async setFilm (state, data) {
        try{
          const item = await axios({ params: {
            i: data
          }})
          state.film = item.data
        }catch (error) {
          state.error = error.response.data.Error
        }
      },
      resetFilm (state) {
        state.film = false
      }
    }
  })
}

export default createStore