let express = require('express');
const app = express();
const path = require('path');
let hbs = require('hbs');
let request = require('request');
let forecast= require('./utils/forecast.js');
let geocode = require('./utils/geocode.js');
// Getting the paths were our files reside.
let publicDirectoryPath = path.join(__dirname,'../public'); // Getting the relative path to the public/views directory
let viewsPath = path.join(__dirname,'../templates/views');
let partialsPath = path.join(__dirname,'../templates/partials');

console.log(partialsPath,viewsPath);
// sets the view engine to hbs
app.set('view engine','hbs');

// changing the directory where our templates can be found ( now they're inside the templates folder)
app.set('views',viewsPath);  // Setting the dynamic files path
app.use(express.static(publicDirectoryPath)); // Setting static files path
hbs.registerPartials(partialsPath); // Setting hbs paths


app.get('/weather',(req,res)=>{ 
   let address = req.query.address;
   if(!address)   return  res.send({error:'Please provide a valid term'});
      
   geocode(address,(error,{latitude,longitude,location}={})=>{ // providing a default  object in case we don't get latitude,longitude,location 
      if(error) return res.send({error});
      forecast(latitude,longitude,(error,forecastData)=>{
         if(error) return res.send({error});

          res.send
          ({
             data:forecastData,
             location,
             address
          }) 
          })
   })
   
 })

 app.get('/about',(req,res)=>{ 
   res.render('about',
   {
      name:'Robert',
      title:'About me'
   });  // First parameter is the name of the file
 });


app.get('',(req,res)=>
 {
 res.render('index',
 {
    title:'Weather App',
    name:'Robert'
 }
 );
 }
 );
app.get('/help/*',(req,res) => {res.render('404page',{
   title:'404',
   name:'Robert M.',
   error:'Help article not found'}) });



 app.get('/help',(req,res)=>{
 res.render('help',{help:'Help Section'})  }
 );


 app.get('/products',(req,res)=>{ 
   if(!req.query.search){ // if no search term was found;  !{ search : 'value' }   -> false
    return res.send({error:'You must provide a search term'})
   }
  
      res.send({products:[]});

   
 });

app.get('*',(req,res)=>
{
res.render('404page',{
   
   title:'404',
   name:'Robert M.',
   error:'404 page not found'})

}
);




 app.listen(3000,()=>{ console.log('Server is running ... ')}); // Listening to incoming requests on port 3000;