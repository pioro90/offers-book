import { UpdateUserCommand } from './UpdateUserCommand';

export interface IUpdateUserProvider {
    updateUser(updateUserCommand: UpdateUserCommand): Promise<void>;
}