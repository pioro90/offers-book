export class Category {
    name: string;
    description: string;
    parent?: string;
    ancestors?: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}