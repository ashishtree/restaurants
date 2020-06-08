import * as React from "react";
import config from "../../config/index";
import { debounce } from "lodash";

interface Props {
  searchRestaurants: (para: string) => void;
  filterRestaurants: (para: string) => void;
  selectedFilter: string;
}

class SearchAndFilter extends React.Component<Props> {
  state = {
    criteria: "",
  };

  search = debounce(() => {
    const { searchRestaurants } = this.props;
    searchRestaurants(this.state.criteria);
  }, 800);

  handleCriteriaChange = (e: { currentTarget: { value: string } }): void => {
    this.setState({ criteria: e.currentTarget.value }, () => {
      this.search();
    });
  };

  handleSelectChange = (e: { currentTarget: { value: string } }): void => {
    const { filterRestaurants } = this.props;
    filterRestaurants(e.currentTarget.value);
  };

  renderFilterSelectBox = () => {
    const filterValue = config.getConfig().sortingValue;
    return (
      <div className="filter">
        <select
          className="filter-box"
          onChange={this.handleSelectChange}
          value={this.props.selectedFilter}
        >
          <option value="select">Filter Value</option>
          {Object.keys(filterValue).map((el) => {
            return (
              <option key={el} value={filterValue[el]}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  render() {
    return (
      <div className="search-filter-container">
        <div className="search">
          <input
            type="text"
            name="search"
            className="search-box"
            placeholder="Search Restaurants..."
            onChange={this.handleCriteriaChange}
          />
        </div>
        {this.renderFilterSelectBox()}
      </div>
    );
  }
}

export default SearchAndFilter;
