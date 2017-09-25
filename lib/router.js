Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',

    waitOn: function() { return Meteor.subscribe('categories'); }
});

Router.route('/', {name: 'categoriesList'});


Router.route('/categories/:name', function () {
    this.render(this.params.name,{
        data: {
            name: this.params.name
        }});
});

