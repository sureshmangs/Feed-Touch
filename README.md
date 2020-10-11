<p align="center"> <img src="./client/src/images/feed_touch1.png" alt="Feed Touch"/> </p>

Building a web application for people to give away their extra food to needy people


## :arrow_right: Technologies Used:

:one: MongoDB

:two: Express

:three: React + Redux

:four: Node

:five: Socket.io

## :arrow_right: Get Started

Clone the repository

`https://github.com/sureshmangs/Feed-Touch.git`

In the project directory(Feed Touch)

`npm install`

In the root directory, inside the .env file, set the following fields

```
module.exports = {
    JWT_SECRET: "XXXXXXXXXXXXX  Json Web Token Secret XXXXXXXXXXXXX",
    CLIENT_ID: "XXXXXXXXXXXXX  Google Oauth Client ID  XXXXXXXXXXXXX",
    CLIENT_SECRET: "XXXXXXXXXXXXX  Google OAuth Secret ID  XXXXXXXXXXXXX",
    MONGODB_URI: "XXXXXXXXXXXXX MongoDB URI XXXXXXXXXXXXX"
}
```

In the client directory, inside the ./src/config/keys.js file, set the following fields

```
module.exports = {
    CLIENT_ID: "XXXXXXXXXXXXX  Google OAuth Client ID  XXXXXXXXXXXXX"
}
```

In the client directory

`npm install`


To run the application in development mode, in the root dirctory

`npm run start-dev`