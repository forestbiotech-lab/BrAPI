/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const Sample = sequelize.define('Sample', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    name: DataTypes.STRING(254),
    takenBy: DataTypes.INTEGER(11),
    sampleDate: DataTypes.DATE,
    seasonId: DataTypes.INTEGER(11),
    sampleType: DataTypes.STRING(50),
    tissueType: DataTypes.STRING(50),
    notes: DataTypes.STRING,
  }, {
      tableName: 'Sample',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {
          Sample.belongsTo(models.SamplePlant, {
            foreignKey: 'id',              //on Sample
            targetKey: 'sampleId',  //foreign key  
          });
          Sample.belongsTo(models.Person, {
            foreignKey: 'takenBy',              //on Sample
            targetKey: 'id',  //foreign key  
          });
          Sample.belongsTo(models.Season, {
            foreignKey: 'seasonId',              //on Sample
            targetKey: 'id',  //foreign key  
          }); 
          Sample.belongsTo(models.ObservationUnit, {
            foreignKey: 'id',              //on Sample
            targetKey: 'sampleId',  //foreign key  
          });     
        }
      },
    });

    return Sample;
  };