import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true  },
  password: { type: String, required: true  },
  lastLogin: { type: Number, default: Date.now, required: true  },
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  lastLoginField: 'lastLogin',
  hashField: 'password',
});

export default mongoose.model('User', userSchema);
