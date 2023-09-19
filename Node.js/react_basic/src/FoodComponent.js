import {Component} from 'react';
import PropTypes from 'prop-types';

class FoodComponent extends Component {
    
    render() {
        const styles= {
            color: 'red'
        }
        return (
            <>
                <div>제가 좋아하는 음식은 <span style={styles}>{this.props.food}</span></div>
            </>
        );
    }
};

FoodComponent.defaultProps = {
    food: '치킨',
};

FoodComponent.propTypes = {
    food: PropTypes.string.isRequired,
}

export default FoodComponent;