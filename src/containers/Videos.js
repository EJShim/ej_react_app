import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Card, Icon, Image, Modal, Embed,  Dimmer, Loader, Segment } from 'semantic-ui-react'
import axios from 'axios';




class Videos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            dataExists: false,
            videoList : []
        }
    }

    componentDidMount(){       
        
        
        var that = this;

        //Use Axios
        axios.get("/api/video") 
            .then(response => {
                that.setState({
                    dataExists:true,
                    videoList : response.data
                });
            })
            .catch(error => {
                console.log(error);
            })

        //Use Youtube API
        
    }


    render(){        
        const pendingItme = (
                <Dimmer active page>
                    <Loader> Loading </Loader>
                </Dimmer>            
        );

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
                   
                   {this.state.dataExists ?  cardListItem : pendingItme }
                </Card.Group>
            </Container>
        );
    }
}

export default Videos;