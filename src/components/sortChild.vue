<template>
    <div class="bodyll">
        <div class="nav">
            <div class="search">
                <div class=" inp_nav">
                    <div class="inp">
                    <input type="text" name="" id="" placeholder="今日推荐：精选鲜橙">
                    <mt-button type="primary" size="small" >搜索</mt-button>
                    </div>
                </div>
                <div class="Popular">
                        <p>热门搜索</p>
                        <ul >
                            <li v-for="(item,index) in comments" :key="index">{{item.HotWordName}}</li>
                            <!-- <li>樱桃</li>
                            <li>樱桃</li>
                            <li>樱桃</li>
                            <li>樱桃</li>
                            <li>樱桃</li>
                            <li>樱桃</li> -->
                        </ul>
                        
                </div>
                <div class="Lately">
                    <p>最近搜索</p>
                    <ul>
                        <li>西瓜 <i class="iconfont icon-x-copy"></i></li>
                        <li>西瓜<i class="iconfont icon-x-copy"></i></li>
                    </ul>
                    <div id="empty">清空历史</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
   name:'sortChild',
    // props:["msg"],
    data(){
          return{
              comments:[]
          }
    },
    methods:{
     
    },
    created(){
        axios({
                method:"get",
                url:"https://api1.34580.com/sz/Products/ProductHotWordRequest?sourcetype=9"
            }).then((data)=>{
               // console.log(data.data.Data);
                this.comments = data.data.Data;
            })
    }
}
</script>

<style scoped>
    .bodyll{
        width: 100%;
        height: 900px;
        background: #f3f3f3;
    }
    .inp_nav{
        width: 100%;
        height: 55px;
        padding:.2rem;
        background:#fff;
    }
    .inp input{
        height: 37px;
        width: 81%;
        border:none;
        background:#f3f3f3;
        margin-right:.2rem;
        border-radius: 5px;
        padding-left: .2rem;

    }
    .Popular{
        height: 100%;
        width: 100%;
    }
    .Popular p ,.Lately p{
        font-size: 16px;
        margin:30px 0  0 15px;

    }
    .Popular ul{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;

    }
    .Popular ul li{
        height: 40px;
        width: 100px;
        background: #fff;
        margin: 15px 0 0 15px;
        font-size:14px;
        display: flex;
        justify-content:center;
        line-height:40px;
       
    }
    .Lately{
        height: 100%;
        width: 100%;
    }
    .Lately ul{
        margin-top: 15px;
    }
    .Lately ul li {
        height: 50px;
        background: #fff;
        border-bottom: 1px solid #e2e1e1;
        line-height:50px;
        padding:0 15px;
        font-size:16px;
    }
    .Lately ul li i{
        float: right;
    }
    #empty {
        height: 50px;
        line-height:50px;
        font-size:16px;
        background: #fff;
        display: flex;
        justify-content: center;
        color: #26a2ff;

    }
</style>
