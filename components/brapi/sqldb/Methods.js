/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const Methods = sequelize.define('Methods', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    callId: DataTypes.INTEGER(11),
    method: DataTypes.STRING(30),
  }, {
      tableName: 'Methods',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {     
        }
      },
    });

    return Methods;
  };