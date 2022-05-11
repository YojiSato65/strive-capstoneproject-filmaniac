import { MOVIE_ADD_TO_FAVS, MOVIE_REMOVE_FROM_FAVS, MOVIE_SELECT, GET_MOVIE_LOADING } from '../actions'
import { initialState } from '../store'

const movieReducer = (state = initialState.movie, action) =>
{
    switch (action.type)
    {
        case MOVIE_ADD_TO_FAVS:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case MOVIE_REMOVE_FROM_FAVS:
            return {
                ...state,
                favorites: state.favorites.filter(
                    ({ id }) => id !== action.payload.id
                ),
            }

        case MOVIE_SELECT:
            return {
                ...state,
                selectedMovie: action.payload
            }

        case GET_MOVIE_LOADING:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}

export default movieReducer