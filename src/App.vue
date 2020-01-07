<template>
  <div id="app">
    <AppNavBar></AppNavBar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppFooter from './components/AppFooter.vue';
import AppNavBar from './components/AppNavBar.vue';

@Component({
  components: {
    AppFooter,
    AppNavBar,
  },
})
export default class App extends Vue {}
</script>
