import { breadsReducer, loadBreadsActionCreator } from "./breadsSlice";

describe("Given a loadBreads reducer", () => {
  describe("When it receive a list of two breads", () => {
    test("Then it should return a list of two breads", () => {
      const loadBread = {
        id: 1,
        productName: "Hogaza",
        price: 1,
        image: "",
        isAvailable: true,
      };

      const sandwichBread = {
        id: 2,
        productName: "Hogaza",
        price: 2,
        image: "",
        isAvailable: true,
      };

      const breads = [loadBread, sandwichBread];

      const loadBreadsAction = loadBreadsActionCreator(breads);
      const expectedResult = breads;

      const newBreads = breadsReducer(breads, loadBreadsAction);

      expect(newBreads).toStrictEqual(expectedResult);
    });
  });
});
