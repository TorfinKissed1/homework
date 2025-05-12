let currentUsers = [
    {
        name: `Ramil`,
        age: 19,
        country: `Voronez`,
        isAdmin: true,
        isOnline: true,
    },
    {
        name: `Kail`,
        age: 25,
        country: `Moscow`,
        isAdmin: false,
        isOnline: true,
    },
    {
        name: `Elly`,
        age: 23,
        country: `SPB`,
        isAdmin: false,
        isOnline: false,
    },
    {
        name: `James`,
        age: 31,
        country: `Moscow`,
        isAdmin: true,
        isOnline: false,
    },
    {
        name: `Alan`,
        age: 31,
        country: `Moscow`,
        isAdmin: false,
        isOnline: false,
    },
    {
        name: `Macan`,
        age: 31,
        country: `Moscow`,
        isAdmin: false,
        isOnline: true,
    },
    {
        name: `Bamby`,
        age: 31,
        country: `Moscow`,
        isAdmin: false,
        isOnline: false,
    },
    {
        name: `Mark`,
        age: 31,
        country: `Moscow`,
        isAdmin: true,
        isOnline: false,
    },
    {
        name: `Nolan`,
        age: 31,
        country: `Moscow`,
        isAdmin: true,
        isOnline: true,
    },
]



function currentUserWindow (name) {

    let basicUsers = 0;
    let onlineUsers = 0;
    let userAdminRights = 0;

    for (i = 0; i < currentUsers.length; i++) {
        if (currentUsers[i].isOnline === false) {
            onlineUsers++
        }
            if (currentUsers[i].isAdmin === false) {
                 basicUsers++
            }
                if (currentUsers[i].isAdmin === true) {
                     userAdminRights++
                 }
    }

    for (let i = 0; i < currentUsers.length; i++) {
        if (currentUsers[i].name === name && currentUsers[i].isAdmin === true) {
            return (`Hello, ${name}, you have admin. Now users online: ${onlineUsers}, Admins: ${userAdminRights}, basic users: ${basicUsers}`)
        }
    }
    
    return `Permisson denied`
     
}



console.log(currentUserWindow(`James`))


// else if (currentUsers[i].isAdmin === false) {
//     basicUsers++
// }

// else if (currentUsers[i].isAdmin === true) {
//     userAdminRights++
// }