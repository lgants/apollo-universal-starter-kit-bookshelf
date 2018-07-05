// import knex from 'knex';
// import bookshelf from 'bookshelf';
// import * as environments from '../../knexdata';
//
// // eslint-disable-next-line import/namespace
// // export default knex(environments[process.env.NODE_ENV || 'development']);
//
// const env = process.env.NODE_ENV || 'development';
// // eslint-disable-next-line import/namespace
// export default bookshelf(knex(environments[env]));

// import knex from 'knex';
// import bookshelf from '../../bookshelf';
// import * as environments from '../../knexdata';
//
// const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line import/namespace
// export default bookshelf(knex(environments[env]));

import fs from 'fs';
import path from 'path';
import knex from 'knex';
import bookshelf from 'bookshelf';
import * as environments from '../../knexdata';

const basename = path.basename(__filename);
const dirname = process.cwd();
const modelsDir = path.join(dirname, '/src/database/models');

const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line import/namespace
const db = bookshelf(knex(environments[env]));

fs
  .readdirSync(modelsDir)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach(file => {
    // eslint-disable-next-line
    let model = require('../database/models/' + file);
    console.log(model);
    model(db);
  });

// bookshelf.plugin('registry');

export default db;
