import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { userModel } from '../repository/schema/userModel';
import { UserRepository } from '../../domain/user/UserRepository';
import { UserDocumentRepository } from '../repository/UserDocumentRepository';
import { ModifyUserCommand } from '../../commands/modifyuser/ModifyUserCommand';
import { ModifyUserCommandHandler } from '../../commands/modifyuser/ModifyUserCommandHandler';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const command: ModifyUserCommand = new ModifyUserCommand(req.params.id,
            req.body.firstName,
            req.body.lastName,
            req.body.password,
            {
                added: req.body.profilesChange.added,
                removed: req.body.profilesChange.removed
            });

        const userRepository: UserRepository = new UserDocumentRepository(userModel);

        const commandHandler: ModifyUserCommandHandler = new ModifyUserCommandHandler(userRepository);

        await commandHandler.handle(command);
        res.status(httpStatus.OK).json();
    } catch (e) {
        next(e);
    }
}
