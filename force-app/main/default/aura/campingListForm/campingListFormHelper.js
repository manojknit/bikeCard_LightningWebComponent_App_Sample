({
	helperMethod : function() {
		
	},
    createExpense: function(component, createItem) {
        var createEvent = component.getEvent("addItem");
        createEvent.setParams({ "item": createItem });
        createEvent.fire();
        component.set("v.newItem", { 'sobjectType': 'Camping_Item__c',
                        'Name': '',
                        'Price__c': 0,
                        'Quantity__c': 0,
                        'Packed__c': false });
    },
})