Projects = new Meteor.Collection('Projects');

if (Projects.find().count() === 0) {
	console.log('No projects found in db - inserting fixtures');

	Projects.insert({
		title: ' Google Map Photo gallery',
		category: 'photo galery',
		date: 'started in June',
		url: 'rozanski.pro/iceland',
		client: 'personal project',
		technology: 'Meteor.js'
	});

	Projects.insert({
		title: 'CMS for Service Oriented Architecture',
		category: 'platform administration tool',
		date: 'Apr - Jun 2014',
		url: 'n/a (depricated)',
		client: 'Powa Technology\'s internal project',
		technology: 'Meteor.js, Bootstrap 3, REST API'
	});

	Projects.insert({
		title: 'Administraion panel for PowaTag',
		category: 'platform administration tool',
		date: 'Apr 2013 - Apr 2014',
		url: 'n/a',
		client: 'Powa Technology\'s internal project',
		technology: 'Backbone.js, Bootstrap 3, REST API'
	});

	console.log('Inserted: '+ Projects.find().count() + ' elements');
}
	else {
		console.log('Elements already exists in database. Total count: ' +  Projects.find().count());
	}