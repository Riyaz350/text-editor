// TEXT STYLE TYPE CHANGING
function editText(elementId, style){
    document.getElementById(elementId).addEventListener('click', function(){
    const inputText = document.getElementById('input')
    if(inputText.classList.contains(style)){
        input.classList.remove(style)
    }else{
        input.classList.add(style)
    }
    
})
}

editText('bold', 'font-bold')
editText('italic', 'italic')
editText('underline', 'underline')

// TEXT ALIGNING

editText('left', 'text-left')
editText('center', 'text-center')
editText('right', 'text-right')
editText('justify', 'text-justify')

// TEXT STYLE CHANGING


document.getElementById('up').addEventListener('click', function(){
    const sizeInput = document.getElementById('size')
})


// const sizeInput = document.getElementById('size')
// const sizeInputString = sizeInput.innerText
// const sizeInputCount = parseFloat(sizeInputString)

// const inputText = document.getElementById('input')
// inputText.style.fontSize = sizeInputCount



// COLOR CHANGER

function colorChanger(elementId){

var theInput = document.getElementById(elementId);

theInput.addEventListener("input", function(){
  var theColor = theInput.value;
  document.getElementById('input').style.color= theColor
  
  // Do something with `theColor` here.
}, false);
}

colorChanger("favcolor")



