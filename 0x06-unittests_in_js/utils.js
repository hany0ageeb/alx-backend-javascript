const Utils = {
    calculateNumber: function(type, a, b) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        }
        if (type === 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        }
        if (type === 'DIVIDE') {
            const bRounded = Math.round(b);
            return bRounded === 0 ? 'Error' : Math.round(a) / bRounded;
        }
        return 0;
    },
};

module.exports = Utils;