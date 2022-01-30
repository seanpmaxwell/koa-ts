/**
 * Schema for the User entity.
 * 
 * created by Sean Maxwell, 1/29/2022
 */

import moment from "moment";


// User Interface
export interface IUser {
    id: number;
    email: string;
    name: string;
    createdAt: string;
}


/**
 * Get new user instance.
 * 
 * @param user 
 * @returns 
 */
function getNew(user?: IUser): IUser {
    return {
        id: user?.id ?? -1,
        email: user?.email ?? '',
        name: user?.name ?? '',
        createdAt: user?.createdAt ?? new Date().toISOString(),
    };
}


/**
 * User entity to string.
 * 
 * @param user 
 * @returns 
 */
function toString(user: IUser): string {
    const dateStr = moment(user.createdAt).format('MM/DD/YYYY');
    return `[Id: ${user.id}, Email: "${user.email}", Name: "${user.name}", Created: "${dateStr}"]`;
}


// Export user functions
export default {
    getNew,
    toString,
} as const;
