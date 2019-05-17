/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const ExtractedFrom = sequelize.define('ExtractedFrom', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    sampleId: DataTypes.INTEGER(11),
    observationUnitId: DataTypes.INTEGER(11),
  }, {
      tableName: 'ExtractedFrom',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          ExtractedFrom.belongsTo(models.Sample, {
            foreignKey: 'sampleId',              //on ExtractedFrom
            targetKey: 'id',  //foreign key  
          });
          ExtractedFrom.belongsTo(models.ObservationUnit, {
            foreignKey: 'observationUnitId',              //on ExtractedFrom
            targetKey: 'id',  //foreign key  
          }); 
        }
      },
    });

    return ExtractedFrom;
  };