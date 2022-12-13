var psGenerator = require('generate-password');

//len : length of the password
//allowNumber : Allow password to contain number
function generateRandomPassword(len,allowNumber)
{
    var password = psGenerator.generate({
        length: len,
        numbers: allowNumber
    });

    console.log(password)
}

generateRandomPassword(12,true);