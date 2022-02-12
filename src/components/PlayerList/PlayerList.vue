<template>
  <div class="player__frame">
    <div v-for="file in mediaList" :key="file.name" class="media__file">
      <div class="media__file--name"  v-bind:class="{  'media__file--playing': file.isPlaying }" @click="playFile(file.name)">{{file.name}}</div>
    </div>
  </div>
</template>


<script lang="ts" src="./PlayerList.ts" />

<style scoped lang="scss">
@import "../../assets/mixins";
.player__frame {
  border-radius: 5px;
  background: #e0e0e0;
  box-shadow: inset 5px 5px 10px #cecece,
  inset -5px -5px 10px #f2f2f2;

  @include media_small {
    padding: 1rem;
    width: clamp(20rem, 50vw, 40rem);
  }

  @include media_medium {
    padding: 2rem;
    width: clamp(20rem, 50vw, 40rem);
  }

  @include media_large {
    padding: 2rem;
    width: clamp(20rem, 50vw, 40rem);
  }
}

.media__file{
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow:  16px 16px 32px #d9d9d9,
  -16px -16px 32px #e7e7e7;
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

.media__file--name {
  color: #272c35;
  cursor: pointer;
  @include media_small {
    font-size: 1rem;
  }
  @include media_medium {
    font-size: 1rem;
  }
  @include media_large {
    font-size: 1rem;
  }
}

.media__file--playing{
  color:#26ade2;
  cursor: pointer;
  @include media_small {
    font-size:1rem;
  }
  @include media_medium {
    font-size:1rem;
  }
  @include media_large {
    font-size:1rem;
  }
}
</style>
