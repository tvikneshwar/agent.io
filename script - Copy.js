function calculateTotal()
{
  let unit_price={
    sugar: 50,
    butter: 12,
    eggs: 2,
    vanilla:43    
  };
  let item_price={}
  
  
  item_price.sugar = ($("#qty_sugar").val() * unit_price.sugar )
  $("#price_sugar").val(item_price.sugar);
  sugr_QTY= ($("#qty_sugar").val());

  
  item_price.butter = ($("#qty_butter").val() * unit_price.butter )
  $("#price_butter").val(item_price.butter);
  butter_QTY= ($("#qty_butter").val());



  item_price.eggs = ($("#qty_eggs").val() * unit_price.eggs )
  $("#price_eggs").val(item_price.eggs);  
  egg_QTY= ($("#qty_eggs").val());


  item_price.vanilla = ($("#qty_vanilla").val() * unit_price.vanilla )
  $("#price_vanilla").val(item_price.vanilla);    
  vanilla_QTY= ($("#qty_vanilla").val());

  let total = item_price.sugar + item_price.butter + item_price.eggs + item_price.vanilla;


 
$("#total_value").text(total);
var basket={"sugr_QTY":sugr_QTY,"butter-QTY":butter_QTY,"eggs_QTY":egg_QTY,"vanilla_QTY":egg_QTY}
var json= JSON.stringify( basket);
console.log(json);



//alert (sugr_QTY);

 // basket={"sugr_QTY":"sugr_QTY","butter-QTY":"butter_QTY","eggs_QTY":"egg_QTY","vanilla_QTY":"egg_QTY"}
  //const result = getFormJSON(basket);
 // var payload = JSON.stringify(result);
    

}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})







