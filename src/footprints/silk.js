fs = require('fs');


module.exports = {
    params: {
        path: 'logo.kicad_mod',
    },
    body: p => {
     return fs.readFileSync( p.param.path, 'utf8').replace(/.*\(descr.*svg2mod.*\)/,  p.at);
    }
    
}