var config = {"INPUT_FIELDS":[{
			"name":"title", 
			"width":"250", 
			"inputWidth":"large-3", 
			"placeholder":"Fireman", 
			"maxLength":"128", 
			"required":true
		},

		{
			"name":"artist", 
			"width":"200", 
			"inputWidth":"large-3", 
			"placeholder":"Lil Wayne", 
			"maxLength":"128", 
			"required":true
		},

		{
			"name":"album", 
			"width":"200", 
			"inputWidth":"large-2", 
			"placeholder":"Tha Carter II", 
			"maxLength":"128", 
			"required":false
		},

		{
			"name":"genre", 
			"width":"200", 
			"inputWidth":"large-2", 
			"placeholder":"Hip hop", 
			"maxLength":"128", 
			"required":true
		},

		{
			"name":"length", 
			"width":"80", 
			"inputWidth":"large-2", 
			"placeholder":"4:32", 
			"maxLength":"128", 
			"required":true,
			"pattern": "/([0-7]{3}:)?[0-5]?[0-9]:[0-5][0-9]/"
		}]};
