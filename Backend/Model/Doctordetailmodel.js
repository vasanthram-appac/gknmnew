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
const doctordetailschema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: false,
        default: null,
    },
    dr_id: {
        type: Number,
        required: true,
        default: 0,
        
    },
    title: {
        type: String,
        required: false,
        default: null,
        maxlength: 255,
    },
    content: {
        type: String,
        required: false,
        default: null,
    },
    titlestatus: {
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
doctordetailschema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const counter = await Counter.findOneAndUpdate(
                { modelName: 'Doctordetail' },
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
const Doctordetailmodel = mongoose.models.Doctordetails || mongoose.model('Doctordetails', doctordetailschema);

module.exports = Doctordetailmodel;
