import React, { Component } from "react";
import API from "../../utils/API";
import { Grid, Button, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import "./style.css"
import NavBar from '../../components/UI/NavBar/NavBar';


const btnStyle = {
    float: "right",
};

const formStyle = {
    display: "inline-block",
}

const postButtonStyle = {
    color: "blue", 
    height: "15px",
    width: "25px",
    marginRight: "8vw",
    marginLeft: "8vw",
};

const textStyle = {
    height: "20vh",
    width: "50vw",
    marginLeft: "8vw",
}

const title = {
    paddingTop: "4vw",
    marginBottom: "2vw",
    marginLeft: "8vw",
}

const resultsLine = {
    display: "inline-block",
    border: "1px solid black",
    width: "50%",
    marginBottom: "5px",
    marginTop: "2vw",
    marginLeft: "8vw",
    backgroundColor: "antiquewhite",
    paddingLeft: "1vw",
}

const vline = {
    marginBottom: "0",
}


class Messages extends Component {
    state = {
        messages: [],
        message: ""
    };

    componentDidMount() {
        this.loadMessages();
    };

 //******** LOAD MESSAGES ***************////   
    loadMessages = () => {
        console.log("this.loadMessages called");
        API.getMessages()
            .then(res => {
                console.log("load article res ", res.data);
                this.setState({ messages: res.data });
                console.log("savedArticle ", this.state.messages)
            })
            .catch(err => console.log(err));
    };


    deleteMessages = id => {
        API.deleteMessages(id)
            .then(res => this.loadMessages())
            .catch(err => console.log(err));
    };

    saveMessages = () => {
        const messagesData = {
            message: this.state.message,
            }
        API.saveMessages(messagesData)
            .then(res => {
                this.loadMessages()
                console.log("save message", res);
                this.setState({
                    message: "",
                })
            })
            .catch(err => console.log(err));      
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


  

    render() {


        return (
            <div className="mycontainer" >
            <NavBar />
            <Grid>
                <Row>
                    <Col>
                        <h1 style={title}>Message Board</h1>
                    </Col>
                </Row>
                <Row>
                    <FormGroup controlId="formControlsTextarea">
                    <Row>
                        <ControlLabel style={title}>Enter message</ControlLabel>
                    </Row>
                    <Row style={vline} >
                        <FormControl style={textStyle} name="message" value={this.state.message} onChange={this.handleInputChange} componentClass="textarea" placeholder="Enter message here" />
                    </Row>
                    <Row>
                        <div style={postButtonStyle}><Button  onClick={this.saveMessages} type="submit">Post message</Button></div>
                    </Row>
                    <Row>
                        <h2 style={title}>Current messages</h2>
                    </Row>

                    </FormGroup>
                        
                </Row>
                <Row>
                    {this.state.messages.map((eachItem, index) => 
                        <div key={index} style={resultsLine}><h1>{eachItem.message}</h1>
                        <Button style={btnStyle} onClick={() => this.deleteMessages(eachItem._id)}>x</Button></div>
                    )}
                </Row>
            </Grid>
            </div>
        );
    }
}

export default Messages;


