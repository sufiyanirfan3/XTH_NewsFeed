module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define("comments", {
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
    // Foreign Key (the user who commented on the post)
    comment_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: { type: DataTypes.STRING, allowNull: false },

    commentCreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    commentUpdateDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return comments;
};
