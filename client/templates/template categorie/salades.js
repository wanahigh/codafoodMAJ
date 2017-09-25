Meteor.subscribe('salades');


Template.salades.helpers({

    salades: function() { return Salades.find({}); }
});


Template.salades.events({
    "submit .article": function(event) {
        event.preventDefault();

        panier.insert({

            name:this.name,

            price:this.price,
        });

    }
})