import comp from "E:/Code/material_guideline/docs/.vuepress/.temp/pages/material_guideline.html.vue"
const data = JSON.parse("{\"path\":\"/material_guideline.html\",\"title\":\"New Purchase & Inventory\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"采购模块各表单及结构：\",\"slug\":\"采购模块各表单及结构\",\"link\":\"#采购模块各表单及结构\",\"children\":[]},{\"level\":2,\"title\":\"Purchase:\",\"slug\":\"purchase\",\"link\":\"#purchase\",\"children\":[{\"level\":3,\"title\":\"1. 采购申请 | Purchase Request\",\"slug\":\"_1-采购申请-purchase-request\",\"link\":\"#_1-采购申请-purchase-request\",\"children\":[]},{\"level\":3,\"title\":\"2. 采购明细 | Purchase Item\",\"slug\":\"_2-采购明细-purchase-item\",\"link\":\"#_2-采购明细-purchase-item\",\"children\":[]},{\"level\":3,\"title\":\"3. 采购单 | Purchase Order\",\"slug\":\"_3-采购单-purchase-order\",\"link\":\"#_3-采购单-purchase-order\",\"children\":[]}]},{\"level\":2,\"title\":\"Change Log\",\"slug\":\"change-log\",\"link\":\"#change-log\",\"children\":[{\"level\":3,\"title\":\"1. 入库单\",\"slug\":\"_1-入库单\",\"link\":\"#_1-入库单\",\"children\":[]},{\"level\":3,\"title\":\"2. 盘点单\",\"slug\":\"_2-盘点单\",\"link\":\"#_2-盘点单\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"material_guideline.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
