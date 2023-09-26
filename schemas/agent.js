const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const agentSchema = new Schema({
    agent_name: String,
    agent_photo: String,
    agent_aadhar_number: {
        type: String,
        required: true,
        unique: true
    },
    agent_operation_area: String,
    agent_address: String,
    agent_mob_number: {
        type: String,
        required: true,
        unique: true
    },
    agent_email: {
        type: String,
        required: true,
        unique: true
    },
    agent_id_type: String,
    agent_id_photo: String,
    agent_active: Boolean,
    agent_verified: Boolean,
    agent_products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    ],
    remark1: String,
    remark2: String,
    remark3: String,
    remark4: String,
    remark5: String
});

donorSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('agent', agentSchema);