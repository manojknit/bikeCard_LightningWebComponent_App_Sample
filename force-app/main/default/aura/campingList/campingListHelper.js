({
	helperMethod : function() {
		
	},
    createItem: function(component, item) {
        //Save
            var action = component.get("c.saveItem");
            action.setParams({"item":newItem});
            action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
                component.set("v.newItem", { 'sobjectType': 'Camping_Item__c',
                        'Name': '',
                        'Price__c': 0,
                        'Quantity__c': 0,
                        'Packed__c': false });
            }
            });
            $A.enqueueAction(action);
    }
})