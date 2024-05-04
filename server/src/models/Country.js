const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        len: [3, 3], 
        is: /^[A-Z]{3}$/ // Aseguro que 'id' sean tres letras mayúsculas
      },
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag_image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,    
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.DECIMAL(9,1),
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
 }, {
    timestamps: false
  });
};
