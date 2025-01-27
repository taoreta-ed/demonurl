const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15*60*1000, // 15 minutos
    max: 100 // 100 peticiones
});

module.exports = limiter;