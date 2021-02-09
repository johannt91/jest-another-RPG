const { TestScheduler } = require("jest");

const Potion = '../lib/Potion.js';

test('creates a health potion object', () =>{
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
})