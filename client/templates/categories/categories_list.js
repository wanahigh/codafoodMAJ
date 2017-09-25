Meteor.subscribe('categories');

Template.categoriesList.helpers({
    categories: function () {
        return Categories.find()
    }
});





Template.categorieItem.events({
    'click #btn' (event){
        event.preventDefault();
        console.log(name)
    }


})


