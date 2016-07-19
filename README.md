# dashboard

### Installation

[Node](https://nodejs.org/en/download/package-manager/)

  I will be showing my workflow for Ubuntu terminal installation. 

#### Install Curl
`>sudo apt-get install curl`

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

