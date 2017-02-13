# Sequelbowl :football:

SQL relation exercise using `Sequelize` and `Express.js`.  **Sequelbowl** uses a small dataset of Superbowl teams, coaches, players and player statistics over the last four years.

---
__Data model of table relations__
![data-model](https://s3-us-west-2.amazonaws.com/rndm-img/sequelbowl_data_model.png)

# Setup

1. Make config folder for DB connection

`mkdir config && touch config/config.json`
2. Create DB config in `./config/config.json`

```
// Example config
{
  "development": {
    "username": "root",
    "password": null,
    "database": "sequelbowl",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
3. Create DB locally to connect to.
2. Run `npm install -g sequelize-cli` if you dont already have it installed
3. Run `npm install`
4. Run `npm start`
5. Run `sequelize db:seed:all` to seed local DB.
6. Navigate to `http://127.0.0.1:3000`

----
**This project is currently still being worked on**


