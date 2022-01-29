import User from '../models/User';


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
async function findById(id: number): Promise<User | null> {

    await User.query().insert({
        email: 'foo@bar.com_' + Date.now(),
        name: 'foo bar',
        createdAt: new Date().toISOString(),
    });


    const resp: User[] = await User.query()
        .where('id', id);
    if (resp.length > 0) {
        return resp[0];
    } else {
        return null;
    }
}
