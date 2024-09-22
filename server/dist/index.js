"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Initialize express
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON
app.use(express_1.default.json());
// MongoDB connection logic
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
mongoose_1.default
    .connect(mongoURI, {})
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
