const mongoose = require('mongoose');
const counterSchema = new mongoose.Schema({
    modelName: {
        type: String,
        required: true,
    },
    currentValue: {
        type: Number,
        required: true,
    },
});

const Counter = mongoose.model('Counter', counterSchema);


const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: false,
        default: null, 
    },
    username: {
        type: String,
        required: false,
        default: null,
        maxlength: 20,
    },
    password: {
        type: String,
        required: false,
        default: null,
        maxlength: 255, 
    },
    token: {
        type: String,
        required: false,
        default: null,
        maxlength: 255, 
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'], 
        required: false,
        default: 'Active',
    },
    created_at: {
        type: Date, 
        default: Date.now, 
    },
    updated_at: {
        type: Date,
        default: Date.now, 
    },
});

// Middleware to handle `updated_at` on document upd
userSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const counter = await Counter.findOneAndUpdate(
                { modelName: 'Doctor' },
                { $inc: { currentValue: 1 } },
                { new: true, upsert: true }
            );
            this.id = counter.currentValue;
        } catch (err) {
            console.error('Error updating counter:', err);
        }
    }
    this.updated_at = Date.now();
    next();
});
const Adminusermodal = mongoose.model('adminusers', userSchema);
module.exports = Adminusermodal;
