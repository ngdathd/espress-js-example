import mongodb from './mongodb';
import postgres from './postgres';

const handleErrorDatabase = error => {
    console.log(error);
};

const connectDatabase = async () => {
    try {
        await Promise.all([postgres.connect(), mongodb.connect()]);
        console.log('Connect success');
    } catch (error) {
        handleErrorDatabase(error);
    }
};

const syncDatabase = async () => {
    try {
        await postgres.sync();
        console.log('Sync success');
    } catch (error) {
        handleErrorDatabase(error);
    }
};

const disconnectDatabase = async () => {
    try {
        await Promise.all([postgres.disconnect(), mongodb.disconnect()]);
        console.log('Disconnect success');
    } catch (error) {
        handleErrorDatabase(error);
    }
};

export {connectDatabase, disconnectDatabase, mongodb, postgres, syncDatabase};
