<template>
<div class="player__control">
  <PlayPrev /> <PlayNext />
</div>
</template>


<script lang="ts" src="./ControlPlayer.ts" />

<style scoped lang="scss">
@import "../../assets/mixins";
.player__control{
  border-radius: 5px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  20px 20px 60px #bebebe,
  -20px -20px 60px #ffffff;
  display:flex;
  @include media_small {

  }

  @include media_medium {

  }

  @include media_large {

  }
}
</style>
