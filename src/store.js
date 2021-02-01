import { compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, compose());

export default store;
