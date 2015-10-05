
function languageBasics(language, type){
    var tempArrayRoot = myFirstJSON['language basics'];
        if(language === 'Spanish'){
    	for (var i = 0; i < tempArrayRoot[0][language][type].length; i++){
    		if (type === 'letters'){
                            if (i === 0){
    			console.log('la primera letra es ' + tempArrayRoot[0][language][type][i] );
               		} else {
    			console.log('el proximo letra es ' + tempArrayRoot[0][language][type][i] );
    		       }
                    } else if (type === 'numbers') {
                            if (i === 0){
                                console.log('la primera numero es ' + tempArrayRoot[0][language][type][i] );
                            } else {
                                console.log('el proximo numero es ' + tempArrayRoot[0][language][type][i] );
                            }
                      }
                }
            } else if (language === 'Japanese'){
                for (var j = 0; j < tempArrayRoot[1][language][type].length; j++){
                    if (type === 'letters') {
                             if (j === 0){
                            console.log('hajimete no ji ha ' + tempArrayRoot[1][language][type][j] );
                            } else {
                                console.log('tsugi no ji ha ' + tempArrayRoot[1][language][type][j] );
                            } 
                        } else if (type === 'numbers'){
                            if (j === 0){
                            console.log('hajimete no ban ha ' + tempArrayRoot[1][language][type][j]);
                            } else {
                                console.log('tsugi no ban ha ' + tempArrayRoot[1][language][type][j]);
                            } 
                    }
                }
            } else {
                 console.log("Please enter either 'Spanish' or 'Japanese' and either 'letters' or 'numbers'");
        }
}