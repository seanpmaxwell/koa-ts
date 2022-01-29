/**
 * Stuff that needs to run before the server starts.
 * 
 * created by Sean Maxwell, 1/29/2022
 */

import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from '../../knexfile';


// Initialize knex.
const knex = Knex(knexConfig.staging);

// Give the knex instance to objection.
Model.knex(knex);
