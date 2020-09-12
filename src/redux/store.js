import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import charReducer, { getCharactersAction } from './charsDuck';
import locReducer, { getLocationsAction } from './locationsDuck';
import epReducer, { getEpisodesAction } from './episodesDuck';
import thunk from 'redux-thunk';


let rootReducer = combineReducers({
    dataChar: charReducer,
    dataLoc: locReducer,
    dataEp: epReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )

    getCharactersAction()(store.dispatch, store.getState)
    getLocationsAction()(store.dispatch, store.getState)
    getEpisodesAction()(store.dispatch, store.getState)

    return store
}