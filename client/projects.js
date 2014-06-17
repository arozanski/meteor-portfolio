Template.projects.events({
	'mouseover a.gallery': function(event) {
		event.preventDefault();
        $(event.currentTarget).nivoLightbox();
	}
});