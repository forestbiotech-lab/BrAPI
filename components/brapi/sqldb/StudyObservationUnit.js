/**
 * Created by Bruno Costa 02-02-2018
 * Generated by Utilities/createTable.py
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const StudyObservationUnit = sequelize.define('StudyObservationUnit', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    studyId: DataTypes.INTEGER(11),
    observationUnit: DataTypes.INTEGER(11),
  }, {
    tableName: 'StudyObservationUnit',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {    
        StudyObservationUnit.belongsTo(models.Study, {
          foreignKey: 'studyId',              //on StudyObservationUnit
          targetKey: 'id',  //foreign key  
        });
        StudyObservationUnit.belongsTo(models.ObservationUnit, {
          foreignKey: 'observationUnit',              //on StudyObservationUnit
          targetKey: 'id',  //foreign key  
        }); 
        StudyObservationUnit.belongsTo(models.StudyPlant, {
          foreignKey: 'id',              //on StudyObservationUnit
          targetKey: 'studyObservationUnitId',  //foreign key  
        });
        StudyObservationUnit.belongsTo(models.StudyPlot, {
          foreignKey: 'id',              //on StudyObservationUnit
          targetKey: 'studyObservationUnitId',  //foreign key  
        });  
      }
    },
  });

  return StudyObservationUnit;
};
