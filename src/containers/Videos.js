import React from 'react';
import { Container, Header, Embed } from 'semantic-ui-react'
import axios from 'axios';




class Videos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            videoList : []
        }
    }

    componentDidMount(){       
        
        var that = this;

        axios.get("/api/video") 
            .then(response => {                                
                that.setState({videoList : response.data});
            })
            .catch(error => {
                console.log(error);
            })
        
    }


    render(){
        const videoListItem = this.state.videoList.map((video) =>
                <iframe width="300" height="215" src={video} frameborder="0" allowfullscreen></iframe>             
        );


        return(
            <Container fluid>
                <Header as='h2'>Videos</Header>
                {videoListItem}
            </Container>
        );
    }
}

export default Videos;