# Notes
- To start project
- `npm init -y`

## Installations
- [express](https://www.npmjs.com/package/express) y [dotenv](https://www.npmjs.com/package/dotenv)
- `npm install express dotenv`

- [cors](https://www.npmjs.com/package/cors)
- `npm install cors`

## Heroku

- `heroku git: remote -a sdelpinoc-node-js-restserver`
- `git push heroku main`
- Add npm start in package.json
- https://sdelpinoc-node-js-restserver.herokuapp.com/

# Notes - section 8

- [MongoDB Atlas](https://www.mongodb.com/atlas/database) -> create a account
- Create new proyect(name: cursos-udemy-fernando-herrera-node-js-restserver-cafe)
- Creae new database
- Create new cluster(name: node-js-restserver-cafe)
- Create user(name: user_node_js, password: <password>), add the credencials in .env file
- Connect by Mongo Db Compass
    - connection string: mongodb+srv://user_node_js:<password>@node-js-restserver-cafe.fdro1.mongodb.net/test

- Start mongodb compass y use the connection string:
    - mongodb+srv://user_node_js:Og6LC5HL3IIsJgM1@node-js-restserver-cafe.fdro1.mongodb.net/cafedb

## Installations

- Aplication: [MongoDB Compass]()

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
- `heroku git:set MONGODB_CNN=""`

# Notes - Section 9

## JWT

- [JWT](https://jwt.io/)

## Installations

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- `npm install jsonwebtoken`

## Heroku

- `herou login`
- `heroku git:remote -a node-js-restserver-mongodb-jwt`