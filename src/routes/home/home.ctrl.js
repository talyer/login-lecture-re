"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req,res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },

};



const process = {
    login: (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");

        const response = {};    
        if (users.id.includes(id)) {
            const index = users.id.indexOf(id);
            if (users.psword[index] === psword) {
                response.success = true;
                return res.json(response);
                
            } 
        }

        response.success = false;
        response.msg = "false to login";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};