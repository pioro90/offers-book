import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { AddRightCommand } from '../../commands/addright/AddRightCommand';
import { RightRepository } from '../../domain/right/RightRepository';
import { RightDocumentRepository } from '../repository/RightDocumentRepository';
import { rightModel } from '../repository/schema/rightModel';
import { RightFactory } from '../../domain/right/RightFactory';
import { AddRightCommandHandler } from '../../commands/addright/AddRightCommandHandler';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const command: AddRightCommand = req.body;
        const rightRepository: RightRepository = new RightDocumentRepository(rightModel);
        const rightFactory: RightFactory = new RightFactory();

        const commandHandler: AddRightCommandHandler = new AddRightCommandHandler(rightRepository, rightFactory);

        const rightId: string = await commandHandler.handle(command);
        res.status(httpStatus.CREATED).json(rightId);
    } catch (e) {
        next(e);
    }
}
