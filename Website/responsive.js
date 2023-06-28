//alert user a Thank You message when submit button is clicked
function submitButton(){
    alert("Thank You!");
    }

//When hovering over title(firstpage), background color changes to white
function changeBackground1(){
    document.getElementById('toprowoffavtable')
    .style.backgroundColor = '#e2dfd2';
}
function backToNormal1(){
    document.getElementById('toprowoffavtable').style.backgroundColor = '';
}
//Second row of table color change
function changeBackground2(){
    document.getElementById('rowwithdetails1')
    .style.backgroundColor = '#e9dcc9';
}
function backToNormal2(){
    document.getElementById('rowwithdetails1').style.backgroundColor = '';
}
//Third row of table color change
function changeBackground3(){
    document.getElementById('rowwithdetails2')
    .style.backgroundColor = '#e9dcc9';
}
function backToNormal3(){
    document.getElementById('rowwithdetails2').style.backgroundColor = '';
}

//When user hovers over paragraph text in first page, text turns to black
//and text gets bigger
//Turns back to normal when user stops hovering over text
//first paragraph
let firstparagraph1 = document.getElementById('firstparagraph1');
firstparagraph1.addEventListener('mouseover', function(){
    firstparagraph1.style.color = '#000000';
    firstparagraph1.style.fontSize = '24px';
})
firstparagraph1.addEventListener('mouseout', function(){
    firstparagraph1.style.color = '#343434';
    firstparagraph1.style.fontSize = '';
})

//second paragraph
let firstparagraph2 = document.getElementById('firstparagraph2');
firstparagraph2.addEventListener('mouseover', function(){
    firstparagraph2.style.color = '#000000';
    firstparagraph2.style.fontSize = '24px';
})
firstparagraph2.addEventListener('mouseout', function(){
    firstparagraph2.style.color = '#343434';
    firstparagraph2.style.fontSize = '';
})

