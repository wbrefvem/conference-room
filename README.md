# Conference Room  [![Build Status](https://travis-ci.org/wbrefvem/conference-room.svg?branch=master)](https://travis-ci.org/wbrefvem/conference-room) [![Davis Dependency status](https://david-dm.org/wbrefvem/conference-room.svg)](https://david-dm.org/wbrefvem/conference-room.svg) 

## App Structure

This app uses the [Sane Stack](http://www.sanestack.com), which consists of a loosely coupled frontend, [Ember.js](http://emberjs.com),
and backend, [Sails.js](http://sailsjs.org). Each is a separate [Node.js](http://nodejs.org) web app. 

## Prerequisites

* [Node](https://nodejs.org/)
* [Bower](http://bower.io)
* [Sails](http://sailsjs.org)
* [Ember CLI](http://www.emeber-cli.com)
* [Sane CLI](http://sanestack.com)

## Installation & Usage

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

    Assuming you're still in conference-room/server, run the script:
    ```
    node fixtures.js
    ```

* Run server.  

    From the top-level directory, run: 
    ```
    sane up
    ```

The backend is available at http://localhost:1337 and the Ember frontend, with livereload enabled, is available
at http://localhost:4200. Enjoy!