function divtest() {
    document.getElementById("test").className = "two";
    // alert("sdfsfsfs");
}

function chance() {
    var clientWidth = 0;
    document.getElementById("demo").innerHTML = document.body.clientWidth;
    // document.getElementById("demo").innerHTML="My First JavaScript";
    clientWidth=document.body.clientWidth;
    if (clientWidth < 300) {
        document.getElementById("demo").className = "one";
    } else if (clientWidth < 600) {
        document.getElementById("demo").className = "two";
    } else {
        document.getElementById("demo").className = "three";
    }
}
