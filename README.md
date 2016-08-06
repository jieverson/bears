# bears
Dummy nodejs Bears' api, using NoDemon and `Nyan` testing.

## Running from Source

Make sure you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.org/) installed.

Then

```shell
# Clone this repo
git clone https://github.com/jieverson/bears.git
# Go into the repo
cd bears
# Make sure you have some global packages
npm install -g nodemon
npm install -g mocha
# Install dependencies
npm install
# Run mongodb
mongod
# Execute nyan testing
npm test
# Run server at localhost:3000
nodemon
```