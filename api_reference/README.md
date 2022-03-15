- [Main Route](#main-route)
- [Student Route](#student-route)
  - [POST new Student](#post-new-student)
  - [Update a Student](#update-a-student)
  - [GET Student/s](#get-students)
  - [DELETE a Student](#delete-a-student)
- [Book Route](#book-route)
  - [POST new Book](#post-new-book)
  - [Update a Book](#update-a-book)
  - [GET Book/s](#get-books)
  - [DELETE a Book](#delete-a-book)

### Main Route

```shell
curl -i -X GET -H 'Content-Type: application/json' http://localhost:$port
```

### Student Route

> http://localhost:$port/students

#### POST new Student

```shell
curl -i -X POST -H 'Content-Type: application/json' -d '{"firstName": "Hamza","lastName": "Qaiser" }' http://localhost:$port/students
```

#### Update a Student

```shell
curl -i -X PATCH -H 'Content-Type: application/json' -d '{"firstName": "Hamza","lastName": "Qaiserr" }' http://localhost:$port/students/:id
```

#### GET Student/s

- GET all students
  
```shell
curl -i -X GET -H 'Content-Type: application/json' http://localhost:$port/students
```

- GET a specific student

```shell
curl -i -X GET -H 'Content-Type: application/json' http://localhost:$port/students/:id
```

#### DELETE a Student

```shell
curl -i -X DELETE -H 'Content-Type: application/json' http://localhost:$port/student/:id
```

### Book Route

> http://localhost:$port/books

#### POST new Book

```shell
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "xxx","author": "Qaiser", "borrowedBy":"Usama", "dateOfBorrow":"2001-10-05", "expected_return_date":"2001-10-25"}' http://localhost:$port/books
```

#### Update a Book

```shell
curl -i -X PATCH -H 'Content-Type: application/json' -d '{"name": "xxx","author": "Qaiser", "borrowedBy":"Usama", "dateOfBorrow":"2001-10-05", "expected_return_date":"2001-10-25"}' http://localhost:$port/books/:id
```

#### GET Book/s


- GET all students
  
```shell
curl -i -X GET -H 'Content-Type: application/json' http://localhost:$port/books
```

- GET a specific student

```shell
curl -i -X GET -H 'Content-Type: application/json' http://localhost:$port/books/:id
```

#### DELETE a Book

```shell
curl -i -X DELETE -H 'Content-Type: application/json' http://localhost:$port/books/:id
```
