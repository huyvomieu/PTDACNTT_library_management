module.exports = {
    multipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: (mongoose) => mongoose.toObject()
}
