import { Restaurants } from "../_types_/Restaurants/Restaurants";

export function sortByProperty(property: string) {
  if (property === "shortStatusName") {
    return (a: Restaurants, b: Restaurants) => {
      if (a.sortingValues[property] > b.sortingValues[property]) {
        return 1;
      } else if (a.sortingValues[property] < b.sortingValues[property]) {
        return -1;
      }

      return 0;
    };
  } else {
    return (a: Restaurants, b: Restaurants) => {
      const firstComparisonValue =
        property === "favorite" ? a[property] : a.sortingValues[property];
      const secondComparisonValue =
        property === "favorite" ? b[property] : b.sortingValues[property];
      if (
        a.sortingValues.shortStatusName > b.sortingValues.shortStatusName ||
        firstComparisonValue < secondComparisonValue
      ) {
        return 1;
      } else if (
        a.sortingValues.shortStatusName < b.sortingValues.shortStatusName ||
        firstComparisonValue > secondComparisonValue
      ) {
        return -1;
      }

      return 0;
    };
  }
}
