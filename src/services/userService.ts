import userDao from '../daos/user';


// Constant values
const constants = {
    userNotFound: 'User not found',
};

// Export default
export default {
    getUserInfoAsString,
};


/**
 * Return all the user info as a string.
 * 
 * @param id 
 * @returns 
 */
async function getUserInfoAsString(id: number): Promise<string> {
    const user = await userDao.findById(id);
    return (user?.toString() ?? constants.userNotFound);
}
