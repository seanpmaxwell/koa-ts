import userDao from '../daos/userDao';
import userSp, { IUser } from '../entities/userEntity';
// import dogSp, { IDog } from '../entities/dogEntity';


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
        return constants.userNotFound;
    }
    return userSp.toString(user);
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
