const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  colors: [{
    type: String
  }],
  flavors: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  glutenFreeOption: {
    type: Boolean,
    default: false,
  },
  notDairyOption: {
    type: Boolean,
    default: false,
  },
  diameter: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  filling: [{
    type: String
  }],
});

export const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);
