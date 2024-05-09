<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/">主界面</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">去page1</el-menu-item>
            <el-menu-item index="2-2">去page2</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3">Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-header>
      <el-main style="position: relative;"><router-view></router-view>
        <div style="position: absolute;z-index: 2;top: 5%;
                                                  right: 70%;
                                                  bottom: 70%;
                                                  left: 5%; 
                                                  background:white; 
                                                  color:black;
                                                  opacity: 0.75;
                                                  -moz-border-radius: 60px;
    -webkit-border-radius: 60px;">     这是一个测试
        </div>
        <div id="apps" style="position: relative;z-index: 1;height: 100%;padding: 0;margin: 0;">
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from './router'
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  if(keyPath.length == 2)
  {router.push({name: keyPath[1]})}
  else
  {router.push(keyPath[0])}
}
</script>

<script lang="ts">
import { Config, PixelStreaming } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2';
import { Application, PixelStreamingApplicationStyle } from '@epicgames-ps/lib-pixelstreamingfrontend-ui-ue5.2';
export default {
    name: 'PlayerView',
    mounted() {
      const PixelStreamingApplicationStyles = new PixelStreamingApplicationStyle();
      PixelStreamingApplicationStyles.applyStyleSheet();
  
      // Example of how to set the logger level
      // Logger.SetLoggerVerbosity(10);
  
      // Create a config object
      const config = new Config({ useUrlParams: true });
  
      // Create a Native DOM delegate instance that implements the Delegate interface class
      const stream = new PixelStreaming(config);
      const application = new Application({
        stream,
        onColorModeChanged: (isLightMode) => PixelStreamingApplicationStyles.setColorMode(isLightMode)
      });
      var apps = document.getElementById("apps")
      apps?.appendChild(application.rootElement);
    },
    methods: {
      // ...
    }
}
</script>

<style>
.common-layout{
  height: 100%;
  padding: 0;
  margin: 0;
}
.el-container{
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
