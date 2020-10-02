({
	myAction : function(component, event, helper) {
		
	},
    clickCreateItem: function(component, event, helper) {
        var validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new expense
            var newItem = component.get("v.newItem");
            console.log("Create expense: " + JSON.stringify(newItem));
            helper.createItem(component, createItem );
  
            //var theExpenses = component.get("v.items");
            //console.log("Expense list"+JSON.stringify(theExpenses));

            // Copy the expense to a new object
            // THIS IS A DISGUSTING, TEMPORARY HACK
            //var newExpense = JSON.parse(JSON.stringify(item));
     
            //theExpenses.push(newItem);
            //component.set("v.items", theExpenses);
                
                //Reset new Item object
         
              
        }
    }
})