// program untuk memeriksa apakah sebuah teks merupakan palindrom atau bukan

const cekPalindrom = (a)=>{
    if(typeof a !== "string"){
        return "Teks harus string."
    } else{
        if(a.length % 2 === 0){
            for (let i = 0; i < a.length / 2; i++){
                let k = a.length - 1 - i
                if (a[i] !== a[k]){
                    return `${a} = Bukan Palindrom.`
                }else{
                    return `${a} = Palindrom.`
                };
            };
        } else{
            for (let i = 0; i < (a.length - 1) / 2; i++){
                let k = a.length - 1 - i
                if (a[i] !== a[k]){
                    return `${a} = Bukan Palindrom.`
                }else{
                    return `${a} = Palindrom.`
                };
            };
        };
    };
}

console.log(cekPalindrom("jenieeniej"))