# dashboard

### Installation

[Node](https://nodejs.org/en/download/package-manager/)

  I will be showing my workflow for Ubuntu terminal installation. 

#### Install Curl
`>sudo apt-get install curl`

#### Install [Mongo](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-ubuntu/)

Import the public key used by the package management system.

`sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10`

Create a list file for MongoDB

`echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse"`

Reload local package database

`sudo apt-get update`

Install latest stable version of MongoDB

`sudo apt-get install -y mongodb-org`

#### Install Node
```
>curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

>sudo apt-get install -y nodejs
```

#### Install Git
`>sudo apt-get install git`

#### Set your ID
`>git config --global user.email "chunkylover53@aol.com"`

`>git config --global user.name "homerS"`
  
Navigate to your applications root folder
  
#### Pull down node modules from NPM
```
>sudo npm install --save q

>sudo npm install --save feed-read

>sudo npm install --save node-readability
```

#### Or update your package.json *dependencies* to this
```
  "dependencies": {
    "feed-read": "0.0.1",
    "node-readability": "^2.2.0",
    "q": "^1.4.1"
  }
```

then run command..

`>sudo npm install`

### Next Up, creating the code to pull down the news from RSS.

### Next up, creating the code to pull down news from Google News