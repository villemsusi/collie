function send(e) {
    var data = {"id": e.id};
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/buffer", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {

            if (xhr.response) {
                console.log(xhr.response);
            } else {
                console.log("No response");
            }
        }
    }
    xhr.send(JSON.stringify(data));
};

function removeItem(e) {
    e.parentNode.parentNode.removeChild(e.parentNode);
    localStorage.removeItem(e.parentNode.id);
};