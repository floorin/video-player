<template>
<div class="player__frame">
  <video width="100%" ref="video" >
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

@include media_small {
  padding: 1rem;
  width:clamp(20rem, 50vw, 40rem);
}

@include media_medium {
  padding: 2rem;
  width:clamp(20rem, 50vw, 40rem);
}

@include media_large {
  padding: 2rem;
  width:clamp(20rem, 50vw, 40rem);
}
}
</style>
