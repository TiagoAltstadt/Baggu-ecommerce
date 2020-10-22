let axios = require('axios');
 let defaults = require('./default');

const url = 'gifs/';

 let gifResource={
     notFound: function(){
          return axios({
              ...defaults,
              method: 'GET',
              url: url + "404",
              params:{
                api_key:  'R6jTqokT4N1MYTYKHfCSDOgAqxRgh3dY'
              }
          })
     }
 };

 module.exports=gifResource;