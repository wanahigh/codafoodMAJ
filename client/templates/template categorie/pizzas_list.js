Meteor.subscribe('pizzas');


Template.pizzas.helpers({

    pizzas: function() { return Pizzas.find({}); }
});


Template.pizzas.events({
    "submit .article": function(event) {
        event.preventDefault();

        panier.insert({

            name:this.name,

            price:this.price,

        });

    }
})
