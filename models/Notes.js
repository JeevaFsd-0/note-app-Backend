const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
        },
        description: String,
    },
    {timestamps: true}
);

const Notes = mongoose.model("notes", NoteSchema);

module.exports = Notes;