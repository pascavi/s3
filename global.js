(function ($) { //always encapsulate

// -- start accordion class

//this is the constructor

Accordion = function(el){
    var _this = this;
    //this is defining an accordion object properties. el property stores the dom element
    this.el = el;
    this.color = 'blue'; // just another property, not used in the example
    
    //register listeners to events
    $(el).find('li h3').click(function(){
        //_this is the global accordion instance, 
        //opposed to 'this' which is the h3 element clicked in this case
        _this.toggleItem($(this).closest('li'));
    });

}

//be nice, say hello
Accordion.prototype.hello = function(){
    console.log('hello');
}

//toggling an accordion item, this is a method attached to the object
Accordion.prototype.toggleItem = function(li){
    $(li).find('p').toggle();
}

// --- end of accordion class

//this creating an instance of accordion, passing along the dom element to the constructor
var domElement = document.getElementById('accordion');
var accordion = new Accordion(domElement);

//call a mehtod of the instance defined within the class
accordion.hello();

})(jQuery); //finis