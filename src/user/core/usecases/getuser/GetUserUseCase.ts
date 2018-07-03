import { IGetUserProvider } from './IGetUserProvider';
import { User } from '../../domain/User';

export class GetUserUseCase {

    constructor(private getUserProvider: IGetUserProvider) {
    }

    getUser(id: string): Promise<User> {
        return this.getUserProvider.getUser(id);
    }
}