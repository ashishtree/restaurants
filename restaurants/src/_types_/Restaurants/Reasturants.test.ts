import { Restaurants } from "./Restaurants";
import { SortingValues } from "./Restaurants";
import restaurantData from "../../__mockData__/mockRestaurants.json";

it('has a id of "TypeScript"', () => {
  const state: Restaurants = restaurantData[0];
  expect(state.id).toEqual(1);
});

it('has a name of "TypeScript"', () => {
  const state: Restaurants = restaurantData[0];
  expect(state.name).toEqual("Tanoshii Sushi");
});

it('has a status of "TypeScript"', () => {
  const state: Restaurants = restaurantData[0];
  expect(state.status).toEqual("open");
});

it('has a favorite of "TypeScript"', () => {
  const state: Restaurants = restaurantData[0];
  expect(state.favorite).toEqual(false);
});

it('has a image of "TypeScript"', () => {
  const state: Restaurants = restaurantData[0];
  expect(state.image).toEqual(
    "http://localhost:3006/images/restaurant_logo.jpg"
  );
});

it('has a sortingValues of "TypeScript"', () => {
  const state: Restaurants = restaurantData[0];
  expect(state.sortingValues).toEqual({
    shortStatusName: "oa",
    bestMatch: 0.0,
    newest: 96.0,
    ratingAverage: 4.5,
    distance: 1190,
    popularity: 17.0,
    averageProductPrice: 1536,
    deliveryCosts: 200,
    minCost: 1000,
    topRestaurant: 20234.5,
  });
});

it('has a shortStatusName of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.shortStatusName).toEqual("oa");
});

it('has a bestMatch of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.bestMatch).toEqual(0.0);
});

it('has a newest of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.newest).toEqual(96.0);
});

it('has a ratingAverage of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.ratingAverage).toEqual(4.5);
});

it('has a distance of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.distance).toEqual(1190);
});

it('has a popularity of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.popularity).toEqual(17.0);
});

it('has a averageProductPrice of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.averageProductPrice).toEqual(1536);
});

it('has a deliveryCosts of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.deliveryCosts).toEqual(200);
});

it('has a minCost of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.minCost).toEqual(1000);
});

it('has a topRestaurant of "TypeScript"', () => {
  const state: SortingValues = restaurantData[0].sortingValues;
  expect(state.topRestaurant).toEqual(20234.5);
});
