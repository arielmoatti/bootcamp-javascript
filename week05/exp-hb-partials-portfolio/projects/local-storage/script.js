var text = $("textarea");
placeholderText = "type your secret message here...";
text[0].placeholder = placeholderText;

try {
    $(".save").click(function () {
        localStorage.setItem("storedTextarea", text.val());
        text.css({
            // "background-color": "firebrick",
            color: "darkmagenta",
        });
        text.val(
            "your message was released into the ocean... \nclose your browser and reload this page to retrieve your message later!"
        );
    });

    $(".retrieve").click(function () {
        text.css({
            // "background-color": "firebrick",
            color: "mediumblue",
        });
        text.val(
            "ohh... the message reads: " +
                '"' +
                localStorage.getItem("storedTextarea") +
                '"'
        );
    });

    $(".clear").click(function () {
        text.val("");
        text[0].placeholder = placeholderText;
        text.css({
            "background-color": "inherit",
            color: "inherit",
        });
    });

    text.focus(function () {
        text.prop("placeholder", "");
    });
} catch (err) {
    console.log("this browser is stubborn", err);
}
