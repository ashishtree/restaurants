import { Restaurants } from "../Restaurants/Restaurants";
import { BaseAction } from "./BaseAction";

export interface RestaurantsAction extends BaseAction {
  payload: Restaurants[];
}
