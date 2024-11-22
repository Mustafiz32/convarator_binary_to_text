function convertText(){
    const text = document.getElementById('text').value;
    let result = '';
    if(/^[01 ]+$/.test(text)){
        // binary to text
        const binaryArray = text.split(" ");
        for(let i = 0; i<binaryArray.length; i++){
            result += String.fromCharCode(parseInt(binaryArray[i], 2));
        }
    }
    else{
        // text to bainary
        for(let i = 0; i<text.length; i++){
            result += text[i].charCodeAt(0).toString(2) + "";
        }
    }
    document.getElementById('result').value = result.trim();
}