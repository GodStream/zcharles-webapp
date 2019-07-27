<template>
  <div class="zc-container">
    <van-cell-group>
      <van-cell title="无限滚动" is-link></van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Cell, CellGroup } from 'vant'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  }
})

export default class DefaultLayout extends Vue {
  a = 'ssss'
  created () {
    console.log(11)
  }
}
</script>
