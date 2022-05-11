import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },  
  type: {
    type: String,
    required: true
  },  
  city: {
    type: String,
    required: true
  },  
  address: {
    type: String,
    required: true
  },  
  distance: {
    type: String,
    required: true
  },  
  photos: {
    type: [String],
    
  },
  desc: {
    type: String,
    required: true
  },   
  rating: {
    type: String,
    required: true
  },   
  
});