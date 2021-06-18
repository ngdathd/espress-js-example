import {postgresUri} from 'configs/vars';
import {Sequelize} from 'sequelize';

const postgres = {
    sequelize: new Sequelize(postgresUri, {dialect: 'postgres'}),
    async connect() {
        if (!this.sequelize) {
            this.sequelize = new Sequelize(postgresUri, {dialect: 'postgres'});
        }
        await this.sequelize.authenticate();
    },
    async sync() {
        if (this.sequelize) {
            await this.sequelize.sync({
                alter: false,
            });
        }
    },
    async disconnect() {
        if (this.sequelize) {
            await this.sequelize.close();
        }
    },
};

export default postgres;
