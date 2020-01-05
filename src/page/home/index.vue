<template>
    <div class="main_wrap">
		<section class='header' style='height: 100px;'>
			<head-top> </head-top>
		</section>
	  <section class='content'>
		<transition name="fade" mode="out-in" appear>
		  <keep-alive >
			<div >
				<router-view></router-view>
			</div>
		 </keep-alive>
		</transition>
	  </section>
	  <section class='footer' >
		 <Footer></Footer> 
	  </section>
    </div>
</template>
<script>
  import headTop from '@/components/head/index';
  import Footer from '@/components/footer/index';
    export default {
      name: 'Home',
      components:{
        headTop,Footer
      },
      data () {
        return {
        }
      },
      mounted(){
		console.log('this.$router22',this.$router)
      },
      computed:{

      },
      methods:{
      }
    }
</script>
<style less='lange' scoped>
	.main_wrap{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-x: hidden;
	}
	.header{
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 10000;
	}
   .fade-enter,.fade-leave-to{
	  opacity:  0;/*透明度*/
	  transition: all 2s ease;
	}
	.content{
		padding-bottom: 300px;
		padding-top: 200px;
		padding-left: 8%;
		padding-right: 8%;
		background: #f5f5f5;
		overflow-y: scroll;
	}
</style>
