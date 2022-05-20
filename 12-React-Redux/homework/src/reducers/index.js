import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
} from "../actions";

const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_MOVIES) {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }

  if (action.type === GET_MOVIE_DETAIL) {
      return {
          ...state,
          movieDetail: action.payload.Detail
      }
  }

  if (action.type === ADD_MOVIE_FAVORITE) {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.concat(action.payload),
    };
  }

  if (action.type === REMOVE_MOVIE_FAVORITE) {
      return {
          ...state,
          moviesFavourites: state //tengo que filtrar/borrar la que tiene el titulo/id que elijo. Podria ser por key.
      }
  }

  return state;
}

export default rootReducer;
