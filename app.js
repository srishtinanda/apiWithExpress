var express = require('express');
var app = express();

app.use(express.json());

let dummyData = [{
  id: '1',
  name: 'srishti'
},
{
  id: '2',
  name: 'nanda'
},
{
  id: '3',
  name: 'sidhant'
},
{
  id: '4',
  name: 'nanda'
}];
app.get('/api/myData', (req, res) => {
  res.send(dummyData);
});

app.get('/api/:month/:year', (req, res) => {
  res.send(req.params.month);
});

app.post('/api/myData', (req, res) => {
  const data = {
    id: dummyData.length + 1,
    name: req.body.name
  };
  dummyData.push(data);
  res.send(dummyData);
});

app.put('/api/myData/:id', (req, res) => {
  const findWithId = dummyData.find(data => data.id === req.params.id);
  if(!findWithId) {
    return res.status(404).send(error.details[0].message);
  }
  findWithId.name = req.body.name;
  res.send(dummyData);
})

app.delete('/api/myData/:id', (req, res) => {
  const deleteThis = dummyData.find(data => data.id === req.params.id);
  if(!deleteThis) {
    return res.status(404).send('ID does not exist in the Db');
  }
  const index = dummyData.indexOf(deleteThis);
  dummyData.splice(index, 1);
  res.send(dummyData);
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));