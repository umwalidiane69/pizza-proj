//business logic
function order(name, size, crust, topping, number, total) {
   this.name = name;
   this.size = size;
   this.crust = crust;
   this.topping = topping;
   this.number = number;
   this.total = total;
}
$(document).ready(function () {
   $("#sec").click(function () {
      $(".other-order").append('<div class="other-order">' +
         '<div id="fo1">' +
         'Choose a size of pizza:<br>' +
         '<label for="siz"></label>' +
         '<select id="size">' +
         '<option>Small</option>' +
         '<option>Medium</option>' +
         '<option>Large</option>' +
         '</select>' +
         '</div>' +

         '<div id="fo2">' +
         'Choose kind of pizza Crust:<br>' +
         '<label for="cru"></label>' +
         '<select class="crust">' +
         '<option>Grilled</option>' +
         '<option>DeepDish</option>' +
         '<option>Stuffed</option>' +
         '<option>Flatbread</option>' +
         '<option>cracker Crust</option>' +
         '<option>sicilian</option>' +
         '<option>Detroit</option>' +
         '<option>whole Wheat</option>' +
         '<option>Cout Iron</option>' +
         '</select>' +
         '</div>' +
         '<div id="fo3">' +
         'Choose Toppings:<br>' +
         '<label for="top"></label>' +
         '<select id="topping">' +
         '<option>Cheese</option>' +
         '<option>Bell pepper</option>' +
         '<option>Pineapple</option>' +
         '<option>Mushroom</option>' +
         '<option>Sausage</option>' +
         '<option>Spinach</option>' +
         '<option>Tomato</option>' +
         '</select>' +
         '</div>' +
//          '<div id="fo4">' +
//          'Order many Pizaa as you want:<br>' +
//          '<label for="nub"></label>' +
//          '<select id="num">' +
//          '<option>1</option>' +
//          '<option>2</option>' +
//          '<option>3</option>' +
//          '<option>4</option>' +
//          '<option>5</option>' +
//          '<option>6</option>' +
//          '<option>7</option>' +
//          '<option>8</option>' +
//          '<option>9</option>' +
//          '<option>10</option>' +
//          '<option>11</option>' +
//          '<option>12</option>' +
//          '<option>13</option>' +
//          '<option>14</option>' +
//          '<option>15</option>' +
//          '<option>16</option>' +
//          '<option>17</option>' +
//          '<option>18</option>' +
//          '<option>19</option>' +
//          '<option>20</option>' +
//          '<option>21</option>' +
//          '</select>' +
//          '</div>' +
//          '</div>'
//       )

//    });
//    $("#sub").click(function () {
//       var name = $("#value1").val();
//       var size = $("#size").val();
//       var non = $(".crust").val();
//       var topping = $("#topping").val();
//       var number = $("#num").val();
//       var total;
//       var siprice;
//       var crprice;
//       var toprice;
//       if (size == "Small") {
//          siprice = 1000;
//       }
//       else if (size == "Medium") {
//          siprice = 2000;
//       }
//       else if (size == "Large") {
//          siprice = 4000;
//       }
//       console.log(siprice);
//       if (non == "Grilled") {
//          crprice = 400;
//       }
//       else if (non = "Stuffed") {
//          crprice = 500;
//       }
//       else if (non == "cracker Crust") {
//          crprice = 600;
//       }
//       else if (non == "sicilian") {
//          crprice = 700;
//       }
//       else if (non == "Detroit") {
//          crprice = 300;
//       }
//       else if (non == "whole Wheat") {
//          crprice = 800;
//       }
//       else if (non == "Cout Iron") {
//          crprice = 900;
//       }
//       console.log(crprice);
//       if (topping == "Cheese") {
//          toprice = 400;
//       }
//       else if (topping == "Bell pepper") {
//          toprice = 500;
//       }
//       else if (topping == "Pineapple") {
//          toprice = 300;
//       }
//       else if (topping == "Mushroom") {
//          toprice = 600;
//       }
//       else if (topping == "Sausage") {
//          toprice = 800;
//       }
//       else if (topping == "Spinach") {
//          toprice = 700;
//       }
//       else if (topping == "Tomato") {
//          toprice = 200;
//       }
//       console.log(toprice);
//       total = (siprice + crprice + toprice) * number;
//       var ordering = new order(name, size, non, topping, number, total);
//       console.log(ordering);
//       $("#valuen").text(name);
//       $("#value2").text(size);
//       $("#value3").text(non);
//       $("#value4").text(topping);
//       $("#value6").text(number);
//       $("#value5").text(total + " rwf");

//    });
//    $("#yes").click(function () {
//       prompt("Enter your location");
//       alert("Your pizza order will be delivered to your location");
//    });
//    $("#no").click(function () {
//       alert("Thank you for using our service!!!")
//    })
// });