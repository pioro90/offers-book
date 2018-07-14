import { NextFunction, Request, Response } from 'express';
import { RightFinder } from '../../readmodel/RightFinder';
import { RightDocumentFinder } from '../repository/queries/RightDocumentFinder';
import { rightModel } from '../repository/schema/rightModel';
import { GetRightCommand } from '../../commands/getright/GetRightCommand';
import { GetRightCommandHandler } from '../../commands/getright/GetRightCommandHandler';
import { RightView } from '../../readmodel/RightView';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const rightFinder: RightFinder = new RightDocumentFinder(rightModel);

        const command: GetRightCommand = new GetRightCommand(req.params.id);
        const commandHandler: GetRightCommandHandler = new GetRightCommandHandler(rightFinder);

        const right: RightView = await commandHandler.handle(command);
        res.json(right);
    } catch (e) {
        next(e);
    }
}
