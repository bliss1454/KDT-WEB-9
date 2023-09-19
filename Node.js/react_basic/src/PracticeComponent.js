import {Component} from 'react';
import myImage from './푸바오.png';

class PracticeComponent extends Component {

    render() {

        return (
            <>
            <h1>실습1</h1>
            <div className="container">
                <div className="one">
                    <div className="white-eye">
                        <div className="black-eye"></div>
                    </div>
                </div>
            </div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
            </>
        );
    }
}


class test2Component extends Component {
    
    render() {
        const styles = {
            container: {
                color: 'orange',
                marginTop: '20px',
                fontSize: '40px'
            }
        };

        const name = '박가현';
        const my_style = {
            name: {
                backgroundColor: 'blue',
                color: 'orange',
                padding: '12px',
                fontSize: '40px'
            }
        }

        return (
            <>
            <div style={my_style.name}>{name}</div>
            <div style={styles.container}>
                <h2>안녕하세요</h2>
            </div>
            <div style={styles.container}>
                <img src={myImage} width={200} alt='이미지' />
            </div>
            </>
        );
    }
}

export default test2Component;