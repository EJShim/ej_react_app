import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import photon from 'photon/dist/css/photon.min.css';
const cx = classNames.bind(photon);

class SideBar extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){        
    }

    componentWillUnmount(){
        
    }

    onClickTorus(e){
        console.log(e);
        this.props.manager.OnClickTorus();
    }
    onClickCube(e){
        console.log(e);
        this.props.manager.OnClickCube();
    }
    onClickSphere(e){
        console.log(e);
        this.props.manager.OnClickSphere();
    }

    render(){
        return(
             <div className={cx("pane pane-sm sidebar")}>
                  <nav className={cx("nav-group")}>
                    <h5 className={cx("nav-group-title")}> Shapes </h5>

                    <span 
                    onClick={this.onClickTorus.bind(this)} 
                    className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-home")}></span>
                      Torus
                    </span>
                    <span 
                    onClick={this.onClickCube.bind(this)}
                    className={cx("nav-group-item","active")}>
                      <span className={cx("icon","icon-light-up")}></span>
                      Cube
                    </span>
                    <span 
                    onClick={this.onClickSphere.bind(this)} 
                    className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-download")}></span>
                      Sphere
                    </span>
                    <span className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-folder")}></span>
                      Animate
                    </span>
                    <span className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-window")}></span>
                      Stop
                    </span>
                    <span className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-signal")}></span>
                      AirDrop
                    </span>
                    <span className={cx("nav-group-item")}>
                      <span className={cx("icon icon-monitor")}></span>
                      Desktop
                    </span>
                  </nav>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        manager: state.Manager.manager,        
    };
};


export default connect(mapStateToProps)(SideBar);