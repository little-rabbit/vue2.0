<template>
  <div class="home">
      <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="../../assets/image/banner1.jpg" alt="" ></swiper-slide>
          <swiper-slide><img src="../../assets/image/banner2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/image/banner3.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
      <div class="news_section">
        <div class="news_title">
           <span>新闻中心</span>
           <span>NEWS</span>
        </div>
        <div class="news_">
          <div class="left">
           <ul>
             <li>
                 <div class="img">
                   <a href="#">
                    <img src="../../assets/image/news1.jpg" alt="">
                  </a>
                 </div>
                 <div class="text">
                    <h4> 筑梦2018·芭提雅智能拼装别墅长春分公司产品项目说明会正式启动</h4>
                    <font>引领未来，芭提雅（香港）智能别墅实业有限公司长春分公司领先时代，开启人类智能家居新时代。...</font>
                 </div>
             </li>
            <li>
                 <div class="img">
                   <a href="">
                    <img src="../../assets/image/news2.jpg" alt="">
                   </a>
                 </div>
                 <div class="text">
                    <h4> 国内装配式建筑的疑惑和解决</h4>
                    <font>近年来，政府越来越重视装配式建筑发展。装配式建筑有着环保、便捷、安全等优点，尽管装配......</font>
                 </div>
             </li>
           </ul>
          </div>
          <div class="right">
            <ul>     	
                <li>
                <a href="#" target="_blank"><h1><i></i>筑梦2018·芭提雅智能拼装别墅长春分公司产品项目说明会正式启动</h1></a>	
                <span>2018-07-02</span>
              </li>	
              <li>
                <a href="/news/zcxw/187.html" target="_blank"><h1><i></i>国内装配式建筑的疑惑和解决</h1></a>	
                <span>2018-06-30</span>
              </li>	
              <li>
                <a href="/news/qydt/186.html" target="_blank"><h1><i></i>芭提雅智能拼装别墅，全景式智能拼装别墅就认这个牌子</h1></a>	
                <span>2018-06-30</span>
              </li>
              <li>
                <a href="/news/qydt/179.html" target="_blank"><h1><i></i>装配式建筑新发展 芭提雅带你赚取人生第一桶金</h1></a>	
                <span>2018-06-29</span>
              </li>
              <li>
                <a href="/news/qydt/178.html" target="_blank"><h1><i></i>芭提雅智能拼装别墅助力乡村建设 人人都能实现别墅梦</h1></a>	
                <span>2018-06-29</span>
              </li>
              <li>
                <a href="/news/zcxw/127.html" target="_blank"><h1><i></i>2017年国内装配式建筑产业论坛</h1></a>	
                <span>2018-06-26</span>
              </li> 	
              <li>
                <a href="/news/zcxw/126.html" target="_blank"><h1><i></i>各省份装配式建筑政策—有没有你的家乡？</h1></a>	
                <span>2018-06-26</span>
              </li>
              <li>
                <a href="/news/zcxw/125.html" target="_blank"><h1><i></i>国内装配式建筑政策</h1></a>	
                <span>2018-06-26</span>
              </li>
            </ul>
          </div>
          <div class="more_news">
            <a :href="news_url" class="new_btn" >更多新闻 NEWS MORE</a>
          </div>
          
        </div>
      </div>
      <div class="case_section">
        <div class="case_title"></div>
        <div class="bd">
				  <ul class="picList">
            <li>
              <div class="pic">
                <a href="/anli/" target="_parent">
                  <img src="../../assets/image/case1.jpg">
                </a>
              </div>					
            </li>
            <li>
              <div class="pic">
                <a href="/anli/" target="_parent">
                  <img src="../../assets/image/case1.jpg">
                </a>
              </div>					
            </li>
            <li>
              <div class="pic">
                <a href="/anli/" target="_parent">
                  <img src="../../assets/image/case2.jpg">
                </a>
              </div>					
            </li>
            <li>
              <div class="pic">
                <a href="/anli/" target="_parent">
                  <img src="../../assets/image/case2.jpg">
                </a>
              </div>					
            </li>
            <li>
              <div class="pic">
                <a href="/anli/" target="_parent">
                  <img src="../../assets/image/case3.jpg">
                </a>
              </div>					
            </li>
            <li>
              <div class="pic">
                <a href="/anli/" target="_parent">
                  <img src="../../assets/image/case3.jpg">s
                </a>
              </div>					
            </li>			 
			   	</ul>
			  </div>
        <div class="case_more">
          <a :href="case_url" class="btn1" style="bottom: 25px;">更多案例 CASE MORE</a>
        </div>
      </div>
      
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'Home',
    data(){
      return {
        case_url:'http://localhost:8080/#/case',
        news_url:'http://localhost:8080/#/news',
        swiperOption: {//配置轮播，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          autoplay: true,         //autoplay:{disableOnInteraction},//用户操作后继续动画
          loop: true,
          direction: 'horizontal', //水平滑动  ‘vertival’ 垂直方向
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination'
          },
          centeredSlides: true,
          paginationClickable: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          keyboard: true,
          mousewheelControl: true,
          observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true
        }
      }
    },
    components:{
      swiper,
      swiperSlide
    },
    computed:{
      swiper(){ //实例化swiper
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>