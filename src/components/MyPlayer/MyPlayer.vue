<template>
<div class="player__frame">
  <video ref="video" >
    <source :src="FileToPlay" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
</template>


<script lang="ts" src="./MyPlayer.ts" />

<style scoped lang="scss">
@import "../../assets/mixins";
.player__frame{
  border-radius: 5px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  20px 20px 60px #bebebe,
  -20px -20px 60px #ffffff;
  display:flex;
  justify-content: center;
  align-items: center;
  min-height:30vh;
  min-width: var(--app-width);
@include media_small {
  padding: 1rem;
}
@include media_medium {
  padding: 2rem;
}
@include media_large {
  padding: 2rem;
}
}
</style>
