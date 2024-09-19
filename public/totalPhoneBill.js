export default function totalPhoneBill(data) {
    var calls = data.split(', ').filter(item => item === 'call').length;
    var sms = data.split(', ').filter(item => item === 'sms').length;
    var totalCost = calls * 2.75 + sms * 0.65;
    return "R" + totalCost.toFixed(2);
}


var data = 'call, sms, call, sms, sms';
console.log(totalPhoneBill(data));