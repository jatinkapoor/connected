import axios from "axios";

export default {
    // Gets all messages
    getMessages: function () {
        return axios.get("/api/messages");
    },
    // Deletes the Messages with the given id
    deleteMessages: function (id) {
        return axios.delete("/api/messages/" + id);
    },
    // Saves a article to the database
    saveMessages: function (messagesData) {
        return axios.post("/api/messages", messagesData);
    }
};
