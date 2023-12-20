// Function to add options to the select element
function addOption(value, text,id) {
    var select = document.getElementById(id);
    var option = document.createElement('option');
    option.value = text;
    option.text = text;
    select.add(option);
}

const options = new Map([
    ["Millimeter",0.001],
    ["Centimeter",0.01],
    ["Decimeter",0.1],
    ["Meter",1],
    ["Kilometer",1000],
    ["Foot",0.3048],
    ["Inch",0.0254],
    ["Mile",1609.344],
    ["Yard",0.9144]
]);

options.forEach((values, keys) => {
    // console.log(values, keys);
    addOption(values,keys,"inputState");
});

function update() {
    if(document.getElementById('inputState').value && document.getElementById('inputState1').disabled) {
        document.getElementById('inputState1').disabled=false;
        document.getElementById('input').disabled=false;
        options.forEach((values, keys) => {
            console.log(values, keys);
            addOption(values,keys,"inputState1");
        });
    }
}

function enableFind() {
    // console.log(document.getElementById('input').value);
    if(document.getElementById('inputState1').value && document.getElementById('input').value) {
        document.getElementById('submitBtn').disabled=false;
    }
}

function calculate() {
    var frm = document.getElementById('inputState').value;
    var to = document.getElementById('inputState1').value;

    var val = document.getElementById('input').value;

    var v1 = toMeter(frm,val);
    var v2 = frmMeter(to,v1);

    // console.log(v2);
    var cardBody = document.querySelector(".card2-body");

    // Remove all child nodes from the card-body
    while (cardBody.firstChild) {
      cardBody.removeChild(cardBody.firstChild);
    }
    cardBody.innerHTML=`<h4>
            <p>`+val+` `+frm+` =`+v2+` `+to+`</p>
            <p><strong>Formula :- </strong>1`+` `+to+` =`+frm+` * `+frmMeter(to,toMeter(frm,1))+`</p>
        </h4>`;

    // console.log(v2);
    var cardBody1 = document.querySelector(".card2-header");

    // Remove all child nodes from the card-body
    while (cardBody1.firstChild) {
      cardBody1.removeChild(cardBody1.firstChild);
    }
    cardBody1.innerHTML="<h1><strong>Result</strong></h1>";


    document.getElementById('output').value=v2;
}

function toMeter(frm,val) {
    return options.get(frm)*val;
}

function frmMeter(to,val) {
    return val/options.get(to);
}