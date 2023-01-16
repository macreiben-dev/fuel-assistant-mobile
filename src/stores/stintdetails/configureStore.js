import { configureStore, combineReducers } from 'redux';
import laptimeReducer from './reducers/laptimeReducer';

const rootReducer = combineReducers(
    { laptime: laptimeReducer }
);
const setupStore = () => {
    return configureStore(rootReducer);
}

export default setupStore;