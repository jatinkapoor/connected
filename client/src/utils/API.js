import axios from "axios";

export default {
    // Gets all messages
    getMessages: function () {
        return axios.get("/api/message");
    },
    // Deletes the Messages with the given id
    deleteMessages: function (id) {
        return axios.delete("/api/message/" + id);
    },
    // Saves a article to the database
    saveMessages: function (messagesData) {
        console.log("messageData ", messagesData);
        return axios.post("/api/message", messagesData);
    },
    getGroupMembers: function () {
        return axios.get("/")
    }
};
