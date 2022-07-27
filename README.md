# webserver + restserver + mongodb + jwt

- To rebuild the modules of node:
- `npm install`

## Mongodb
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) -> create a account
- Create new proyect
- Creae new database
- Create new cluster
- Create user, add the credencials(MONGODB_CNN) in .env file
- Connect by Mongo Db Compass
- Start mongodb compass y use the connection string

### Collections Mongodb:
- roles
~~~
{
    "role": "ADMIN_ROLE"
}

{
    "role": "USER_ROLE"
}

{
    "role": "SALES_ROLE"
}
~~~
- users
~~~
{
    "name": "",
    "email": "",
    "password": "",
    "role": "",
    "status": true,
    "google": false
}
~~~

## URL BASE:

- http://localhost:8080

### Methods:
---

#### GET:
- Generate a auth token
    - /api/auth/login

- Request(application/json):
~~~
{
    "email": "test1@email.com",
    "password": "123456"
}
~~~

- Response:
~~~
{
    "user": {
        "name": "Test 1",
        "email": "test1@email.com",
        "role": "USER_ROLE",
        "status": true,
        "google": false,
        "uid": "62def8450c05a19c9b1bd10c"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmRlZjg0NTBjMDVhMTljOWIxYmQxMGMiLCJpYXQiOjE2NTg5MzI3OTksImV4cCI6MTY1ODk0NzE5OX0.EWohoZg8RYAFYa4UsQhVV9RbNaBfLmfBy6grGGn5yOs"
}
~~~

#### DELETE:
- To delete a user(change their status to false)
    - /api/users/:id
    - Example: /api/users/62df25fe7611d7ac5beb291d

- Request(headers):
~~~
jwt-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmRlZjg0NTBjMDVhMTljOWIxYmQxMGMiLCJpYXQiOjE2NTg5MzI3OTksImV4cCI6MTY1ODk0NzE5OX0.EWohoZg8RYAFYa4UsQhVV9RbNaBfLmfBy6grGGn5yOs
~~~

- Response:
~~~
{
    "name": "Test 2",
    "email": "test2@email.com",
    "role": "USER_ROLE",
    "status": false,
    "google": false,
    "uid": "62df25fe7611d7ac5beb291d"
}
~~~