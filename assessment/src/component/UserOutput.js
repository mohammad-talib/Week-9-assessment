import React,{Component} from 'react';

class UserOutput extends Component {

    render() { 
        return ( 
            <div>
                <p>Hello</p>
                <p>Hello</p>
                <p>username : {this.props.username}</p>
            </div>
         );
    }
}
 
export default UserOutput;