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