/**
 * Created by Bruno Costa 02-02-2018
 * Generated by Utilities/createTable.py
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Person = sequelize.define('Person', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING(100),
    honorific: DataTypes.STRING(5),
    role: DataTypes.STRING(50),
    email: DataTypes.STRING(50),
    orcid: DataTypes.STRING(50),
    affiliation: DataTypes.INTEGER(11),
  }, {
    tableName: 'Person',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {    
        Person.belongsTo(models.Observation, {
          foreignKey: 'id',              //on Person
          targetKey: 'operator',  //foreign key  
        });
        Person.belongsTo(models.Observation, {
          foreignKey: 'id',              //on Person
          targetKey: 'uploadedBy',  //foreign key  
        });
        Person.belongsTo(models.ObservationVariable, {
          foreignKey: 'id',              //on Person
          targetKey: 'scientist',  //foreign key  
        });
        Person.belongsTo(models.Institution, {
          foreignKey: 'affiliation',              //on Person
          targetKey: 'id',  //foreign key  
        });
        Person.belongsTo(models.Program, {
          foreignKey: 'id',              //on Person
          targetKey: 'leadPerson',  //foreign key  
        });
        Person.belongsTo(models.Sample, {
          foreignKey: 'id',              //on Person
          targetKey: 'takenBy',  //foreign key  
        });
        Person.belongsTo(models.StudyContact, {
          foreignKey: 'id',              //on Person
          targetKey: 'contact',  //foreign key  
        }); 
      }
    },
  });

  return Person;
};
