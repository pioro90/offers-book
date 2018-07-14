import { AddUserCommand } from '../../../src/user/commands/adduser/AddUserCommand';

const usersMock: AddUserCommand[] = [
    {
        firstName: 'Michael',
        lastName: 'Nowak',
        email: 'michael@gmail.com',
        password: 'aaaa1111'
    },
    {
        firstName: 'Michael',
        lastName: 'John',
        email: 'michael2@gmail.com',
        password: 'aaaa1111'
    },
    {
        firstName: 'Julia',
        lastName: 'Roberts',
        email: 'julia@gmail.com',
        password: 'aaaa1111'
    },
    {
        firstName: 'Paul',
        lastName: 'Green',
        email: 'paul@gmail.com',
        password: 'aaaa1111'
    }
];


export default usersMock;