import React, {Component} from 'react';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            type:'Administrator',
        }
    }

    forAdministratorView(){
        return <div>
            <div id="HeadDiv">

            </div>
        </div>
    }

    render() {
        return <div>
            <h1>Hello Words</h1>
        </div>
    }
}

export default Header;