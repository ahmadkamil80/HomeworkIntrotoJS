let message = "The quick brown fox jumps over the lazy dog";

let hasil = "";

for (let i = 0; i < message.length; i++) {
    
    if (message[i] === 'a' ) {
        hasil += '*'
    } else if (message[i] === 'i'){
        hasil += '*'
    } else if (message[i] === 'u'){
        hasil += '*'
    } else if (message[i] === 'e'){
        hasil += '*'
    } else if (message[i] === 'o'){
        hasil += '*'
    } else {
        hasil += message[i]
    }
    console.log(hasil)
}
