var Header = React.createClass({
    render: function() {
        return React.createElement(
            'h1',
            null,
            "Welcome to Michael A. Sawyer's React Page!"
        )
    }
});

var Body = React.createClass({
    
    render: function() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'ul',
                {
                    className: 'nav nav-tabs'
                }
                //React.createElement(Tabs, null)
            )
        )
    }
});

var Footer = React.createClass({

    render: function() {
        return React.createElement(
            'div',
            {
                id: "footer"
            },
            React.createElement(
                'div',
                {
                    className: "center"
                },
                "Questions or comments? Send them to ",
                React.createElement(
                    'a',
                    {
                        href: "mailto:michaelsawyer92@gmail.com"
                    },
                    "Michael Sawyer"
                ),
                React.createElement('br', null),
                React.createElement(
                    'a',
                    {
                        href: "/Resume.pdf"
                    },
                    "Resume"
                ),
                React.createElement(
                    'a',
                    {
                        href: "/RecLetter.pdf"
                    },
                    "Letter of Recommendation"
                ),
                React.createElement(
                    'a',
                    {
                        href: "http://www.linkedin.com/in/michaelasawyer"
                    },
                    "LinkedIn"
                )
            )
        )
    }
});

var Main = React.createClass({
    
    render: function() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                Header,
                null
            ),
            React.createElement(
                Body,
                null
            ),
            React.createElement(
                Footer,
                null
            )
        )
    }
    
});
