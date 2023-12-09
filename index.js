document.getElementById('signUp').addEventListener('click', () => {
    document.getElementById('container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.getElementById('container').classList.remove('right-panel-active');
});

function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);

        if (!userExists) {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful. Please log in.');
            document.getElementById('container').classList.remove('right-panel-active');
        } else {
            alert('Username already exists. Please choose another.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful. Welcome, ' + username + '!');
            // You can redirect or perform other actions after successful login
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}
