export default {
    formatCurrency: function (number) {
        return '$' + Number(number.toFixed(2)).toLocaleString() + ' ';
    }
}