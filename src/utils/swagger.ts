import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'library-data Documentation',
            version: '1.0.0',
            description: 'Dokumentasi lengkap API library-data',
            contact: {
                name: 'Backend Developer',
            },
        },
        servers: [
            {
                url: '/api/v1',
                description: 'API Server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    // PENTING: Tentukan file mana yang mengandung anotasi Swagger
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;