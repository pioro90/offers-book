import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';

import { AddUserCommand } from '../../commands/adduser/AddUserCommand';
import { AddUserCommandHandler } from '../../commands/adduser/AddUserCommandHandler';
import { userModel } from '../repository/schema/userModel';
import { User } from '../../domain/user/User';
import { UserRepository } from '../../domain/user/UserRepository';
import { UserDocumentRepository } from '../repository/UserDocumentRepository';
import { UserFactory } from '../../domain/user/UserFactory';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const command: AddUserCommand = req.body;
        const userRepository: UserRepository = new UserDocumentRepository(userModel);
        const userFactory: UserFactory = new UserFactory();


        const commandHandler: AddUserCommandHandler = new AddUserCommandHandler(userRepository, userFactory);

        const user: User = await commandHandler.handle(command);
        res.status(httpStatus.CREATED).json(user);
    } catch (e) {
        next(e);
    }
}
