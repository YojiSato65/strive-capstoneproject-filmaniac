import { PERSON_ADD_TO_FAVS, PERSON_REMOVE_FROM_FAVS, PERSON_SELECT } from '../actions'
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
                    ({ id }) => id !== action.payload.id
                ),
            }

        case PERSON_SELECT:
            return {
                ...state,
                selectedPerson: action.payload
            }

        default:
            return state
    }
}

export default personReducer