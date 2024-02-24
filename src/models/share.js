module.exports = (sequelize, DataTypes) => {
    const shares = sequelize.define("shares", {
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
      share_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  
      shareDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
    return shares;
  };
  