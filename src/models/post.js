module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define("posts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Foreign Key
    post_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    platform: {
      type: DataTypes.ENUM("Facebook", "Twitter", "Instagram"),
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postCreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    postUpdateDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return posts;
};
