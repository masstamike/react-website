var Header = React.createClass({
    displayName: "Header",

    render: function () {

        return React.createElement(
            "h1",
            null,
            "\"Welcome to Michael A. Sawyer's React Page!\""
        );
    }
});

var Body = React.createClass({
    displayName: "Body",


    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement("ul", { className: "nav nav-tabs" })
        );
    }
});

var Footer = React.createClass({
    displayName: "Footer",


    render: function () {
        return React.createElement(
            "div",
            { id: "footer" },
            React.createElement(
                "div",
                { className: "center" },
                "Questions or comments? Send them to",
                React.createElement(
                    "a",
                    { href: "mailto:michaelsawyer92@gmail.com" },
                    "\"Michael Sawyer\""
                ),
                React.createElement("br", null),
                React.createElement(
                    "a",
                    { href: "/Resume.pdf" },
                    "\"Resume\""
                ),
                React.createElement(
                    "a",
                    { href: "/RecLetter.pdf" },
                    "\"Letter of Recommendation\""
                ),
                React.createElement(
                    "a",
                    { href: "http://www.linkedin.com/in/michaelasawyer" },
                    "\"LinkedIn\""
                )
            )
        );
    }
});

var Main = React.createClass({
    displayName: "Main",


    render: function () {

        console.log("Building the website...");

        return React.createElement(
            "div",
            null,
            React.createElement(Header, null),
            React.createElement(Body, null),
            React.createElement(Footer, null)
        );
    }

});