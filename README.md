# AutoBlogGen: Advanced Blog Automation System

Brief description of the project.

## Application Configuration

The application configuration is managed through environment variables and a configuration file located at `config/index.ts`. The configuration includes the application version, name, domain, host, port, and database settings.

### General Configuration

- **Version**: Defined by `VERSION` environment variable or the version from `package.json`.
- **Name**: Defined by `NAME` environment variable or the name from `package.json`.
- **Domain**: Defined by `DOMAIN` environment variable or defaults to `http://localhost:3000`.
- **Host**: Defined by `HOST` environment variable or defaults to `0.0.0.0`.
- **Port**: Defined by `PORT` environment variable or defaults to `3000`.

### Database Configuration

The database configuration is specified in `src/database/config/config.js` and includes settings for development, test, and production environments. It uses environment variables for database credentials and connection details.

- **Database Name**: Defined by `DB_NAME` environment variable or defaults to `blogs_local`.
- **User**: Defined by `DB_USER` environment variable or defaults to `postgres`.
- **Password**: Defined by `DB_PASSWORD` environment variable or defaults to `1234`.
- **Host**: Defined by `DB_HOST` environment variable or defaults to `localhost`.
- **Port**: Defined by `DB_PORT` environment variable or defaults to `5432`.

## Migrations

Migrations are managed by Sequelize, and the configuration for Sequelize is located in `.sequelizerc`. The paths for models, migrations, and seeders are configured here.

### Creating a Migration

To create a new migration, use the Sequelize CLI with the following command:

```bash
npx sequelize-cli migration:generate --name <migration-name>
