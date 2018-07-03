import { NextFunction, Request, Response } from 'express';
import { UpdateUserCommand } from '../../core/usecases/updateuser/UpdateUserCommand';
import { IUpdateUserProvider } from '../../core/usecases/updateuser/IUpdateUserProvider';
import { UpdateUserProvider } from '../database/UpdateUserProvider';
import { userModel } from '../database/model/userModel';
import { UpdateUserCommandHandler } from '../../core/usecases/updateuser/UpdateUserCommandHandler';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const updateUserCommand: UpdateUserCommand = new UpdateUserCommand(
                req.params.id,
                req.body.firstName,
                req.body.lastName,
                req.body.email,
                req.body.password
            );
            const updateUserProvider: IUpdateUserProvider = new UpdateUserProvider(userModel);
            const updateUserCommandHandler: UpdateUserCommandHandler = new UpdateUserCommandHandler(updateUserProvider);

            await updateUserCommandHandler.handle(updateUserCommand);
            res.send();
        } catch (e) {
            next(e);
        }
    }