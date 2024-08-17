const users = [
    {
        email: 'Wesman687@gmail.com',
        password: 'Pothead420!'
    },
    {
        email: 'bob@google.com',
        password: 'password'
    },
    {
        email: 'john@google.com',
        password: 'password'
    }

]

export const getUserByEmail = (email) => {
    const found = users.find(user => user.email === email)
    return found
}