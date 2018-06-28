/**
 * Created by Bruno Costa 02-02-2018
 * Generated by Utilities/createTable.py
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const StudyPlot = sequelize.define('StudyPlot', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    studyObservationUnitId: DataTypes.INTEGER(11),
    plotNumber: DataTypes.INTEGER(11),
    blockNumber: DataTypes.INTEGER(11),
    X: DataTypes.INTEGER(11),
    Y: DataTypes.INTEGER(11),
    replicate: DataTypes.INTEGER(11),
    plantingDate: DataTypes.DATE,
    harvestDate: DataTypes.DATE,
  }, {
    tableName: 'StudyPlot',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {    
        StudyPlot.belongsTo(models.Observation, {
          foreignKey: 'id',              //on StudyPlot
          targetKey: 'studyPlotId',  //foreign key  
        });
        StudyPlot.belongsTo(models.StudyTreatment, {
          foreignKey: 'id',              //on StudyPlot
          targetKey: 'studyPlotId',  //foreign key  
        }); 
      }
    },
  });

  return StudyPlot;
};