import * as React from "react";
import { Restaurants } from "../../_types_/Restaurants/Restaurants";
import StarRatingComponent from "react-star-rating-component";

export interface Props {
  restaurantData: Restaurants[];
  doFavorite: (para: number) => void;
  selectedFilter: string;
}

class InfoContainer extends React.Component<Props> {
  getStatusClassName = (status: string) => {
    return status === "order ahead" ? "order-ahead" : status;
  };

  doFavorite = (restaurantId: number) => {
    this.props.doFavorite(restaurantId);
  };

  render() {
    const { restaurantData } = this.props;

    return restaurantData.map((data: Restaurants) => {
      const statusClass = this.getStatusClassName(data.status);
      return (
        <div key={data.id} className="restaurant-listing">
          <div className="logo">
            <div className="like" onClick={() => this.doFavorite(data.id)}>
              <i
                className={data.favorite ? `fa fa-heart` : `far fa-heart`}
                aria-hidden={true}
              />
            </div>
            <div className="logo-img">
              <img src={data.image} />
            </div>
            <div className="ratings">
              <StarRatingComponent
                name="rating"
                editing={false}
                starCount={5}
                value={data.sortingValues.ratingAverage}
                starColor="#ffb400"
                emptyStarColor="#ffb400"
                renderStarIcon={(index, value) => {
                  return (
                    <span>
                      <i
                        className={
                          index <= value ? "fas fa-star" : "far fa-star"
                        }
                      />
                    </span>
                  );
                }}
                renderStarIconHalf={() => {
                  return (
                    <span>
                      <span style={{ position: "absolute" }}>
                        <i className="far fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star-half i" />
                      </span>
                    </span>
                  );
                }}
              />
            </div>
          </div>
          <div className="details">
            <h2 className="name">
              {data.name}
              <span className={`opening__status ${statusClass}`}>
                {data.status}
              </span>
            </h2>
            <div className="info">
              <div className="other-info">
                <div className="distance">
                  <b>Distance </b>
                  {data.sortingValues.distance}
                </div>
                <div className="min-cost">
                  <b>Min Cost </b>
                  {data.sortingValues.minCost}
                </div>
                <div className="delivery-cost">
                  <b>Delivery Cost </b>
                  {data.sortingValues.deliveryCosts}
                </div>
                <div
                  className={
                    this.props.selectedFilter === "bestMatch"
                      ? `best-match`
                      : `best-match hide`
                  }
                >
                  <b>Best Match </b>
                  {data.sortingValues.bestMatch}
                </div>
                <div
                  className={
                    this.props.selectedFilter === "newest"
                      ? `newest`
                      : `newest hide`
                  }
                >
                  <b>Newest </b>
                  {data.sortingValues.newest}
                </div>
                <div
                  className={
                    this.props.selectedFilter === "popularity"
                      ? `popularity`
                      : `popularity hide`
                  }
                >
                  <b>Popularity </b>
                  {data.sortingValues.popularity}
                </div>
                <div
                  className={
                    this.props.selectedFilter === "averageProductPrice"
                      ? `average-product-price`
                      : `average-product-price hide`
                  }
                >
                  <b>Average Product Price </b>
                  {data.sortingValues.averageProductPrice}
                </div>
                <div
                  className={
                    this.props.selectedFilter === "topRestaurant"
                      ? `top-restaurant`
                      : `top-restaurant hide`
                  }
                >
                  <b>High Score </b>
                  {data.sortingValues.topRestaurant}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default InfoContainer;
