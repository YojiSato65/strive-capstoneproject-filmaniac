import { MOVIE_ADD_TO_FAVS, MOVIE_REMOVE_FROM_FAVS, MOVIE_SELECT } from '../actions'
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
                    (id) => id !== action.payload
                ),
            }

        case MOVIE_SELECT:
            return {
                ...state,
                selectedMovie: action.payload
            }

        default:
            return state
    }
}

export default movieReducer