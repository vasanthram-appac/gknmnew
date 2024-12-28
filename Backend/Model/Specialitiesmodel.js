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

const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);

const specialitiesschema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: false,
        default: null,
    },
    title: {
        type: String,
        required: false,
        default: null,
        maxlength: 255,
    },
    subtitle: {
        type: String,
        required: false,
        default: null,
    },
    image: {
        type: String,
        required: false,
        default: null,
        maxlength: 255,
    },
    overtitle:{
        type: String,
        required: false,
        default: null,
        maxlength: 255,
    },
    oversubtitle: {
        type: String,
        required: false,
        default: null,
    },
    procedures: {
        type: String,
        required: false,
        default: null,
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
specialitiesschema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const counter = await Counter.findOneAndUpdate(
                { modelName: 'Specialities' },
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
const Specialitiesmodel = mongoose.models.Specialities || mongoose.model('Specialities', specialitiesschema);

module.exports = Specialitiesmodel;
