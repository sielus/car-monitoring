# Car Monitoring

This project is currently in progress of development.

Project moved on: https://gitlab.com/car-monitoring-nestjs-microservices


### Current status:
- npm libs for events types and list of topics
- npm lib for guard (handling jwt token + scopes for permissions)
- Auth Service => 
  - handling events for upsert / remove user and user-scope relation from user-service
  - generating jwk token for user
  
- User Service =>
    - sending events for upsert / remove user and user-scope relation
    - rest api for user: create/update/remove user data
    - graphql for admin: all users list, updating user-scope relation, creating / removing scopes

## Description

### Main Ideas:
- Microservices structure (BE apps in NestJS, PostgresqlDB)
- Communication between services via queue (Kafka or Azure Service Bus)
- JWT as the main authentication method
- REST only for authentication, GraphQL for data
- Static values like user permissions, user relations, etc., updated/handled by CRON
- Dynamic values like car location: directly added into the queue
- Frontend applications in Angular (Admin and User/Customer)
- Prepare configs for Kubernetes(?)

## Features (To Be Implemented)

- Auth service
- User Management service
- Car Details service
- Communication via service bus
- JWT for authentication
- Some smaller services like car location service
- Angular frontend app (for admin and user)

Proof of Concept of Architecture
![POC services architecture](Car-Monitoring.png)
