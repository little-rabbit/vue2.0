<template>
  <div class="produce">
    <div class="tops top2">
        <ul class="tab">
          <li  v-for='(item,index) in datas' :key=index @click='selected(index)' :class="{active:index==num}">
            {{item.title}}
          </li>
        </ul>
    </div> 
    <div class="location">
        当前所在位置>
        <a href="http://localhost:8080/#/">首页</a>
        <a href="http://localhost:8080/#/produce">品牌产品</a>
        <a href="##">{{datas[num].title}}</a>
    </div>
    <div class="center" v-for='(item,index) in datas' :key=index v-if='index==num'>
        <div @click='show_produce(index)' class="text" v-for='(item_produce,index) in item.produce' :key=index>
          <p class='img'>
            <img :src='item_produce.img' alt="">
          </p>
           <p>{{item_produce.text1}}</p>
        </div>
    </div>
    <div class="show_pro" v-if='show_'>
       <div class="shows">
         <div class='top'>
           <h4>{{datas[num].produce[show_pro].text1}}</h4>
           <button @click='hid_'>X</button>
         </div>
         <img :src="datas[num].produce[show_pro].img" alt="">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Produce',
  data () {
    return {
      datas:[
        {title:'佳墅系列',
         produce:[
          {
            text1:'B·T·Y-JS-19',
            img:require('../../assets/image/produce1_1.jpg'),
            
          },
          {
            text1:'B·T·Y-JS-18',
            img:require('../../assets/image/produce1_2.jpg'),
            
          },
          {
            text1:'B·T·Y-JS-17',
            img:require('../../assets/image/produce1_3.jpg'),
        
          },
          {
            text1:'B·T·Y-JS-16',
            img:require('../../assets/image/produce1_4.jpg'),
           
          },
          {
            text1:'B·T·Y-JS-15',
            img:require('../../assets/image/produce1_5.jpg'),
           
          },
          {
            text1:'B·T·Y-JS-14',
            img:require('../../assets/image/produce1_6.jpg'),
           
            }
          ]
        },
        {title:'雅墅系列',
          produce:[
            {
              text1:'B·T·Y-YS-14',
              img:require('../../assets/image/produce2_1.jpg')
          },
           {
            text1:'B·T·Y-YS-13',
            img:require('../../assets/image/produce2_2.jpg')
          },
          {
            text1:'B·T·Y-YS-12',
            img:require('../../assets/image/produce2_3.jpg')
          },
          {
            text1:'B·T·Y-YS-11',
            img:require('../../assets/image/produce2_4.jpg')
          },
          {
            text1:'B·T·Y-YS-10',
            img:require('../../assets/image/produce2_5.jpg')
          },
          {
            text1:'B·T·Y-YS-9',
            img:require('../../assets/image/produce2_6.jpg')
          }
         ]
        },
        {title:'艺墅系列',
         produce:[
          {
            text1:'B·T·Y-YSJ-14',
            img:require('../../assets/image/produce3_1.jpg')
          },
          {
            text1:'B·T·Y-YSJ-13',
            img:require('../../assets/image/produce3_2.jpg')
          },
          {
            text1:'B·T·Y-YSJ-12',
            img:require('../../assets/image/produce3_3.jpg')
          },
          {
            text1:'B·T·Y-YSJ-11',
            img:require('../../assets/image/produce3_4.jpg')
          },
          {
            text1:'B·T·Y-YSJ-10',
            img:require('../../assets/image/produce3_5.jpg')
          },
          {
            text1:'B·T·Y-YSJ-9',
            img:require('../../assets/image/produce3_6.jpg')
          }
         ]
        },
        {title:'美墅系列',
         produce:[
          {
            text1:'B·T·Y-MS-15',
            img:require('../../assets/image/produce4_1.jpg')
          },
          {
            text1:'B·T·Y-MS-14',
            img:require('../../assets/image/produce4_2.jpg')
          },
          {
            text1:'B·T·Y-MS-13',
            img:require('../../assets/image/produce4_3.jpg')
          },
          {
            text1:'B·T·Y-MS-12',
            img:require('../../assets/image/produce4_4.jpg')
          },
          {
            text1:'B·T·Y-MS-11',
            img:require('../../assets/image/produce4_5.jpg')
          },
          {
            text1:'B·T·Y-MS-10',
            img:require('../../assets/image/produce4_6.jpg')
          }
         ]
        },
        {title:'集成家装系列',
         produce:[
          {
            text1:'B·T·Y-JC-17',
            img:require('../../assets/image/produce5_1.jpg')
          },
          {
            text1:'B·T·Y-JC-16',
            img:require('../../assets/image/produce5_2.jpg')
          },
          {
            text1:'B·T·Y-JC-15',
            img:require('../../assets/image/produce5_3.jpg')
          },
          {
            text1:'B·T·Y-JC-14',
            img:require('../../assets/image/produce5_4.jpg')
          },
          {
            text1:'B·T·Y-JC-13',
            img:require('../../assets/image/produce5_5.jpg')
          },
          {
            text1:'B·T·Y-JC-12',
            img:require('../../assets/image/produce5_6.jpg')
          }
         ]
        },
        {title:'智能家居系列',
         produce:[
          {
            text1:'B·T·Y-ZN-13',
            img:require('../../assets/image/produce6_1.jpg')
          },
          {
            text1:'B·T·Y-ZN-12',
            img:require('../../assets/image/produce6_2.jpg')
          },
          {
            text1:'B·T·Y-ZN-11',
            img:require('../../assets/image/produce6_3.png')
          },
          {
            text1:'B·T·Y-ZN-10',
            img:require('../../assets/image/produce6_4.jpg')
          },
          {
            text1:'B·T·Y-ZN-9',
            img:require('../../assets/image/produce6_5.jpg')
          },
          {
            text1:'B·T·Y-ZN-8',
            img:require('../../assets/image/produce6_6.png')
          }
         ]
        },
        {title:'中华门',
         produce:[
          {
            text1:'B·T·Y-ZH-6',
            img:require('../../assets/image/produce7_1.jpg')
          },
          {
            text1:'B·T·Y-ZH-5',
            img:require('../../assets/image/produce7_2.jpg')
          },
          {
            text1:'B·T·Y-ZH-4',
            img:require('../../assets/image/produce7_3.jpg')
          },
          {
            text1:'B·T·Y-ZH-3',
            img:require('../../assets/image/produce7_4.jpg')
          },
          {
            text1:'B·T·Y-ZH-2',
            img:require('../../assets/image/produce7_5.jpg')
          },
          {
            text1:'B·T·Y-ZH-1',
            img:require('../../assets/image/produce7_6.jpg')
          }
         ]
        },
        {title:'立体书库',
         produce:[
           {
            text1:'B·T·Y-LT-4',
            img:require('../../assets/image/produce8_1.jpg')
          },
          {
            text1:'B·T·Y-LT-3',
            img:require('../../assets/image/produce8_2.jpg')
          },
          {
            text1:'B·T·Y-LT-2',
            img:require('../../assets/image/produce8_3.jpg')
          },
          {
            text1:'B·T·Y-LT-1',
            img:require('../../assets/image/produce8_4.jpg')
          }
         ]
        }, 
      ],
      num:0,
      show_pro:'',
      show_:false
    }
  },
  methods:{
    selected(index){
      this.num=index;
    },
    show_produce(index){
      this.show_pro=index;
      this.show_=true;
    },
    hid_(){
      this.show_=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>