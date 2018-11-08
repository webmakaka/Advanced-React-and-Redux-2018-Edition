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
   
result:
    {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmUyZmU4MmExMzAyYjA5ZWQxNmYzMmEiLCJpYXQiOjE1NDE2MDI5NDY1NjN9.JpDEceLVHX4_awvWcXtgzQz_K_oBtmx7Lz0IPSLVmlM"}

<br/>
    $ curl http://localhost/ -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmUyZmU4MmExMzAyYjA5ZWQxNmYzMmEiLCJpYXQiOjE1NDE2MDI5NDY1NjN9.JpDEceLVHX4_awvWcXtgzQz_K_oBtmx7Lz0IPSLVmlM" 

result:

    {"hi":"there"}


<br/>

### Local Strategy

    $ npm install --save passport-local       

    $ curl -X POST http://localhost/signin -d '{ "email": "email@email.com", "password": "password1"}'

result:
    {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmUyZmU4MmExMzAyYjA5ZWQxNmYzMmEiLCJpYXQiOjE1NDE2MDg2NTUxMjB9.csMGEmmpDQHIKc887_dwHPLiVwLxhEoF7XukkPlrfZs"}

<br/>

![Application](/img/pic1.png?raw=true)

<br/>

![Application](/img/pic2.png?raw=true)

<br/>

## Client Side Auth

    $ rm -rf client/
    $ npx create-react-app client

    $ cd client
    $ npm install --save react-router-dom redux react-redux redux-form axios redux-thunk
    $ rm -rf src

    $ cd server
    $ npm install --save cors

<br/>

![Application](/img/pic3.png?raw=true)



---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>