import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', () => {
  let isCollapse = ref(false);
  // 保存的不是每个路由信息，而是路由元信息(meta属性)，包含路由名称、路径、图标等信息
  let selectedMenu = ref([]);
  
  // 收缩菜单
  function collapseMenu() {
    isCollapse.value = !isCollapse.value;
    console.log('collapseMenu', isCollapse.value);
  }

  // 将点击过的且不重复的菜单项保存到selectedMenu，在navHeader中显示选中的菜单项
  function addMenu(routerMeta) {
    if (!selectedMenu.value.includes(routerMeta)) {
      selectedMenu.value.push(routerMeta);
  }
  }
  // 移除菜单项
  // 这里的routerMeta是单个的路由元信息
  function removeMenu(routerMeta) {
    const index = selectedMenu.value.indexOf(routerMeta);
    //如果存在，则移除
    if (index > -1) {
      selectedMenu.value.splice(index, 1);
      }
  }

  return { isCollapse, selectedMenu, collapseMenu, addMenu, removeMenu };
});
