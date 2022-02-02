/**
 * 
 * 
 * created by Sean Maxwell, 2/1/2022
 */

import moment from "moment";
import { IUser } from "./models";



/**
 * User entity to string.
 * 
 * @param user 
 * @returns 
 */
export function userToStr(user: IUser): string {
    const dateStr = moment(user.createdAt).format('MM/DD/YYYY');
    return `[Id: ${user.id}, Email: "${user.email}", Name: "${user.name}", Created: "${dateStr}"]`;
}
