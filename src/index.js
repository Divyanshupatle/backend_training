const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);
mongoose.connect("mongodb+srv://team-28-plutonium:J9CHWny8TKmvChdL@cluster0.zrvtnuy.mongodb.net/team-28-plutonium-DB?retryWrites=true&w=majority",{
    userNewUrlParser: true
}).then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err))


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
