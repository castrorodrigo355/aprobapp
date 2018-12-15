const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/dbcalendario", {useNewUrlParser: true})

module.exports = {Schema, mongoose}