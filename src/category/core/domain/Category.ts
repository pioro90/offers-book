export class Category {
    constructor(public name: string,
                public description: string,
                public createdAt: Date,
                public updatedAt: Date,
                public parent?: string,
                public ancestors?: string[],
                public deletedAt?: Date) {
    }
}