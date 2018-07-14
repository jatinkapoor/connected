import React, { Component } from "react";
import API from "../../utils/API";
import { Grid, Button, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import "./style.css"


const btnStyle = {
    float: "right",
};

const postButtonStyle = {
    color: "blue", 
    height: "15px",
    width: "25px",
    float: "right",
    marginRight: "8vw",
};

const textStyle = {
    height: "20vh",
    width: "50vw",
}

const title = {
    marginTop: "4vw",
    marginBottom: "2vw",
}

const resultsLine = {
    display: "inline-block",
    border: "1px solid black",
    width: "75%",
    marginBottom: "5px",
    marginTop: "2vw",
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
            <Grid>
                <Row>
                    <Col>
                        <h1 style={title}>Message Board</h1>
                    </Col>
                </Row>
                <Row>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Enter message</ControlLabel>
                        <FormControl style={textStyle} name="message" value={this.state.message} onChange={this.handleInputChange} componentClass="textarea" placeholder="Enter message here" />
                        <div style={postButtonStyle}><Button  onClick={this.saveMessages} type="submit">Post message</Button></div>
                    </FormGroup>
                        
                </Row>
                <Row>
                    {this.state.messages.map((eachItem, index) => 
                        <div key={index} style={resultsLine}><h5>{eachItem.message}</h5>
                        <Button style={btnStyle} onClick={() => this.deleteMessages(eachItem._id)}>x</Button></div>
                    )}
                </Row>
            </Grid>
            </div>
        );
    }
}

export default Messages;


