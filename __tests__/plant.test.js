import Plant from './../src/plant.js';

describe('Plant', () => {

  test('should correctly create a plant object', () => {
    expect(changeState("soil")).toEqual(true);
  });
});