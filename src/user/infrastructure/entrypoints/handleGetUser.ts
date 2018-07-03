import { NextFunction, Request, Response } from 'express';
import { IGetUserProvider } from '../../core/usecases/getuser/IGetUserProvider';
import { GetUserProvider } from '../database/GetUserProvider';
import { userModel } from '../database/model/userModel';
import { GetUserUseCase } from '../../core/usecases/getuser/GetUserUseCase';
import { User } from '../../core/domain/User';


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
