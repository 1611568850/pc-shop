<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    name: "App",
    components: { 
      Header,
      Footer
    }
}
</script >
