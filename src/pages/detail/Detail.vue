<template>
    <div>
       <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
       ></detail-banner>
       <detail-header></detail-header>
       <div class="content">
         <detail-list :list="list"></detail-list>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
      }
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/detail.json?id', {
          params: {
            id: this.$route.params.id
          }
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      }
    },
    mounted () {
      this.getDetailInfo()
    }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .content
    padding-bottom 50rem
</style>
