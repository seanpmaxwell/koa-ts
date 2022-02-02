/**
 * Db models.
 * 
 * created by Sean Maxwell, 
 */

export interface IUser {
    id: number;
    email: string;
    name: string;
    createdAt: string;
}

export interface IDog {
    id: number;
    name: string;
    age: number;
    weight: number;
    breed: string;
    createdAt: string;
    ownerId: number;
}
