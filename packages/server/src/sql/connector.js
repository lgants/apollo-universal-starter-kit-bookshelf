import knex from 'knex';
import bookshelf from 'bookshelf';
import * as environments from '../../knexdata';

// eslint-disable-next-line import/namespace
// export default knex(environments[process.env.NODE_ENV || 'development']);

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/namespace
export default bookshelf(knex(environments[env]));
