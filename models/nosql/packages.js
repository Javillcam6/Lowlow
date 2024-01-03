const mongoose = require("mongoose");

// Creamos un esquema de datos por medio de Schema
const packagesScheme = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        streamingPlatform: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        availablePackages: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true, // TODO LO RELACIONADO A createdAt, updatedAt
        versionKey: false,
    }
);

module.exports = mongoose.model("packages", packagesScheme);
