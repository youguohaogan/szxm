<template>
    <div class="sort2_center">
        <ul>
            <li >
                <a href="#">推荐分类</a>
            </li>
            <li v-for="(ietm,index) in goodsList" :key="index" @click="you">
                <a href="#">{{ietm.Name}}</a>
            </li>
            <!-- <li>
                <a href="">新鲜水果</a>
            </li> -->
            
        </ul>
    
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'sort2',
  data(){
      return{
          goodsList:[]
      }
  },
  methods:{
      you(){
          alert(325);
      }
  },
  created(){
    axios({
            method:"get",
            url:"https://api1.34580.com/sz/Products/BigCategoryRequest?sourcetyp"
        }).then((data)=>{
            // console.log(data.data.Data);
            this.goodsList = data.data.Data;
        })
            
    }

}
</script>
<style scoped>
.sort2_center{
    position: absolute;
    /* width: 100%; */
    height: 100%;
    background: #f3f3f3;
    overflow: hidden; 
    overflow-y: auto; 
    width: 100px;
    /* border-right: 1px solid #dfdfdf; */
}
   
.sort2_center ul {
    width: 100%;
    /* display: flex;
    align-items: center; */
    /* justify-content: center; */
}
.sort2_center ul li{
    border-bottom: 1px solid #dfdfdf;
}
.sort2_center ul li a{
    /* border-left: 3px solid #45ac2a;
    color: #45ac2a; */
    display: block;
    /* text-decoration: none; */
    color: #666;
    height: 46px;
    line-height: 46px;
    text-align: center;
}
</style>
