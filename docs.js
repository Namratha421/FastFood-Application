
  //-----------------------------------------------------Exit-------------------------------------------------------------
  function exit(){
    alert("                 THANK YOU FOR VISTING..!!!                \n                WELCOME AGAIN :)            ")
  }

  //----------------------------------------------------Final bill------------------------------------------------------------------
  let foodarr = []
  function calculatebill(foodarr){

    function generateBill(foodarr) {
    let totalCost = 0;
    let billText = "Bill:\n";

      for (let i = 0; i < foodarr.length; i++) {
                 const item = foodarr[i];
                 const {name, quantity, cost } = item;
                 totalCost += cost;
                 billText += `${i + 1}. ${name} x${quantity} - ${cost}\n`;
     }

     billText += `\nTotal Cost: ${totalCost}`;
    return billText;
 }

        // Generate the bill and display in an alert message
     const bill = generateBill(foodarr);
    alert(bill);
}


  //--------------------Invalid Function-------------------------------------
  function invalid(){ 
    let x = Number(prompt(`You entered invalid number......please can u enter a valid number!! \n -----------  DO YOU WANT TO CONTINUE??? -----------------\n1.Yes\n2.No`))
    if(x === 1){
        let n = Number(prompt("**Welcome To Fast Food Application***\nSelect the What do you want\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
    main(Number(n))
    }
    else{
        exit() 
    }
  }



 //-----------------Sandwich----------------------- 
    function Sandwich() {
        let p1 = Number(prompt(`choose items\n1.Veg Sandwich\n2.Non-veg Sandwich`))
        if (p1 === 1) {
            Veg1()
        }
        else if (p1 === 2) {
            Nonveg1()
        }
        else{
          invalid()
        }

    }
 //------------- veg function-----------------------
    function Veg1() {
        let v1 = Number(prompt(`select which ever you want\n1.Garden Fresh Sandwich\n2.Cheese chilly Sandwich\n3.Paneer tikka Sandwich`))
        if (v1 === 1) {
            Garden()
        }
        else if (v1 === 2) {
            Cheese1()
        }
        else if (v1 === 3) {
            Paneer1()
        }
        else{
            invalid()
        }
    }
 
  //--------------Garden Fresh Sandwich-----------------------------
  function Garden() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=200
        let extra=10
        let sum=pp + extra
        alert(`You  selected Garden Fresh Sandwich with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Garden Fresh Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                    name:"Cheese chilly Sandwich",
                    quantity:pp1,
                    cost:mul
                }
                foodarr.push(val)
                calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Garden Fresh Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Garden()
        }
        
    }
    else if(j === 2){
        let pp=200
        alert(`You  selected Garden Fresh Sandwich without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Garden Fresh Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Garden Fresh Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Garden Fresh Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Garden()
        }
    }
    else{
        invalid()
    }    
}

  
//--------------Cheese---------------

  //--------------Cheese chilly Sandwich-----------------------------
  function Cheese1() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=150
        let extra=15
        let sum=pp + extra
        alert(`You  selected Cheese chilly Sandwich with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cheese chilly Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cheese chilly Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cheese chilly Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cheese1()
        }
        
    }
    else if(j === 2){
        let pp=150
        alert(`You  selected Cheese chilly Sandwich without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cheese chilly Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cheese chilly Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cheese chilly Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cheese1()
        }
    }
    else{
        invalid()
    }    
}

//--------------Paneer tikka Burger-------------------


  //--------------Paneer tikka Sandwich-----------------------------
  function Paneer1() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=190
        let extra=10
        let sum=pp + extra
        alert(`You  selected Paneer tikka Sandwich with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Paneer tikka Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Paneer tikka Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Paneer tikka Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Paneer1()
        }
        
    }
    else if(j === 2){
        let pp=190
        alert(`You  selected Paneer tikka Sandwich without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Paneer tikka Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Paneer tikka Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Paneer tikka Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Paneer1()
        }
    }
    else{
        invalid()
    }    
}      

  //------------------------------------Non-veg-------------------------------------------
  function  Nonveg1() {
        let v2 = Number(prompt(`select which ever you want\n1.Chicken club Sandwich\n2.Egg Sandwich \n3.Spicy Chicken Sandwich`))
        if (v2 === 1) {
            Chicken1()
        }
        else if (v2 === 2) {
            Egg1()
        }
        else if (v2 === 3) {
            Spicy1()
        }
        else{
            invalid()
        }
    }
//--------Chicken------------------------------


  //--------------Chicken club Sandwich-----------------------------
  function Chicken1() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=250
        let extra=15
        let sum=pp + extra
        alert(`You  selected Chicken club Sandwich with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Chicken club Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Chicken club Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Chicken club Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Chicken1()
        }
        
    }
    else if(j === 2){
        let pp=250
        alert(`You  selected Chicken club Sandwich without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Chicken club Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Chicken club Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Chicken club Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Chicken1()
        }
    }
    else{
        invalid()
    }    
}

//---------------------Egg Sandwich----------------

  //--------------Egg Sandwich-----------------------------
  function Egg1() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=200
        let extra=15
        let sum=pp + extra
        alert(`You  selected Egg Sandwich with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Egg Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Egg Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Egg Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Egg1()
        }
        
    }
    else if(j === 2){
        let pp=200
        alert(`You  selected Egg Sandwich without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Egg Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Egg Sandwich",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Egg Sandwich\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Egg1()
        }
    }
    else{
        invalid()
    }    
}

  //--------------Spicy chicken-----------------------------
  function Spicy1() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=200
        let extra=15
        let sum=pp + extra
        alert(`You  selected Spicy chicken with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Spicy chicken\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Spicy chicken",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Spicy chicken\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Spicy1()
        }
        
    }
    else if(j === 2){
        let pp=200
        alert(`You  selected Spicy chicken without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Spicy chicken\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Spicy chicken",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Spicy chicken\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Spicy1()
        }
    }
    else{
        invalid()
    }    
}

  //-------------------------------------------------------------------------------------------------------------------------------

 //--------------------------------------------Burger----------------------------------------
 function Burger() {
    let b = Number(prompt(`choose items\n1.Veg Burger\n2.Non-veg Burger`))
    if (b === 1) {
        Veg()
    }
    else if (b === 2) {
        Nonveg()
    }
    else{
      invalid()
    }

}
//-------------------------------------------- veg function-----------------------------------------------------------
function Veg() {
    let v3 = Number(prompt(`select which ever you want\n1.Cheese burger\n2.Paneer burger\n3.Aalotikki burger`))
    if (v3 === 1) {
        Cheese2()
    }
    else if (v3 === 2) {
        Paneer2()
    }
    else if (v3 === 3) {
        Aalotikki()
    }
    else{
        invalid()
    }
}
//------------------------------------------------------Cheese--------------------------------------------------------------

  //-----------------------------------------------------Cheese burger--------------------------------------------------------
  function Cheese2() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=200
        let extra=15
        let sum=pp + extra
        alert(`You  selected Cheese burger with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cheese burger\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cheese burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cheese burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cheese2()
        }
        
    }
    else if(j === 2){
        let pp=200
        alert(`You  selected Cheese burger without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cheese burger\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cheese burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cheese burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cheese2()
        }
    }
    else{
        invalid()
    }    
}

  //--------------------------------------------------------Paneer burger--------------------------------------------------
  function Paneer2() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=120
        let extra=15
        let sum=pp + extra
        alert(`You  selected Paneer burger with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Paneer burger\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Paneer burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Paneer burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Paneer2()
        }
        
    }
    else if(j === 2){
        let pp=120
        alert(`You  selected Paneer burger without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Paneer burger\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Paneer burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Paneer burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Paneer2()
        }
    }
    else{
        invalid()
    }    
}

  //------------------------------------------------------Aalotikki burger------------------------------------------------------
  function Aalotikki() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=120
        let extra=15
        let sum=pp + extra
        alert(`You  selected Aalotikki burger with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Aalotikki burger\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Aalotikki burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Aalotikki burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Aalotikki()
        }
        
    }
    else if(j === 2){
        let pp=120
        alert(`You  selected Aalotikki burger without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Aalotikki burger\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Aalotikki burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Aalotikki burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Aalotikki()
        }
    }
    else{
        invalid()
    }    
}

  
//-----------------------------------------------------------Non-veg-------------------------------------------------------------
function  Nonveg() {
    let v4 = Number(prompt(`select which ever you want\n1.Chicken Burger\n2.Cheese Chicken Burger\n3.Fried Chicken Burger`))
    if (v4 === 1) {
        Chicken1()
    }
    else if (v4 === 2){
        Cheese3()
    }
    else if (v4 === 3) {
        Fried3()
    }
    else{
        invalid()
    }
}
  //---------------------------------------------------Chicken Burger---------------------------------------------------------------
  function Chicken1() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=200
        let extra=15
        let sum=pp + extra
        alert(`You  selected Chicken Burger with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Chicken Burger\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Chicken Burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Chicken Burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Chicken1()
        }
        
    }
    else if(j === 2){
        let pp=200
        alert(`You  selected Chicken Burger without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Chicken Burger\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Chicken Burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Chicken Burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Chicken1()
        }
    }
    else{
        invalid()
    }    
}

  //------------------------------------------------------Cheese Chicken Burgerr---------------------------------------------------
  function Cheese3() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=200
        let extra=15
        let sum=pp + extra
        alert(`You  selected Cheese Chicken Burgerr with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cheese Chicken Burgerr\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cheese Chicken Burgerr",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cheese Chicken Burgerr\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cheese3()
        }
        
    }
    else if(j === 2){
        let pp=200
        alert(`You  selected Cheese Chicken Burgerr without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cheese Chicken Burgerr\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cheese Chicken Burgerr",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cheese Chicken Burgerr\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cheese3()
        }
    }
    else{
        invalid()
    }    
}
  //------------------------------------------Fried Chicken Burger----------------------------------------------------------
  function Fried3() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=200
        let extra=15
        let sum=pp + extra
        alert(`You  selected Fried Chicken Burger with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Fried Chicken Burger\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Fried Chicken Burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Fried Chicken Burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Fried3()
        }
        
    }
    else if(j === 2){
        let pp=200
        alert(`You  selected Fried Chicken Burger without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Fried Chicken Burger\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Fried Chicken Burger",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Fried Chicken Burger\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Fried3()
        }
    }
    else{
        invalid()
    }    
}

//------------------------------------------------------------------pizza-----------------------------------------------------------
function Pizza() {
    let p2 = Number(prompt(`choose items\n1.Veg Pizza\n2.Non-veg Pizza`))
    if (p2 === 1) {
        Veg2()
    }
    else if (p2 === 2) {
        Nonveg2()
    }
    else{
      invalid()
    }

}
//----------------------------------------------------------- veg function-------------------------------------------------------------
function Veg2() {
    let v5 = Number(prompt(`select which ever you want\n1.Margirita Pizza(only cheese)\n2.Supreame Feast Pizza\n3.Masala Tamasha Pizza`))
    if (v5 === 1) {
        Margirita()
    }
    else if (v5 === 2) {
        Supreame()
    }
    else if (v5 === 3) {
        Masala()
    }
    else{
        invalid()
    }
}
  //-----------------------------------------------------------Margirita Pizza-------------------------------------------------------
  function Margirita() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=250
        let extra=15
        let sum=pp + extra
        alert(`You  selected Margirita Pizza with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Margirita Pizza\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Margirita Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Margirita Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Margirita()
        }
        
    }
    else if(j === 2){
        let pp=250
        alert(`You  selected Margirita Pizza without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Margirita Pizza\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Margirita Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Margirita Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Margirita()
        }
    }
    else{
        invalid()
    }    
}


  //---------------------------------------------------------Supreame Feast Pizza---------------------------------------------------
  function Supreame() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=210
        let extra=15
        let sum=pp + extra
        alert(`You  selected Supreame Feast Pizza with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Supreame Feast Pizza\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Supreame Feast Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Supreame Feast Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Supreame()
        }
        
    }
    else if(j === 2){
        let pp=210
        alert(`You  selected Supreame Feast Pizza without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Supreame Feast Pizza\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Supreame Feast Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Supreame Feast Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Supreame()
        }
    }
    else{
        invalid()
    }    
}
  //--------------------------------------------------------Masala Tamasha Pizza-------------------------------------------------------
  function Masala() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=150
        let extra=15
        let sum=pp + extra
        alert(`You  selected Masala Tamasha Pizza with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Masala Tamasha Pizza\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Masala Tamasha Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Masala Tamasha Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Masala()
        }
        
    }
    else if(j === 2){
        let pp=150
        alert(`You  selected Masala Tamasha Pizza without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Masala Tamasha Pizza\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Masala Tamasha Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Masala Tamasha Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Masala()
        }
    }
    else{
        invalid()
    }    
}
  //--------------------------------------------------------Non-veg----------------------------------------------------------------
function  Nonveg2() {
    let v6 = Number(prompt(`select which ever you want\n1.Classic Chicken pizza\n2.Cheese Chicken Pizza \n3.Tripple Chicken Pizza`))
    if (v6 === 1) {
        Classic()
    }
    else if (v6 === 2) {
        Cheese4()
    }
    else if (v6 === 3) {
        Tripple()
    }
    else{
        invalid()
    }
}
  //------------------------------------------------Classic Chicken pizza----------------------------------------------------------
  function Classic() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=350
        let extra=15
        let sum=pp + extra
        alert(`You  selected Classic Chicken pizza with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Classic Chicken pizza\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Classic Chicken pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Classic Chicken pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Classic()
        }
        
    }
    else if(j === 2){
        let pp=350
        alert(`You  selected Classic Chicken pizza without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Classic Chicken pizza\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Classic Chicken pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Classic Chicken pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Classic()
        }
    }
    else{
        invalid()
    }    
}

  //------------------------------------------------------------Cheese Chicken Pizza----------------------------------------------
  function Cheese4() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=350
        let extra=15
        let sum=pp + extra
        alert(`You  selected Cheese Chicken Pizza with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cheese Chicken Pizza\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cheese Chicken Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cheese Chicken Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cheese4()
        }
        
    }
    else if(j === 2){
        let pp=350
        alert(`You  selected Cheese Chicken Pizza without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cheese Chicken Pizza\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cheese Chicken Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cheese Chicken Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cheese4()
        }
    }
    else{
        invalid()
    }    
}
  //-----------------------------------------------Tripple Chicken Pizza-------------------------------------------------
  function Tripple() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Tripple Chicken Pizza with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Tripple Chicken Pizza\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Tripple Chicken Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Tripple Chicken Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Tripple()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Tripple Chicken Pizza without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Tripple Chicken Pizza\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Tripple Chicken Pizza",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Tripple Chicken Pizza\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Tripple()
        }
    }
    else{
        invalid()
    }    
}
  //---------------------------------------------------------Beverages-----------------------------------------------------------

  function Beverages() {
    let b = Number(prompt(`select which ever you want\n1.Juice\n2.Shakes\n3.Coolers\n4.Ice-Creams`))
    if (b === 1) {
        Juice()
    }
    else if (b === 2) {
        Shakes()
    }
    else if (b === 3) {
        Coolers()
    }
    else if(b === 4){
        IceCreams()
    }
    else{
        invalid()
    }
}

function Juice(){
    let b1 = Number(prompt(`select which ever you want\n1.Pineapple Juice\n2.Black Grapes Juice\n3.WaterMelon Juice\n4.Mix Fruit Juice`))
    if(b1 === 1){
        Pineapple()
    }
    else if (b1 === 2) {
        Black()
    }
    else if (b1 === 3) {
        WaterMelon()
    }
    else if(b1 === 4){
        Mix()
    }
    else{
        invalid()
    }
}


  //-------------------------------------------------------------Pineapple Juice-----------------------------------------------
  function Pineapple() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Pineapple Juice with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Pineapple Juice\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Pineapple Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Pineapple Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Pineapple()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Pineapple Juice without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Pineapple Juice\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Pineapple Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Pineapple Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Pineapple()
        }
    }
    else{
        invalid()
    }    
}
  //--------------------------------------------Black Grapes Juice---------------------------------------------------------------
  function Black() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Black Grapes Juice with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Black Grapes Juice\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Black Grapes Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Black Grapes Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Black()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Black Grapes Juice without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Black Grapes Juice\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Black Grapes Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Black Grapes Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Black()
        }
    }
    else{
        invalid()
    }    
}        
  //-------------------------------------------------------WaterMelon Juice-----------------------------------------------------
  function WaterMelon() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected WaterMelon Juice with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  WaterMelon Juice\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"WaterMelon Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  WaterMelon Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            WaterMelon()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected WaterMelon Juice without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  WaterMelon Juice\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"WaterMelon Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  WaterMelon Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            WaterMelon()
        }
    }
    else{
        invalid()
    }    
}
  //----------------------------------------------Mix Fruit Juice--------------------------------------------------------------
  function Mix() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Mix Fruit Juice with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Mix Fruit Juice\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Mix Fruit Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Mix Fruit Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Mix()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Mix Fruit Juice without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Mix Fruit Juice\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Mix Fruit Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Mix Fruit Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Mix()
        }
    }
    else{
        invalid()
    }    
}

//----------------------------------------------------------Shakes-------------------------------------------------------------
  
  
  function Shakes(){
    let b1 = Number(prompt(`select which ever you want\n1.Choclate Shake\n2.Strawbery Shake\n3.Vanila Shake\n4.Oreo Shake`))
    if(b1 === 1){
        Choclate()
    }
    else if (b1 === 2) {
        Strawbery()
    }
    else if (b1 === 3) {
        Vanila()
    }
    else if(b1 === 4){
        Oreo()
    }
    else{
        invalid()
    }
  }
  

  //--------------Choclate Shake-----------------------------
  function Choclate() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Choclate Shake with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Choclate Shake\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Choclate Shake",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Choclate Shake\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Choclate()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Choclate Shake without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Choclate Shake\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Choclate Shake",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Choclate Shake\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Choclate()
        }
    }
    else{
        invalid()
    }    
}

//=====================================================Strawbery Shake====================================

  //--------------Strawbery Shake-----------------------------
  function Strawbery() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Strawbery Shake with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Strawbery Shake\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Strawbery Shake",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Strawbery Shake\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Strawbery()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Strawbery Shake without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Strawbery Shake\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Strawbery Shake",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Strawbery Shake\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Strawbery()
        }
    }
    else{
        invalid()
    }    
}

//=======================================Vanila Shake======================================================

  //--------------Vanila Shake-----------------------------
  function Vanila() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Vanila Shake with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Vanila Shake\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Vanila Shake",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Vanila Shake\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Vanila()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Vanila Shake without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Vanila Shake\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Vanila Shake",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Vanila Shake\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Vanila()
        }
    }
    else{
        invalid()
    }    
}
//=================================oreo===============================================  

  //--------------Oreo Shake-----------------------------
  function Oreo() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Oreo Shake with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Oreo Shake\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Oreo Shake",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Oreo Shake\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Oreo()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Oreo Shake without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Oreo Shake\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Oreo Shake",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Oreo Shake\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Oreo()
        }
    }
    else{
        invalid()
    }    
}

  function Coolers(){
    let b1 = Number(prompt(`select which ever you want\n1.Lime Juice\n2.Watermelon\n3.Cold Coffee\n4.Matka Lassi`))
    if(b1 === 1){
       Lime()
    }
    else if (b1 === 2) {
        WaterMelon1()
    }
    else if (b1 === 3) {
        Cold()
    }
    else if(b1 === 4){
        Matka()
    }
    else{
        invalid()
    }
  }

  //====================Lime Juice=============================================================

  

  //--------------Lime Juice-----------------------------
  function Lime() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Lime Juice with t
        oppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Lime Juice\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Lime Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Lime Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Lime()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Lime Juice without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Lime Juice\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Lime Juice",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Lime Juice\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Lime()
        }
    }
    else{
        invalid()
    }    
}

//============================================Watermelon===================================

  //--------------Watermelon----------------------------
  function WaterMelon1() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Watermelon with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Watermelon\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Watermelon",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Watermelon\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            WaterMelon1()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Watermelon without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Watermelon\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Watermelon",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Watermelon\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            WaterMelon1()
        }
    }
    else{
        invalid()
    }    
}


  //--------------Cold Coffee----------------------------
  function Cold() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Cold Coffee with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cold Coffee\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cold Coffee",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cold Coffee\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cold()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Cold Coffee without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Cold Coffee\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Cold Coffee",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Cold Coffee\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Cold()
        }
    }
    else{
        invalid()
    }    
}

//==============================Matka Lassi=========================

  //--------------Matka Lassi----------------------------
  function Matka() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Matka Lassi with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Matka Lassi\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Matka Lassi",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Matka Lassi\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Matka()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Matka Lassi without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Matka Lassi\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Matka Lassi",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Matka Lassi\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Matka()
        }
    }
    else{
        invalid()
    }    
}  
  
  //==============================================IceCreams===========================
  function IceCreams(){
    let b1 = Number(prompt(`select which ever you want\n1.Choclate Icecream\n2.Strawbery Icecream\n3.Vanila Icecream\n4.ButterScotch Icecream`))
    if(b1 === 1){
        Choclate3()
    }
    else if (b1 === 2) {
        Strawbery2()
    }
    else if (b1 === 3) {
        Vanila2()
    }
    else if(b1 === 4){
        ButterScotch()
    }
    else{
        invalid()
    }
  }
  

  //--------------Choclate Icecream----------------------------
  function Choclate3() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Choclate Icecream with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Choclate Icecream\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Choclate Icecream",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Choclate Icecream\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Choclate3()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Choclate Icecream without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Choclate Icecream\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Choclate Icecream",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Choclate Icecream\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Choclate3()
        }
    }
    else{
        invalid()
    }    
}

//===========================================Strawbery Icecream

  //--------------Strawbery Icecream----------------------------
  function Strawbery2() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Strawbery Icecream with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Strawbery Icecream\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Strawbery Icecream",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Strawbery Icecream\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Strawbery2()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Strawbery Icecream without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Strawbery Icecream\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Strawbery Icecream",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Strawbery Icecream\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Strawbery2()
        }
    }
    else{
        invalid()
    }    
}

//==========================================Vanila Icecream

  //--------------Vanila Icecream----------------------------
  function Vanila2() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected Vanila Icecream with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Vanila Icecream\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Vanila Icecream",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Vanila Icecream\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Vanila2()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected Vanila Icecream without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  Vanila Icecream\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"Vanila Icecream",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  Vanila Icecream\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            Vanila2()
        }
    }
    else{
        invalid()
    }    
}

//==============================================ButterScotch Icecream

  //--------------ButterScotch Icecream----------------------------
  function ButterScotch() { 
    let j = Number(prompt(`Do you want extra toppings\n1.YES\n2.NO`))
    if (j === 1) {
        let pp=300
        let extra=15
        let sum=pp + extra
        alert(`You  selected ButterScotch Icecream with toppings of the price : ${pp} + ${extra} = ${sum}`)
        alert("Extra toppings are added")
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=sum*pp1
            alert(`The Total price is:${sum }*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  ButterScotch Icecream\nQuantity  :  ${pp1}\nPrice  :  ${sum}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"ButterScotch Icecream",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(n)
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  ButterScotch Icecream\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\nExtra Toppings  :  added\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)
                exit()
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            ButterScotch()
        }
        
    }
    else if(j === 2){
        let pp=300
        alert(`You  selected ButterScotch Icecream without toppings of the price : ${pp}`)
        let pp1=Number(prompt("Enter the Quantity......."))
        if(pp1>0){
            let mul=pp*pp1
            alert(`The Total price is:${pp}*${pp1}=${mul}`)
            alert(`The item details\n--------------\nItem Name  :  ButterScotch Icecream\nQuantity  :  ${pp1}\nPrice  :  ${pp}\n--------------\nTotal  :  ${mul}\n--------------`)
            const val={
                name:"ButterScotch Icecream",
                quantity:pp1,
                cost:mul
            }
            foodarr.push(val)
            calculatebill(foodarr)
            let f = Number(prompt(`Do yo want add another item\n1.YES\n2.NO`))
            if (f === 1) {
                let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                main(Number(n))
            }
            else if(f === 2){
                // alert(`Bill Amount\n--------------\nItem Name  :  ButterScotch Icecream\nQuantity  :  ${pp1}\nPrice  :  ${mul + 5}\n--------------\nTotal  :  ${mul + 5}\n--------------`)
                calculatebill(foodarr)

                let c = Number(prompt(`Do yo want to continue..?\n1.YES\n2.NO`))
                if(c === 1){
                    let n = Number(prompt("*Welcome To Fast Food Application**\nSelect the item you are craving for....\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
                     main(n)
                }
                else if(c === 2){
                    calculatebill(foodarr)
                    exit()
                }
                else{
                    invalid()
                }
            }
            else{
                invalid()
            }
        }
        else if(pp1<0){
            alert("Entered invalid option!!!!!Please select a valid option.......")
            ButterScotch()
        }
    }
    else{
        invalid()
    }    
}
  
//==================================================================================================================
//------------- main function-----------------------
alert("***             WELCOME TO FASTFOOD APPLICATION                ***")

    function main(num) {
        if (num === 1) {
            Sandwich()
        }
        else if (num === 2) {
            Burger()
        }
        else if(num === 3){
            Pizza()
        }
        else if(num === 4){
            Beverages()
        }
        else{
            invalid()
        }
    }
   
    let n = Number(prompt("***Welcome To Fast Food Application***\nSelect the What do you want\n1.Sandwich\n2.Burger\n3.Pizza\n4.Beverages"))
    main(Number(n))

  
