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
    } else if (document.body.clientWidth < 600) {
        // document.getElementById("demo").className = "four";
        document.getElementById("demo").style.backgroundColor="#6ffaff";
        // document.getElementById("demo").style.color = "red";
    } else {
        document.getElementById("demo").className = "three";
    }

}
window.onresize = chance;
