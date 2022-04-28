import "dotenv/config"
import app from "./app.js"
import { sequelize as initSequelize } from "./db.js"

// Syncing all the models at once.
initSequelize.sync({ force: true })
  .then(() => {
    app.listen(3001, () => {
      console.log("%s listening at 3001");
    });
  }
  );
