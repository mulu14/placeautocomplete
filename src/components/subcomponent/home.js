import React , {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import AutoComplete from './autocomplete'

const style ={
    listStyle: 'none'
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placename: '',
            lat: '', 
            long: ''

        };
        this.setStatefromChild = this.setStatefromChild.bind(this)
    }

   
    setStatefromChild =()=>{
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
              <AutoComplete/>
            </div>
        );
    }
}
const mapStateToProps =state =>{
    return{

    }
}
const mapDispatchToProps=dispatch=>{
    return {

    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));