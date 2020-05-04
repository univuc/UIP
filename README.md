# UIP

**User Identity Provider**

> This project is part of [Univ UC](https://github.com/univuc).

## Features

### Create, read, and update user

UIP is a central source of user identification, including password and slack id.

## API

### GetUser

Find user by userId or slackUserId.

#### Request

`GET` `/users/{id}`

- id: Student number or slack user id

#### Response

- 200: `User` domain entity, JSON
- 400: Boom
- 404: Boom
- 500: Boom

### AddUser

Add new user.    
If requested with an existing user, 403 will be returned.

#### Request

`POST` `/add-user` `application/json`

- id: Student number 
- password: Univ LMS password
- slackUserId: Slack id

#### Response

- 200: `User` domain entity, JSON
- 400: Boom
- 403: Boom
- 500: Boom

### UpdateUser

Update user.    
If request with an unregistered user, 403 will be returned.

#### Request

`POST` `/update-user` `application/json`

- id: Student number 
- password: Univ LMS password
- slackUserId: Slack id

#### Response

- 200: `User` domain entity, JSON
- 400: Boom
- 403: Boom
- 500: Boom
