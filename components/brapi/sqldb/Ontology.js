/**
   * Created by Bruno Costa 28-04-2018
   * Generated by Utilities/createTable.py
   */
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    const Ontology = sequelize.define('Ontology', {
      id: { 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    accession: DataTypes.STRING(10),
    name: DataTypes.STRING(50),
  }, {
      tableName: 'Ontology',
      timestamps: false,
      underscored: false,

     classMethods: {
        associate: function associate(models) {    
          Ontology.belongsTo(models.ObservationVariable, {
            foreignKey: 'id',              //on Ontology
            targetKey: 'ontologyId',  //foreign key  
          }); 
          Ontology.belongsTo(models.OntologyReference, {
            foreignKey: 'id',              //on Ontology
            targetKey: 'ontologyId',  //foreign key  
          });          
          Ontology.belongsTo(models.Trait, {
            foreignKey: 'id',              //on Ontology
            targetKey: 'ontologyId',  //foreign key  
          });          
          Ontology.belongsTo(models.Method, {
            foreignKey: 'id',              //on Ontology
            targetKey: 'ontologyId',  //foreign key  
          });
          Ontology.belongsTo(models.Scale, {
            foreignKey: 'id',              //on Ontology
            targetKey: 'ontologyId',  //foreign key  
          });    
        }
      },
    });

    return Ontology;
  };