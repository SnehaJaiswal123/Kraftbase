# Food Delivery App Backend

This repository contains the backend code for a food delivery app, implemented as three microservices: **User Service**, **Restaurant Service**, and **Delivery Agent Service**.

## Table of Contents

- [Architecture](#architecture)
- [Database](#database)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Services](#running-the-services)
- [API Documentation](#api-documentation)

## Architecture

The backend is structured into three microservices:

1. **User Service**:
   - Retrieve a list of all restaurants available online at the given hour.
   - Place orders from the available restaurants.
   - Allow users to leave ratings for their orders and delivery agents.

2. **Restaurant Service**:
   - Update the menu, pricing, and availability status (online/offline) of the restaurant.
   - Accept/reject orders and process accepted orders.
   - Auto-assign a delivery agent to an order based on availability.

3. **Delivery Agent Service**:
   - Update the delivery status of orders.

## Database

The backend uses Node.js and MongoDB. The schema and models for the database are defined in each microservice.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (>= 14.x)
- [npm](https://www.npmjs.com/) (>= 6.x)
- [Your Chosen Database](https://www.mongodb.com/try/download/community) (e.g., MongoDB, PostgreSQL)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SnehaJaiswal123/Kraftbase.git
   cd food-delivery-app-backend
   
1. **Install dependencies**:

   ```bash
   npm install
   
## Running the Services

Create a .env file in root directory with the following environment variables:

1. **Set Up Environment Variables**:

   ```bash
   DB_URI=your_mongodb_connection_string
   PORT=service_port_number

1. **Start the Service**:

   npm start

## API Endpoints

### User services

#### 1. Retrieve online restaurant

- **Endpoint:** `POST /retrieveRestaurant`
- **Description:** Retriev online restaurants.
- **URL:** `https://kraftbase-k3g6.onrender.com/api/user/retrieveRestaurant`
- **Method:** Get

#### 2. Place an Order

- **Endpoint:** `POST /placeOrder`
- **Description:** Place an order from an available restaurant.
- **URL:** `https://kraftbase-k3g6.onrender.com/api/user/placeOrder`
- **Method:** POST

- **Request Body:**
  ```json
   {
    "userId": "6694190932c13fd97ee8e9c8",
    "restaurantId": "669417a6b10119110cfed13c",
    "items": [
        { "name": "Pizza", "price": 10, "quantity": 1 },
        { "name": "Coke", "price": 12, "quantity": 2 }
    ]
  }
  
#### 3. Add restaurant

- **Endpoint:** `POST /addRestaurant`
- **Description:** user can add restaurant.
- **URL:** `https://kraftbase-k3g6.onrender.com/api/user/addRestaurant`
- **Method:** POST

- **Request Body:**
  ```json
   {
    "name":"xyz",
    "menu":["Pizza","Coke","Burger","Cake"]
  }

 #### 4. Create User

- **Endpoint:** `POST /create`
- **Description:** New user is created.
- **URL:** `https://kraftbase-k3g6.onrender.com/api/user/create`
- **Method:** POST

- **Request Body:**
  ```json
   {
    "name":" sneha j",
    "email":"snehaj@gmail.com",
    "address":"xyz road",
    "contact":9876545678
  }
#### 5. Leave Rating

- **Endpoint:** `POST /rating`
- **Description:** User can leave rating.
- **URL:** `https://kraftbase-k3g6.onrender.com/api/user/rating`
- **Method:** POST

- **Request Body:**
  ```json
   {
    "userId": "6694190932c13fd97ee8e9c8",
    "orderId": "669419fb76d62443ef9d4914",
    "rating": 4
   }



  


   
   
