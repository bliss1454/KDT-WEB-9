import ProTypes from 'prop-types';
import Book from './책.png';

function BookComponent(props) {
        return (
            <>
                <div className='body'>
                    <h1 className='h1'>이번주 베스트셀러</h1>
                    <img className='bookimg' src={Book} width={200} alt='이미지' />
                    <h2>{props.title}</h2>
                    <div className='detail'>저자: {props.author}</div>
                    <div className='detail'>판매가: {props.price}</div>
                    <div className='detail'>구분: {props.type}</div>
                </div>
            </>
        )
    };
    
    BookComponent.defaultProps = {
        
    }
    BookComponent.proTypes = {
        
    }
    
export default BookComponent;