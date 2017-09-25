Meteor.subscribe('burgers');


Template.burgers.helpers({

    burgers: function() { return Burgers.find({}); }
});

Template.burgers.events({
    "submit .article": function(event) {
        event.preventDefault();

        panier.insert({
            name:this.name,
            price:this.price,

        });

    }
})