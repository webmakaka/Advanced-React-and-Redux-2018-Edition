# [Stephen Grider] Advanced React and Redux: 2018 Edition [Udemy, ENG, 2018]

Original src:  
https://github.com/StephenGrider/AdvancedReduxCode  
https://github.com/StephenGrider/ReduxSimpleStarter


    $ npx create-react-app .

<br/>

## Testing

    $ npm install --save redux react-redux

    $ npm install --save-dev enzyme enzyme-adapter-react-16

    $ npm install --save axios redux-promise moxios

<br/>

## Higher Order Components

    $ npm install --save react-router-dom

<br/>

## Middlewares with Redux

    $ npm install --save tv4

jsonschema.net

<br/>

## Server Setup - Authentication

    $ npm init -y
    $ npm install --save express mongoose morgan body-parser
    $ npm install --save-dev nodemon



<br/>

    $ npm install --save bcrypt-nodejs
    $ npm install --save jwt-simple 
    $ npm install --save passport passport-jwt  

<br/>

### Making an Authenticated Request

    $ curl -X POST http://localhost/signup -d '{ "email": "email@email.com", "password": "password1"}'
   
resulst:
    {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmUyZmU4MmExMzAyYjA5ZWQxNmYzMmEiLCJpYXQiOjE1NDE2MDI5NDY1NjN9.JpDEceLVHX4_awvWcXtgzQz_K_oBtmx7Lz0IPSLVmlM"}

<br/>
    $ curl http://localhost/ -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmUyZmU4MmExMzAyYjA5ZWQxNmYzMmEiLCJpYXQiOjE1NDE2MDI5NDY1NjN9.JpDEceLVHX4_awvWcXtgzQz_K_oBtmx7Lz0IPSLVmlM" 

resulst:

    {"hi":"there"}

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>