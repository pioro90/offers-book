import { UpdateUserDto } from './update-user-dto';

export interface IUpdateUserProvider {
    updateUser(updateUserDto: UpdateUserDto): Promise<void>;
}