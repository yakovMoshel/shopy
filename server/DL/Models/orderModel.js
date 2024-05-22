const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      flavor: {
        type: String,
        required: true
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending'
  },
  notes: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);










// import { productModel } from './productModel';
// import { categoryModel } from './categoryModel';

// const createProduct = async () => {
//   const category = await categoryModel.findOne({ name: 'עוגות' });

//   if (!category) {
//     console.error('Category not found');
//     return;
//   }

//   const newProduct = new productModel({
//     name: 'עוגת שוקולד',
//     description: 'עוגת שוקולד טעימה במיוחד עם שכבות קרם',
//     price: 100,
//     category: category._id,
//     categorySlug: category.slug,
//     image: 'url_to_image.jpg',
//     stock: 10,
//     colors: ['חום', 'לבן'],
//     flavors: ['שוקולד', 'וניל']
//   });

//   try {
//     const savedProduct = await newProduct.save();
//     console.log(savedProduct);
//   } catch (err) {
//     console.error(err);
//   }
// };

// createProduct();

