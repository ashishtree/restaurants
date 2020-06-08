import axios from "axios";
import { mocked } from "ts-jest/utils";
import restaurantData from "../__mockData__/mockRestaurants.json";
import { restaurantsService } from "./restaurantsService";

jest.mock("axios");
const mockedAxios = mocked(axios, true);

describe("get tray using async/await", () => {
  it("should load tray data", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: restaurantData,
      })
    );
    const data = await restaurantsService.getRestaurantsData("restaurants");
    const expectedData = restaurantData;
    expect(data).toBeDefined();
    expect(data).toEqual(expectedData);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
