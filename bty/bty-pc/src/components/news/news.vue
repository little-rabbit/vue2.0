<template>
  <div class="news">
    <div class="tops top6">
        <ul class="tab">
          <li  v-for='(item,index) in datas' :key=index @click='selected(index)' :class="{active:index==num}">
            {{item.title}}
          </li>
        </ul>
    </div> 
    <div class="location">
        当前所在位置>
        <a href="http://localhost:8080/#/">首页</a>>
        <a href="http://localhost:8080/#/news">新闻中心</a>>
        <a href="##">{{datas[num].title}}</a>
    </div>
    <div class="center" v-for='(item,index) in datas' :key=index v-if='index==num'>
        <div class="text" v-for='(item_produce,index) in item.produce' :key=index>
          <p class='img'>
            <img :src='item_produce.img' alt="">
          </p>
           <h3>{{item_produce.text1}}</h3>
           <p style='margin-left:5px'>{{item_produce.text2}}</p>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      datas:[
        {title:"政策新闻",
         produce:[
          {
            text1:'国内装配式建筑的疑惑和解决',
            text2:'近年来，政府越来越重视装配式建筑发展。装配式建筑有着环保、便捷、安...',
            img:require('../../assets/image/news1_1.jpg')
          },
          {
           text1:'2017年国内装配式建筑产业论坛',
            text2:'2017年12月16日上午，2017我国钢结构装配式建筑工业论坛在湛江举办。来...',
            img:require('../../assets/image/news1_2.jpg')
          },
          {
           text1:'各省份装配式建筑政策—有没有你的家乡？',
            text2:'装配式保证房推广总承揽招标：上海市修建建材业商场办理总站和上海市住...',
            img:require('../../assets/image/news1_3.jpg')
          },
          {
           text1:'国内装配式建筑政策',
            text2:'中共中央国务院《关于进一步加强城市规划建设管理工作的若干意见》......',
            img:require('../../assets/image/news1_4.jpg')
          },
          {
           text1:'装配式建筑结构技术的趋势',
            text2:'轻钢构架固模就是经过用轻钢构架来代替现场绑扎的钢筋，用免拆面板、保...',
            img:require('../../assets/image/news1_5.jpg')
          },
          {
           text1:'国内装配式建筑的模式创新',
            text2:'从来，世界经济已经历了长达8年的阵痛。作为高度融入全球经济的中国，同...',
            img:require('../../assets/image/news1_6.jpg')
          }
         ]
         },
        {title:"企业动态",
         produce:[
          {
           text1:'芭提雅智能拼装别墅打造住宅的技术特点 有哪些？',
            text2:'芭提雅智能别墅是一项严重民生工程，它不只需供给能住的房子，更要供给有...',
            img:require('../../assets/image/news2_1.jpg')
          },
          {
           text1:'轻钢别墅在百姓的眼里真的有那么贵吗？？?',
            text2:'有关于轻钢别墅遍及问题上业界人士，芭提雅智能别墅蔡（经理）介绍道：轻钢别...',
            img:require('../../assets/image/news2_2.jpg')
          },
          {
           text1:'农村选择芭提雅轻钢别墅房屋建筑的几大优势',
            text2:'目前，农村自建房、自建别墅成为一种风潮。芭提雅智能拼装别墅，也就成为...',
            img:require('../../assets/image/news2_3.jpg')
          },
          {
           text1:'芭提雅智能别墅：三十九年不懈努力，成为发展国际的装配式建筑企业',
            text2:'国内的建筑也在经过漫长的萌芽阶段后在飞速发展，新型材料的兴起与运用...',
            img:require('../../assets/image/news2_4.jpg')
          },
          {
           text1:' 筑梦2018·芭提雅智能拼装别墅长春分公司产品项目说明会正式启动',
            text2:'引领未来，芭提雅（香港）智能别墅实业有限公司长春分公司领先时代，开启人类...',
            img:require('../../assets/image/news2_5.jpg')
          },
          {
           text1:'芭提雅智能拼装别墅，全景式智能拼装别墅就认这个牌子',
            text2:'全景式智能拼装别墅哪个牌子好？芭提雅智能别墅设计时尚市场潜力大。现...',
            img:require('../../assets/image/news2_6.jpg')
          }
         ]
        },
        {title:"企业视频",
         produce:[
          {
           text1:'芭提雅企业视频',
            text2:'芭提雅智能别墅 打破传统建筑模式，引领科技装配式未来...',
            img:require('../../assets/image/news3_1.jpg')
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