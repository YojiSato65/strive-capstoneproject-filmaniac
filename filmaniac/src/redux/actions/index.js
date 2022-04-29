export const MOVIE_ADD_TO_FAVS = 'MOVIE_ADD_TO_FAVS'
export const MOVIE_REMOVE_FROM_FAVS = 'MOVIE_REMOVE_FROM_FAVS'
export const GET_MOVIES = 'GET_MOVIES'
export const PERSON_ADD_TO_FAVS = 'PERSON_ADD_TO_FAVS'
export const PERSON_REMOVE_FROM_FAVS = 'PERSON_REMOVE_FROM_FAVS'

export const movieAddToFavsAction = (id) => ({
    type: MOVIE_ADD_TO_FAVS,
    payload: id
})

export const moveiRemoveFromFavsAction = (id) => ({
    type: MOVIE_REMOVE_FROM_FAVS,
    payload: id,
})

export const personAddToFavsAction = (id) => ({
    type: PERSON_ADD_TO_FAVS,
    payload: id
})

export const personRemoveFromFavsAction = (id) => ({
    type: PERSON_REMOVE_FROM_FAVS,
    payload: id,
})
