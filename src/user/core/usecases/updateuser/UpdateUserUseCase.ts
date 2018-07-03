import { IUpdateUserProvider } from './IUpdateUserProvider';
import { UpdateUserDto } from './UpdateUserDto';


export class UpdateUserUseCase {

    constructor(private updateUserProvider: IUpdateUserProvider) {
    }

    async updateUser(updateUserDto: UpdateUserDto): Promise<void> {
        return this.updateUserProvider.updateUser(updateUserDto);
    }
}