import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import photon from 'photon/dist/css/photon.min.css';
const cx = classNames.bind(photon);

class RenderWindow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const renWin =  ReactDOM.findDOMNode(this)
        this.props.manager.SetRenderWindow(renWin);        
    }

    componentWillUnmount(){
        this.props.manager.RemoveRenderWindow();
    }

    render(){
        return(
            <div className={cx("pane")}/>                            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        manager: state.Manager.manager,        
    };
};


export default connect(mapStateToProps)(RenderWindow);