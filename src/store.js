import {createStore} from 'redux'
import counterReducer from './Services/counterReducer'
const store = createStore(counterReducer);
export default store;