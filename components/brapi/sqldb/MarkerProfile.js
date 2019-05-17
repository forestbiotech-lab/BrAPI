/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const MarkerProfile = sequelize.define('MarkerProfile', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    extract: DataTypes.INTEGER(11),
    analysisMethod: DataTypes.STRING(50),
  }, {
      tableName: 'MarkerProfile',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          MarkerProfile.belongsTo(models.MarkerprofileValue, {
            foreignKey: 'id',              //on MarkerProfile
            targetKey: 'markerprofileId',  //foreign key  
          }); 
        }
      },
    });

    return MarkerProfile;
  };