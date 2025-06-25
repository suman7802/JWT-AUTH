# JWT Auth API

Node.js + MongoDB JWT authentication system.

## Features

- Register & login
- JWT authentication
- Secure password hashing (bcrypt)
- MongoDB + Mongoose
- View own profile

## Routes

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | /api/auth/register | Register new user      |
| POST   | /api/auth/login    | Login and get token    |
| GET    | /api/auth/me       | Get current user (JWT) |

## Postman Documentation

[View API Docs on Postman](https://documenter.getpostman.com/view/46183183/2sB2xEAU3W)

## Setup

```bash
git clone <repo-url>
cd jwt-auth
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and update the values as needed:
