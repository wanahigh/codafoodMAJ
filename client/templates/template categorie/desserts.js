Meteor.subscribe('desserts');


Template.desserts.helpers({

    desserts: function() { return Desserts.find({}); }
});


Template.desserts.events({
    "submit .article": function(event) {
        event.preventDefault();

        panier.insert({

            name:this.name,

            price:this.price,

        });

    }
})