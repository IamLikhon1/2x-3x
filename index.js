// প্রাকটিস প্রব্লেম 

// একটা ওয়েবসাইট এ একটা input ফিল্ড থাকবে। তার সাথে একটা বাটন থাকবে double নামে। তুমি ইনপুট ফিল্ড এ যদি কোন সংখ্যা লিখো তাহলে নিচে সেই সংখ্যা ডাবল করে দেখাবে। আরেকটা বাটন থাকবে triple নামে। সেটাতে ক্লিক করলে ইনপুট ফিল্ড এ যে সংখ্যা আছে সেটা তিনগুণ হয়ে যাবে। সেই সংখ্যা নিচে দেখাবে। আর যদি ইনপুট ফিল্ড এ সংখ্যা ছাড়া কোন কথা লিখে তাহলে একটা এলার্ট (alert) দিয়ে বলবে Please enter a number। এলার্ট ক্যামনে দেয় সেটা নিয়ে বিস্তারিত অনেকদিন পরে আমরা ই দেখায় দিবো। আপাতত দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।

document.getElementById('btn-double').addEventListener('click',function(){
    const getInputDouble=document.getElementById('input-filde');
    const getDoubleString= getInputDouble.value;
    const getDoubleNumber= parseFloat(getDoubleString);
    // clear
    getInputDouble.value='';
    
   if(isNaN(getDoubleNumber)){
    alert ('Enter a Number');
    return;
   }
   
    const multi2x= getDoubleNumber*2;
    
    const textArea=document.getElementById('text-area');
    const textString= textArea.value;
    const testNumber=parseFloat(textString);
    textArea.value=multi2x;

})

// Triple::::::::::::::::::::::::

document.getElementById('btn-triple').addEventListener('click',function(){
    const tripleNumber= document.getElementById('input-filde');
    const tripleNumberString= tripleNumber.value;
    const tripleNumberAmount= parseFloat(tripleNumberString);

    tripleNumber.value='';

    if(isNaN(tripleNumberAmount)){
        alert ('Enter a Number');
        return;
       }

    const tripleTextArea= document.getElementById('text-area');
    const tripleString= tripleTextArea.value;
    const tripleAmountNumber=parseFloat(tripleString);

    const multi3x= tripleNumberAmount*3;
    tripleTextArea.value=multi3x

    
})