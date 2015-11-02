# Conference Room app -- Client 

[![Stories in Ready](https://badge.waffle.io/wbrefvem/conference-room.png?label=ready&title=Ready)](https://waffle.io/wbrefvem/conference-room)
[![Build Status](https://travis-ci.org/wbrefvem/conference-room.svg?branch=master)](https://travis-ci.org/wbrefvem/conference-room)

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## RHEL 6.x Production Provisioning

### Update
> `sudo yum update`

### EPEL
> `sudo wget http://download.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm`  
> `sudo rpm -ivh epel-release-6-8.noarch.rpm`

### Python 2.7

##### Install dependencies  
> `sudo yum groupinstall "Development Tools"`    
> `sudo yum install zlib-devel bzip2-devel`  
> `sudo yum install openssl-devel ncurses-devel sqlite-devel readline`    

##### Download binary  
> `cd $DOWNLOAD_DIR`  
> `sudo wget https://www.python.org/ftp/python/2.7.10/Python-2.7.10.tar.xz`  
> `sudo tar xvf Python-2.7.10.tar.xz`

##### Compile & install  
> `cd $DOWNLOAD_DIR/Python-2.7.10`  
> `sudo ./configure`  
> `sudo make`  

*Here we may have to manually resolve any outstanding dependencies and re-run make.*  
> `sudo make altinstall`  

### Python utilities

> `sudo yum install python-pip`  
> `sudo yum install python-virtualenv`

### Nginx

> `sudo rpm -Uvh https://mirror.webtatic.com/yum/el6/latest.rpm`  
> `sudo yum install nginx18`

### PostgreSQL

> `sudo rpm -Uvh http://yum.postgresql.org/9.4/redhat/rhel-6-x86_64/pgdg-redhat94-9.4-1.noarch.rpm`  
> `sudo yum install postgresql94 postgresql94-server postgresql94-contrib`

### Supervisor

> `sudo pip install supervisor`  
> `sudo wget https://raw.githubusercontent.com/Supervisor/initscripts/master/redhat-init-equeffelec -O /etc/init.d/supervisord`  
> `sudo echo_supervisord_conf > /etc/supervisord.conf`  
> `sudo mkdir /etc/supervisor.d`  

##### Add the following to /etc/supervisord.conf:
> `[include]`  
> `files = supervisor.d/*.ini` 

### Conference Room app

##### Data server
> `cd /u01`  
> `git clone git@github.com:wbrefvem/conference-room-api.git`  
> `cd conference-room-api`  
> `virtualenv .venv`  
> `sudo cp conference-room-api.ini /etc/supervisor.d/conference-room-api.ini`  

##### Front-end server
> `cd /u01`  
> `git clone git@github.com:wbrefvem/conference-room.git`  
> `cd conference-room`  
> `sudo cp nginx.conf /etc/nginx/nginx.conf`

### Start servers

> `sudo service postgresql-9.4 start`  
> `sudo service supervisord start`  
> `sudo service nginx restart`  

## RHEL 7.x Production Provisioning

### Data server
> `cd /u01`  
> `git clone git@github.com:wbrefvem/conference-room-api.git`  
> `cd conference-room-api`  
> `COMPOSE_FILE=production.yml docker-compose up -d`  

### Front-end server
> `cd /u01`  
> `git clone git@github.com:wbrefvem/conference-room.git`  
> `cd conference-room`  
> `COMPOSE_FILE=production.yml docker-compose up -d`  
