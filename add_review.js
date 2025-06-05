const axios = require('axios');

async function addOrModifyReview() {
  try {
    const response = await axios.post('http://localhost:5000/authenticated/review', {
      isbn: '111',
      review: 'This book is really insightful!'
    }, {
      headers: { 'Authorization': 'Bearer your_token_here' } // If your API needs auth token
    });
    console.log('Review Added/Modified:', response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
}

addOrModifyReview();
