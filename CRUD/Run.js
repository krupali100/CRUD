//find database
db.movies.find()

//find specific data\
db.movies.find( { "year": 2018 } )



db.movies.find({"title" : "Dune"})
db.movies.find({"title" : "Maharaja"})


//specify Conditions using Query Operations
db.movies.find( { rated: { $in: [ "PG", "PG-13" ] } } )
db.movies.find( { year: { $in: [ "2018", "2020" ] } } )
db.movies.find( { countries: "Mexico", "imdb.rating": { $gte: 7 }})
db.movies.find( { cast: "Lilly James", "runtime": { $gte: 121 }})

// special Logical Operators(OR)
db.movies.find( {
    runtime: 121,
    $or: [ { "year": { $gte: 2019 } }, { genres: "Drama" } ]
} )


db.movies.find()

db.users.find()



