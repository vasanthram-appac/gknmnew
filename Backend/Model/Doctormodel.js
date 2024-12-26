const mongoose = require('mongoose');

// Counter schema to keep track of the last used id value
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

// Check if the Counter model is already registered
const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);

// Schema for doctors
const doctorschema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: false,
        default: null,
    },
    name: {
        type: String,
        required: false,
        default: null,
        maxlength: 20,
    },
    qualification: {
        type: String,
        required: false,
        default: null,
        maxlength: 255,
    },
    department: {
        type: String,
        required: false,
        default: null,
        maxlength: 255,
    },
    image: {
        type: String,
        required: false,
        default: null,
        maxlength: 255,
    },
    new_op: {
        type: String,
        required: false,
        default: null,
        maxlength: 100,
    },
    review_op: {
        type: String,
        required: false,
        default: null,
        maxlength: 100,
    },
    experience: {
        type: String,
        required: false,
        default: null,
        maxlength: 25,
    },
    expertise: {
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

// Middleware to automatically generate the `id` before saving the doctor document
doctorschema.pre('save', async function (next) {
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
            return next(err); // Pass the error to the next middleware
        }
    }
    this.updated_at = Date.now();
    next();
});

// Check if the Doctor model is already registered
const Doctormodel = mongoose.models.Doctors || mongoose.model('Doctors', doctorschema);

module.exports = Doctormodel;
