const express = require('express');
const routes = require('./Develop/routes');
const sequelize = require('./Develop/config/connection'); // Import Sequelize connection
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync Sequelize models to the database then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
