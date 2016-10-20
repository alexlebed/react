var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <p>Hello, world! I am a CommentBox!!!!!!</p>
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);