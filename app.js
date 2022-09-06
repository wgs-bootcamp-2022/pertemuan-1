const fs = require('fs');

fs.writeFileSync('test.txt','hello world secara synchronus'); //menulis file pada file test.txt 

fs.readFile('test.txt', 'utf8', function(err, data){ //membaca file pada file test.txt
    if (err) throw err;
    console.log(data);
});
  
const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
})

rl.question('What is your name? ', (name) =>{ //menginput dengan parameter name
    rl.question('What is your tlp? ', (tlp) =>{ // //menginput dengan parameter telp
        rl.question('Whats is your email? ', (email) => { //menginput dengan parameter email
            console.log(`Your name is ${name}, telephone is ${tlp} and your email is ${email}`); //menampilkan hasil input pada cli
            rl.close(); 
        })
    })
})
