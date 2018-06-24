import { NextFunction, Request, Response } from 'express';
import { IGetUserProvider } from '../core/usecases/getuser/get-user-provider';
import { GetUserProvider } from '../dataproviders/get-user-provider';
import { userModel } from '../dataproviders/database/user-model';
import { GetUserUseCase } from '../core/usecases/getuser/get-user-use-case';
import { User } from '../core/domain/user';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const userId: string = req.params.id;
        const getUserProvider: IGetUserProvider = new GetUserProvider(userModel);
        const getUserUseCase: GetUserUseCase = new GetUserUseCase(getUserProvider);

        const user: User = await getUserUseCase.getUser(userId);
        res.json(user);
    } catch (e) {
        next(e);
    }
}
