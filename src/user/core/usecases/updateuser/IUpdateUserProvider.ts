import { UpdateUserDto } from './UpdateUserDto';

export interface IUpdateUserProvider {
    updateUser(updateUserDto: UpdateUserDto): Promise<void>;
}