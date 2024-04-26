# Car Monitoring

This project is currently in progress of development.

## Description

### Main Ideas:
- Microservices structure
- Communication between services via queue (Kafka or Azure Service Bus)
- JWT as the main authentication method
- REST only for authentication, GraphQL for data
- Static values like user permissions, user relations, etc., updated/handled by CRON
- Dynamic values like car location: directly added into the queue
- Frontend applications in Angular (Admin and User/Customer)

## Features (To Be Implemented)

- Auth service
- User Management service
- Car Details service
- Communication via service bus
- JWT for authentication
- Some smaller services like car location service
- Angular frontend app (for admin and user)

Proof of Concept of Architecture
![POC services architecture](https://github.com/sielus/car-monitoring/blob/main/Untitled%20Diagram.jpg?raw=true)
