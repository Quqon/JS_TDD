const fetchProduct = require('../async');

describe('fetchProduct', () => {
    it('async - done', (done) => {
        fetchProduct().then((item) => {
            expect(item).toEqual({ item: 'Milk', price: 200 });
            done();
        })
    })

    it('async - return', () => {
        return fetchProduct().then((item) => {
            expect(item).toEqual({ item: 'Milk', price: 200 });
        })
    })
})