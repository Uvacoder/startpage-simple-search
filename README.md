# Terminal Startpage

A Startpage that looks like a Terminal.

![](preview.png)

# Premade commands

reddit [subreddit]\
google [search]\
echo <what_you_want_to_echo>\
clear\

# How to add commands ?

To add commands, go to the commands.js file in the sources.\
You will see some premade commands that you will be able to edit and you can create new ones, these commands are just functions.

```js

function google(cmd) {
    if (cmd != "google") {
        str = "";
        var parameters = cmd.split(" ").slice(1);
        for (var i = 0; i < parameters.length; i++) {
            str = str + "+" + parameters[i];
        }
        window.open("https://www.google.com/search?q=" + str);
    } else {
        window.open("https://www.google.com");
    }
}

function reddit(cmd) {
    if (cmd != "reddit") {
        window.open("https://www.reddit.com/r/" + cmd.split(" ").slice(1)[0]);
    } else {
        window.open("https://www.reddit.com/");
    }
}

function clear(cmd) {
    document.getElementById('wrapper').innerHTML = "";
}

function echo(cmd) {
    block_log(cmd.split(" ").slice(1).join(" "))
}

```

# Theming

Want to customize the look of your Startpage ?\
We got you covered. You need to edit the terminal.css variables.

```css

:root {
    --main-bg-color: #547c99;
    --prompt-bg-color: #151515;
    --text-color: #6c99bb;
}

```
