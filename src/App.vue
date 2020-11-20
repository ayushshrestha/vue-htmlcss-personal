<template>
  <div id="app">
    <div id="dtr-wrapper" >  
      <RwvHeader />
      <router-view></router-view>
      <RwvFooter />
    </div>
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader";
import RwvFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter
  }
};
</script>


