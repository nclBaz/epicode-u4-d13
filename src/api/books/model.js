import mongoose from "mongoose"

const { Schema, model } = mongoose

const booksSchema = new Schema(
  {
    asin: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true, enum: ["history", "horror", "romance", "fantasy"] },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export default model("Book", booksSchema)
