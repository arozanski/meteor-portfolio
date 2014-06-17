/**
 * App router
 */

var prefix = 'Armand Rozanski Portfolio - '

Router.configure({
  load: function() {
    $('#content').hide().fadeIn(500);
  }
});

Router.map(function(){
    this.route('home',{
        controller: 'BasicController',
        path: '/',
        onAfterAction: function() {
            document.title = prefix + 'Home';
        }
    });
    this.route('about',{
        controller: 'BasicController',
        path: '/about',
        onAfterAction: function() {
            document.title = prefix + 'About';
        }
    });
    this.route('projects',{
        controller: 'BasicController',
        path: '/projects',
        waitOn: function(){
            return [IRLibLoader.load('js/nivo-lightbox.min.js')]
        },
        onAfterAction: function() {
            document.title = prefix + 'Projects';
        }
    });
    this.route('contact',{
        controller: 'BasicController',
        path: '/contact',
        onAfterAction: function() {
            document.title = prefix + 'Contact';
        }
    });
    this.route('notFound', {
        path: '*',
        onAfterAction: function() {
            document.title = prefix + 'Page not fount 404';
        }
    });
});

BasicController = RouteController.extend({
    layoutTemplate: 'index',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
});