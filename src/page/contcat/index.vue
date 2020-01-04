<template>
  <div  ref='wrap' >
   <p v-for='item in address'>
	   {{item}}
   </p>
  </div>
</template>
<script>

    export default {
      name: 'about',
      components:{

      },
      data () {
        return {
			address:[
				'@2019 Copyright Star-An Limited. All rights reserved.',
				'Office Address:',
				'B906, Nanfang Building',
				'Luofang Rd., Luohu Distri.,',
				'Shenzhen, China, 518000.',
				'Tel: +86 755 82683776',
				'Email: info@star-an.com'
			]
        }
      },
      mounted(){

      },

      methods:{
      }
    }
</script>
<style scoped lang='less'>
</style>
