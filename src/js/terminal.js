config = {
    shellPrompt: "$ "
}

document.getElementById("input_title").innerText = config.shellPrompt;
document.getElementById('input_source').addEventListener('keyup', submit_command);

var current_block;

function new_block() {
    current_block = document.createElement("div");
    current_block.classList.add("log");
    document.getElementById('wrapper').appendChild(current_block);
}

function block_log(message) {
    current_block.innerHTML = "<p>" + message + "</p>";
    new_block();
}

function submit_command() {
    if (!(event.keyCode === 13)) return;
    var command = document.getElementById("input_source").value;
    document.getElementById("input_source").value = "";

    new_block();

    if (typeof window[command.split(" ")[0]] === "function") {
        block_log(config.shellPrompt + command);
        window[command.split(" ")[0]](command);
    } else if (command != "") {
        block_log("command not found : " + command);
    }
}