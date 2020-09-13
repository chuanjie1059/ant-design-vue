<!--
 * @Author: chuanjie
 * @Date: 2020-09-12 19:10:45
 * @LastEditors: chuanjie
 * @LastEditTime: 2020-09-13 20:20:31
 * @Description: 
 * @FilePath: \ant-design-vue-pro\src\App.vue
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'

export default {
  data () {
    return {
    }
  },
  computed: {
    locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && (setDocumentTitle(`${i18nRender(title)} ${domTitle}`))

      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    }
  }
}
</script>
