const Note = require('./models/note')

const notes = [
    {
        title:'MongoDb',
        note:'Mongoose provides a straight-forward, schema-based solution to model your application data.'
    },
    {
        title:'MongoDb-about',
        note:'It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.'
    },
    {
        title:'espressJs',
        note:'The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.'
    },
    {
        title:'Mongoose',
        note:'Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.'
    },
    {
        title:'Lorem ipsum',
        note:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua'
    },
    {
        title:'npm',
        note:'a JavaScript package manager'
    }
]

const seedDb = async() =>{
    await Note.insertMany(notes)
    console.log('db seeded')
}

module.exports = seedDb 