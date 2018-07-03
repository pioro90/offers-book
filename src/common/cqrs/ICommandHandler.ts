import { ICommand } from './ICommand';

export declare interface ICommandHandler<K extends ICommand, T> {
    handle(command: K): T;
}