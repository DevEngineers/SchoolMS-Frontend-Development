import React, {Component} from 'react';
import '../styles/HeaderFooter.css';
import Button from '@material-ui/core/Button';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class Footer extends Component {
    constructor(props){
        super(props);

        this.state= {
            type:"Administrator"
        }
    }

    componentDidMount() {
        this.setState({type:localStorage.getItem('type')})
    }

    componentWillUnmount() {
        localStorage.removeItem('footerValue')
    }

    render() {
        return <div>
            {
                localStorage.getItem('footerValue') !== 'value' ?
                    (
                        this.state.type === 'Administrator'?
                            (<></>)
                            :(<div id={'footer'}>
                                <div id={'copyright'}>
                                    <label id={'contInfoLabel'}>Copyright &copy;2021 Gateway International School all right reserved</label>
                                    {/*<hr/>*/}
                                </div>
                                <div id="about-footer">
                                    <Button variant="contained" color="primary"> About US</Button>
                                </div>
                            </div>)
                    )
                    :(<></>,localStorage.removeItem('footerValue'))
            }
        </div>
    }
}

export default Footer;