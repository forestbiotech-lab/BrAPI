/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const Institution = sequelize.define('Institution', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    code: DataTypes.STRING(20),
    name: DataTypes.STRING(100),
    locationId: DataTypes.INTEGER(11),
  }, {
      tableName: 'Institution',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {     
        }
      },
    });

    return Institution;
  };