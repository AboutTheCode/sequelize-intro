import db, { openConnection, closeConnection } from './db';
import { runMigrations } from './migration';
import User from './models/User';

async function bootstrap() {
  try {
    await openConnection();

    await runMigrations();

    console.info('Connected');

    await db.transaction(async () => {
      const user = new User({ username: 'Admin' });
      await user.save();

      const users = await User.findAll();
      console.info(users[0].username);
    });

    await closeConnection();
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
