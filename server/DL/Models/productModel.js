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
  glutenContent: {
    type: String,
    enum: ['מכיל גלוטן', 'ללא גלוטן'],
    required: true
  },
  dairyContent: {
    type: String,
    enum: ['חלבי', 'פרווה'],
    required: true
  },
  measurements: {
    type: String,
    required: true
  }
});

export const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);
