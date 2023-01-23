//program untuk mengurutkan sebuah deret angka, dan 0 sebagai pemisah angka

const divideAndSort = (c)=>{
    if (typeof c !== "number"){
        return "Tipe data harus integer"
    } else if (c.length <= 1){
        return "Jumlah angka pada deret harus lebih dari satu"
    } else {
        d = c.toString()
        //const parsedD = Number(d)
        let x = 0
        let arrNum = [""]
        let temp = []
        let result = []
        for (let i = 0; i < d.length; i++){
            if (d[i] !== "0"){
                arrNum[x] += d[i]
            } else {
                x++
                arrNum[x] = ""
            }
        }       
        for (let q = 0; q < arrNum.length; q++){
            for (let w = 0; w < arrNum[q].length; w++){
                temp[temp.length] = parseInt(arrNum[q][w])
            }
            for (let j = 0; j <= temp.length - 1; j++){
                for (let k = 0; k < temp.length - j - 1; k++){
                    if (temp[k] > temp[k+1]){
                        let temp2 = temp[k]
                        temp[k] = temp[k+1]
                        temp[k+1] = temp2
                    }
                }
            }
            result[q] = temp
            temp =[]
        }
        let result2 = ""
        for (let z = 0; z < result.length; z++){
            for (let r = 0; r < result[z].length; r++){
                result2 += result[z][r]
            }
        }
        let jadiBeneran = parseInt(result2)
        return jadiBeneran
    }
}

console.log(divideAndSort(973506732))