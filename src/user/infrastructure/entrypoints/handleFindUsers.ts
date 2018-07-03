import { NextFunction, Request, Response } from 'express';
import { FindUsersCommand } from '../../core/usecases/findusers/FindUsersCommand';
import { User } from '../../core/domain/User';
import { IFindUsersProvider } from '../../core/usecases/findusers/IFindUsersProvider';
import { FindUsersProvider } from '../database/FindUsersProvider';
import { userModel } from '../database/model/userModel';
import { FindUsersCommandHandler } from '../../core/usecases/findusers/FindUsersCommandHandler';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const findUsersCommand: FindUsersCommand = new FindUsersCommand(
            req.query.firstName,
            req.query.lastName,
            req.query.email,
            parseInt(req.query.start),
            parseInt(req.query.limit)
        );
        const findUsersProvider: IFindUsersProvider = new FindUsersProvider(userModel);
        const findUsersCommandHandler: FindUsersCommandHandler = new FindUsersCommandHandler(findUsersProvider);

        const users: User[] = await findUsersCommandHandler.handle(findUsersCommand);
        res.json(users);
    } catch (e) {
        next(e);
    }
}