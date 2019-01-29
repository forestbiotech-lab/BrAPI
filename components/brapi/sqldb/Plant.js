/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const Plant = sequelize.define('Plant', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    plotId: DataTypes.INTEGER(11),
    locationId: DataTypes.INTEGER(11),
    plantNumber: DataTypes.STRING(20),
    germplasmId: DataTypes.INTEGER(11),
    X: DataTypes.INTEGER(11),
    Y: DataTypes.INTEGER(11),
  }, {
      tableName: 'Plant',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {
          Plant.belongsTo(models.Plot, {
            foreignKey: 'plotId',              //on Plant
            targetKey: 'id',  //foreign key  
          });
          Plant.belongsTo(models.SamplePlant, {
            foreignKey: 'id',              //on Plant
            targetKey: 'plantId',  //foreign key  
          });               
          Plant.belongsTo(models.ObservationUnit, {
            foreignKey: 'id',              //on Plant
            targetKey: 'plantId',  //foreign key  
          });               
        }
      },
    });

    return Plant;
  };