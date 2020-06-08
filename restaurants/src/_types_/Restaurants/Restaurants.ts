export interface SortingValues {
  shortStatusName: string;
  bestMatch: number;
  newest: number;
  ratingAverage: number;
  distance: number;
  popularity: number;
  averageProductPrice: number;
  deliveryCosts: number;
  minCost: number;
  topRestaurant: number;
}

export interface Restaurants {
  id: number;
  name: string;
  status: string;
  favorite: boolean;
  image: string;
  sortingValues: SortingValues;
}

export interface RestaurantsData {
  restaurantData: Restaurants[];
  status?: string;
}

export interface restaurantsReducerType {
  restaurantsData: RestaurantsData;
}
