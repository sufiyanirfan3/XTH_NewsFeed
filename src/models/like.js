module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define("likes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Foreign Key
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Foreign Key
    like_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    likeDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return likes;
};
