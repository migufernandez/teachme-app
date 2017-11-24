# API

[home](../readme.md)

## Getting Started

TODO

### Environment Variables

TODO

## Tutors

## POST /tutors

Adds a tutor to the collection of tutors.  When adding a tutor the `name`, `gender`, `birthDate`, `contact`, `countryBirth`, `currentLocation`, `education`, `subject`, `department` are required fields.

** Sample Request **

  ```
  POST /categories

  {
    "type": "tutor",
    "name": "trip ottinger",
    "gender": "male",
    "birthDate": "1979-02-15",
    "contact": {
      "email": "tripott@gmail.com",
      "phone": "8434569874"
    },
    "countryBirth": "united states",
    "currentLocation": {
      "city": "mount pleasant",
      "zipCode": 29464
    },
    "education": {
      "level": "masters degree in computer science",
      "institution": "university of georgia"
    },
    "subject": [
      "keyboarding",
      "programming"
    ],
    "department": "computers"
  }
  ```

** Sample 201 Response **

```
{
    "ok": true,
    "id": "tutor_trip-ottinger",
    "rev": "4-928c97d3e1b0865fa2df18270944df85"
}
```

## GET /tutors/{id}

Gets a tutor from the collection of tutors.  

** Sample Request **

```
GET /tutors/tutor_trip-ottinger
```

** Sample 200 Response **

```
{
    "_id": "tutor_trip-ottinger",
    "_rev": "14-778eeb36a4f3c03403d3b39c4e8df4da",
    "type": "tutor",
    "name": "trip ottinger",
    "gender": "male",
    "birthDate": "1979-02-15",
    "contact": {
        "email": "tripott@gmail.com",
        "phone": "8434569874"
    },
    "countryBirth": "united states",
    "currentLocation": {
        "city": "mount pleasant",
        "zipCode": 29464
    },
    "education": {
        "level": "masters degree in computer science",
        "institution": "university of georgia"
    },
    "subject": [
        "keyboarding",
        "programming"
    ],
    "department": "computers"
}
```

## PUT /tutors/{id}

Edits the tutor object. Only visible for admin
Edits a tutor from the collection of tutors.  When adding a tutor the `_id`, `_rev`, `type`, `name`, `gender`, `birthDate`, `contact`, `countryBirth`, `currentLocation`, `education`, `subject`, `department` are required fields

** Sample Request **

```
PUT /tutors/tutor_trip-ottinger

{
    "_id": "tutor_trip-ottinger",
    "_rev": "14-778eeb36a4f3c03403d3b39c4e8df4da",
    "type": "tutor",
    "name": "trip ottinger",
    "gender": "male",
    "birthDate": "1979-02-15",
    "contact": {
        "email": "tripott@gmail.com",
        "phone": "8434569874"
    },
    "countryBirth": "united states",
    "currentLocation": {
        "city": "mount pleasant",
        "zipCode": 29464
    },
    "education": {
        "level": "masters degree in computer science",
        "institution": "university of georgia"
    },
    "subject": [
        "keyboarding",
        "programming"
    ],
    "department": "computers"
}
```

** Sample 202 Response **

```
{
    "ok": true,
    "id": "tutor_trip-ottinger",
    "rev": "4-928c97d3e1b0865fa2df18270944df85"
}
```

## DELETE /tutors/{id}

** Sample Request **

```
DELETE /tutors/tutor_trip-ottinger
```

** Sample 200 Response **

```
{
    "ok": true,
    "id": "tutor_trip-ottinger",
    "rev": "4-928c97d3e1b0865fa2df18270944df85"
}
```

## GET /tutors

Retrieves a list of tutors.

** Sample Request **

```
GET /tutors
```

** Sample 200 Response **

```
[
{
      "_id": "tutor_tom-wilson",
      "_rev": "9-a07d735a18a250935f7ebb4a0f3a6673",
      "type": "tutor",
      "name": "tom wilson",
      "gender": "male",
      "birthDate": "1979-03-16",
      "contact": {
          "email": "tomwilson@gmail.com",
          "phone": "8435769087"
      },
      "countryBirth": "united states",
      "currentLocation": {
          "city": "mount pleasant",
          "zipCode": 29464
      },
      "education": {
          "level": "masters degree in computer science",
          "institution": "georgia tech"
      },
      "subject": [
          "keyboarding",
          "programming"
      ],
      "department": "computers"
  },
  {
      "_id": "tutor_trip-ottinger",
      "_rev": "14-778eeb36a4f3c03403d3b39c4e8df4da",
      "type": "tutor",
      "name": "trip ottinger",
      "gender": "male",
      "birthDate": "1979-02-15",
      "contact": {
          "email": "tripott@gmail.com",
          "phone": "8434569874"
      },
      "countryBirth": "united states",
      "currentLocation": {
          "city": "mount pleasant",
          "zipCode": 29464
      },
      "education": {
          "level": "masters degree in computer science",
          "institution": "university of georgia"
      },
      "subject": [
          "keyboarding",
          "programming"
      ],
      "department": "computers"
  },...
]
```

[home](../readme.md)




## subjects

## POST /subjects

Adds a subject to the collection of subjects.  When adding a subject the `subjectName` and `department` are required fields.

** Sample Request **

  ```
  POST /subjects

  {
    "subjectName": "algebra",
    "type": "subject",
    "department": "math"
  }
  ```

** Sample 201 Response **

```
{
ok: "true",
_id: "subject_algebra",
_rev: "1-A6157A5EA545C99B00FF904EEF094035U"
}

```

## GET /subjects

Retrieves a list of subjects.

** Sample Request **

```
GET /subjects
```

** Sample 200 Response **

```
[
{
"_id": "subject_algebra",
"_rev": "2-98ee8b163060309fd3c15141e57d1162",
"subjectName": "algebra",
"type": "subject",
"department": "math"
},
{
  "_id": "subject_calculus",
  "_rev": "2-98ee8b163060309fd3c15141e57d1163",
  "subjectName": "calculus",
  "type": "subject",
  "department": "math"
}, ...
]
```

## GET /subjects/{id}

Retrieves a specific subject.

** Sample Request **

```
GET /subjects/subject_algebra
```

** Sample 200 Response **

```
{
"_id": "subject_algebra",
"_rev": "2-98ee8b163060309fd3c15141e57d1162",
"subjectName": "algebra",
"type": "subject",
"department": "math"
}
```

## SEARCH /departments

Returns a listing of subjects by filtering on the department `department` property.

** Sample Request **

```
GET /subjects?filter=department:math
```

** Sample 200 Response **

```
[
{
"_id": "subject_algebra",
"_rev": "2-98ee8b163060309fd3c15141e57d1162",
"subjectName": "algebra",
"type": "subject",
"department": "math"
},
{
  "_id": "subject_calculus",
  "_rev": "2-98ee8b163060309fd3c15141e57d1163",
  "subjectName": "calculus",
  "type": "subject",
  "department": "math"
}, ...
]

```


## UPDATE /subjects/{id}

Updates an existing specific subject.

** Sample Request **

```
PUT /subjects/:id

{
  "_id": "subject_calculus",
  "_rev": "2-98ee8b163060309fd3c15141e57d1163",
  "subjectName": "calculus",
  "type": "subject",
  "department": "math"
}
```

** Sample 200 Response **

```
{
ok: "true",
_id: "subject_calculus",
_rev: "2-A6157A5EA545C99B00FF904EEF094035U"
}
```

## DELETE /subjects/{id}

Deletes the provided subject from the subject list.

** Sample Request **

```
DELETE /subjects/subject_algebra
```

** Sample 200 Response **

```
[
  {
    _id: "subject_algebra",
    _rev: "1-A6157A5EA545C99B00FF904EEF05F999",
    ok: true
  }
]
```
