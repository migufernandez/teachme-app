const { assoc } = require('ramda')
const pkGenerator = require('./lib/build-pk')
const {
  get,
  create,
  update,
  deleteDoc,
  allDocs,
  findDocs
} = require('./lib/dal-helper')

const createTutor = tutor => {
  tutor._id = pkGenerator('tutor_', tutor.name)
  return create(tutor)
}
const getTutor = id => get(id)
const updateTutor = doc => update(doc)
const deleteTutor = id => deleteDoc(id)
const listTutor = options => allDocs(options)

const createSubject = subject => {
  subject._id = pkGenerator('subject_', subject.subjectName)
  return create(subject)
}
const getSubject = id => get(id)
const updateSubject = doc => update(doc)
const deleteSubject = id => deleteDoc(id)
const listSubject = options => allDocs(options)

const dal = {
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
}

module.exports = dal
