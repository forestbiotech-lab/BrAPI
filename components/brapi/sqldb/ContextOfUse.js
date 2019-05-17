/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const ContextOfUse = sequelize.define('ContextOfUse', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    observationVariableId: DataTypes.INTEGER(11),
    studyTypeId: DataTypes.INTEGER(11),
    description: DataTypes.STRING,
  }, {
      tableName: 'ContextOfUse',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          ContextOfUse.belongsTo(models.ObservationVariable, {
            foreignKey: 'observationVariableId',              //on ContextOfUse
            targetKey: 'id',  //foreign key  
          });
          ContextOfUse.belongsTo(models.StudyType, {
            foreignKey: 'studyTypeId',              //on ContextOfUse
            targetKey: 'id',  //foreign key  
          }); 
        }
      },
    });

    return ContextOfUse;
  };