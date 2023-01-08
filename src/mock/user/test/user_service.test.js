const UserService = require('../user_service');
// const StubUserClient = require('./stub_user_client');
const UserClient = require('../user_client');

jest.mock('../user_client')

describe('login - stub', () => {
    const userClient = [{
        isLogedIn: false
    }];
    
    UserClient.mockImplementation(() => {
        userClient
    })

    let userService;

    beforeEach(() => {
        userService = new UserService(new UserClient());
    });

    it('isLogedIn should be changed true', () => {
        let id = 'Quqon'
        let password = '123123'
        expect(userService.login(id, password)[0]).toEqual(true);
    })
})