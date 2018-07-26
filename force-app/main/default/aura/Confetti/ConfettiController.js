({
	recordUpdated : function(component, event, helper) {
        
            var changeType = event.getParam('changeType');
        
            if(changeType==='LOADED'){
                component.set('v.currentVal',component.get('v.simpleRecord').StageName);
            }else if(changeType==='CHANGED'){ 
                helper.checkStage(component);
            }
	}
})