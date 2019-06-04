const path = require("path");
 module.exports = {
   devserver:{
      proxy:{
            "/sz":{
                target:"https://api1.34580.com",
                changeOrigin:true
      }
   }

}
}