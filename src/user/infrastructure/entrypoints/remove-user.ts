import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { IRemoveUserProvider } from '../../core/usecases/removeuser/remove-user-provider';
import { RemoveUserProvider } from '../database/remove-user-provider';
import { userModel } from '../database/model/user-model';
import { RemoveUserUseCase } from '../../core/usecases/removeuser/remove-user-use-case';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const userId: string = req.params.id;
        const removeUserProvider: IRemoveUserProvider = new RemoveUserProvider(userModel);
        const removeUserUseCase: RemoveUserUseCase = new RemoveUserUseCase(removeUserProvider);

        await removeUserUseCase.removeUser(userId);
        res.status(httpStatus.NO_CONTENT).json();
    } catch (e) {
        next(e);
    }
}