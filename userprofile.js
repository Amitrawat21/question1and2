var mongoose = require('mongoose');   

var conn = mongoose.createConnection('mongodb://127.0.0.1/blog');
  
var post_schema = mongoose.Schema({ 
     user_id: String, 
     mobile_no : Number,   
     dob:String
    
     },

 
{
      
strict: false,
      
collection: 'usersprofile'
  
});
  
var post = conn.model('usersprofile', post_schema); 


var records = []; 

  
var objectid1  = new mongoose.Types.ObjectId('629f486f7a100db2cca60666');  
var objectid2 = new mongoose.Types.ObjectId('629f486f7a100db2cca60667');  
var objectid3  = new mongoose.Types.ObjectId('629f486f7a100db2cca60668');  
var objectid4  = new mongoose.Types.ObjectId('629f486f7a100db2cca60669');   
var objectid5  = new mongoose.Types.ObjectId('629f486f7a100db2cca6066a');
 
      
records.push({
          
user_id: objectid1,
dob:  "25/01/1992",
mobile_no: 7011680391

      
} ,      

{  
    user_id: objectid2,
    dob: "25/01/1993", 
    mobile_no: 7011680391  

} , 

{  
    user_id: objectid3,
dob: "25/01/1994",
mobile_no: 7011680391

} , 
 
{  
    user_id: objectid4,
    dob:"25/01/2008",
    mobile_no: 7011680391  

},  
 

{  
    user_id: objectid5,
    dob:"25/01/1920",
    mobile_no: 7011680391 

}   ,   
 


);  
Object.keys(records).map((val)=>{ 
    console.log(val);
});  

insertAndNotify (records,  async function (err) { 
    
      
if (err) {
          
console.log(err);
          
process.exit();
      
}

await ans()
console.log('all done!!');
      
process.exit();

//continue all insert is done
  
});

function insertAndNotify(records, callback) {

var inserted = 0;
      
for (var i = 0; i < records.length; i++) {
          
(function(row) {
              
//anonymouse function for scope 
 //console.log(row.dob)
              
var new_post = new post({    
    
    
    
                  
user_id: row.user_id, 
email :row.email, 
dob: row.dob, 
mobile_no : row.mobile_no

                  

 
              
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
// this code is find the average of all the ages

let sum = 0;
let count = 0; 
var age;


let ans = async()=>{   
    const cursor =await post.find({}); 
     
        // console.log(cursor);
    
     for(let i = 0;i<cursor.length;i++){  

        console.log(cursor[i].user_id)
         var year = Number(cursor[i].dob.substr(6,10))  
         
  

         const today =  Date.now(); 
         console.log(today)
        //  console.log("dsadsaasd",today.getFullYear,year) 
           age = 2022 -  year; 

        //  console.log("asdsadsa",age)
         sum+=age;  
         count++;    

     
    
     console.log(sum,'the sum is ')
     console.log(count,"the count is ")
     const average = sum/count; 
     console.log("the average is" + average)  
      
    // this is for if age is greater than 25 
    
          if(age>25){   
             console.log(cursor[i].user_id,"=================")
           
         let ans =   await post.findOneAndDelete({user_id:cursor[i].user_id})   
         console.log(ans)
        
        }   
        else{ 
            console.log("error")
        }   
    }
}
      
    
     
     




