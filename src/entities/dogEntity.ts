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
}


/**
 * Get new dog instance.
 * 
 * @param dog 
 * @returns 
 */
function getNew(dog?: IDog): IDog {
    return {
        id: dog?.id ?? -1,
        name: dog?.name ?? '',
        age: dog?.age ?? 0, 
        weight: dog?.weight ?? 0,
        breed: dog?.breed ?? '',
        createdAt: dog?.createdAt ?? new Date().toISOString(),
    };
}


/**
 * Convert dog entity to string.
 * 
 * @param dog
 * @returns 
 */
function toString(dog: IDog): string {
    return `[Id: "${dog.id}", Name: "${dog.name}", Age: "${dog.age}", Weight: "${dog.weight}",`
        + ` Breed: "${dog.breed}", Created: "${dog.createdAt}"]`;
}



// Export default
export default {
    ...constants,
    getNew,
    toString,
} as const;
