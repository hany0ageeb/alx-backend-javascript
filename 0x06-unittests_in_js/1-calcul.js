function calculateNumber(type, a, b){
    switch(type){
        case 'SUM':
            return Math.round(a) + Math.round(b);
        case 'SUBTRACT':
            return Math.round(a) - Math.round(b);
        case 'DIVIDE':
            const bRounded = Math.round(b) 
            if(bRounded === 0){
                return 'Error';
            }
            return Math.round(a) / bRounded;
    }
}

module.exports = calculateNumber;