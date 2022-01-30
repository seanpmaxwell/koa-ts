import { IUser } from '../entities/userEntity';
import knex from './knex';


/**
 * Find a user by id.
 * 
 * @param id 
 * @returns 
 */
 async function findById(id: number): Promise<IUser | null> {
    const resp = await knex<IUser, IUser[]>('users').where('id', id);
    if (resp.length > 0) {
        return resp[0];
    } else {
        return null;
    }
}


/**
 * Add one user.
 * 
 * @param user 
 * @returns 
 */
async function addOne(user: IUser): Promise<void> {
    return knex<IUser>('users').insert(user);
}


// Export default
export default {
    findById,
    addOne,
};


// ****************************** ObjectionJS Examples ****************************** //

// /**
//  * Find a user by id.
//  * 
//  * @param id 
//  * @returns 
//  */
// async function findByIdAlt(id: number): Promise<UserModel | null> {
//     const resp: UserModel[] = await UserModel.query()
//         .where('id', id);
//     if (resp.length > 0) {
//         return resp[0];
//     } else {
//         return null;
//     }
// }


// /**
//  * Add one user.
//  * 
//  * @param user 
//  * @returns 
//  */
// async function addOneAlt(user: IUser): Promise<UserModel> {
//     return UserModel.query().insert(user);
// }
