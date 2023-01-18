//Program untuk mengubah urutan kata pada sebuah kalimat

const revSentence = (b)=>{
    if(typeof b !== "string"){
        return "Kalimat harus berupa string"
    }else{
        let temp = [""]
        let result = ""
        let k = 0
        for (let i = 0; i < b.length; i++){
            if (b[i] !== " "){
                temp[k] += b[i];
            }else{
                k += 1
                temp[k] = ""
            }
        }
        for (let j = temp.length-1; j >= 0; j--){
            if (j === 0){
                result += temp[j]
            } else{
                result += temp[j] + " "
            }
        }
        return result
    }
}

console.log(revSentence("Jodie paling ganteng sejagat raya"))