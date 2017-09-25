import { createLogicMiddleware } from 'redux-logic'
import { createStore, applyMiddleware } from 'redux'
import 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import rootReducer from './rootReducer'
import logic from './rootLogic'

const dependencies = {
        httpClient: ajax
}

const logicMiddleware = createLogicMiddleware(logic, dependencies)

const middleware = applyMiddleware(logicMiddleware)

export default function configureStore() {
        const store = createStore(rootReducer, middleware)

        return store
}

