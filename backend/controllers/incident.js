var request = require('request');

exports.createIncident =  (req, res, next) => {
  console.log(req);
    const options = {
      method: 'POST',
      url: 'http://presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer',
      body: req.body,
      json: true,
      headers: {
          'Content-Type': 'application/json',
          'X-User-Token': '06f26f9249b30010c99245fe5483bc1dff069b6327202477a702b7a028b9f2e294462060',
          'Authorization': 'Basic cmFjaGVsZTpBYTEyMzQ1NiE='
      }
  }
  request(options, function (err, response, body){
    if(res.statusCode == 200){
      res.send(response);
     }
     else {
       console.log(err);
      res.send(err);
     }
     
});
  
}
exports.getRequests =  (req, res, next) => {
    const options = {
      method: 'GET',
      url: 'http://presnowka.westeurope.cloudapp.azure.com:16001/api/now/table/task?sysparm_query=active%3Dtrue%5Esys_class_name%3Dincident%5EORsys_class_name%3Dsc_task%5Eopened_by%3D01020c5458330010c992d650e224fd3d',
      json: true,
      headers: {
          'Content-Type': 'application/json',
          'X-User-Token': '06f26f9249b30010c99245fe5483bc1dff069b6327202477a702b7a028b9f2e294462060',
          'Authorization': 'Basic cmFjaGVsZTpBYTEyMzQ1NiE='
      }
  }
  request(options, function (err, response){
     if(response.statusCode == 200){
      res.send(response);
     }
     else {
      res.send(err);
     }
     
});
  
}