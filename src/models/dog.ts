/**
 * Schema for the Dog entity.
 * 
 * created by Sean Maxwell, 1/30/2022
 */

const constants = {
    Species: 'Canis Familiaris',
};


export interface IDog {
    id: number;
    name: string;
    age: number;
    weight: number;
    breed: string;
    createdAt: string;
    ownerId: number;
}


/**
 * Get new dog instance.
 * 
 * @param dog 
 * @returns 
 */
function getNew(dog?: IDog)  {
    return {
        id: dog?.id ?? -1,
        name: dog?.name ?? '',
        age: dog?.age ?? 0, 
        weight: dog?.weight ?? 0,
        breed: dog?.breed ?? '',
        createdAt: dog?.createdAt ?? new Date().toISOString(),
        ownerId: dog?.ownerId ?? -1,
    };
}



// Export default
export default {
    ...constants,
    new: getNew,
    toString,
} as const;
