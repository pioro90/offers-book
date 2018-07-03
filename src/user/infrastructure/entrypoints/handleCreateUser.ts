import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';

import { CreateUserCommand } from '../../core/usecases/createuser/CreateUserCommand';
import { CreateUserCommandHandler } from '../../core/usecases/createuser/CreateUserCommandHandler';
import { ICreateCategoryProvider } from '../../core/usecases/createuser/ICreateUserProvider';
import { CreateUserProvider } from '../database/CreateUserProvider';
import { userModel } from '../database/model/userModel';
import { User } from '../../core/domain/User';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const createUserCommand: CreateUserCommand = req.body;
        const createUserProvider: ICreateCategoryProvider = new CreateUserProvider(userModel);
        const createUserCommandHandler: CreateUserCommandHandler = new CreateUserCommandHandler(createUserProvider);

        const user: User = await createUserCommandHandler.handle(createUserCommand);
        res.status(httpStatus.CREATED).json(user);
    } catch (e) {
        next(e);
    }
}
