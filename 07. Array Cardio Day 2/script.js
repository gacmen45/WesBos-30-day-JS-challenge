const dogs =[
    {name: 'Pimpek', year:2015},
    {name: 'Kabanos', year:2017},
    {name: 'Ugryź', year:2021},
    {name: 'Fafik', year:2011},
]
const comments = [
    {text: 'najlepiej', id:523423},
    {text: 'super', id:823423},
    {text: 'jesteś najlepszy', id:2039842},
    {text: 'dobry piesek', id:123523},
    {text: 'dobre', id:542328},
]

// .some
const isAdult = dogs.some(function(dog){
    const currentYear = (new Date().getFullYear())
    if(currentYear - dog.year >=7){
        return true
    }

})

const isAdult2 = dogs.some(dog =>{
    const currentYear = (new Date().getFullYear())
    return currentYear - dog.year >=7
})


// .every
const allAdults = dogs.every(dog =>{
    const currentYear = (new Date().getFullYear())
    return currentYear - dog.year >=7
})

// .find
const comment = comments.find(function(comment){
    if(comment.id ===123523){
        return true
    }
})

const comment2 = comments.find(comment=>comment.id ===123523)

// .findIndex
const index = comments.findIndex(comment => comment.id === 823423)

console.log(index);