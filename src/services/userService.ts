import userDao from '../daos/userDao';
import userEntity, { IUser } from '../entity/User';


// Constant values
const constants = {
    userNotFound: 'User not found',
};

// Export default
export default {
    getUserInfoAsString,
    addOne,
};


/**
 * Return all the user info as a string.
 * 
 * @param id 
 * @returns 
 */
async function getUserInfoAsString(id: number): Promise<string> {
    const user = await userDao.findById(id);
    if (!user) {
        return constants.userNotFound;
    }
    return userEntity.toString(user);
}


/**
 * Add one user.
 * 
 * @param user 
 */
async function addOne(user: IUser): Promise<void> {
    await userDao.addOne(user);
}
