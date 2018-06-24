import { FindUsersDto } from './find-users-dto';
import { IFindUsersProvider } from './find-users-provider';
import { User } from '../../domain/user';


export class FindUsersUseCase {

    constructor(private findUsersProvider: IFindUsersProvider) {
    }

    findUsers(findUserDto: FindUsersDto): Promise<User[]> {
        return this.findUsersProvider.findUsers(findUserDto);
    }
}