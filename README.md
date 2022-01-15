# Hiring-Server

## About

This repository contains the backend service for the hiring form.

Service talks to differnet services like s3, google sheet API.

Javascript is used the project.

I use aws EC2 to deploy the service, and aws S3 storage to upload incoming cvs.


## Folder Structure Example

```

src
	config
	controllers
	middlewares
	services
    utils
    validations
    app.js
    routes.js
    server.js

package.json
.gitignore
.env.example
.env

```

## How to start the project
- You need to provide .env file with the necessary credentials as it is in the .env file.
- Also you need to add google crdentials.json file to the root of the project.
- then you need to install packages using npm i 
- you can start the project using npm run start script.

## Flow of the project
- Submit-form API receive the form data along as with the uploaded cv.
- It store the form data to a shared google sheet.
- Then It uploaded the cv to s3 storage into a bucket called hiringcvsbucket

## Submit Form API info 
- method: POST
- host: http://44.201.242.231:7000
- path: /api/submit-form
- body type: form-data
- body parameters keys: position, experienceYears, uniquenessReason, choosingReason, careerDescirpiton, CV
- success reponse example: {
    "code": "OK",
    "statusCode": 200,
    "message": "form is submitted successfully!",
    "timestamp": "2022-01-15T10:33:26+00:00"
}


## Links
- You can access the server through this link http://44.201.242.231:7000/api/health
- You can access the shared google file sheet through this link 
https://docs.google.com/spreadsheets/d/1a2ISH9ib_iGABmAwpHZYEYaY_7Zdx9i02nH4zRyI7Zg/edit?usp=sharing