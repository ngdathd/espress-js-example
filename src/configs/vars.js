import dotenv from 'dotenv-safe';

dotenv.config({
    allowEmptyValues: true,
});

const port = process.env.PORT;
const postgresUri = process.env.POSTGRES_URI;
const mongoUri = process.env.MONGO_URI;

const pepper = process.env.PEPPER;
const saltLength = Number(process.env.SALT_LENGTH);

const refreshTokenLength = Number(process.env.REFRESH_TOKEN_LENGTH);

export {mongoUri, pepper, port, postgresUri, refreshTokenLength, saltLength};
