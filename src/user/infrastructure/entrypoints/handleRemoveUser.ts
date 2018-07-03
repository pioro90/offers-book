import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { IRemoveUserProvider } from '../../core/usecases/removeuser/IRemoveUserProvider';
import { RemoveUserProvider } from '../database/RemoveUserProvider';
import { userModel } from '../database/model/userModel';
import { RemoveUserUseCase } from '../../core/usecases/removeuser/RemoveUserUseCase';


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