<template>
  <div class="case">
    <div class="tops top3">
        <ul class="tab">
          <li  v-for='(item,index) in datas' :key=index @click='selected(index)' :class="{active:index==num}">
            {{item.title}}
          </li>
        </ul>
    </div> 
    <div class="location">
        当前所在位置>
        <a href="http://localhost:8080/#/">首页</a>>
        <a href="http://localhost:8080/#/produce">品牌产品</a>>
        <a href="##">{{datas[num].title}}</a>
    </div>
    <div class="center" v-for='(item,index) in datas' :key=index v-if='index==num'>
        <div class="text" v-for='(item_produce,index) in item.produce' :key=index>
          <p class='img'>
            <img :src='item_produce.img' alt="">
          </p>
           <p class='text_contain'>{{item_produce.text1}}</p>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case',
  data () {
    return {
      datas:[
        {title:"案例展示",
         produce:[
          {
            text1:'精品案例',
            img:require('../../assets/image/produce1_1.jpg')
          },
          {
            text1:'精品案例',
            img:require('../../assets/image/produce2_1.jpg')
          },
          {
            text1:'精品案例',
            img:require('../../assets/image/produce3_1.jpg')
          },
          {
            text1:'精品案例',
            img:require('../../assets/image/produce4_1.jpg')
          },
          {
            text1:'精品案例',
            img:require('../../assets/image/produce3_1.jpg')
          },
          {
            text1:'精品案例',
            img:require('../../assets/image/produce1_1.jpg')
          }
         ]
         },
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