var FIREBASE_INVENTORY_UTILITY = (function(){

    
  var _addInventoryItem = function(itemObj, id) {
   
    firebase.firestore()
      .collection("users")
      .doc(id).get().then(function(doc) {
        if (doc.exists) {
  
            var oldInventory = doc.data().inventory;
            
            oldInventory.push(itemObj);
  
           
            firebase.firestore()
            .collection("users")
            .doc(id)
            .update(
                {inventory : oldInventory}
                ).then(function() {
                console.log("Document successfully written!");
                window.location.href="inventory.html";
            }); 
  
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    
     }

     var _updateInventoryItem = function(itemObj, itemId, id) {
   
        firebase.firestore()
          .collection("users")
          .doc(id).get().then(function(doc) {
            if (doc.exists) {
      
                var oldInventory = doc.data().inventory;
                
                oldInventory[itemId] = itemObj;
      
               
                firebase.firestore()
                .collection("users")
                .doc(id)
                .update(
                    {inventory : oldInventory}
                    ).then(function() {
                    console.log("Document successfully written!");
                    window.location.href="inventory.html";
                }); 
      
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
        
         }

         var _deleteInventoryItem = function(itemId, id) {
   
            firebase.firestore()
              .collection("users")
              .doc(id).get().then(function(doc) {
                if (doc.exists) {
          
                    var oldInventory = doc.data().inventory;
                    
                    oldInventory.splice(itemId, 1);
                   
                    firebase.firestore()
                    .collection("users")
                    .doc(id)
                    .update(
                        {inventory : oldInventory}
                        ).then(function() {
                        console.log("Document successfully written!");
                        window.location.href="inventory.html";
                    }); 
          
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
              }).catch(function(error) {
                  console.log("Error getting document:", error);
              });
            
             }

             return {
                addInventoryItem: _addInventoryItem,
                updateInventoryItem: _updateInventoryItem,
                deleteInventoryItem: _deleteInventoryItem
            }

})();