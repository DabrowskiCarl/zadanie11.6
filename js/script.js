$(function() {
    // here we will put the code of our application

    //ID generator
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        for (var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }
    
    //Column class
    function Column(name) {
        var self = this; // useful for nested functions
    
        this.id = randomString();
        this.name = name;
        this.$element = createColumn();
    
        function createColumn() {
            //Creating column elements
            var $column = $('<div>').addClass('column');
            var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
            var $columnCardList = $('<ul>').addClass('column-card-list');
            var $columnDelete = $('<button>').addClass('btn-delete').text('x');
            var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
            
            //Events - remove column, add card
            $columnDelete.click(function() {
                self.removeColumn();
            });

            //Add a note after clicking on the button:
            $columnAddCard.click(function() {
                self.addCard(new Card(prompt("Enter the name of the card")));
            });

            //Construction column
            $column.append($columnTitle)
                    .append($columnDelete)
                    .append($columnAddCard)
                    .append($columnCardList);

            //Return column
            return $column;

        }
        //Column methods - add card, remove column
        Column.prototype = {
            addCard: function(card) {
              this.$element.children('ul').append(card.$element);
            },
            removeColumn: function() {
              this.$element.remove();
            }
        };
    }
    
    //Card class
    function Card(description) {
        var self = this;
    
        this.id = randomString();
        this.description = description;
        this.$element = createCard();
    
        function createCard() {
            //Card elements
            var $card = $('<li>').addClass('card');
            var $cardDescription = $('<p>').addClass('card-description').text(self.description);
            var $cardDelete = $('<button>').addClass('btn-delete').text('x');

            //Card Events - delete card
            $cardDelete.click(function(){
                self.removeCard();
            });
            //Add card with delete button
            $card.append($cardDelete)
                .append($cardDescription);
            return $card;

            //Delete method
            Card.prototype = {
                removeCard: function() {
                    this.$element.remove();
                }
            }
        }
    }
  
    //end of scripts
});