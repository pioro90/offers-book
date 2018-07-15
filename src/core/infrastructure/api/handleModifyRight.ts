import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { RightRepository } from '../../domain/right/RightRepository';
import { RightDocumentRepository } from '../repository/RightDocumentRepository';
import { rightModel } from '../repository/schema/rightModel';
import { ModifyRightCommand } from '../../commands/modifyright/ModifyRightCommand';
import { ModifyRightCommandHandler } from '../../commands/modifyright/ModifyRightCommandHandler';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const command: ModifyRightCommand = new ModifyRightCommand(req.params.id, req.body.code, req.body.description);
        const rightRepository: RightRepository = new RightDocumentRepository(rightModel);

        const commandHandler: ModifyRightCommandHandler = new ModifyRightCommandHandler(rightRepository);

        await commandHandler.handle(command);
        res.status(httpStatus.OK).send();
    } catch (e) {
        next(e);
    }
}
