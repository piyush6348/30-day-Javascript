const keys =[
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L'
]

function buildButtonsView() {
    var btnsDiv = document.getElementById('btnsDiv')
    keys.forEach(key => {
        btnsDiv.appendChild(createButton(key))
    });
}

function createButton(key) {
    var newButton = document.createElement("input")
    // newButton.setAttribute("onclick", "blah(this.parentNode.value)")
    newButton.type = "button"
    newButton.value = key
    newButton.id = key
    newButton.classList = ["btnClickClass"]
    newButton.onclick = onClickEventHandler
    return newButton
}

function onClickEventHandler(event) {
    var target = event.target || event.srcElement
    console.log("Element clicked has id = " + target.id)
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    alert(charStr);
}

buildButtonsView()