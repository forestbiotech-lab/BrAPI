/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const StudyGermplasm = sequelize.define('StudyGermplasm', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    studyId: DataTypes.INTEGER(11),
    germplasmId: DataTypes.INTEGER(11),
  }, {
      tableName: 'StudyGermplasm',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          StudyGermplasm.belongsTo(models.Study, {
            foreignKey: 'studyId',              //on StudyGermplasm
            targetKey: 'id',  //foreign key  
          });
          StudyGermplasm.belongsTo(models.Germplasm, {
            foreignKey: 'germplasmId',              //on StudyGermplasm
            targetKey: 'id',  //foreign key  
          }); 
        }
      },
    });

    return StudyGermplasm;
  };