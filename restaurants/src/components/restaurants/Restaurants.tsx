import * as React from "react";
import { connect } from "react-redux";
import { restaurantsAction } from "../../_actions/restaurants.action";
import {
  RestaurantsData,
  Restaurants,
} from "../../_types_/Restaurants/Restaurants";
import { RootReducerState } from "../../_types_/reducers/RootReducer";
import InfoContainer from "./InfoContainer";
import SearchAndFilter from "./SearchAndFilter";
import Footer from "../common/Footer";
import Nav from "../common/Nav";
import { sortByProperty } from "../../utils/utils";

interface ReducerType {
  RestaurantsData: RestaurantsData;
}

export interface Props {
  getRestaurantsData: (para: string) => Promise<any>;
  searchRestaurants: (para: string, para2: Restaurants[]) => void;
  status: string;
}

type PropertyWithHistory = Props & ReducerType;

class RestaurantComponent extends React.Component<PropertyWithHistory> {
  state = {
    data: [],
    selectedFilter: "shortStatusName",
  };

  componentDidMount() {
    this.props.getRestaurantsData("restaurants").then(() => {
      const data = [...this.props.RestaurantsData.restaurantData];
      const sortedRestaurantsData = data.sort(
        sortByProperty("shortStatusName")
      );
      this.setState({ data: sortedRestaurantsData });
    });
  }

  searchRestaurants = (searchTerm: string): void => {
    if (searchTerm.length > 0) {
      const stateData = [...this.state.data];
      const searchResult = stateData.filter(
        (el: Restaurants) =>
          el.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
      this.setState({ data: searchResult });
    } else {
      const previousSortedData = [...this.props.RestaurantsData.restaurantData];
      this.setState({
        data: previousSortedData.sort(sortByProperty("shortStatusName")),
        selectedFilter: "shortStatusName",
      });
    }
  };

  filterRestaurants = (filterValue: string): void => {
    this.setState({ selectedFilter: filterValue });
    this.state.data.sort(sortByProperty(filterValue));
  };

  doFavorite = (restaurantId: number) => {
    const restaurantData = [...this.state.data];
    restaurantData.filter((el: Restaurants) => {
      if (el.id === restaurantId) {
        el.favorite = true;
      }
    });
    this.setState({ data: restaurantData });
  };

  render() {
    const { status } = this.props;

    if (status === "LOADING") {
      return <div>Loading......</div>;
    }

    return (
      <div className="page-container">
        <Nav />
        <SearchAndFilter
          searchRestaurants={this.searchRestaurants}
          filterRestaurants={this.filterRestaurants}
          selectedFilter={this.state.selectedFilter}
        />
        <InfoContainer
          restaurantData={this.state.data}
          selectedFilter={this.state.selectedFilter}
          doFavorite={this.doFavorite}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: RootReducerState): ReducerType => ({
  RestaurantsData: state.restaurantsReducer,
});

export default connect(
  mapStateToProps,
  Object.assign({}, restaurantsAction)
)(RestaurantComponent);
