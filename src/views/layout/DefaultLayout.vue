<template>
  <div class="cz-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class DefaultLayout extends Vue {}
</script>
