/**
 * Define User Entity.
 * 
 * created by Sean Maxwell, 1/28/2022
 */

import { Model } from 'objection';
import moment from 'moment';
import { IUser } from '../entities/userEntity';


export default class UserModel extends Model implements IUser {

    public id!: number;
    public email!: string;
    public name!: string;
    public createdAt!: string;

    // Table name is the only required property.
    public static get tableName() {
        return 'users';
    }


    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    public static jsonSchema = {
        type: 'object',
        required: ['email', 'name'],
        properties: {
            id: { type: 'integer' },
            email: { type: 'string', minLength: 1, maxLength: 255 },
            name: { type: 'string', minLength: 1, maxLength: 255 },
            createdAt: { type: 'string' },
        },
    };


    // Intialize values here
    public $beforeInsert() {
        this.createdAt = new Date().toISOString();
    }


    /**
     * Convert user to a string.
     * 
     * @returns 
     */
    public toString(): string {
        const dateStr = moment(this.createdAt).format('MM/DD/YYYY');
        return `Id: ${this.id}, Email: ${this.email}, Name: ${this.name}, Created: ${dateStr}`;
    }
}
