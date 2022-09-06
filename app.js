const fs = require('fs');
fs.writeFileSync('test.txt','hello world secara synchronus');

fs.readFile('test.txt', 'utf8', function(err, data){
    if (err) throw err;
    console.log(data);
});
  
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('What is your name? ', (name) =>{
    rl.question('What is your tlp? ', (tlp) =>{
        rl.question('Whats is your email? ', (email) => {
            console.log(`Your name is ${name}, telephone is ${tlp} and your email is ${email}`);
            rl.close();
        })
    })
})

//besok npm, belajar membangun aplikasi menyimpan kontak CLI denga yax
