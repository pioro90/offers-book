import { NextFunction, Request, Response } from 'express';
import { IGetUserProvider } from '../../core/usecases/getuser/IGetUserProvider';
import { GetUserProvider } from '../database/GetUserProvider';
import { userModel } from '../database/model/userModel';
import { GetUserCommandHandler } from '../../core/usecases/getuser/GetUserCommandHandler';
import { User } from '../../core/domain/User';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const userId: string = req.params.id;
        const getUserProvider: IGetUserProvider = new GetUserProvider(userModel);
        const getUserCommandHandler: GetUserCommandHandler = new GetUserCommandHandler(getUserProvider);

        const user: User = await getUserCommandHandler.handle(userId);
        res.json(user);
    } catch (e) {
        next(e);
    }
}
