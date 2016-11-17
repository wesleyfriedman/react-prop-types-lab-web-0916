const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Name: {this.props.name}</p>
        {this.props.producer ? <small>{this.props.producer}</small> : null}
        <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, weight) => {
    if(props[weight]) {
      const value = props[weight]
      const validValue = value > 80 && value < 300
      if(value === undefined) {
        return new Error('The `weight` prop is required.')
      }
      if(isNaN(value)) {
        return new Error('The `weight` prop is not a number.')
      }
      if(!validValue) {
        return new Error('The `weight` prop should range between 80 and 300.')
      }
    }
  }
}


module.exports = Product;
