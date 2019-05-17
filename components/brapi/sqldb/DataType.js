/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const DataType = sequelize.define('DataType', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    type: DataTypes.STRING(20),
  }, {
      tableName: 'DataType',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          DataType.belongsTo(models.Scale, {
            foreignKey: 'id',              //on DataType
            targetKey: 'dataTypeId',  //foreign key  
          }); 
        }
      },
    });

    return DataType;
  };