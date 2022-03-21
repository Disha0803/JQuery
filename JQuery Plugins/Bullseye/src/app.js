
    $('.bsDemo').bullseye({
        top: 30,
        left: 5,
        bottom: 0,
        right: 10,
        heading: "What's Up?",
        content: "This tooltip has an invalid hex value as color parameter. The extension detects this and reverts to default value.",
        orientation: "left",
        color: "#fzff",
        onHoverMarkAsRead: true
    }).bullseye({
        bottom: 30,
        right: 4,
        heading: "Some title goes here",
        content: "Awesome, right?",
        color: "#fff",
        orientation: "right"
    }).bullseye({
        left: 600,
        bottom: 50,
        heading: "Hello World!",
        orientation: "bottom",
        color: "#fff"
    });