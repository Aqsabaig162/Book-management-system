import { createStore, compose } from 'redux';
import isLoggedinReducers, { initialstate} from '../Redux/reducers/isLoggedinReducers';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const store = createStore(isLoggedinReducers, initialstate, enhancers)

export default store;
