import { Schema, model, Types } from "mongoose";

const collection = 'Cities';
const citySchema = new Schema({

    country: {type: String, required: true},
    fundation: {type: String, required: false},
    population: {type: Number, required: false},
    photo: {type: String, required: true},
    city: {type: String, required: true},
    smalldescription: {type: String, required: true},
    admin_id: {type: String, ref: 'users'},
},
{
    timestamps: true
});

const City = model(collection, citySchema);

export default City;