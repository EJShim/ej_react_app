import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three'
import './About.css'

class Renderer extends React.Component{

  constructor(props){
    super(props);

    this.state={init:false}
  }

  componentDidMount() {
    this.Initialize();

    const parent = ReactDOM.findDOMNode(this);
    parent.appendChild(this.renderer.domElement);

  }
  componentWillUnmount() {
    const parent = ReactDOM.findDOMNode(this);
    parent.removeChild(this.renderer.domElement)
  }
  shouldComponentUpdate() {
    return false;
  }

  Initialize(){

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

    this.camera.position.z = 1000;
    let geometry = new THREE.BoxGeometry( 200, 200, 200 );
    let material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    this.mesh = new THREE.Mesh( geometry, material );
    this.scene.add( this.mesh );


    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.setState({init:true});
    this.animate();
  }

  animate() {
    // if(!this.state.init) return;

    requestAnimationFrame( this.animate.bind(this) );

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    // const parent = ReactDOM.findDOMNode(this);
    // this.renderer.setSize( parent.innerWidth, parent.innerHeight );
    this.renderer.render( this.scene, this.camera );
  }


  render(){    
    return(
      <div></div>
    )
  }
}

class About extends React.Component{

  render(){
    return(
      <div>
        <Renderer />
      </div>
    );
  }
}

export default About
