const mongoose = require('mongoose');
const { Schema } = mongoose;
// Users can add other users to their contact list
const ContactSchema = new mongoose.Schema({
    // Back-end Validations
    firstName: {type: String, required: [true, "Name cannot be blank!"], minlength: [3, "FIrst Name requires a minimum of 3 characters!"]},
    lastName: { type: String, required: [true, "Name cannot be blank!"], minlength: [3, "Last Name requires a minimum of 3 characters!"]},
    phoneNumber: { type: Number, required: [true, "Number cannot be blank!"], minlength: [10, "Phone Number requires a minimum of 10 digits!"] ,maxlength: [10, "Phone number max length is 10!"]}
}, {timestamps: true});

const UserSchema = new mongoose.Schema({
    googleId: {type: String},
    myContacts: [ContactSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

// Users to favorite other Users
const FavoriteUserSchema = new mongoose.Schema({
    favoriteUser: [ContactSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

// Make sure email is in email format (Backend)

// UserSchema.path('email').validate(function (email) {
//     var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     return emailRegex.test(email.text); // Assuming email has a text attribute
// }, 'Invalid E-mail!')

mongoose.model('User', UserSchema);
mongoose.model('FavoriteUser', FavoriteUserSchema);
mongoose.model('Contact', ContactSchema);