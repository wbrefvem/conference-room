# Conference Room  
##Performance Indicators
[![Build Status](https://travis-ci.org/wbrefvem/conference-room.svg?branch=master)](https://travis-ci.org/wbrefvem/conference-room) [![Davis Dependency status](https://david-dm.org/wbrefvem/conference-room.svg)](https://david-dm.org/wbrefvem/conference-room.svg) [![Stories in Ready](https://badge.waffle.io/wbrefvem/conference-room.png?label=ready&title=Ready)](https://waffle.io/wbrefvem/conference-room) [![Stories in Ready](https://badge.waffle.io/wbrefvem/conference-room.svg?label=in progress&title=In Progress)](http://waffle.io/wbrefvem/conference-room) [![Code Climate](https://codeclimate.com/github/wbrefvem/conference-room/badges/gpa.svg)](https://codeclimate.com/github/wbrefvem/conference-room)

## App Structure

This app uses the [Sane Stack](http://www.sanestack.com), which consists of a loosely coupled frontend, [Ember.js](http://emberjs.com),
and backend, [Sails.js](http://sailsjs.org). Each is a separate [Node.js](http://nodejs.org) web app. 

## Prerequisites

These packages all require [Node.js](http://nodejs.org), installation for which varies by platform.

* [Bower](http://bower.io)
* [Sails](http://sailsjs.org)
* [Ember CLI](http://www.emeber-cli.com)
* [Sane CLI](http://sanestack.com)

```
npm install -g bower sails ember-cli sane-cli
```

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