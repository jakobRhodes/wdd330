function dynamicList() {
    var array =['week1/index.html', 'week2/index.html']
    var ol = document.getElementById("ol");
    for (i = 0; i < array.length; i++) {
        var a = document.createElement("a"); 
        var li = document.createElement("li");
        a.setAttribute('href', array[i]);
        a.text = array[i].split('/', 1) + " notes";
        li.appendChild(a);
        ol.appendChild(li);
    }
}