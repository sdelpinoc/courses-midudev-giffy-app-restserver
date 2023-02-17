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
- users
~~~
{
    "email": "",
    "password": "",
    "status": true
}
~~~

## URL BASE:
- http://localhost:3000


### Login user:
- Generate a auth token
- Url: /api/auth/login
- Method: POST
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

### Create a user
- Url: /api/users/
- Method: POST
- Request: application/json
- Body:
~~~
{
    "name": "Test",
    "email": "test@email.com",
    "password": "123456"
}
~~~

### Add fav
- Url: /api/favs/:id
- Method: POST
- Request: application/json
- Body: 
~~~
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2UyNTIyZWU5Y2ZhMTZhMjc2N2M4N2YiLCJpYXQiOjE2NzU3ODQ2NTcsImV4cCI6MTY3NTc5OTA1N30.xK0PzMuJFDUl1ndtOzksuIsUI1vYRAMSj_BMcumc7lA"
}
~~~

### Delete fav
- Url: /api/favs/:id
- Method: DELETE
- Request: application/json
- Body: 
~~~
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2UyNTIyZWU5Y2ZhMTZhMjc2N2M4N2YiLCJpYXQiOjE2NzU3ODQ2NTcsImV4cCI6MTY3NTc5OTA1N30.xK0PzMuJFDUl1ndtOzksuIsUI1vYRAMSj_BMcumc7lA"
}
~~~