const React = require('react')

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
            <p>Were writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    );
  }
}
module.exports = Tweet;
