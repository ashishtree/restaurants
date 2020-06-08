const { REACT_APP_API_HOST, NODE_ENV } = process.env;

interface Config {
  environment?: string;
  apihost?: string;
  sortingValue: {};
}

let configLoaded = false;
let config: Config;

const loadConfig = () => {
  config = {
    environment: NODE_ENV,
    apihost: REACT_APP_API_HOST,
    sortingValue: {
      "Average Product Price": "averageProductPrice",
      "Best Match": "bestMatch",
      "Delivery Cost": "deliveryCosts",
      Distance: "distance",
      Favorites: "favorite",
      Newest: "newest",
      "Opening Status": "shortStatusName",
      Popularity: "popularity",
      "Rating Average": "ratingAverage",
      "Top Restaurants": "topRestaurant",
    },
  };
  configLoaded = true;
};

const getConfig = () => {
  if (!configLoaded) {
    loadConfig();
  }
  return config;
};

export default { getConfig };
