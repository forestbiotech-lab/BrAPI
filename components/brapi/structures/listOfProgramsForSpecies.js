module.exports={
  genus:"",
  species:"",
  crop:{_table:"Crop",_attribute:"commonCropName"},
  programs:[{
    _table:["Germplasm","StudyGermplasm","Study","Trial","Program"],
    _model:{
      _table:"Program",
      id:"",
      name:"",
      id:"",
      abbreviation:"",
      objective: "",
      honorific:{_table:"Person"},
      leadPerson:{_table:"Person",_attribute:"name"},
      orcid:{_table:"Person"},
    }
  }]
}
