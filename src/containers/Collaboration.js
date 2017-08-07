import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'semantic-ui-react';
import { Route} from 'react-router-dom';
import Memo from './Memo';

//Components
import {RenderWindow, SideBar} from 'components/Collaboration';

//Styles
import styles from './Collaboration.css';
import classNames from 'classnames/bind';
import photon from 'photon/dist/css/photon.min.css';
const cx = classNames.bind(photon);

class Collaboration extends React.Component{
  constructor(props){
    super(props);    
  }

  render(){
    
    return(
      <div className={styles.app}>  
         <div className={photon.window}>
            
             <header className={cx("toolbar","toolbar-header")}>
                <h1 className={cx("title")}>Header with actions</h1>

                <div className={cx("toolbar-actions")}>
                  <div className={cx("btn-group")}>
                    <button className={cx("btn","btn-default")}>
                      <span className={cx("icon","icon-home")}></span>
                    </button>
                    <button className={cx("btn","btn-default")}>
                      <span className={cx("icon","icon-folder")}></span>
                    </button>
                    <button className={cx("btn","btn-default active")}>
                      <span className={cx("icon","icon-cloud")}></span>
                    </button>
                    <button className={cx("btn","btn-default")}>
                      <span className={cx("icon","icon-popup")}></span>
                    </button>
                    <button className={cx("btn","btn-default")}>
                      <span className={cx("icon","icon-shuffle")}></span>
                    </button>
                  </div>

                  <button className={cx("btn","btn-default")}>
                    <span className={cx("icon","icon-home icon-text")}></span>
                    Filters
                  </button>

                  <button className={cx("btn","btn-default","btn-dropdown","pull-right")}>
                    <span className={cx("icon","icon-megaphone")}></span>
                  </button>
                </div>
              </header>

            
            <div className={cx("window-content")}>
              <div className={cx("pane-group")}>
                <SideBar/>                
                <RenderWindow />                
              </div>
            </div>

            <footer className={cx("toolbar","toolbar-footer")}>
              <div className={cx("toolbar-actions")}>
                <button className={cx("btn","btn-default")}>
                  Cancel
                </button>
                <button className={cx("btn","btn-primary pull-right")}>
                  Save
                </button>
              </div>
            </footer>
            
          </div>
      </div>
            
    );
  }
}

export default Collaboration;