const Sequelize = require("sequelize");

const sequelize = new Sequelize("reactjs", "root", "", {
  dialect: "mysql",
  host: "127.0.0.1",
});

const Notes = require("./Notes")(sequelize);

module.exports = {
  sequelize: sequelize,
  notes: Notes,
};
