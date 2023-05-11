let request = require('supertest');
let app = require('../app');
let Restaurant = require('../models');

describe('GET /restaurants', () => {
    test('returns a status code of 200', async () => {
        let response = await request(app).get('/restaurants');
        expect(response.status).toBe(200);
    });

    test('returns an array of restaurants', async () => {
        let response = await request(app).get('/restaurants');
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('returns the correct number of restaurants', async () => {
        let restaurants = await Restaurant.findAll();
        let response = await request(app).get('/restaurants');
        expect(response.body.length).toBe(restaurants.length);
    });

    test('returns the correct restaurant data', async () => {
        let restaurant = await Restaurant.create({
            name: 'Burger King',
            location: 'Texas',
            cuisine: 'FastFood',
        });
        // expect statement
    });
})

// dont know how to do the rest of the tests