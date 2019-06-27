const myTodos = [{
        id: 1,
        text: 'Write the letter',
        tags: ['important', 'writing'],
        favorite: true
    },
    {
        id: 2,
        text: 'Eat some lunch',
        tags: ['food'],
        favorite: false
    },
    {
        id: 3,
        text: 'Run around the city',
        tags: ['important'],
        favorite: true
    }
]



const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        let itemString = ``

        itemString += item.completed ? `☑` : `☐`
        itemString += ` ${item.text} `
        itemString += item.favorite ? `★` : ``


        console.log(itemString)
    }
}

showTodos(myTodos)


const searchTodosText = (data, searchText) => {
    let newTodos = []

    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        const lowerCasedItemText = item.text.toLowerCase()
        const lowerCasedSearchText = searchText.toLowerCase()

        if (lowerCasedItemText.includes(lowerCasedSearchText)) {
            newTodos.push(item)
        }
    }

    return newTodos
}

const foundTodos = searchTodosText(myTodos, 'the')

showTodos(foundTodos)