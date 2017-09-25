Meteor.subscribe('boissons');


Template.boissons.helpers({

    boissons: function() { return Boissons.find({}); }
});


Template.boissons.events({
    "submit .article": function(event) {
        event.preventDefault();

        panier.insert({

            name:this.name,

            price:this.price,

        });

    }
})