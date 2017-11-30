require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))

const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

// sort the docs by the subject property
db
  .createIndex({ index: { fields: ['subjectName'] } })
  .then(() => {
    console.log('Created an index on the subjectName field.')
  })
  .catch(err => console.log(err))

// sort the docs by the department property
db
  .createIndex({ index: { fields: ['department'] } })
  .then(() => {
    console.log('Created an index on the department field.')
  })
  .catch(err => console.log(err))

// sort the resources by the tutor property
db
  .createIndex({ index: { fields: ['name'] } })
  .then(() => {
    console.log('Created an index on the name field.')
  })
  .catch(err => console.log(err))

db
  .put({
    _id: 'foo'
  })
  .catch(err => console.log(err))
