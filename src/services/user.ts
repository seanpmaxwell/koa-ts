import userDao from '../daos/user';
import userEntity from '../entities/user';


// Export default
export default {
    getUserInfoAsString,
}


/**
 * Return all the user info as a string.
 * 
 * @param id 
 * @returns 
 */
function getUserInfoAsString(id: number): string {
    const user = userDao.findById(id);
    return userEntity.toString(user);
}
