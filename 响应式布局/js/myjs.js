function divtest() {
    // document.getElementById("test").className = "two";
    document.getElementById("test").innerHTML = "one";
    // alert("sdfsfsfs");
}

function chance() {
    // var clientWidth = 0;
    // document.getElementById("demo").innerHTML = document.body.clientWidth;
    // document.getElementById("demo").innerHTML="My First JavaScript";
    // clientWidth=document.body.clientWidth;
    if (document.body.clientWidth < 300) {
        document.getElementById("demo").className = "one";
        document.getElementById("demo").innerHTML = "one";
    } else if (document.body.clientWidth < 600) {
        document.getElementById("demo").className = "two";
        document.getElementById("demo").innerHTML = "two";
    } else {
        document.getElementById("demo").className = "three";
        document.getElementById("demo").innerHTML = "three";
    }

}
window.onresize = chance ;
window.onresize =  divtest;
