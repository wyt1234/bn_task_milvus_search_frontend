<template>
  <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync2"
      placeholder="NLP自动填充"
      @select="handleSelect"
      size="large"
  >
    <template #prepend>
      <el-button :icon="Search"/>
    </template>
  </el-autocomplete>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {matchRequest} from "@/apis/match";
import { Search } from '@element-plus/icons-vue'

const state = ref('')

interface LinkItem {
  value: string
  link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
  return [
    {value: 'vue', link: 'https://github.com/vuejs/vue'},
    {value: 'element', link: 'https://github.com/ElemeFE/element'},
    {value: 'cooking', link: 'https://github.com/ElemeFE/cooking'},
    {value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui'},
    {value: 'vuex', link: 'https://github.com/vuejs/vuex'},
    {value: 'vue-router', link: 'https://github.com/vuejs/vue-router'},
    {value: 'babel', link: 'https://github.com/babel/babel'},
  ]
}

const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString ? links.value.filter(createFilter(queryString)) : links.value
  // console.log(links)
  console.log(results)

  setTimeout(() => {
    cb(results)
  }, 300 * Math.random())


}

const querySearchAsync2 = (queryString: string, cb: (arg: any) => void) => {

  // setTimeout(() => {
  //   cb(links.value)
  // }, 300 * Math.random())
  if (!queryString) {
    return
  }
  matchRequest({'text': queryString}).then(async (res) => {
    if (res?.code === 20000) {
      console.log(res.data.result_list)
      cb(res.data.result_list)
    }
  }).catch((err) => {
    console.log(err)
  })

}

const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item: LinkItem) => {
  console.log(item)
}

onMounted(async () => {
  links.value = loadAll()

  await matchRequest({'text': '我好嘚'}).then(async (res) => {
    if (res?.code === 20000) {
      console.log(res.data.result_list)
    }
  }).catch((err) => {
    console.log(err)
  })


})
</script>
