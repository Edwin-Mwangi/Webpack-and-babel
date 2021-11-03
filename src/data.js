const users = [
    {name: "yoshi", premium: true},
    {name: 'braun', premium: false},
    {name: 'ninja', premium: false},
    {name: 'mario', premium: true},
    {name: 'peach', premium: true}
]
const getPremUsers = (users) =>{
    return users.filter(user => user.premium);
}

export {getPremUsers, users as default};