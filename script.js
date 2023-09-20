function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if (inIframe() == false) {
    alert("nope")
    document.getElementsByTagName('body')[0].innerHTML = "<br><br><br><br><br><marquee>nope.</marquee>"
}

function create(h) {
    var urlinp = document.getElementById("urlinp")
    var nopen = document.getElementById("nopen").checked
    if (h !== null) {
        var url = h
    } else {
        var url = urlinp.value
    }
    if (nopen == true) {
        var win = window
        document.getElementsByTagName('html')[0].innerHTML = ""
    } else {
        var win = window.open();
    }
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    var title = win.document.createElement('title')
    iframe.style.border = 'none';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}
