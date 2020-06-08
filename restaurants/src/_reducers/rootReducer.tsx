import { combineReducers, Reducer } from "redux";
import { RestaurantsAction } from "../_types_/actions/restaurantsAction";
import { RootReducerState } from "../_types_/reducers/RootReducer";
import restaurantsReducer from "./restaurants.reducers";

const rootReducer: Reducer<
  RootReducerState | RestaurantsAction
> = combineReducers({
  restaurantsReducer,
});

export default rootReducer;
