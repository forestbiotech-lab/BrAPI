/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const GermplasmParents = sequelize.define('GermplasmParents', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    parent1Id: DataTypes.INTEGER(11),
    parent2Id: DataTypes.INTEGER(11),
    childId: DataTypes.INTEGER(11),
  }, {
      tableName: 'GermplasmParents',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          GermplasmParents.belongsTo(models.GermplasmParent1, {
            foreignKey: 'parent1Id',              //on GermplasmParents
            targetKey: 'id',  //foreign key  
          });
          GermplasmParents.belongsTo(models.GermplasmParent2, {
            foreignKey: 'parent2Id',              //on GermplasmParents
            targetKey: 'id',  //foreign key  
          });
          GermplasmParents.belongsTo(models.Germplasm, {
            foreignKey: 'childId',              //on GermplasmParents
            targetKey: 'id',  //foreign key  
          }); 
        }
      },
    });

    return GermplasmParents;
  };