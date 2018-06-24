import { IUpdateUserProvider } from './update-user-provider';
import { UpdateUserDto } from './update-user-dto';


export class UpdateUserUseCase {

    constructor(private updateUserProvider: IUpdateUserProvider) {
    }

    async updateUser(updateUserDto: UpdateUserDto): Promise<void> {
        return this.updateUserProvider.updateUser(updateUserDto);
    }
}