export const MOVIE_ADD_TO_FAVS = 'MOVIE_ADD_TO_FAVS'
export const MOVIE_REMOVE_FROM_FAVS = 'MOVIE_REMOVE_FROM_FAVS'
export const MOVIE_SELECT = 'MOVIE_SELECT'

export const PERSON_ADD_TO_FAVS = 'PERSON_ADD_TO_FAVS'
export const PERSON_REMOVE_FROM_FAVS = 'PERSON_REMOVE_FROM_FAVS'
export const PERSON_SELECT = 'PERSON_SELECT'

export const movieAddToFavsAction = (movie) => ({
    type: MOVIE_ADD_TO_FAVS,
    payload: movie
})

export const movieRemoveFromFavsAction = (movie) => ({
    type: MOVIE_REMOVE_FROM_FAVS,
    payload: movie,
})

export const movieSelectAction = (movie) => ({
    type: MOVIE_SELECT,
    payload: movie,
})

export const personAddToFavsAction = (id) => ({
    type: PERSON_ADD_TO_FAVS,
    payload: id
})

export const personRemoveFromFavsAction = (id) => ({
    type: PERSON_REMOVE_FROM_FAVS,
    payload: id,
})

export const personSelectAction = (person) => ({
    type: PERSON_SELECT,
    payload: person,
})