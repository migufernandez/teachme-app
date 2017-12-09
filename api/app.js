require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const cors = require('cors')
const checkRequiredFields = require('./lib/check-required-fields')
const {
  createTutor,
  getTutor,
  updateTutor,
  deleteTutor,
  listTutor,
  createSubject,
  getSubject,
  updateSubject,
  deleteSubject,
  listSubject
} = require('./dal')
const {
  propOr,
  pathOr,
  compose,
  not,
  isEmpty,
  is,
  prop,
  omit,
  merge,
  __,
  join,
  path,
  split,
  trim,
  last
} = require('ramda')

const postTutorRequiredFieldCheck = checkRequiredFields([
  'name',
  'gender',
  'birthDate',
  'email',
  'phone',
  'shortDesc',
  'imageUrl',
  'countryBirth',
  'currentCity',
  'education',
  'institution',
  'subjects'
])

const putTutorRequiredFieldCheck = checkRequiredFields([
  '_id',
  '_rev',
  'type',
  'name',
  'gender',
  'birthDate',
  'email',
  'phone',
  'shortDesc',
  'imageUrl',
  'countryBirth',
  'currentCity',
  'education',
  'institution',
  'subjects'
])

const postSubjectRequiredFieldCheck = checkRequiredFields([
  'subjectName',
  'description',
  'department'
])

const putSubjectRequiredFieldCheck = checkRequiredFields([
  '_id',
  '_rev',
  'type',
  'subjectName',
  'description',
  'department'
])

app.use(cors({ credentials: true }))
app.use(bodyParser.json())
app.get('/', (req, res, next) => res.send('WELCOME TO THE TUTOR API!!'))

/// //////////////
///  Tutors
/// /////////////

app.post('/tutors', (req, res, next) => {
  if (isEmpty(prop('body', req))) {
    return next(
      new HTTPError(
        400,
        'Missing request body.  Content-Type header should be application/json.'
      )
    )
  }

  const body = compose(
    omit(['_id', '_rev']),
    merge(__, { type: 'tutor' }),
    prop('body')
  )(req)

  const missingFields = postTutorRequiredFieldCheck(body)

  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  createTutor(body)
    .then(result => res.status(201).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.get('/tutors/:id', (req, res, next) => {
  getTutor(path(['params', 'id'], req))
    .then(doc => res.status(200).send(doc))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.put('/tutors/:id', (req, res, next) => {
  if (isEmpty(prop('body'), req)) {
    return next(
      new HTTPError(
        400,
        'Missing request body. Content-Type header must be application/json'
      )
    )
  }

  const missingFields = putTutorRequiredFieldCheck(prop('body', req))
  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  updateTutor(prop('body', req))
    .then(result => res.status(200).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.delete('/tutors/:id', (req, res, next) => {
  deleteTutor(path(['params', 'id'], req))
    .then(result => res.status(200).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.get('/tutors', (req, res, next) => {
  let searchStr = compose(split(':'), pathOr('', ['query', 'filter']))(req)
  const filter = pathOr(null, ['query', 'filter'])(req)
  var options = {}
  if (filter) {
    options = {
      include_docs: true,
      startkey: 'tutor_' + last(searchStr),
      endkey: 'tutor_' + last(searchStr) + '\ufff0'
    }
  } else {
    options = {
      include_docs: true,
      startkey: 'tutor_',
      endkey: 'tutor_\ufff0'
    }
  }
  listTutor(options)
    .then(results => res.status(200).send(results))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

/// //////////////
///  Subjects
/// /////////////

app.post('/subjects', (req, res, next) => {
  if (isEmpty(prop('body', req))) {
    return next(
      new HTTPError(
        400,
        'Missing request body.  Content-Type header should be application/json.'
      )
    )
  }

  const body = compose(
    omit(['_id', '_rev']),
    merge(__, { type: 'subject' }),
    prop('body')
  )(req)

  const missingFields = postSubjectRequiredFieldCheck(body)

  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  createSubject(body)
    .then(result => res.status(201).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.get('/subjects/:id', (req, res, next) => {
  getSubject(path(['params', 'id'], req))
    .then(doc => res.status(200).send(doc))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.put('/subjects/:id', (req, res, next) => {
  if (isEmpty(prop('body'), req)) {
    return next(
      new HTTPError(
        400,
        'Missing request body. Content-Type header must be application/json'
      )
    )
  }

  const missingFields = putSubjectRequiredFieldCheck(prop('body', req))
  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  updateSubject(prop('body', req))
    .then(result => res.status(200).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.delete('/subjects/:id', (req, res, next) => {
  deleteSubject(path(['params', 'id'], req))
    .then(result => res.status(200).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.get('/subjects', (req, res, next) => {
  let searchStr = compose(split(':'), pathOr('', ['query', 'filter']))(req)
  const filter = pathOr(null, ['query', 'filter'])(req)
  var options = {}
  if (filter) {
    options = {
      include_docs: true,
      startkey: 'subject_' + last(searchStr),
      endkey: 'subject_' + last(searchStr) + '\ufff0'
    }
  } else {
    options = {
      include_docs: true,
      startkey: 'subject_',
      endkey: 'subject_\ufff0'
    }
  }
  listSubject(options)
    .then(results => res.status(200).send(results))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

/// //////////////////
/// // Error Handler
/// //////////////////

app.use(function(err, req, res, next) {
  console.log(req.method, ' ', req.path, ' ', 'error ', err)
  res.status(err.status || 500).send(err)
})

app.listen(port, () => console.log('Im up and ready to go on port ', port))
