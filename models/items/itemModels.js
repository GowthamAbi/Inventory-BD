const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["GOODS", "SERVICE"],
     
    },

    name: {
      type: String,

      trim: true,
    },

    sku: String,

    unit: String,

    returnable: {
      type: Boolean,
      default: false,
    },

    dimensions: {
      length: Number,
      width: Number,
      height: Number,
      unit: String, // cm / in
    },

    weight: {
      value: Number,
      unit: String, // kg / g / lb / oz
    },

    manufacturer: String,
    brand: String,

    upc: String,
    ean: String,
    mpn: String,
    isbn: String,

    salesInfo: {
      enabled: Boolean,
      price: Number,
      account: String,
      description: String,
    },

    purchaseInfo: {
      enabled: Boolean,
      costPrice: Number,
      account: String,
      description: String,
      preferredVendor: String,
    },

    inventory: {
      trackInventory: Boolean,
      inventoryAccount: String,
      openingStock: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);