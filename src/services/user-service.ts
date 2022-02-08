import userDao from '@daos/user-dao';
import User, { IUser } from '../models/user-model';


// Constant values
const constants = {
    userNotFound: 'User not found',
};


/**
 * Return all the user info as a string.
 * 
 * @param id 
 * @returns 
 */
async function getUserAsString(id: number): Promise<string> {
    const user = await userDao.findById(id);
    if (!user) {
        throw Error(constants.userNotFound);
    }
    return User.toString(user);
}


/**
 * Add one user.
 * 
 * @param user 
 */
function addOne(user: IUser): Promise<void> {
    return userDao.addOne(user);
}


// Export default
export default {
    getUserAsString,
    addOne,
} as const;
