import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import movieReducer from '../reducers/movie'
import personReducer from '../reducers/person'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'


const composeFunctionThatAlwaysWorks =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    movie: {
        favorites: [],
        selectedMovie: null,
        isLoading: true
    },
    person: {
        favorites: [],
        selectedPerson: null,
    }
}

const bigReducer = combineReducers({
    movie: movieReducer,
    person: personReducer
})

const persistConfig = {
    key: 'root',
    storage: localStorage,
    transforms: [
        encryptTransform({
            // secretKey: process.env.REACT_APP_SECRET_KEY,
            secretKey: 'secret-key',
            onError: (error) =>
            {
                console.log(error)
            },
        }),
    ],
}

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const configureStore = createStore(
    persistedReducer,
    initialState,
    composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)





// WITHOUT PERSIST

// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import movieReducer from '../reducers/movie'
// import personReducer from '../reducers/person'

// import thunk from 'redux-thunk'
// const composeFunctionThatAlwaysWorks =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export const initialState = {
//     movie: {
//         favorites: [],
//         selectedMovie: null
//     },
//     person: {
//         favorites: [],
//         selectedPerson: null,
//     }
// }

// const bigReducer = combineReducers({
//     movie: movieReducer,
//     person: personReducer
// })

// const configureStore = createStore(
//     bigReducer,
//     initialState,
//     composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
// )

// export default configureStore