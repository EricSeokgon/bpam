(function() {
    var app = angular.module('leitbe', []);
    
    var doit = { name: 'Azurite', price: 2.95, canCreate:true };
    
    app.controller('workCreateController', function() {
    	this.doit = doit;
    });
    
})();
