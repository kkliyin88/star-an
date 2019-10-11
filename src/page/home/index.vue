<template>
    <div >
        <Layout>
          <Header style='height: 100px;'>
            <head-top> </head-top>
          </Header>
          <Content>
            <transition name="fade" mode="out-in" appear>
              <keep-alive >
                <div >
                    <router-view></router-view>
                </div>
             </keep-alive>
            </transition>
          </Content>
        <Footer>
          <p>foot</p>
          <p>foot</p>
          <p>foot</p>
        </Footer>
      </Layout>
    </div>
</template>
<script>

  import headTop from '@/components/head/head'

    export default {
      name: 'Home',
      components:{
        headTop,

      },
      data () {
        return {

        }
      },
      mounted(){

      },
      computed:{

      },
      methods:{
      }
    }
</script>
<style less='lange'>
   .fade-enter,.fade-leave-to{
          opacity:  0;/*透明度*/
          transition: all 2s ease;
        }
</style>
