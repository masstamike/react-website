var AboutTheAuthor = React.createClass({
    render: function() {

        return (
            <div>
                <h2>About The Author</h2>
                Michael Sawyer is a recent CSU, Chico grad who has been studying
                Computer Science with a minor in Mathematics. He has ranked in the
                97th percentile (top 3%) on a <a href="http://www.ets.org/s/mft/pdf/acdg_computer_science.pdf">
                senior exit exam</a>, and has completed an extended
                internship at Hewlett-Packard, and is currently a DevOps Engineer
                at Veeva Systems in Pleasanton, CA.
                Michael Sawyer also has experience in software defined
                networks. Open Source contributions include <a href="http://www.mixxx.org">Mixxx</a>, as well as others
                found on his <a href="https://github.com/masstamike">GitHub</a>. Resume can be found at the
                bottom of the page. Other notable projects include&nbsp;
                <a href="https://play.google.com/store/apps/details?id=com.bustr">
                Bustr</a>, a social media android app.
            </div>
        );
    }
});

var BeerJournal = React.createClass({
    render: function() {

        return (
            <div>
                <h2>Beer Journal</h2>
                <a href="/beer">The Beer Journal</a> is a website I am developing to keep track of
                Beer tastings. The end goal will be for users to have own personal tastings organized in a journal, but there
                could also be a collaborative effort amongst users to achieve average scores for beers. Entering data into The
                Beer Journal should be quick, as should retrieving and recalling exactly how a specific beer tasted.
            </div>
        );
    }
});

var Header = React.createClass({
    render: function() {

        return (
            <h1>Welcome to Michael A. Sawyer's React Page!</h1>
        );
    }
});

var Body = React.createClass({

    render: function() {
        
        var tabId = function(key) {
            return "tab" + key;
        }

        var parentCallback = this.props.callbackParent;

        var tabsList = this.props.tabs.map(function(tab, key) {
            var _switchTab = function(key) {
                var listItems = key.target.parentElement.parentElement.childNodes;
                listItems.forEach(function(item) {
                    item.className='';
                });
                key.target.parentElement.className = "active";
                if (key.target.id === 'tab0') {
                    parentCallback({content:'AboutTheAuthor'});
                } else {
                    parentCallback({content:'BeerJournal'});
                }
            };
           
            if (key === 0) {
                return (
                    <li key={key} className="active">
                        <a id={tabId(key)} key={key} onClick={_switchTab}>{tab.label}</a>
                    </li>
                );
            } else {
                return (
                    <li key={key}>
                        <a id={tabId(key)} key={key} onClick={_switchTab}>{tab.label}</a>
                    </li>
                );
            }
        });
        
        return (
            <div>
                <ul className="nav nav-tabs">
                    {tabsList}
                </ul>
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
                    <a href="/Resume.pdf">Resume</a> |&nbsp;
                    <a href="/RecLetter.pdf">Letter of Recommendation</a> |&nbsp;
                    <a href="http://www.linkedin.com/in/michaelasawyer">LinkedIn</a>
                </div>
            </div>
        );
    }
});

var Main = React.createClass({

    getInitialState: function() {
        return {
            content: "AboutTheAuthor"
        };
    },

    childChanged: function(state) {
        this.setState(state);
    },
    
    render: function() {

        var tabs = [
            {
                "label": "About",
                "content": AboutTheAuthor
            },
            {
                "label": "Beer",
                "content": BeerJournal
            }
        ];

        if (this.state.content === "AboutTheAuthor") {
            return (
                <div>
                    <Header/>
                    <Body tabs={tabs} callbackParent={this.childChanged}/>
                    <div id="myTabContent">
                        <AboutTheAuthor callbackParent={this.childChanged}/>
                    </div>
                    <Footer/>
                </div>
            );
        } else if (this.state.content === "BeerJournal") {
            return (
                <div>
                    <Header/>
                    <Body tabs={tabs} callbackParent={this.childChanged}/>
                    <div id="myTabContent">
                        <BeerJournal callbackParent={this.childChanged}/>
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
});
