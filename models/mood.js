// Creating our mood model
module.exports = function(sequelize, DataTypes) {
    //
  var mood = sequelize.define("mood", {
    // The email cannot be null, and must be a proper email before creation
    mood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The password cannot be null
    emoji: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return mood;
};
