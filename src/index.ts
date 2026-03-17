import 'dotenv/config';
import app from './app';
import sequelize from './config/db';

const port = process.env.PORT || 4000;

sequelize
  .sync()
  .then(() => {
    console.log('Database connected successfully');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.error('DB error:', err));
