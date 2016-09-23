var Header = React.createClass({
    render: function() {
        
        return (
            <h1>"Welcome to Michael A. Sawyer's React Page!"</h1>
        );
    }
});

var Body = React.createClass({
    
    render: function() {
        return (
            <div>
                <ul className="nav nav-tabs"></ul>
                {/*React.createElement(Tabs, null)*/}
            </div>
        );
    }
});

var Footer = React.createClass({

    render: function() {
        return (
            <div id="footer">
                <div className="center">
                Questions or comments? Send them to 
                    <a href="mailto:michaelsawyer92@gmail.com">"Michael Sawyer"</a><br/>
                    <a href="/Resume.pdf">"Resume"</a>
                    <a href="/RecLetter.pdf">"Letter of Recommendation"</a>
                    <a href="http://www.linkedin.com/in/michaelasawyer">"LinkedIn"</a>
                </div>
            </div>
        );
    }
});

var Main = React.createClass({
    
    render: function() {
        
        console.log("Building the website...");
        
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
    
});
