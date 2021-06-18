import {mongoUri} from 'configs/vars';
import mongoose from 'mongoose';

const mongodb = {
    connection: mongoose.connection,
    async connect() {
        if (!this.connection) {
            await mongoose.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            this.connection = mongoose.connection;
        }
    },
    async disconnect() {
        if (this.connection) {
            this.connection.close();
        }
    },
};

export default mongodb;
