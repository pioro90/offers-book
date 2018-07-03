import { UpdateUserCommand } from './UpdateUserCommand';

export interface IUpdateUserProvider {
    updateUser(updateUserDto: UpdateUserCommand): Promise<void>;
}