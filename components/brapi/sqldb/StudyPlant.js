/**
 * Created by Bruno Costa 02-02-2018
 * Generated by Utilities/createTable.py
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const StudyPlant = sequelize.define('StudyPlant', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    studyObservationUnitId: DataTypes.INTEGER(11),
    studyPlotId: DataTypes.INTEGER(11),
    plantNumber: DataTypes.INTEGER(11),
    germplasmId: DataTypes.INTEGER(11),
    blockNumber: DataTypes.INTEGER(11),
    X: DataTypes.INTEGER(11),
    Y: DataTypes.INTEGER(11),
  }, {
    tableName: 'StudyPlant',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {    
        StudyPlant.belongsTo(models.Observation, {
          foreignKey: 'id',              //on StudyPlant
          targetKey: 'studyPlantId',  //foreign key  
        });
        StudyPlant.belongsTo(models.Sample, {
          foreignKey: 'id',              //on StudyPlant
          targetKey: 'plantId',  //foreign key  
        });
        StudyPlant.belongsTo(models.Germplasm, {
          foreignKey: 'germplasmId',              //on StudyPlant
          targetKey: 'id',  //foreign key  
        }); 
        StudyPlant.belongsTo(models.StudyObservationUnit, {
          foreignKey: 'studyObservationUnitId',              //on StudyPlant
          targetKey: 'id',  //foreign key  
        }); 
      }
    },
  });

  return StudyPlant;
};
