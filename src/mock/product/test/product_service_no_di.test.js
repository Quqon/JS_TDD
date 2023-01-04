const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');
jest.mock('../product_client');

describe('Item is available', () => {
    const fetchItems = jest.fn(async () => [
        {item: 'Milk', available: true},
        {item: 'banana', available: false}
    ]);
    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        };
    })

    let productService;
    // let item;
    beforeEach(() => {
        productService = new ProductService();
        fetchItems.mockClear();
        ProductClient.mockClear();
    });

    // it('available === true', async() => {
    //     item = await productService.fetchAvailableItems;
    //     for(let i = 0; i < item.length; i++) {
    //         expect(item[i].available).toEqual(true);
    //     }
    // })
    
    it('should filter out only available items', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([{item: 'Milk', available: true}]);
    })

    it('test', async () => {
        const items = await productService.fetchAvailableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1);
    })
})