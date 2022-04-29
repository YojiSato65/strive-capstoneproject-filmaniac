import { PERSON_ADD_TO_FAVS } from '../actions'
import { PERSON_REMOVE_FROM_FAVS } from '../actions'
import { initialState } from '../store'

const personReducer = (state = initialState.person, action) =>
{
    switch (action.type)
    {
        case PERSON_ADD_TO_FAVS:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case PERSON_REMOVE_FROM_FAVS:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (id) => id !== action.payload
                ),
            }

        default:
            return state
    }
}

export default personReducer