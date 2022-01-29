import User, { IUser } from '../models/User';


// Export default
export default {
    findById,
    addOne,
};


/**
 * Find a user by id.
 * 
 * @param id 
 * @returns 
 */
async function findById(id: number): Promise<User | null> {
    const resp: User[] = await User.query()
        .where('id', id);
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
async function addOne(user: IUser): Promise<User> {
    return User.query().insert(user);
}
