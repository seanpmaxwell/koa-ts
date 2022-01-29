import userEntity, { IUser } from '../entities/user';


// Export default
export default {
    findById,
};


/**
 * Find a user by id.
 * 
 * @param id 
 * @returns 
 */
function findById(id: number): IUser {
    const user = {id, email: 'foo@bar.com', name: 'foo bar'} as IUser;
    return userEntity.getObj(user);
}
