# Makers BnB Improved

## Repo Badges

[![Build Status](https://travis-ci.org/ggwc82/makers-bnb-angular-rails.svg?branch=master)](https://travis-ci.org/ggwc82/makers-bnb-angular-rails)[![Coverage Status](https://coveralls.io/repos/github/ggwc82/makers-bnb-angular-rails/badge.svg?branch=master)](https://coveralls.io/github/ggwc82/makers-bnb-angular-rails?branch=master)


## Description

It's Makers BnB, but Improved! We've rebuilt this project using Rails on the backend and AngularJS on the frontend. 


## Team Members
- Rebecca Piper
- Elaine Finn
- Yan-Yi Li
- David Parry
- Godfrey Chiu


## Technology Stack

- AngularJS
- Ruby on Rails (API)


## Installation Instructions
- Clone the repo
- bundle install
- rake db:create
- rake db:migrate
- npm install bower -g
- rake bower:install
- rails s
- Go to http://localhost:3000 in your browser


## Testing Instructions

### RSpec (Rails - unit and feature tests)
- rails g rspec:install (optional)
- rspec

### Karma (JavaScript/Angular - unit testing)
- npm install karma (sudo if needed)
- npm install -g karma-cli (optional)
- npm install karma --save-dev
- rails s (separate tab)
- ./node_modules/karma/bin/karma start

### Protractor (JavaScript/Angular - e2e testing)
- npm install -g protractor
- webdriver-manager update --standalone
- webdriver-manager start --standalone (keep this running in a separate tab)
- rails s (separate tab)
- protractor protractor.conf.js (another tab)


## Implementation

AngularJS with Angular Seed for the seperate frontend, running on Node.js with Protractor for e2e tests and Karma for unit tests. Ruby on Rails API backend communicating via JSON and http requests. Full CRUD functionality was implemented for the Spaces model. The next feature to implement would be to create a Users model, with authentication via JSON Web Tokens and Devise for users to sign up, in and out.


## Completed User Stories

### MVP

```
As a host, 
so I can list a space to rent, 
I want to be able to list a space.
```
```
As a guest, 
so that I know what spaces are available, 
I want to see a list of available spaces.
```
```
As a host, 
so that I can explain what the place is like, 
I want to be able to describe a space.
```
```
As a host,
so that I can list all my properties,
I want to be able to list multiple spaces.
```
```
As a host,
so that I can make changes,
I want to be able to update my own spaces.
```
```
As a host,
so that I can make changes,
I want to be able to delete my own spaces.
```