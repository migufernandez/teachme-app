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
      'The branch of mathematics that deals with general statements of relations, utilizing letters and other symbols to represent specific sets of numbers, values, vectors, etc., in the description of such relations.',
    type: 'subject',
    department: 'math'
  },
  {
    _id: 'subject_calculus',
    subjectName: 'calculus',
    description:
      'A method of calculation, especially one of several highly systematic methods of treating problems by a special system of algebraic notations, as differential or integral calculus.',
    type: 'subject',
    department: 'math'
  },
  {
    _id: 'subject_geometry',
    subjectName: 'geometry',
    description:
      'Geometry (from the Ancient Greek: γεωμετρία; geo- "earth", -metron "measurement") is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.',
    type: 'subject',
    department: 'math'
  },
  {
    _id: 'subject_statistics',
    subjectName: 'statistics',
    description:
      'Statistics is a branch of mathematics dealing with the collection, analysis, interpretation, presentation, and organization of data.',
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
  },
  {
    _id: 'subject_keyboarding',
    subjectName: 'keyboarding',
    description:
      'Keyboarding Online is a full curriculum to teach students how to type and break hunting and pecking habits.',
    type: 'subject',
    department: 'computer'
  },
  {
    _id: 'subject_programming',
    subjectName: 'programming',
    description: 'The act of instructing computers to perform tasks.',
    type: 'subject',
    department: 'computer'
  },
  {
    _id: 'subject_photoshop',
    subjectName: 'photoshop',
    description:
      'Adobe Photoshop is a raster graphics editor developed and published by Adobe Systems for macOS and Windows.',
    type: 'subject',
    department: 'computer'
  },
  {
    _id: 'subject_zoology',
    subjectName: 'zoology',
    description:
      'Is the branch of biology that studies the animal kingdom, including the structure, embryology, evolution, classification, habits, and distribution of all animals, both living and extinct, and how they interact with their ecosystems.',
    type: 'subject',
    department: 'science'
  },
  {
    _id: 'subject_chemistry',
    subjectName: 'chemistry',
    description:
      'Organic chemistry is the study of the structure, properties, composition, mechanisms, and reactions of organic compounds.',
    type: 'subject',
    department: 'science'
  },
  {
    _id: 'subject_biology',
    subjectName: 'biology',
    description:
      'Biology is the natural science that involves the study of life and living organisms, including their physical and chemical structure, function, development and evolution.',
    type: 'subject',
    department: 'science'
  },
  {
    _id: 'subject_physics',
    subjectName: 'physics',
    description:
      'Is the natural science that involves the study of matter and its motion and behavior through space and time, along with related concepts such as energy and force.',
    type: 'subject',
    department: 'science'
  },
  {
    _id: 'subject_speech',
    subjectName: 'speech',
    description:
      'the expression of or the ability to express thoughts and feelings by articulate sounds.',
    type: 'subject',
    department: 'english'
  },
  {
    _id: 'subject_vocabulary',
    subjectName: 'vocabulary',
    description: 'the body of words used in a particular language.',
    type: 'subject',
    department: 'english'
  },
  {
    _id: 'subject_grammar',
    subjectName: 'grammar',
    description:
      'Grammar is the way in which words are put together to form proper sentences.',
    type: 'subject',
    department: 'english'
  },
  {
    _id: 'subject_poetry',
    subjectName: 'poetry',
    description:
      'Poetry is a form of literature that uses aesthetic and rhythmic qualities of language—such as phonaesthetics, sound symbolism, and metre—to evoke meanings in addition to, or in place of, the prosaic ostensible meaning.',
    type: 'subject',
    department: 'english'
  },
  {
    _id: 'subject_painting',
    subjectName: 'painting',
    description:
      'Painting is the practice of applying paint, pigment, color or other medium to a solid surface (support base).',
    type: 'subject',
    department: 'fine arts'
  },
  {
    _id: 'subject_sculpture',
    subjectName: 'sculpture',
    description:
      'the art of making figures or designs in relief or the round by carving wood, moulding plaster, etc, or casting metals, etc.',
    type: 'subject',
    department: 'fine arts'
  },
  {
    _id: 'subject_ceramics',
    subjectName: 'ceramics',
    description:
      'Ceramic art is art made from ceramic materials, including clay. It may take forms including art ware, tile, figurines, sculpture, and tableware.',
    type: 'subject',
    department: 'fine arts'
  },
  {
    _id: 'subject_dance',
    subjectName: 'dance',
    description:
      'Dance is a performing art form consisting of purposefully selected sequences of human movement. This movement has aesthetic and symbolic value, and is acknowledged as dance by performers and observers within a particular culture.',
    type: 'subject',
    department: 'fine arts'
  },
  {
    _id: 'subject_spanish',
    subjectName: 'spanish',
    description:
      'Romance language that originated in the Castile region of Spain and today has hundreds of millions of native speakers around the world.',
    type: 'subject',
    department: 'foreign language'
  },
  {
    _id: 'subject_french',
    subjectName: 'french',
    description:
      'Romance language of the Indo-European family. It descended from the Vulgar Latin of the Roman Empire, as did all Romance languages.',
    type: 'subject',
    department: 'foreign language'
  },
  {
    _id: 'subject_german',
    subjectName: 'german',
    description:
      'West Germanic language that is mainly spoken in Central Europe.',
    type: 'subject',
    department: 'foreign language'
  },
  {
    _id: 'subject_italian',
    subjectName: 'italian',
    description:
      'Romance language. By most measures, Italian, together with Sardinian, is the closest to Latin of the Romance languages. Italian is an official language in Italy, Switzerland, San Marino, Vatican City and western Istria (in Slovenia and Croatia).',
    type: 'subject',
    department: 'foreign language'
  },
  {
    _id: 'subject_photography',
    subjectName: 'photography',
    description:
      'Photography is the science, art, application and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.',
    type: 'subject',
    department: 'applied arts'
  },
  {
    _id: 'subject_drafting',
    subjectName: 'drafting',
    description:
      'Drafting (aerodynamics), slipstreaming. Technical drawing, the act and discipline of composing diagrams that communicates how something functions or is to be constructed.',
    type: 'subject',
    department: 'applied arts'
  },
  {
    _id: 'subject_metal-Work',
    subjectName: 'metal Work',
    description:
      'Metal work is assessed at two levels, Ordinary level and Higher level, by means of a written examination paper and a student project. ',
    type: 'subject',
    department: 'applied arts'
  },
  {
    _id: 'subject_videography',
    subjectName: 'videography',
    description:
      'Videography refers to the process of capturing moving images on electronic media (e.g., videotape, direct to disk recording, or solid state storage) and even streaming media.',
    type: 'subject',
    department: 'applied arts'
  }
])
