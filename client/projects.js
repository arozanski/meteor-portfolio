Template.projects.events({
	'mouseover a.gallery': function(event) {
		event.preventDefault();
        $(event.currentTarget).nivoLightbox();
	}
});

Projects = new Meteor.Collection('projects');
Meteor.subscribe('projects');

Template.projects.helpers({
	projects: function() {
		return Projects.find();
	}
});