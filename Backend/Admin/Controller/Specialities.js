const Specialitiesmodel = require('../../Model/Specialitiesmodel');

const { body, validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');

const validateSpecialities = [
    body("title")
        .notEmpty().withMessage("Title is required")
        .matches(/^[A-Za-z\s.]+$/).withMessage("Title must only contain letters, spaces, and periods"),

    body("subtitle")
        .notEmpty().withMessage("Sub Title is required")
        .matches(/^[A-Za-z\s.]+$/).withMessage("Sub Title must only contain letters, spaces, and periods"),

    body("status")
        .notEmpty().withMessage("Status is required")
        .isIn(["Active", "Inactive"]).withMessage("Status must be either 'Active' or 'Inactive'"),

    body("image")
        .optional({ checkFalsy: true })
        .notEmpty().withMessage("Image must be a valid image format (webp)"),

];

exports.getSpecialities = async (req, res, next) => {
    try {
        const data = await Specialitiesmodel.find({});

        res.json({
            msg: 'Report retrieved successfully',
            data,
        });
    } catch (error) {
        res.status(404).json({
            msg: 'Report not retrieved',
            error: error.message,
        });
    }
};

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

exports.addSpecialities = [
    upload.single('image'),
    validateSpecialities,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({ errors: errorMessages });
        }

        try {
            const { body, file } = req;
            const newSpecialities = new Specialitiesmodel(body);

            if (file) {

                if (!/\.(webp)$/i.test(file.originalname)) {
                    return res.status(400).json({ msg: 'Invalid file format. Only .webp images are allowed.' });
                }

                const uploadDir = path.join(__dirname, '../../frontend/public/images/specialities');
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                const imagePath = path.join(uploadDir, file.filename);

                fs.renameSync(file.path, imagePath);

                newSpecialities.image = `/images/doctor/${file.filename}`;
            }

            const savedSpecialities = await newSpecialities.save();

            res.json({ msg: 'Specialities added successfully', data: savedSpecialities });
        } catch (err) {
            console.error('Error adding doctor:', err);
            res.status(500).json({ msg: 'Error adding doctor', error: err.message });
        }
    },
];

exports.updateSpecialities = [
    upload.single('image'),
    validateSpecialities,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((err) => err.msg);
            return res.status(400).json({ errors: errorMessages });
        }

        try {
            const { body, file } = req;
            const { id } = req.params;

            const specialities = await Specialitiesmodel.findOne({ id });
            if (!specialities) {
                return res.status(404).json({ msg: 'Doctor not found' });
            }

            Object.assign(specialities, body);

            if (file) {

                if (!/\.(webp)$/i.test(file.originalname)) {
                    return res.status(400).json({ msg: 'Invalid file format. Only .webp images are allowed.' });
                }

                const uploadDir = path.join(__dirname, '../../frontend/public/images/specialities');
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                const imagePath = path.join(uploadDir, file.filename);

                fs.renameSync(file.path, imagePath);

                if (specialities.image) {
                    const oldImagePath = path.join(__dirname, '../../frontend/public', specialities.image);
                    if (fs.existsSync(oldImagePath)) {
                        fs.unlinkSync(oldImagePath);
                    }
                }

                specialities.image = `/images/specialities/${file.filename}`;
            }

            const updatedSpecialities = await specialities.save();

            res.json({ msg: 'Specialities updated successfully', data: updatedSpecialities });
        } catch (err) {
            console.error('Error editing doctor:', err);
            res.status(500).json({ msg: 'Error editing doctor', error: err.message });
        }
    },
];

exports.deleteSpecialities = async (req, res) => {
    const { id } = req.params;

    try {
        const specialities = await Specialitiesmodel.findOneAndDelete({ id: id });

        if (!specialities) {
            return res.status(404).json({ msg: 'Specialities not found' });
        }

        res.json({ msg: 'Specialities deleted successfully', data: specialities });
    } catch (err) {
        console.error('Error deleting specialities:', err);
        res.status(500).json({ msg: 'Error deleting specialities', error: err.message });
    }
};




