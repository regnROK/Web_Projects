//jshint esversion:6

// using moongose
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser : true});
// this will connect to the server and search for the database.
// If it isn't there, then it'll creat one

//second parameter will solve a warning 

const fruitSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: [true, "Please check entry"]
    },
    rating : {
        type: Number,
        min: 1,
        max : 10
    },
    review : String
});
// creat a skima - blueprint of data that we wish to store in db

const Fruit = mongoose.model("Fruit", fruitSchema);
//second prmeter is structure that fruit will follow
// first prmeter is always a string here


const fruit = new Fruit({
    name : "Apple",
    rating : 7,
    review : "Nice fruit!"
});
fruit.save();

const peach = new Fruit({
    name : "Apple",
    rating : 7,
    review : "Nice fruit!"
});

peach.save();
// every single time we save, it will add the same data

const personSchema = new mongoose.Schema({
    name : String,
    age : Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name : "harsh",
    age : 18,
    favouriteFruit : fruitSchema
});

 person.save();

const pineapple = new Fruit({
    name : "Pineapple",
    review:"Great",
    rating: 8
});

pineapple.save();

const kano = new Person({
    name: "kano",
    age: 20,
    favouriteFruit : pineapple

});

kano.save();


const kiwi = new Fruit({
    name : "kiwi",
    rating: 10,
    review : "Weird Texture"
});

kiwi.save();

// const banana = new Fruit({
//     name : "Banana",
//     rating :9,
//     review : "Yellow"
// });

// const oragne = new Fruit({
//     name : "Orange",
//     review:9,
//     review :" Good"
// });

// Fruit.insertMany([kiwi, banana, oragne], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Success!");
//     }
// });



// Fruit.find(function(err, fruits){
//     if(err){
//         console.log(err);
//     }
//     else{

//         mongoose.connection.close();
//         fruits.forEach(function(fruit){
//             console.log(fruit.name)
//         });
//         // console.log(fruits);
//     }
// });

// update data

// Fruit.updateOne({_id:"63a29bba538922622192af41"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Success");
//     }
// });

// Delete data
// Fruit.deleteOne({_id:"63a29bba538922622192af41", function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Deleted");
//     }
// }});

// Person.deleteMany({name:"kano"}, function(err){
//     if(err){
//         console.log(err);

//     }else{
//         console.log("Deleted all");
//     }
// });
