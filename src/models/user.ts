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
 * @param id 
 * @returns 
 */
function getNew(
    id?: number,
    email?: string,
    name?: string,
    createdAt?: string,
): IUser {
    return {
        id: id ?? -1,
        email: email ?? '',
        name: name ?? '',
        createdAt: createdAt ?? new Date().toISOString(),
    };
}


/**
 * Copy a user object.
 * 
 * @param user 
 * @returns 
 */
function copy(user: IUser): IUser {
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
    new: getNew,
    copy,
    toString,
} as const;
