// users.js

const defaultUsers = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        id: 2,
        username: "johnDoe",
        password: "password123",
        role: "user"
    }
];

localStorage.setItem('users', JSON.stringify(defaultUsers));
