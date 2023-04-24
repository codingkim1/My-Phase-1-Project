# My-Phase-1-Project

This JavaScript code contains functions for handling transactions in a transaction history app. The app allows users to deposit or withdraw money from their account and view their transaction history.

## Getting Started
To use this code, you will need a basic understanding of JavaScript and web development. 
## Variables
The following variables are declared at the beginning of the code:
* acc_balance: a reference to the element on the webpage that displays the current account balance
* input: a reference to the input box on the webpage where users enter the amount they want to deposit or withdraw
* prevBalance: the previous balance of the account before any transactions have been made
## Functions
## setInitialBalance()
This function fetches the initial balance value of the account from a local server and displays it on the webpage.
## handleDeposit()
This function handles deposit transactions. It retrieves the amount entered by the user, checks if it is a valid amount, and creates an object with information about the transaction. The object is then sent to the server via a POST request in JSON format. If the request is successful, the balance is updated and an alert is displayed to confirm the deposit.
## handleWithdrawalTransactions()
This function handles withdrawal transactions. It retrieves the amount entered by the user, checks if it is a valid amount, and creates an object with information about the transaction. The object is then sent to the server via a POST request in JSON format. If the request is successful, the balance is updated and an alert is displayed to confirm the withdrawal.
## updateBalance(amount)
This function updates the account balance based on the type of transaction that was made. It creates an object with the new balance value and sends it to the server via a PUT request in JSON format. If the request is successful, the account balance is updated on the webpage.
## populateTable()
This function populates and updates the transaction history table on the webpage. It sends a GET request to the server to retrieve the transaction history data in JSON format. It then loops through the data and creates a new table row for each transaction.


  
