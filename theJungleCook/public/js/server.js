var SERVER = (function () {

    var _allSections = [];

    //show alert button
    var _showAlert = function(word) {
        alert(word);
    };


    //load data from JSON
    var _loadData = function(){
      $.getJSON('../data/data.json', function(data){
          _allSections = data.Sections;
      })  
    };
    
    var _getSection = function(sectionYouWant){
        
        

        let sec = {};

        $.each(_allSections, function(idx, section){

            if(section.name == sectionYouWant) {

                sec = section.content;         
                
            }
        
        });

        return sec;

    }

    _loadData();

    //return items as an objects
    return {
        showAlert : _showAlert,
        getSection : _getSection
    }

})();