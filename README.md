# distrib-app

This app was built with Ionic 5.
The language used in the app is French.



## Purpose
This app is a platform and was designed to connect:
- Local vegetable producers at open-air markets who want to reach a broader range of customers
with
- Open-air market customers who don't necessarily have the time to go to the market and spend time to buy products

It consists in 3 actors:
- Producers
- Customers
- Relay point owners

Here is a use case scenario:
- Producers display their products on the platform.
- Customers choose which products they want and how much.
- Customers choose to pick up their order at the market or at a relay point.
- Customers pay their order on the app.
- Producers prepare the order and bring it to the relay point OR put it aside waiting for the customer to pick it up.
- Customers go to the market or relay point, show their order ID (a QR code can be implemented) and retrieve their order.
- The platform takes a commission fee, and the relay point too.



## Installation
Ionic 5 is required.

While installing, don't forget to install the libraries required for the project.

To compile the project:
- Go to the root of the project
- Install Angular
- Type in ***ionic serve***

To add your firebase project:
- Go to /src/environments/
- In ***environment.ts*** and ***environment.prod.ts***, insert the data relative to your firebase project to identificate it:
    firebase : {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    }



## Problem: markers
You have to modify the library leaflet, and more specifically the file leaflet-src.js : 
Modify the path to markers (add 'assets/' at the beginning) and place the icons in assets

