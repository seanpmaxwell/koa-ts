import userDao from '../daos/userDao';
import userSp, { IUser } from '../entities/userEntity';


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
async function getUserInfoAsString(id: number): Promise<string> {
    const user = await userDao.findById(id);
    if (!user) {
        return constants.userNotFound;
    }
    return userSp.toString(user);
}


/**
 * Add one user.
 * 
 * @param user 
 */
async function addOne(user: IUser): Promise<void> {
    await userDao.addOne(user);
}



// Export default
export default {
    getUserInfoAsString,
    addOne,
};
