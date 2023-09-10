const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema =  new Schema({
    taskText: {
        type: String,
        required: true,
    },
    taskStatus:{
        type: String,
        enum: ['Pending', 'In Progress', 'Complete'],
        required: true,
    },
    startDate:{
        type: String,
        default: function() {
            return new Date();
        },
        required: true,
    },
    endDate:{
        type: String,
        default: function() {
            return new Date();
        },
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Todo', todoSchema);