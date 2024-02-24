module.exports = (sequelize, DataTypes) => {
  const followers = sequelize.define("followers", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Foreign Key
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Foreign Key
    followed_by_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    followDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return followers;
};
