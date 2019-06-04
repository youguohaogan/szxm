<template>
    <div class="headr">
            <router-link to ="/sortChild" tag="div" class="header"> 
             <!-- <div class="header"> -->
               <div class=" header-center">
                   <span  class=" searcho">
                        <i class="iconfont icon-sousuo search" >
                        </i>
                    </span>
                   <span class="renjian">人间美食</span>
               </div>
            <!-- </div>  -->
            </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.headr{
    height: 100%;
    padding: .15rem;
    border-bottom:1px solid #ddd;
}
.headr .header{
    height: 100%;
    widows: 100%;
    background: rgba(51,51,51,.06);
    border-radius: 1.25rem;
    
}
.searcho{
        display: flex;
        align-items: center;
}
.search{
    font-size:.6rem;
    color:#233;
   
}
 .renjian{
        color: #4f524e;
        font-size:20px;
        display: flex;
        align-items: center;
}
.header-center{
    height: .8rem;
    display: flex;
    justify-content: center;
}

</style>
