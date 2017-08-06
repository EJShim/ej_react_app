import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'semantic-ui-react';
import { Route} from 'react-router-dom';
import Memo from './Memo';

//Styles
import classNames from 'classnames/bind';
import styles from './Collaboration.css';
import photon from 'photon/dist/css/photon.min.css';

const cx = classNames.bind(photon);



class Collaboration extends React.Component{
  constructor(props){
    super(props);

    // console.log(photon);
    console.log(cx(toolbar))
  }

  render(){
    
    return(
      <div className={styles.app}>  
         <div className={photon.window}>
            
             <header className={cx('toolbar', 'toolbar-header')}>
              <h1 className={cx("title")}>3D App will be implemented here</h1>
            </header> 

            
            <div className={cx("window-content")}>
              <div className={cx("pane-group")}>
                <div className={cx("pane pane-sm sidebar")}>
                  <nav className={cx("nav-group")}>
                    <h5 className={cx("nav-group-title")}>Favorites</h5>
                    <span className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-home")}></span>
                      connors
                    </span>
                    <span className={cx("nav-group-item","active")}>
                      <span className={cx("icon","icon-light-up")}></span>
                      Photon
                    </span>
                    <span className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-download")}></span>
                      Downloads
                    </span>
                    <span className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-folder")}></span>
                      Documents
                    </span>
                    <span className={cx("nav-group-item")}>
                      <span className={cx("icon","icon-window")}></span>
                      Applications
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

                <div className={cx("pane")}>
                  <table className={cx("table-striped")}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Kind</th>
                        <th>Date Modified</th>
                        <th>Author</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>bars.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>base.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>button-groups.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>buttons.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>docs.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>forms.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>grid.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>icons.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>images.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>lists.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>mixins.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>navs.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>normalize.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>photon.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>tables.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>tabs.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>utilities.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                      <tr>
                        <td>variables.scss</td>
                        <td>Document</td>
                        <td>Oct 13, 2015</td>
                        <td>connors</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>     
      </div>
            
    );
  }
}

export default Collaboration;