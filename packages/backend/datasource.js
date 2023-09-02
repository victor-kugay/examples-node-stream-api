require('ts-node/register/transpile-only');

const dotenv = require('dotenv');
dotenv.config();

const {DataSource} = require('typeorm');
const {dbConfigDefault} = require('./src/frameworks/data-service/postgres/config.ts');

module.exports.dataSource = new DataSource(dbConfigDefault);
