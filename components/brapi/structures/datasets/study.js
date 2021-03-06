module.exports={
	id:"",
	name:"",
	trial:{
		_table:"Trial",
		id:"",
		name:"",
		startDate:"",
		endDate:""
	},
	program:{
		_table:["Trial","Program"],
		id:"",
		name:"",
		objective:"",
		lead_person:{
			_table:"Person",
			name:"",
			orcid:"",
			institution:{
				_table:"Institution",
				name:"",
				id:"",
				locationId:""
			},
		},
	},
	location:{
		_table:"Location",
		name:"",
		longitude:"",
		latitude:"",
		country: {_table:"Country",_attribute:"name"},
	},
}