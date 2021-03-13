accountDetails1 = {
    accNumber: 1236521546,
    balance: 50000,
    withDraw: function name(amountToBeWithdrawn) {
        if (this.balance >= amountToBeWithdrawn && amountToBeWithdrawn > 0) {
            this.balance = this.balance - parseInt(amountToBeWithdrawn);
        } else {
            alert("insufficient balance")
        }
    },
    deposit : function name(amountToBeDeposit) {
        if (amountToBeDeposit > 0) {
            this.balance = this.balance + parseInt(amountToBeDeposit);
    
        } else {
            alert("enter valid amount")
    
        }
    
    }
}
    
accountDetails2 = {
    accNumber:16522256,
    balance:70000,
    withDraw: function name(amountToBeWithdrawn) {
        if (this.balance >= amountToBeWithdrawn && amountToBeWithdrawn > 0) {
            this.balance = this.balance - amountToBeWithdrawn;
        } else {
            alert("insufficient balance")
        }
    },
    deposit : function name(amountToBeDeposit) {
        if (amountToBeDeposit > 0) {
            this.balance = this.balance + amountToBeDeposit;
    
        } else {
            alert("enter valid amount")
    
        }
    }
};
    
accountHolder = {
    name: "Md Akbar Ali",
    mobile:8310065061,
    adhar:45632179893,
    account1: accountDetails1,
    account2: accountDetails2,
}
var balanceButton=document.getElementById("button")
balanceButton.onclick= function name() {document.getElementById("balance").innerHTML= "hi " +accountHolder.name + " your balance is " +accountHolder.account1.balance}
var withDrawButton=document.getElementById("withdraw")
withDrawButton.onclick= function name() {
 var amountToBeWithdrawn=document.getElementById("wdr").value;
 accountHolder.account1.withDraw(amountToBeWithdrawn);
 document.getElementById("balance").innerHTML= "hi " +accountHolder.name + " your balance is " +accountHolder.account1.balance;
 
};

var depositButton=document.getElementById("deposit")
depositButton.onclick= function () {
 var amountToBeDeposit=document.getElementById("dpst").value;
 accountHolder.account1.deposit(amountToBeDeposit);
 document.getElementById("balance").innerHTML= "hi " +accountHolder.name + " your balance is " +accountHolder.account1.balance;
  
}