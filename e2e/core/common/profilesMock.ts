import { AddProfileCommand } from '../../../src/core/commands/addprofile/AddProfileCommand';

const profilesMock: AddProfileCommand[] = [
    {
        name: 'Admin',
        rightsIds: ['aaa-bbb-ccc']
    },
    {
        name: 'Guest',
        rightsIds: []
    }
];


export default profilesMock;