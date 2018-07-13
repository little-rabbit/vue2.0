<template>
  <div class="technology">
    <div class="tops top4">
        <ul class="tab">
          <li  v-for='(item,index) in datas' :key=index @click='selected(index)' :class="{active:index==num}">
            {{item.title}}
          </li>
        </ul>
    </div> 
    <div class="location">
        当前所在位置>
        <a href="http://localhost:8080">首页</a>>
        <a href="http://localhost:8080/technology">品牌产品</a>>
        <a href="##">{{datas[num].title}}</a>
    </div>
    <div class="center" v-for='(item,index) in datas' :key=index v-if='index==num'>
        <div class="text" v-for='(item_produce,index) in item.produce' :key=index>
          <p class='img'>
            <img :src='item_produce.img' alt="">
          </p>
           <p>{{item_produce.text1}}</p>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'Technology',
  data () {
    return {
      datas:[
        {title:"自主研发",
         produce:[
          {
            img:require('../../assets/image/technology1_1.png')
          }
         ]
         },
        {title:"全球技术",
         produce:[
          {
            img:''
          }
         ]
        } 
      ],
      num:0
    }
  },
  methods:{
    selected(index){
      this.num=index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>