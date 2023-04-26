 //Declaring the variables to use
 let acc_balance = document.getElementById('acc-balance');
 let input = document.getElementById('input-box');
 let prevBalance =0;
//  //document
//  //    .getElementsByClassName("Withdrawal-btn")
//  //    .addEventListener('click', handleWithdrawalTransactions);
//  //setting the fuction for the initial balance value of the account
 function setInitialBalance(){
     let url = "http://localhost:3000/transaction-history";
     fetch(url, {method: "GET"})
     .then((response) => response.json())
     .then((data) =>{
         acc_balance.innerText = `Balance: ${data.amount} Sh`;
         prevBalance = data.amount;
     });
 }
//  //set a function for deposit transactions
 function handleDeposit(){
 let amount = input.value;
 let d = new Date(Date.now());
 if(amount < 0 || amount === ""){
     alert("Amount must be greator than zero");
     return;
 }
 //document.querySelector(".Withdrawal-btn").addEventListener('click', handleWithdrawalTransactions);
 document.querySelector('.deposit-btn').addEventListener('click', handleDeposit);
 //determine the transaction types to done by this function
 let data = {
 date: d,
 transaction_type: "Deposit",
 amount: amount,
 balance: prevBalance
 }
 data = JSON.stringify(data);
 let url = "http://localhost:3000/transaction-history";
 //fetch the deposit transactions via POST in Json API
 fetch(url, {
     method: "POST",
     body: data,
     headers: {
         "content-Type": "application/json",
     },
 })
     .then((response)=>response.json())
     .then((data)=> {
         console.log(data);
         input.value = "";
         updateBalance(parseInt(prevBalance)+parseInt(amount));
         alert(`Amount Deposited`);
     });
 }
 //set up a function to handle withdrawal transactions
 function handleWithdrawalTransactions(){
     let amount = input.value;
     let d = new Date(Date.now());
     if(amount < 0 || amount === ""){
         alert("Amount must be greator than zero");
         return;
     }
 //the data below is set for withdrawal transaction type
 let data = {
     date: d,
     transaction_type: "Withdraw",
     amount: amount,
     balance: prevBalance
 }


 document.querySelector("button.Withdrawal-btn").addEventListener('click', handleWithdrawalTransactions);
 document.querySelector('button.deposit-btn').addEventListener('click', handleDeposit);
 document.querySelector('button.input-box').addEventListener('click', displayDepositTransactions);
 //fetch the withdrawal transactions using POST in Json
 fetch(url, {
     method: "POST",
     body: data,
     headers: {
         "content-Type": "application/json",
     }
 })
     .then((response) => response.json())
     .then((data)=> {
         console.log(data);
         input.value ="";
         updateBalance(parseInt(prevBalance)-parseInt(amount));
         alert(`Amount Withdrawn`)
     })
 }
 //set up a function to update the account balance depended
 //on type of transaction done
 function updateBalance(amount){
     let data = {
         amount: amount,
         id: 0,
     };
 }
     data = JSON.stringify(data);
 let url = "http://localhost:3000/transaction-history";
 fetch(url, {
     method: "PUT",
     body: data,
     header:{
         "content-Type": "application/json",
     },
 })
     .then((response) => response.json())
     .then((data)=>{
         console.log(data);
         setInitialBalance();
     })
 //set a function to populate and update a transaction
 //on the browser once a transaction is done
 function populateTable(){
     let url = "http://localhost:3000/transaction-history";
     <tr>
         <th scope="row">${doc.id}</th>
         <td>${doc.date}</td>
         <td>${doc.amount}</td>
         <td>${doc.transaction_type}</td>
         <td>${doc.balance}</td>
     </tr>
     fetch(url), {
         method: "GET",
         headers:{
             "Content-TYpe": "Application/json",
         }
     }
     .then((response)=> response.json())
     .then((data)=> {
         let element = "";
         for (let doc of data)()=> {
             element = element+""
         }
     });
 }
 setBalance();
