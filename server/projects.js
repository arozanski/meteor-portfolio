Projects = new Meteor.Collection('projects');

if (Projects.find().count() === 0) {
	console.log('No projects found in db - inserting fixtures');

	Projects.insert({
		title: ' Google Map Photo gallery',
		category: 'photo galery',
		date: 'started in June',
		launchDate: 'Jun 2014',
		url: 'http://rozanski.pro/iceland',
		urlLabel: 'rozanski.pro/iceland',
		client: 'personal project',
		technology: 'being ported to Meteor.js',
		prefix: 'gal',
		files: ['2','3'],
		ext: 'jpg'
	});

	Projects.insert({
		title: 'CMS for Service Oriented Architecture',
		category: 'platform administration tool',
		date: 'Apr - Jun 2014',
		launchDate: 'Jun 2014',
		url: '#',
		urlLabel: 'n/a (depricated)',
		client: 'Powa Technology\'s internal project',
		technology: 'Meteor.js, Bootstrap 3, REST API',
		prefix: 'soa',
		files: ['2','3','4','5','6','7','8'],
		ext: 'png'
	});

	Projects.insert({
		title: 'Administraion panel for PowaTag',
		category: 'platform administration tool',
		date: 'Apr 2013 - Apr 2014',
		launchDate: 'Apr 2014',
		url: '#',
		urlLabel: 'n/a',
		client: 'Powa Technology\'s internal project',
		technology: 'Backbone.js, Bootstrap 3, REST API',
		prefix: 'pt',
		files: ['2','3','4','5','6','7'],
		ext: 'png'
	});

	console.log('Inserted: '+ Projects.find().count() + ' elements');
}
	else {
		console.log('Elements already exists in database. Total count: ' +  Projects.find().count());
	}

Meteor.publish('projects', function() { 
	return Projects.find();
});