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
    type: DataTypes.INTEGER(11),
    active: DataTypes.BOOLEAN(1),
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  }, {
      tableName: 'Study',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          Study.belongsTo(models.Trial, {
            foreignKey: 'trialId',              //on Study
            targetKey: 'id',  //foreign key  
          });
          Study.belongsTo(models.Location, {
            foreignKey: 'locationId',              //on Study
            targetKey: 'id',  //foreign key  
          });
          Study.belongsTo(models.StudyType, {
            foreignKey: 'type',              //on Study
            targetKey: 'id',  //foreign key  
          });
          Study.belongsTo(models.StudyAdditionalInfo, {
            foreignKey: 'id',              //on Study
            targetKey: 'studyId',  //foreign key  
          });
          Study.belongsTo(models.StudyContact, {
            foreignKey: 'id',              //on Study
            targetKey: 'studyId',  //foreign key  
          });
          Study.belongsTo(models.StudyGermplasm, {
            foreignKey: 'id',              //on Study
            targetKey: 'studyId',  //foreign key  
          });
          Study.belongsTo(models.StudySeason, {
            foreignKey: 'id',              //on Study
            targetKey: 'studyId',  //foreign key  
          }); 
          Study.belongsTo(models.StudyObservationVariable, {
            foreignKey: 'id',              //on Study
            targetKey: 'studyId',  //foreign key  
          }); 
        }
      },
    });

    return Study;
  };