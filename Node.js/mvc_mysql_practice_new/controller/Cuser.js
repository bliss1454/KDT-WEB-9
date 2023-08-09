// const User = require('../model/User');
import * as User from '../model/User.js';

export const index= (req, res) => {
    res.render('index');
};

export const signup = (req, res) => {
    res.render('signup');
};

export const post_signup = async (req, res) => {
    try{
        await User.post_signup(req.body);
        res.send({result: true});
    } catch (error) {
        console.log(error);
    }
};

export const signin = (req,res) => {
    res.render('signin');
};

export const post_signin = async (req,res) => {
    //model
    try {
        const result = await User.post_signin(req.body)
    } catch(error){
        console.log(error)
    }
};

export const post_profile = async (req,res) => {
    try {
        const result = await User.post_profile(req.body);
        res.render('profile', {data: result[0]})
    } catch (error) {
        console.log(error)
    }
};

export const edit_profile = async (req,res) => {
    try {
        await User.edit_profile(req.body);
        res.send({result:true});
    } catch (error) {
        console.log(error)
    }
};

export const delete_profile = async (req,res) => {
    try {
        await User.delete_profile(req.body.id);
        res.send({result:true});
    } catch (error) {
        console.log(error)
    }
};