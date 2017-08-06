import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Card, Icon, Image, Modal, Embed } from 'semantic-ui-react'
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

        //Use Axios
        axios.get("/api/video") 
            .then(response => {
                that.setState({videoList : response.data});
            })
            .catch(error => {
                console.log(error);
            })

        //Use Youtube API
        
    }


    render(){        
        const cardListItem = this.state.videoList.map((video)=>
            <Modal trigger={
                <Card
                    image={video.image}
                    header={video.title}
                    meta='video'
                    description='Youtube'     
                />
            }>
                <Modal.Header>{video.title}</Modal.Header>
                <Modal.Content children>
                <Embed
                    id= {video.id}
                    placeholder={video.image}
                    source='youtube'
                />
                <Modal.Description>
                    <Header>{video.title}</Header>
                </Modal.Description>
                </Modal.Content>
            </Modal>                  
            
        );        


        return(
            <Container fluid>
                <Header as='h2'>Videos</Header>
                 <Card.Group>
                   {cardListItem}
                </Card.Group>
            </Container>
        );
    }
}

export default Videos;