/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const Trial = sequelize.define('Trial', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    name: DataTypes.STRING(100),
    programId: DataTypes.INTEGER(11),
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN(1),
  }, {
      tableName: 'Trial',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          Trial.belongsTo(models.Study, {
            foreignKey: 'id',              //on Trial
            targetKey: 'trialId',  //foreign key  
          });
          Trial.belongsTo(models.Program, {
            foreignKey: 'programId',              //on Trial
            targetKey: 'id',  //foreign key  
          });
          Trial.belongsTo(models.TrialAuthorship, {
            foreignKey: 'id',              //on Trial
            targetKey: 'trialId',  //foreign key  
          }); 
          Trial.belongsTo(models.TrialAdditionalInfo, {
            foreignKey: 'id',
            targetKey: 'trialId',
          });
        }
      },
    });

    return Trial;
  };