const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
<<<<<<< HEAD
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  categorySlug: {
=======
>>>>>>> 276b8455b0c3a2eb1f99751cd6629f008433eb24
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
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
  }
});

<<<<<<< HEAD
export const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);





=======
export const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);
>>>>>>> 276b8455b0c3a2eb1f99751cd6629f008433eb24
