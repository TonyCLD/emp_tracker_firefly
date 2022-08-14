const emp_router = require('express').Router();

emp_router.get('/test', (request, response) => {
    response.json({
        name: 'tony',
        age: 57
    });
});


module.exports = emp_router;