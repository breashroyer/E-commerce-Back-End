const axios = require('axios');

// Define the data for the new category
const newCategoryData = {
    category_name: "New Category"
};

// Send POST request to create a new category
axios.post('http://localhost:3001/api/categories', newCategoryData)
    .then(response => {
        console.log('New category created:', response.data);
    })
    .catch(error => {
        console.error('Error creating new category:', error.response.data);
    });
