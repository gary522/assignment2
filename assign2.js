let arr = [
    "student on the bus", "useless stuff", "stubhub tickets", "unusual", "user study", " english teacher", "long distant", "search widget",
    "monkeyking", "make american great again", "working in progress", "passion fruit", "forget the past", "led", "global warming effect", "former president",
    "keep going", "soft landing", "interest", "darkness", "mapkit", "declared war", "young generations", "jump ahead",
    "shall", "modern design", "piece of cake", "any circumstances", "rough journey",
    "breath subtlely", "grade", "bank association",
    "zero", "go ahead", "strong woman", "biscuit basket", "slabs", "western logic thinking", "keep fighting", "xbox series x",
    "sell and buy", "smaller than nothing", "beside", "vehicle garage", "jack in the box", " good mood", "stock dropped", "energy man",
    "dog", "pacific ocean", "rubbed", "trunk", "glass", "window", "xfinity phone number", "wake me up in the first day of september morning",
    "successful launching", "including", "look out", "put together", "US army", "zillow estate", "season flu", "respect and love",
    "characteristic", "writing a letter", "grey goose", "load", "fought forever", "summer last", "feathers fade away", "equal right"
];

function fetchList(arr, sub) {
    let res = [];
    for (let i of arr) {
        if (i.indexOf(sub) >= 0) res.push(i);
    }
    return res;
}

document.getElementById("input").addEventListener('keyup', (e) => {
    let val = document.getElementById("input").value;
    console.log(val)
    let myList = fetchList(arr, val);
    console.log(myList)
    fillDropdown(myList, document.getElementById("dropdown"), val);
});

function clearDropdown(dropdown){
    dropdown.className='dropdownInvisible'
    document.getElementById('reset').className = 'visibleNone';
}

document.getElementById("reset").addEventListener('click', function () {
    clearDropdown(document.getElementById("dropdown"));
    document.getElementById('reset').className = 'visibleNone'
    document.getElementById("input").value = null
    document.getElementById("input").focus();
});

function fillDropdown(myList, dropdown, sub) {
    if(!sub.length || !myList.length) {
        clearDropdown(dropdown)
        return
    }
    let content = '<div>'
    for (let i of myList) {
        let first = i.indexOf(sub);
        content += '<a>'
        content += i.substring(0, first);
        content +=  '<b>'+i.substr(first, sub.length)+'</b>'
        content += i.substring(first+sub.length);
        content += '</a>'
    }
    content += '</div>'
    dropdown.innerHTML = content;
    document.getElementById('reset').className = 'visible'
    document.getElementById('dropdown').className = 'dropdownVisible'
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
}
