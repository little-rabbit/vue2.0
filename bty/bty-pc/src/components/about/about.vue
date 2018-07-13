<template>
  <div class="about" >
    <div class="tops top1">
        <ul class="tab">
          <li  v-for='(item,index) in datas' :key=index @click='selected(index)' :class="{active:index==num}">
            {{item.title}}
          </li>
        </ul>
    </div> 
    <div class="location">
        当前所在位置>
        <a href="http://localhost:8080/#/">首页</a>>
        <a href="http://localhost:8080/#/about">关于芭提雅</a>>
        <a href="##">{{datas[num].title}}</a>
    </div>
    <div class="center" v-for='(item,index) in datas' :key=index v-if='index==num'>
        <div class="text">
          <p v-html='item.text1'>{{item.text1}}</p>
          <p>{{item.text2}}</p>
          <p class='img'>
            <img :src='item.img' alt="">
          </p>
          <p>{{item.text3}}</p>
          <p>{{item.text4}}</p>
          <p>{{item.text5}}</p>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      datas:[
        {title:"公司简介",
         text1:'芭提雅（北京）智能科技有限公司，简称B.T.Y，芭提雅在傣语的意思是“祝福你”，同时寓意开心和快乐、博大与恒久。',
         text2:'芭提雅是泰国中南半岛南端的一处著名海景度假胜地，素以阳光、沙滩、海鲜名扬世界，享有“东方夏威夷”之誉，这里更有的著名的东南亚特色建筑----泰式竹楼别墅享誉世界，以至于后来的欧美国家在建筑别墅的过程中都采用了芭提雅竹楼别墅的风格，从而使芭提雅“竹楼别墅”成为世界别墅的延伸。',
         text3:'1979年，B.T.Y.品牌始创于泰国曼谷。B.T.Y公司以建造“竹木结构、标准化、模板化、智能化”拼装别墅为开端，从曼谷蔓延至芭提雅、清迈，并迅速进入国际市场，覆盖新加坡、马来西亚、澳洲、北美、欧洲等全球十余个国家和地区，以其精美的形制设计、精细的施工建造、精诚的服务以及低价高质的建造水平收到了全球市场与业界的广泛赞誉。',
         text4:'2018年，芭提雅（北京）智能科技有限公司，B.T.Y落地北京中关村，正式进驻中国市场。',
         text5:'经过近几年的研发和试验，成熟的推出符合中国特色的“黑天鹅”系列别墅，主要有佳墅(民宅)系列，雅墅(豪宅)系列，美墅(百变办公、各种会所)系列，艺墅(胶囊酒店、旅游度假产品)系列，四大系列100多种不同风格，不同面积，不同造型的别墅。另外公司将标准化的设计、工厂化的制造、装配化的施工、一体化的装修、信息化的管理应用于建筑产业，将建筑生产所涉及的设计、部品生产、施工、服务、管理以及后续装修等全过程联接为一个完整的产业链。从而实现有效降低行业建设成本，缩短行业建设周期，满足当前社会不同群体对建筑、装修产业的不同需求。',
         img:require('../../assets/image/about1.jpg')
         },
        {title:"企业文化",
         text1:`<div class="nyjjnr"><p><strong>品牌愿景：</strong></p>
        <p>B.T.Y.传统建筑模式的终结者，新时代中国别墅智能拼装建设的开启者，美好家居梦想的筑梦者。</p>
        <p><strong>品牌宣言：</strong></p>
        <p>颠覆传统建筑模式，终结暴利垄断，改善中国农村居住品质，打造中国最大的建筑产品超市。</p>
        <p><strong>企业团队价值观：</strong></p>
        <p>开放、包容、诚信、成就。</p>
        <p>开放：颠覆性创新思维，开放共享的商业平台、开放每个人的资源，共同实现商业目标;</p>
        <p>包容：尊重每个人的独特性，获得公平的对待以及拥有发挥潜能、达到成功的机会;</p>
        <p>诚信：诚信是我们事业成功的基础，言必信，行必正，我们追求事业的成功不仅仅是经济的成功，更应该获得业界的广泛尊重、信任和良好的声誉;</p>
        <p>成就：我们既要自强不息，也要激励他人，为实现我们的目标不断奋斗，为争取进步努力不懈。</p>
        <p style="text-align: center;">`,
         img:require('../../assets/image/about2.jpg')
        },
        {title:"组织架构",
         img:require('../../assets/image/about3.png')
        },
        {title:"发展历程",  
         img:require('../../assets/image/about4.png')
        },
        {title:"资质荣誉",
         text1:''
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