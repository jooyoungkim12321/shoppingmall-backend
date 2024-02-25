// 유저 스키마 생성

const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: { type: String, minLength: 5 },
  role: {
    type: Number,
    default: 0,
  },
  inmage: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
