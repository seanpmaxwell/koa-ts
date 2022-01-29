/**
 * 
 */

import moment from 'moment';


export interface IUser {
    id: number;
    email: string;
    name: string;
    created: Date;
}

// Export user entity
export default {
    getObj,
    toString,
};


/**
 * Get blank user object.
 * 
 * @param user 
 * @returns 
 */
function getObj(user?: IUser): IUser {
    return {
        id: user?.id ?? -1,
        email: user?.email ?? '',
        name: user?.name ?? '',
        created: user?.created ?? new Date(),
    };
}


/**
 * User entity to string.
 * 
 * @param user 
 * @returns 
 */
function toString(user: IUser): string {
    const dateStr = moment(user.created).format('MM/DD/YYYY')
    return `Id: ${user.id}, Email: ${user.email}, Name: ${user.name}, Created: ${dateStr}`;
}
