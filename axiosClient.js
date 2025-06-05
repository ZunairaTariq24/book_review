const axios = require('axios');

async function getAllBooks() {
    const res = await axios.get('http://localhost:5000/general/books');
    console.log(res.data);
}

function getByISBN(isbn) {
    return axios.get(`http://localhost:5000/general/isbn/${isbn}`);
}

async function searchByAuthor(author) {
    const res = await axios.get(`http://localhost:5000/general/author/${author}`);
    console.log(res.data);
}

async function searchByTitle(title) {
    const res = await axios.get(`http://localhost:5000/general/title/${title}`);
    console.log(res.data);
}

getAllBooks();
// getByISBN("111").then(res => console.log(res.data));
// searchByAuthor("Author 1");
// searchByTitle("Book A");