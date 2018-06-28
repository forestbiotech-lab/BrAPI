/**
 * Created by Bruno Costa 02-02-2018
 * Generated by Utilities/createTable.py
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const TraitAlternativeAbbreviation = sequelize.define('TraitAlternativeAbbreviation', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    traitId: DataTypes.INTEGER(15),
    abbreviation: DataTypes.STRING(5),
  }, {
    tableName: 'TraitAlternativeAbbreviation',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {    
        TraitAlternativeAbbreviation.belongsTo(models.Trait, {
          foreignKey: 'traitId',              //on TraitAlternativeAbbreviation
          targetKey: 'id',  //foreign key  
        }); 
      }
    },
  });

  return TraitAlternativeAbbreviation;
};