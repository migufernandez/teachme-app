# Database

[home](../readme.md)

## Tutors

- Miguel Fernandez
- Trip Ottinger
- Cam Montgomery

### Tutor Document Example

  ```
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
  }
  ```


## subjects

### subject Document Example

  ```
  {
    _id: 'subject_algebra',
    subjectName: 'algebra',
    description:
      'the branch of mathematics that deals with general statements of relations, utilizing letters and other symbols to represent specific sets of numbers, values, vectors, etc., in the description of such relations.',
    type: 'subject',
    department: 'math'
  }
  ```

[home](../readme.md)
