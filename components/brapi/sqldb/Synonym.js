/**
 * Created by Bruno Costa 02-02-2018
 * Generated by Utilities/createTable.py
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Synonym = sequelize.define('Synonym', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'Synonym',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {     
      }
    },
  });

  return Synonym;
};
