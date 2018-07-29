// NOTE: Can modify this to many controllers

module.exports = {

    // Define route handler functions here...
    
    index: (req, res, next) => {
        res.render('pages/index', {title: 'Change Me'});
    }


};
