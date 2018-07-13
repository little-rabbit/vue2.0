<template>
    <div class="head">
        <div class="box">
            <div class="logo">
              <img :src="logo1" alt="">
            </div>
            <ul class="nav">
              <li v-for="(item,index) in titles" :key='index'>
                  <router-link :to=item.path>{{item.name}}</router-link>
              </li>
            </ul>
            <div class="clear"></div>
        </div>
    </div>
</template>
<script>
export default {
  name:'Head',
  data(){
      return{
        logo1:require('../../assets/image/logo1.png'),
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
  methods:{
    
  }
}
</script>

<style>

</style>

