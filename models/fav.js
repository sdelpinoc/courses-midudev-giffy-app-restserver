import moongoose from 'mongoose';
import mongooseHidden from 'mongoose-hidden';

const { Schema, model } = moongoose;

const FavSchema = Schema({
    id: {
        type: String,
        required: [true, 'The id is obligatory']
    }
});

// By default the plugin hide the _id and __v properties
// With the line below you can remove the default behaviour
// FavSchema.plugin(mongooseHidden({autoHideJSON: false, autoHideObject: false}));

// unhides _id and hide password
FavSchema.plugin(mongooseHidden(), { hidden: { _id: false } });

FavSchema.methods.toJSON = function () {
    const { _id: uid, ...fav } = this.toObject();

    fav.uid = uid;

    return fav;
};

// Mongoose by default it will add a 's' to the name of collection
// The initial letter must be capitalized
const Fav = model('Fav', FavSchema);

export default Fav;