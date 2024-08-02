import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  name: { type: String },
  userName: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
  admin: { type: Number, default: 0 },
});

const Auth = mongoose.model("Auth", AuthSchema);

export default Auth;
