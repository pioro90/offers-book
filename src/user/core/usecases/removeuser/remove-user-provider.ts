export interface IRemoveUserProvider {
    removeUser(id: string): Promise<void>;
}