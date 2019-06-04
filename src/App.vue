<template>
  <div id="app">
  <!-- <mt-header title="食行生鲜" type="default">
  <div slot="left">
     <mt-button  icon="back">返回</mt-button>
  </div>
  <mt-button icon="more" slot="right"></mt-button>
    <child :msg='hello' @shiajian="woshi"></child>
   </mt-header> -->
    <router-view></router-view> 
    <sort/>
    <sort2/>
    <listCommodities/> 


    <!-- <search/> -->
   
    <!-- <p msg='hello'></p>  -->
   <!-- <div>erter</div> --> 
  </div>
  
</template>
<script>

import sort  from "./views/sort/sort"
import sort2 from "./views/sort/sort2"
import search from "./components/search"
import listCommodities from "./views/sort/listCommodities"

 export default {
 name:"app",
  data(){
    return {
      hello:'你好',
     
    }
  },
  created(){
   // console.log(this);
  },
  components:{
    sort2,
    sort,
    search,
    listCommodities
    
  },
  methods:{
    woshi(data){
     console.log(data);  
    }
  }

}
</script>

<style >

</style>
