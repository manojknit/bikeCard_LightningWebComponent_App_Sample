({
	myAction : function(component, event, helper) {
		
	},
    packItem : function(component, event, helper) {
		component.set("v.item.Packed__c",true)
        var btnPacked = event.getSource();
        btnPacked.set("v.disabled", true)
	}
})