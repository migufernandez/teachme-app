require('dotenv').config()

const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db.bulkDocs([
  {
    _id: 'tutor_cam-montgomery',
    type: 'tutor',
    name: 'cam montgomery',
    gender: 'male',
    birthDate: '1990-11-29',
    contact: {
      email: 'camontgomery@gmail.com',
      phone: '8435873450'
    },
    sorthDesc:
      'Hi, my name is Cam Montgomery and I am a student of bio physics at University of South Carolina. I have the passion and motivation to teach any high school student. My strongest skill is calculus but I can also teach algebra and arithmetic',
    linkedIn: 'https://www.linkedin.com/in/cam-montgomery-30492432/',
    countryBirth: 'united states',
    currentLocation: {
      city: 'mount pleasant, SC',
      zipCode: 29464
    },
    education: {
      level: 'masters degree in computer science',
      institution: 'university of georgia'
    },
    subjects: [
      {
        name: 'calculus',
        rate: '$15.00'
      },
      {
        name: 'algebra',
        rate: '$19.00'
      }
    ]
  },
  {
    _id: 'tutor_trip-ottinger',
    type: 'tutor',
    name: 'trip ottinger',
    gender: 'male',
    birthDate: '1979-02-15',
    contact: {
      email: 'tripott@gmail.com',
      phone: '8434569874'
    },
    sorthDesc:
      'Hi, my name is Trip Ottinger and I am a student of computer science at University of Georgia. I have the passion and motivation to teach any high school student. My strongest skill is algebra but I can also teach calculus and arithmetic',
    startingRate: '$15.00',
    linkedIn: 'https://www.linkedin.com/in/trip-ottinger-8b465a5/',
    countryBirth: 'united states',
    currentLocation: {
      city: 'savannah, GA',
      zipCode: 31302
    },
    education: {
      level: 'masters degree in computer science',
      institution: 'university of georgia'
    },
    subjects: [
      {
        name: 'calculus',
        rate: '$15.00'
      },
      {
        name: 'algebra',
        rate: '$19.00'
      },
      {
        name: 'coding',
        rate: '$25.00'
      }
    ]
  },
  {
    _id: 'subject_algebra',
    subjectName: 'algebra',
    description:
      'the branch of mathematics that deals with general statements of relations, utilizing letters and other symbols to represent specific sets of numbers, values, vectors, etc., in the description of such relations.',
    type: 'subject',
    department: 'math'
  },
  {
    _id: 'subject_calculus',
    subjectName: 'calculus',
    description:
      'a method of calculation, especially one of several highly systematic methods of treating problems by a special system of algebraic notations, as differential or integral calculus.',
    type: 'subject',
    department: 'math'
  },
  {
    _id: 'subject_coding',
    subjectName: 'coding',
    description:
      'Is a process that leads from an original formulation of a computing problem to executable computer programs.',
    type: 'subject',
    department: 'computer'
  }
])
