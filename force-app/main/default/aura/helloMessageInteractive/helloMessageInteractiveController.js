({
	myAction : function(component, event, helper) {
		
	},
    handleClick : function(component, event, helper) {
		var btnClicked = event.getSource();
    	var btnMessage = btnClicket.get("v.label");
    	component.set("v.message", btnMessage)
	}
})