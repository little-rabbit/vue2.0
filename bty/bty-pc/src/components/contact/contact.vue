<template>
  <div class="contact">
     <div class="top top7"></div>
  </div>
</template>
<template>
  <div class="contact">
    <div class="tops top7">
        <ul class="tab">
          <li class='tab_item' v-for='(item,index) in datas' :key=index @click='selected(index)' :class="{active:index==num}">
            {{item.title}}
          </li>
        </ul>
    </div> 
    <div class="location">
        当前所在位置>
        <a href="http://localhost:8080/">首页</a>
        <a href="http://localhost:8080/contact">联系我们</a>
        <a href="##">{{datas[num].title}}</a>
    </div>
    <div class="center" v-for='(item,index) in datas' :key=index v-if='index==num'>
        <div class="text" v-for='(item_produce,index) in item.produce' :key=index>
					 <p style='float:left;margin-top:10px;'>
						 <img :src='item_produce.img1' alt="">
					 </p>
           <p class='text1' v-html='item_produce.text1'>{{item_produce.text1}}</p>
           <p class='img'>
            <img :src='item_produce.img' alt="">
           </p>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      datas:[
        {title:"联系方式",
         produce:[
          {
            text1:`<p style="text-align: center;"><span style="font-size:14px;"><strong>B.T.Y.(香港)智能别墅实业有限公司</strong></span></p><p style="text-align: center;"><strong>全国服务热线：</strong>010-86468277</p>
										<p style="text-align: center;"><strong>邮箱：bty@btyznbs.com</strong></p>
										<p style="text-align: center;"><strong>公司地址：</strong>北京市海淀区海淀西街72号中关村创业大街</p>
										<p style="text-align: center;"></p>
						`,
            img:require('../../assets/image/contact1_1.jpg')
          }
         ]
         },
        {title:"电子地图",
         produce:[
          {
            text1:`<div class='allmap' id='allmap'></div>`
          }
         ]
        },
        {title:"留言专区",
         produce:[
           {
            text1:`
						<div style="width: 640px; padding-top: 10px; margin: auto; margin-top: 10px; font-size: 12px;padding-left: 10px; font-family: 微软雅黑;">
						<form class="line" name="feedback" method="post" enctype="multipart/form-data" action="/e/enews/index.php">
						<input name="enews" type="hidden" value="AddFeedback">
						<input name="bid" type="hidden" value="1">
						<input name="title" type="hidden" value="留言专区">
						<input name="ecmsfrom" type="hidden" value="9">
						<table width="100%" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td>姓 名：</td>
									<td style="height: 28px" width=""><input class="textbox" type="text" id="username" name="name" maxlength="40"></td>
								</tr>
								<tr>
									<td style="height: 18px">QQ：</td>
									<td style="height: 18px"><input class="textbox" type="text" id="job" name="job"></td>
								</tr>
								<tr>
									<td style="height: 21px">联系电话：</td>
									<td style="height: 21px"><input class="textbox" type="text" id="mycall" name="mycall">
									</td>
								</tr>
								<tr>
									<td style="height: 18px">电子邮件：</td>
									<td style="height: 18px"><input class="textbox" type="text" id="email" name="email">
									</td>
								</tr>
								<tr>
									<td style="height: 20px">通讯地址：</td>
									<td style="height: 20px"><input class="textbox" type="text" id="address" name="address" maxlength="200">
									</td>
								</tr>
								<tr>
									<td>留 言：</td>
									<td><textarea class="textbox" style="height:100px;" id="saytext" name="saytext" maxlength="255"></textarea></td>
								</tr>
								<tr height="50px">
									<td></td>
									<td>
										<div>
											<input value="提交留言" class="thisbtn" style="height:30px;background: #f18101; border:none;" type="submit" name="submit"> <input style="height: 30px; border:none;" type="reset" name="button" id="button" value="重新填写" class="thisbtn">
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<br> <br>
				</div>`
          },
         ]
        },
        {title:"地区",
         produce:[
          {
            text1:`
              <div class="customerBox" style="background: none;">
                <div class="map_box">
									<div class="map_title">
										<img alt="" src=""></div>
									<div class="map_name">
										<span class="n_big">新疆</span> 
										<span class="s_tel"><span>010-86468277</span></span></div>
									<p class="clear_10px">
										&nbsp;</p>
									<div class="map_main">
										<ul style='width:100%;height:100%'>
											<li class='nocurrent' style="top: 125px;right: 0;" tel="
											   <span>010-86468277</span>" class="">
												上海</li>
											<li class='nocurrent' style="top: 25px;right: 20px;" tel="<span>010-86468277</span>">
												黑龙江</li>
											<li class='nocurrent' style="top: 45px;right: 30px;" tel="<span>010-86468277</span>">
												吉林</li>
											<li class='nocurrent' style="top: 60px;right: 56px;" tel="<span>010-86468277</span>">
												辽宁</li>
											<li class='nocurrent' style="top: 73px;right: 100px;" tel="<span>010-86468277</span>">
												天津</li>
											<li class='nocurrent' style="top: 90px;right: 110px;" tel="<span>010-86468277</span>">
												河北</li>
											<li class='nocurrent' style="top: 95px;right: 65px;" tel="<span>010-86468277</span>">
												山东</li>
											<li class='nocurrent' style="top: 120px;right: 90px;" tel="<span>010-86468277</span>">
												江苏</li>
											<li class='nocurrent' style="top: 160px;right: 80px;" tel="<span>010-86468277</span>">
												江西</li>
											<li class='nocurrent' style="top: 143px;right: 11px;" tel="<span>010-86468277</span>">
												浙江</li>
											<li class='nocurrent' style="top: 173px;right: 21px;" tel="<span>010-86468277</span>">
												福建</li>
											<li class='nocurrent' style="top: 200px;right: 90px;" tel="<span>010-86468277</span>">
												广东</li>
											<li class='nocurrent' style="top: 248px;right: 145px;" tel="<span>010-86468277</span>">
												海南</li>
											<li class='nocurrent' style="top: 210px;right: 160px;" tel="<span>010-86468277</span>">
												广西</li>
											<li class='nocurrent' style="top: 160px;right: 130px;" tel="<span>010-86468277</span>">
												湖南</li>
											<li class='nocurrent' style="top: 135px; right: 130px;" tel="<span>010-86468277</span>">
												湖北</li>
											<li class='nocurrent' style="top: 115px; right: 130px;" tel="<span>0395-5570028</span>">
												河南</li>
											<li class='nocurrent' style="top: 95px;right: 145px;" tel="<span>010-86468277</span>">
												山西</li>
											<li class='nocurrent' style="top: 65px;right: 130px;" tel="<span>010-86468277</span>">
												北京</li>
											<li class='nocurrent' style="top: 115px;right: 170px;" tel="<span>010-86468277</span>">
												陕西</li>
											<li class='nocurrent' style="top: 165px;right: 180px;" tel="<span>010-86468277</span>">
												贵州</li>
											<li class='nocurrent' style="top: 105px;right: 200px;" tel="<span>010-86468277</span>">
												宁夏</li>
											<li class='nocurrent' style="top: 140px;right: 240px;" tel="<span>010-86468277</span>">
												四川</li>
											<li class='nocurrent' style="top: 190px;right: 250px;" tel="<span>010-86468277</span>">
												云南</li>
											<li class='nocurrent' style="top: 85px;right: 240px;" tel="<span>010-86468277</span>">
												内蒙古</li>
											<li class='nocurrent' style="top: 100px;right: 280px;" tel="<span>010-86468277</span>">
												甘肃</li>
											<li class='nocurrent' style="top: 100px;right: 330px;" tel="<span>010-86468277</span>">
												青海</li>
											<li class='nocurrent' style="top: 65px;right: 380px;" tel="<span>010-86468277</span>" >
												新疆</li>
											<li class='nocurrent' class="" style="top: 145px;right: 400px;" tel="<span>010-86468277</span>">
												西藏</li>
											<li class='nocurrent' class="" style="top: 113px;right: 51px;" tel="<span>010-86468277</span>">
												安徽</li>
											<li class='nocurrent' class="" style="top: 143px;right: 167px;" tel="<span>010-86468277</span>">
												重庆</li>
										</ul>
									</div>
								</div>
								<p>
									&nbsp;</p>
                <p style="padding:30px 20px 20px 20px; line-height:24px; font-weight:bold; font-size:14px;">地图中显示的电话号码为芭提雅分公司各区域销售内勤电话，如欲了解您所在区域的芭提雅智能拼装别墅经销商信息请致电咨询。</p>
            </div>
            `,
						img1:require('../../assets/image/map_title1.jpg')
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
	},
	updated(){
		var n_big=document.getElementsByClassName('n_big')[0];
		var s_tel=document.getElementsByClassName('s_tel')[0];		
		var nocurrent=document.getElementsByClassName('nocurrent');
		for(var i=0;i<nocurrent.length;i++){
			nocurrent[i].onmouseover=function(e){
				this.className='current';
				n_big.innerHTML=this.innerHTML;
				s_tel.innerHTML=e.target.getAttribute('tel');
				console.log(e.target.getAttribute('tel'))
			}
			nocurrent[i].onmouseout=function(e){
				this.className='nocurrent';
				n_big.innerHTML='新疆';
				s_tel.innerHTML='<span>010-86468277</span>';
			}
		}
    var map = new BMap.Map("allmap");
	  var point = new BMap.Point(116.404, 39.915);
	  map.centerAndZoom(point, 15);
  	var marker = new BMap.Marker(point);  // 创建标注
	  map.addOverlay(marker);               // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

      
		
	},
	mounted(){
	
	}
}
</script>