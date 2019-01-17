import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      film: [],
      error: false,
      id: '',
      title: 'marvel',
      genre: '',
      year: '',
      page: 1,
      leng: false
    },
    mutations: {
      getFilm (state) {
        return axios('https://www.omdbapi.com/?apikey=9cdf600&s='+state.title+'&type='+state.genre+'&y='+state.year+'&page='+state.page)
        .then(({ data }) => {
          if(data.Response != "False"){
            state.error = false,
            state.leng = data.Search.length
            data.Search.map((item, key) => {
              if(item.Poster == "N/A")
                item.Poster = "/no_image.jpg"
              state.film.push(item)
            })
          }
          else if(state.page < 2){
            state.error = data.Error
            state.leng = 0
          }
          else
            state.leng = 0
        })
      },
      resetFilm (state) {
        state.film = [];
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