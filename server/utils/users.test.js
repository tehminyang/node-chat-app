const expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Tim',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Tim',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });
    
    it('should remove a user', () => {
        var user = users.removeUser('1');
        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var user = users.removeUser('0');
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var user = users.getUser('1');
        expect(user.id).toBe('1');
    });

    it('should not find a user', () => {
        var user = users.getUser('0');
        expect(user).toNotExist();
    });    

    it('should returns names for node course', () => {
        var namesArray = ['Mike', 'Tim'];
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(namesArray);
    })

    it('should returns names for react course', () => {
        var namesArray = ['Jen'];
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(namesArray);
    })
});