/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const Study = sequelize.define('Study', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    name: DataTypes.STRING(100),
    trialId: DataTypes.INTEGER(11),
    locationId: DataTypes.INTEGER(11),
    studyTypeId: DataTypes.INTEGER(11),
    active: DataTypes.BOOLEAN(1),
  }, {
      tableName: 'Study',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {     
          Study.belongsTo(models.ObservationUnit, {
            foreignKey: 'id',              //on ObservationUnit
            targetKey: 'studyId',  //foreign key  
          });
          Study.belongsTo(models.StudyGermplasm, {
            foreignKey: 'id',              //on ObservationUnit
            targetKey: 'studyId',  //foreign key  
          });
        }
      },
    });

    return Study;
  };