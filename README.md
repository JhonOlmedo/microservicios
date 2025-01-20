# Sistema de Microservicios con Autenticación Centralizada

Este proyecto implementa un sistema distribuido basado en microservicios utilizando Node.js y Docker, con un mecanismo de autenticación centralizada para gestionar el acceso seguro entre los diferentes servicios.

## Requisitos Previos

- Docker y Docker Compose
- Node.js (v16 o superior)
- MongoDB Compass (opcional, para gestión visual de la base de datos)
- Postman (o similar, para pruebas de API)

## Estructura del Proyecto
```
microservices-auth/
├── auth-service/
│   ├── src/
│   │   ├── models/
│   │   │   └── user.js
│   │   ├── routes/
│   │   │   └── auth.js
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
├── product-service/
│   ├── src/
│   │   ├── models/
│   │   │   └── product.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── routes/
│   │   │   └── products.js
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
```
## Instalación

## 1. Clonar el repositorio:
git clone <url-del-repositorio>
cd microservices-auth

## 2. Instalar dependencias del servicio de autenticación:
cd auth-service
npm install

## 3. Instalar dependencias del servicio de productos:
cd ../product-service
npm install

## Ejecución
docker-compose up --build