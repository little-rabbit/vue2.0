<template>
  <div class="cooperate">
    <div class="tops top5">
        <ul class="tab">
          <li  v-for='(item,index) in datas' :key=index @click='selected(index)' :class="{active:index==num}">
            {{item.title}}
          </li>
        </ul>
    </div> 
    <div class="location">
        当前所在位置>
        <a href="http://localhost:8080/#/">首页</a>
        <a href="http://localhost:8080/#/cooperate">招商合作</a>
        <a href="###">{{datas[num].title}}</a>
    </div>
    <div class="center" v-for='(item,index) in datas' :key=index v-if='index==num'>
        <div class="text" v-for='(item_produce,index) in item.produce' :key=index>
          <p class='img'>
            <img :src='item_produce.img' alt="">
          </p>
           <p v-html='item_produce.text2'>{{item_produce.text2}}</p>
          <p class='img'>
            <img :src='item_produce.img1' alt="">
          </p>
           <p v-html='item_produce.text3'>{{item_produce.text3}}</p>          
          <p class='img'>
            <img :src='item_produce.img2' alt="">
          </p>
          <p class='img'>
            <img :src='item_produce.img3' alt="">
          </p>
           <p v-html='item_produce.text4'>{{item_produce.text4}}</p>          
          
           <p v-html='item_produce.text5'>{{item_produce.text5}}</p>
          <p class='img'>
            <img :src='item_produce.img4' alt="">
          </p>
          <p v-html='item_produce.text1'>{{item_produce.text1}}</p>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cooperate',
  data () {
    return {
      datas:[
        {title:"公司优势",
         produce:[
          {
            img:require('../../assets/image/join1_1.png')
          }
         ]
         },
        {title:"前景规划",
         produce:[
          { 
            img1:require('../../assets/image/join2_1.png'),
            img2:require('../../assets/image/join2_2.jpg'),
            img3:require('../../assets/image/join2_3.png'),
            img4:require('../../assets/image/join2_4.jpg'),
            text2:`<div class="nyjjnr"><p><strong>发展规划：</strong></p>
                  <p>一、一个中心：大陆执行委员会在华企业总部选址，以北京为中心(包括雄安新区)。</p>
                  <p>二、两个小镇：打造南北两个代表性的极地小镇，南考虑(温泉度假小镇);北考虑(俄罗斯冰雪小镇)，打造成中国最具特色的科技型、智慧型、具有时尚元素的住宅产业公园小镇，供政府和各界人士参观考察、旅游度假。引领中国智能住宅产业健康发展，年底完成政府对接和选址。</p>
                  <p>三、三大基地：以南京、天津、成都，具有水、陆、空、铁运输较便利的港口城市为基地。</p>`,
            text3:`<p>四、四大片区</p>
                  <p>▌北部寒冷(黑吉辽内蒙古)</p>
                  <p>▌南部温热(长江以南地区)</p>
                  <p>▌西南高原(云贵川)</p>
                  <p>▌西北草原(新疆、西藏、甘肃、青海)</p>`,
            text4:`<p>未来蓝图:</p>
                  <p>未来BTY小黄褂服务商将遍布全国各个村落，以泰国皇室服务标准为亿万人民的居家梦想提供精准服务。</p>
                  <p>让芭提雅员工成为世界上最幸福的人。</p>
                  <p>芭提雅建筑产品遍及中国各个村镇，景区景点、繁华都市。</p>`,
          }
         ]
        },
        {title:"加盟政策",
         produce:[
          {
            img:require('../../assets/image/join3_1.png')
          },
           {
            img:require('../../assets/image/join3_2.jpg')
          },
         ]
        },
        {title:"加盟流程",
         produce:[
          {
            text1:`<strong>一：地级专员</strong><br>
<strong>加盟条件</strong><br>
1. 加盟意向金2万元。<br>
2. 加盟费按照行政区域划分，每个区县级保证金5万元。 （在合同期内申请退出需要提前二个月，保证金在交接工作 &nbsp; &nbsp; 完成之日后一月之内全额返还。）<br>
3. 负责和管理所属区域内所有县级分公司的组建和运营工作。 4. 地级专员的提成是所属区域内每个县级分公司所有股东红 &nbsp; &nbsp; &nbsp;利的5%+参加重大工程项目众筹所得分红。<br>
<strong>考核标准</strong><br>
1. 所属区域县级分公司发展不到60%，分红减半。 2. 辞退地级专员（申请辞职需要提前二个月）。 3. 加盟费在交接工作完成之日后一月之内全额返还。 4. 合同一年一签。<br>
<br>
<br>
<br>
<br>
<strong>二：县级城市合伙人</strong><br>
<strong>成立标准</strong><br>
1. 工程施工。<br>
2. 组建团队。<br>
3. 招募分公司股东。分公司股东数量按照所在区域拥有的下级行政区域来决定。<br>
4. 签约施工团队。<br>
5. 协调与配合分公司日常工作<br>
<strong>合作费用</strong><br>
1. 加盟意向金5000元。 2. 加盟费15万，分公司开业返还。 3. 分公司预存15万，交给总公司。 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>
4. 70%返还当地分公司作为分公司货款备用金，30%作为保证金。<br>
<br>
<br>
<br>
<strong>三：事业合伙人</strong><br>
加盟费2.98万元（优惠1万元）<br>
<br>
<strong>A 套餐： </strong><br>
加盟费1.98万元/年（从当年销售业绩提成里扣除） 保证金3000元，保证金随时可退，提前一个月申请。 合同期1年，提前一个月申请续签。<br>
<br>
<strong>B 套餐：</strong><br>
加盟费0.98万元（现金或转账） 合同期3年，提前一个月申请续签。<br>
&nbsp;`
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