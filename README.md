# Conference Room  [![Build Status](https://travis-ci.org/wbrefvem/conference-room.svg?branch=master)](https://travis-ci.org/wbrefvem/conference-room) [![Davis Dependency status](https://david-dm.org/wbrefvem/conference-room.svg)](https://david-dm.org/wbrefvem/conference-room.svg) 

## App Structure

This app uses the [Sane Stack](http://www.sanestack.com), which consists of a loosely coupled frontend, [Ember.js](http://emberjs.com),
and backend, [Sails.js](http://sailsjs.org). Each is a separate [Node.js](http://nodejs.org) web app. 

## Installation & Usage

* Install sails and sane-cli.  

    ```
    npm install -g sails sane-cli 
    ```

* Clone this repo.  
    
    ```
    git clone https://github.com/wbrefvem/conference-room.git
    ```

* Install dependencies.  

    ```
    cd conference-room && npm install
    cd client && npm install && bower install
    cd ../server && npm install
    ```

* Load fixtures.  

    ```
    cd conference-room/server
    sails console
    ```  

    You'll see some startup messages, followed by a prompt:  

    ```
    sails>
    ```

    Type the following commands in at the ```sails>``` prompt:  

    ```  
    var loadFixtures = require('./loadFixtures.js');
    loadFixtures();
    ```  

* Run server.  

    From the top-level directory, run: 
    ```
    sane up
    ```

The backend is available at http://localhost:1337 and the Ember frontend, with livereload enabled, is available
at http://localhost:4200. Enjoy!