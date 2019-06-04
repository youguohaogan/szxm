<template>
    <dir class="list_commodities">
        <div class="title">
            <div class="Rotation_chart">
                 <mt-swipe :auto="3000">
                        <mt-swipe-item><img src="../../../public/images/wKgNY1zrzKiAZRpEAACUZL5UI2Y792.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../../../public/images/wKgNYlxua2OAQX_hAAJWTBIz33E216.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../../../public/images/wKgNYlzcNvWAKGh9AAFi3QgY2DI471.jpg" alt=""></mt-swipe-item>
                    </mt-swipe>
                <ul>
                   
                    <!-- <li><a href="#"><img src="../../../public/images/wKgNY1zrzKiAZRpEAACUZL5UI2Y792.jpg" alt=""></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li> -->
                </ul>
            </div>
                
            <div class="list">
                <dl v-for="(item,index) in comments" :key="index">
                    <dt><a href="#"><img :src="'http://picpro-sz.34580.com/sz/ImageUrl/'+item.PictureId+'/160.jpeg'"></a></dt>
                    <dd>{{item.HotWordName}}</dd>
                </dl>
            </div>
        </div> 
    </dir>
</template>
<script>
import axios from "axios"
export default {
    name:'listCommodities',
    data(){
        return{
            comments:[]
        }
    },
    created(){
            axios({
                method:"get",
                url:"https://api1.34580.com/sz/Products/HotCategoryRequest?sourcetype=9"
            }).then((data)=>{
               // console.log(data.data.Data.HotCategoryList);
                this.comments = data.data.Data.HotCategoryList
            })
    }
}
</script>

<style scoped>
.list_commodities{
    width:80%;
    height: 12.3rem;
    background: #fff;
    float:right; 
    overflow: hidden; 
    overflow-y: auto; 

}
.title{
    width: 4.8rem;
    height: 100%;
    /* border:1px solid #343434; */

}
.Rotation_chart{
        width: 4.8rem;
        height: 1.8rem;
}
.Rotation_chart img{
    width: 4.8rem;
}
.list  {
    /* width: 33.3%; */
    /* padding:10px; */
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
     flex-wrap: wrap;
}
.list dl{
    flex: 1;
    height: 2rem;
    width: 1.65rem;
    padding: .4rem 0;
}
.list dl dt a img{
    width: 1.5rem;
    padding-bottom: .1rem;

}
.list dl dd{
    display: flex;
    justify-content: center;
    /* margin-left: .22rem; */
    /* align-content: center; */
}
</style>
