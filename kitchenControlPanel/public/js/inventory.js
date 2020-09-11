var inventoryData;

function addInventoryListeners(){

   $('.editItem').click(function(e){
       e.preventDefault;
       editItem(e.target.id);
   }); 

   $('.deleteItem').click(function(e){
        e.preventDefault;
        deleteItem(e.target.id);
    }); 

    $('#addItem').click(function(e){
        e.preventDefault;
        addItem();
    });

    $('.updateItem').click(function(e){
        e.preventDefault;
        updateItem(e.target.id);
    }); 
}

function editItem(id){
    var form = `<div class="form recipeForms">
  
      <h1> Edit Item </h1>
  
        <div class="ingredientBox">
  
          <div class="ingredient" id='ingredient'>
              <input type='number'  placeholder='Number Amount' min="0.25" step="0.25" id='ingredientAmount' value="${inventoryData.inventory[id].amount}">

              <select name="units" id="ingredientLabel">
                <option value="teaspoon" ${"teaspoon" == inventoryData.inventory[id].label ? "selected" : ""}">teaspoon</option>
                <option value="tablespoon" ${"tablespoon" == inventoryData.inventory[id].label ? "selected" : ""}>tablespoon</option>
                <option value="liter" ${"liter" == inventoryData.inventory[id].label ? "selected" : ""}>liter</option>
                <option value="cup" ${"cup" == inventoryData.inventory[id].label ? "selected" : ""}>cup</option>
                <option value="pint" ${"pint" == inventoryData.inventory[id].label ? "selected" : ""}>pint</option>
                <option value="quart" ${"quart" == inventoryData.inventory[id].label ? "selected" : ""}>quart</option>
                <option value="gallon" ${"gallon" == inventoryData.inventory[id].label ? "selected" : ""}>gallon</option>
                <option value="gram" ${"gram" == inventoryData.inventory[id].label ? "selected" : ""}>gram</option>
                <option value="ounce" ${"ounce" == inventoryData.inventory[id].label ? "selected" : ""}>ounce</option>
                <option value="lbs" ${"lbs" == inventoryData.inventory[id].label ? "selected" : ""}>lbs</option>
            </select>

              <input name="label" type="text" id="ingredientName" placeholder="Item Name" value="${inventoryData.inventory[id].name}">
          </div>
         
        </div>
        <div class="buttons">
            <button id="${id}" class="updateItem"> Submit</button>
            <button id="cancel" onclick="window.location.href='inventory.html'"> Cancel </button>
      </div>

  </div>`;

  $(".inventory").html(form);

  addInventoryListeners();
}

function updateItem(itemId){
    if ($('#ingredientName').val() == "" || $('#ingredientAmount').val() == "" || $('#ingredientLabel').val() == "" ) {
        return alert('You must fill out all fields before adding an item.');
    }

    var amount = $('#ingredientAmount').val();
    var label = $('#ingredientLabel').val(); 
    var name = $('#ingredientName').val();

    var itemObj = {
        amount : amount,
        label: label,
        name: name
    }

    FIREBASE_INVENTORY_UTILITY.updateInventoryItem(itemObj, itemId, inventoryData.userData.id);
}

function deleteItem(id) {
    FIREBASE_INVENTORY_UTILITY.deleteInventoryItem(id, inventoryData.userData.id);
}

function addItem(){

    if ($('#ingredientName').val() == "" || $('#ingredientAmount').val() == "" || $('#ingredientLabel').val() == "" ) {
        return alert('You must fill out all fields before adding an item.');
    }

    var amount = $('#ingredientAmount').val();
    var label = $('#ingredientLabel').val(); 
    var name = $('#ingredientName').val();

    var itemObj = {
        amount : amount,
        label: label,
        name: name
    }

    FIREBASE_INVENTORY_UTILITY.addInventoryItem(itemObj, inventoryData.userData.id);
       
}

function displayInventory(items){

    if(items.length == 0) {
        $(".inventoryItems").append("<h1> You have no items yet. Add some to get started! </h1>");
    }

    for(var i=0; i < items.length; i ++){
        var inventoryDiv = `<div class="inventoryItem"><h4>${items[i].amount + " " + items[i].label + " " + items[i].name}</h4><div class="buttons"><button id="${i}" class="editItem"> Edit </button><button id="${i}" class="deleteItem"> Delete </button></div></div>`;

        $(".inventoryItems").append(inventoryDiv);
    }

    var addInventory = `<button onclick="window.location.href='addInventory.html'"> Add an Item</button>`;

    $('#inventoryHolder').append(addInventory);

    addInventoryListeners();
}

function showInventory(data) {

    displayInventory(data.inventory);
    
    addInventoryListeners();

    console.log(data);

    return inventoryData = data;
}

$(document).ready(() => {
    MINI_ACCOUNT_UTILITY.addAccountListeners();
 
    MINI_ACCOUNT_UTILITY.getCurrentUser();
 
 });