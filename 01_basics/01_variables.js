const accountId = 1234567890;
let accountEmail = "priyansh@gmail.com";
var accountPassword = "1234567890";
accountCity = "Delhi";

//accountId = 9876543210; // This will throw an error if 'const' is used

console.log(accountId);

accountEmail = "priyansh23@gmail.com";
accountPassword = "0987654321";
accountCity = "Mumbai";
let accountState;

/*
prefer not use var
because it has function scope and can lead to unexpected behavior
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);