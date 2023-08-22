import { Schema, model, Types } from "mongoose";

let collection = 'cities';

let schema = new Schema({

    country: {type: String, required: true},
    fundation: {type: String, required: false},
    population: {type: Number, required: false},
    photo: {type: String, required: true},
    city: {type: String, required: true},
    smalldescription: {type: String, required: true},
    admin_id: {type: Types.ObjectId, ref: 'users'},
},
{
    timestamps: true
});

let City = model(collection, schema);

export default City;