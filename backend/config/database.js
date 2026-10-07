const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error('MONGO_URI is not defined');
        }

        await mongoose.connect(mongoUri);

        console.log('Mongoose Connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDatabase;