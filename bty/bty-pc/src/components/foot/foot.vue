<template>
    <div>
    <nav>
        <ul>
            <li v-for="(item,index) in titles" :key='index'>
                <router-link :to=item.path>{{item.name}} |</router-link>
            </li>
            <li>
                <span>全国招商热线：<em>010-86468277</em></span>
            </li>
        </ul>
    </nav>
    <div class="foot">
        <div class="tbl">
            <div class="logo"><a title="功夫神话" href="/"><img :src="img1"></a></div>
            <div class="foot_comp">
            <h4>芭提雅（北京）智能科技有限公司</h4>
            <p>地址：北京市海淀区海淀大街27号1-4层部分二层2-047</p></div>
            <div class="foot_2wm"><img :src="img2" alt="微信公众号" title="关注官方微信"></div>
            <div class="foot_right">Copyright © 2018 <a href="/">芭提雅@btyznbs</a> 版权所有<br> 
            备案号：京ICP备18031602号-1
            </div>
        </div>
   </div>
     </div>
</template>
<script>
export default {
    name:'Foot',
    data(){
      return{
          img1:require('../../assets/image/logo.png'),
          img2:require('../../assets/image/2weima.jpg'),
        titles:[
        {name:'企业首页',path:'/' },
        {name:'关于芭提雅',path:'/about'} ,
        {name:'品牌产品',path:'/produce'},
        {name:'经典案例',path:'/case'},
        {name:'科研技术',path:'/technology'},
        {name:'招商合作',path:'/cooperate'},
        {name:'新闻中心',path:'/news'},
        {name:'联系我们',path:'/contact'}]
      }
  },
}
</script>
<style>
</style>


