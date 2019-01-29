/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const Season = sequelize.define('Season', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    season: DataTypes.STRING(20),
    year: DataTypes.INTEGER(4),
  }, {
      tableName: 'Season',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {     
        }
      },
    });

    return Season;
  };