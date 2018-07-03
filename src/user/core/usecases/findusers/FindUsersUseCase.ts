import { FindUsersDto } from './FindUsersDto';
import { IFindUsersProvider } from './IFindUsersProvider';
import { User } from '../../domain/User';


export class FindUsersUseCase {

    constructor(private findUsersProvider: IFindUsersProvider) {
    }

    findUsers(findUserDto: FindUsersDto): Promise<User[]> {
        return this.findUsersProvider.findUsers(findUserDto);
    }
}