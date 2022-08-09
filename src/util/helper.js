const tarikh =new Date()
const month =tarikh.getMonth()+1
let date = function(){
    console.log(tarikh);
    console.log('month =',month);
}
module.exports.date = date

let getBatchInfo = function() {
    console.log('plutonium, W3D5, the topic for today is Nodejs module system')
}

module.exports.BatchInfo = getBatchInfo