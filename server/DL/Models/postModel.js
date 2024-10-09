const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  focusKeyword: {
    type: String,
    required: false
  },
  secondaryKeywords: [{
    type: String,
    required: false
  }],
  seoTitle: {
    type: String,
    required: false
  },
  metaDescription: {
    type: String,
    required: false
  },
  callToAction: {
    type: String,
    required: false
  },
  socialImage: {
    type: String,
    required: false
  }
});

export const postModel = mongoose.models.Post || mongoose.model('Post', PostSchema);