import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import portfolios from '../scenes/Main/Content/Dashboard/Portfolios/portfolios.reducer';
import displayData from '../components/displayData/displayData.reducer';

export default combineReducers({
    displayData,
  // portfolios,
  // form: formReducer,
});
