<template>
  <div id="app">
    <MyPlayer />
    <PlayerList />
    <ControlPlayer />
  </div>
</template>

<script lang="ts" src="./app.ts" />

<style scoped lang="scss">
@import "./assets/mixins";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>
