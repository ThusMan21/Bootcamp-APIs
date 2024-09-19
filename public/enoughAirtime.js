export default function enoughAirtime(bill, availableAmount) {
    const calls = bill.split(',').filter(item => item.trim() === 'call').length;
    const sms = bill.split(',').filter(item => item.trim() === 'sms').length;
    const totalCost = calls * 2.75 + sms * 0.65;
    const remainingAirtime = availableAmount - totalCost;

    return parseFloat(remainingAirtime.toFixed(2));
}