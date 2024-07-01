# Notes

- To start project
- `npm init -y`

## Installations

- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- `npm install express dotenv`

- [cors](https://www.npmjs.com/package/cors)
- `npm install cors`

## Heroku

- `heroku git: remote -a sdelpinoc-node-js-restserver`
- `git push heroku main`
- Add npm start in package.json
- Url: https://sdelpinoc-node-js-restserver.herokuapp.com/

# Notes - section 8

- [MongoDB Atlas](https://www.mongodb.com/atlas/database) -> create a account
- Create new proyect(name: cursos-udemy-fernando-herrera-node-js-restserver-cafe)
- Creae new database
- Create new cluster(name: node-js-restserver-cafe)
- Create user(name: user_node_js, password: <password>), add the credencials in .env file
- Connect by Mongo Db Compass

  - connection string: [connection-string-mongodb]

- Start mongodb compass y use the connection string:
  - [connection-string-mongodb]

## Installations

- Application: [MongoDB Compass]()

- [mongoose](https://mongoosejs.com/)
- `npm install mongoose`

- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- `npm install bcryptjs`

- [mongoose-hidden](https://www.npmjs.com/package/mongoose-hidden)
- `npm install mongoose-hidden`

- [express-validator](https://www.npmjs.com/package/express-validator)
- `npm install express-validator`

## GIT Heroku

- `herou login`
- `heroku git:remote -a node-js-restserver-mongo-db`

- To access to mongodb from Heroku, you need to go to MongoDb Atlas(Web), Security -> Network Access, IP Access List,
  +ADD IP ADDRESS, select ALOW ACCCESS FROM ANYWHERE -> Confirm.

- In Heroku, go to your dashboard, select the App, clic in More, Restart all dynos.

## GIT

- Remove tracing of .env file
- `git rm .env -cached`

- Get back the file
- `git checkout HEAD .env`

## Heroku

- Check environment variables:
- `heroku config`

- Set environment variables:
- `heroku config:set name="Sergio"` -> This is set in process.env.nombre now

- Delete environment variables:
- `heroku config:unset name`

- Set the MONGODB connection string:
- `heroku config:set MONGODB_CNN=""`

# Notes - Section 9

## JWT

- [JWT](https://jwt.io/)

## Installations

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- `npm install jsonwebtoken`

## Heroku

- `herou login`
- `heroku git:remote -a node-js-restserver-mongodb-jwt`

- Set the environment variables:

  - `heroku config:set MONGODB_CNN=""`
  - `heroku config:set SECRETORPRIVATE_KEY=""`

- To check logs:
  - `npm logs -n 100`
  - `npm logs -n 100 --tail` -> Live logs

  
- To rebuild the modules of node:
- `npm install`

## Mongodb

- [MongoDB Atlas](https://www.mongodb.com/atlas/database) -> create a account
- Create new project
- Create new database
- Create new cluster
- Create user, add the credentials(MONGODB_CNN) in .env file
- Connect by Mongo Db Compass
- Start mongodb compass y use the connection string

### Collections Mongodb:

- users

```
{
    "email": "",
    "password": "",
    "status": true
}
```

## URL BASE:

- http://localhost:3000

### Login user:

- Generate a auth token
- Url: /api/auth/login
- Method: POST
- Request(application/json):

```
{
    "email": "test1@email.com",
    "password": "123456"
}
```

- Response:

```
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
```

### Create a user

- Url: /api/users/
- Method: POST
- Request: application/json
- Body:

```
{
    "name": "Test",
    "email": "test@email.com",
    "password": "123456"
}
```

### Add fav

- Url: /api/favs/:id
- Method: POST
- Request: application/json
- Body:

```
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2UyNTIyZWU5Y2ZhMTZhMjc2N2M4N2YiLCJpYXQiOjE2NzU3ODQ2NTcsImV4cCI6MTY3NTc5OTA1N30.xK0PzMuJFDUl1ndtOzksuIsUI1vYRAMSj_BMcumc7lA"
}
```

### Delete fav

- Url: /api/favs/:id
- Method: DELETE
- Request: application/json
- Body:

```
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2UyNTIyZWU5Y2ZhMTZhMjc2N2M4N2YiLCJpYXQiOjE2NzU3ODQ2NTcsImV4cCI6MTY3NTc5OTA1N30.xK0PzMuJFDUl1ndtOzksuIsUI1vYRAMSj_BMcumc7lA"
}
```

