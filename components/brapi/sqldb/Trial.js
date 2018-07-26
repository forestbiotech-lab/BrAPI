/**
 * Created by Bruno Costa 02-02-2018
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
    name: DataTypes.STRING(50),
    programId: DataTypes.INTEGER(11),
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  }, {
    tableName: 'Trial',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {    
        Trial.belongsTo(models.Program, {
          foreignKey: 'programId',              //on Trial
          targetKey: 'id',  //foreign key  
        });
        Trial.belongsTo(models.Study, {
            foreignKey: 'id',
            targetKey: 'trialId',
        });
        Trial.belongsTo(models.TrialAdditionalInfo, {
            foreignKey: 'id',
            targetKey: 'trialId',
        });
      }
    },//*/
  });

  return Trial;
};
