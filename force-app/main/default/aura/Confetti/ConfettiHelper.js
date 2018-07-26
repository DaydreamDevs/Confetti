({
    checkStage : function (component){
        
        var newStage = component.get('v.simpleRecord').StageName;
        var amount = component.get('v.simpleRecord').Amount;
        var oldStage = component.get('v.currentVal');
        var winStage = component.get('v.winStage');
        var threshold = component.get('v.threshold');
        
        if(oldStage != winStage && newStage == winStage){
            if(amount>threshold){
                this.startConfetti(component);
            }
        }
    },
    startConfetti : function(component){
        
        this.congrats(component);
        component.set('v.displayCanvas',true);
        
        var confettiSettings = { 
            target: 'confetti',
            max: 200,
            props: ['square','line']
        };
        
        var confetti = new window.ConfettiGenerator(confettiSettings);
        confetti.render();
        
        this.stopConfetti(confetti,component);
    },
    stopConfetti : function(confetti,component){
        window.setTimeout(
            $A.getCallback(function() {
                confetti.clear();
                component.set('v.displayCanvas',false);
            }), 5000
        );
    },
    congrats : function(component) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "type" : "success",  
            "message": "Congrats on your "+$A.localizationService.formatCurrency(component.get('v.simpleRecord.Amount'))+" Opportunity Win!"
        });
        toastEvent.fire();
	}
})