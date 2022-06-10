var mongoose = require('mongoose'); 
var md5 = require('md5') 




var string1 = 'amit';


  
var conn = mongoose.createConnection('mongodb://127.0.0.1/blog');
  
var post_schema = mongoose.Schema({}, {
      
strict: false,
      
collection: 'users'
  
});
  
var post = conn.model('users', post_schema);

var records = [];
  

      
records.push({
          
first_name: 'Amit ' , 
'email':'rawatamit8285@gmail.com',
'last_name': 'rawat', 
'password': 'amit123'
      
}  
,  

 
{  
first_name: 'rohan ' , 
'email':'kumarrohan1998@gmail.com',
'last_name': 'kumar' ,
'password':'rohan123'

},  
 

{ 
    first_name: 'himanshu ' , 
    'email':'himanshu1999@gmail.com',
    'last_name': 'kherwal'  ,
    'password':'himanshu123'
}, 
 
 

{ 
    first_name:'girish',  
    'email':'girishraj65@gmail.com',
    'last_name': 'khayap', 
    'password':'girish123'
} ,
 
{ 
    first_name:'vicky',  
    'email':'vicky@gmail.com',
    'last_name': 'sharma',   
    'password':'vicky123'
     
    
}


);  
Object.keys(records).map((val)=>{ 
    console.log(val);
}); 
 



  


insertAndNotify(records, function(err) {
      
if (err) {
          
console.log(err);
          
process.exit();
      
}
      
console.log('all done!!');
      
process.exit();

//continue all insert is done
  
});

function insertAndNotify(records, callback) {

var inserted = 0;
      
for (var i = 0; i < records.length; i++) {
          
(function(row) {
              
//anonymouse function for scope
              
var new_post = new post({
                  
first_name: row.first_name, 
email :row.email, 
last_name: row.last_name, 
password : md5(row.password)

                  

 
              
});
              
new_post.save(function(err, row) {
                  
if (err) {
                      
console.log(err);
                  
}
                  
else {
                      
inserted++;
                      
if (inserted == records.length) {
                          
callback();
                      
}
                  
}
              
});
          
})(records[i]);
      
}
  
}