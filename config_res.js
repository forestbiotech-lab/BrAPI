/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  sql: {
    host:     'pinaster.itqb.unl.pt', 
    database: 'brapi_dan',
    username: 'brapi',
    password: '8AU%E%lg&75I',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: console.log,   //True starts to make it cry.
    timezone: '+05:30',
  },
  mongo: {
    uri: 'mongodb://username:password@domain.mongolab.com:63439/tsc'
  },
  seedDB:false,
  seedMongoDB:false,
  seedDBForce:true,
  db:'sql' // mongo,sql if you want to use any SQL change dialect above in sql config
}