var Form = React.createClass({
    getInitialState: function() {
        return {name: ''};
    },

    handleAuthorChange: function(e) {
        this.setState({name: e.target.value});
        this.props.changeText(e.target.value);
    },

    handleSubmit: function(e) {
        e.preventDefault();
        this.props.addButtons(this.state.name);
        this.setState({name: ''});
        this.props.changeText();
    },

    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.name} onChange={this.handleAuthorChange}/>
                <input className="btn btn-success" type="submit" value="Post" />
            </form>
        );
    }
});

var Button = React.createClass({
    getInitialState: function() {
        return {name: this.props.data};
    },

    click: function() {
        this.setState({name: +this.state.name + 1});
        this.props.countClick();
    },

    render: function() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.click}>{this.state.name}</button>
            </div>
        );
    }
});

var ButtonList = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },

    countClick: function() {
        this.state.count++;
        this.setState({count: this.state.count});
    },

    render: function() {
        var button = this.props.data.map(function(item) {
            return (
                <Button data={item} countClick={this.countClick}/>
            );
        }.bind(this));

        return (
            <div className="row">
                <div className="col-md-6">
                    Count all click: { this.state.count } <br />
                    { this.props.text }
                    { button }
                </div>
            </div>
        );
    }
});

var Main = React.createClass({
    getInitialState: function() {

        setTimeout(function(){
            this.setState({buttons: [1,2,3,4]});
        }.bind(this),3000);

        return {
            buttons: [],
            text: 'Yo!'
        };
    },

    addButtons: function(button) {
        this.state.buttons.push(button);
        this.setState({buttons: this.state.buttons});
    },

    changeText: function(text) {
        this.setState({text: text});
    },

    render: function() {
        return (
            <div className="container-fluid">
                <Form addButtons={this.addButtons} changeText={this.changeText}/>
                <ButtonList data={this.state.buttons} text={this.state.text}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Main />,
    document.getElementById('content')
);