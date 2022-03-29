module.exports = (Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
      type: Sequelize.STRING
      },
    roles : {
      type :Sequelize.STRING
    }
  });
  return User;
};