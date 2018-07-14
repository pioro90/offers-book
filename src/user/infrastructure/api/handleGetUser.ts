import { NextFunction, Request, Response } from 'express';
import { GetUserCommandHandler } from '../../commands/getuser/GetUserCommandHandler';
import { GetUserCommand } from '../../commands/getuser/GetUserCommand';
import { UserFinder } from '../../readmodel/UserFinder';
import { UserDocumentFinder } from '../repository/queries/UserDocumentFinder';
import { userModel } from '../repository/schema/userModel';
import { UserView } from '../../readmodel/UserView';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const userFinder: UserFinder = new UserDocumentFinder(userModel);

        const command: GetUserCommand = new GetUserCommand(req.params.id);
        const commandHandler: GetUserCommandHandler = new GetUserCommandHandler(userFinder);

        const user: UserView = await commandHandler.handle(command);
        res.json(user);
    } catch (e) {
        next(e);
    }
}
