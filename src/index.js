import Component from './Example.vue';

export default Vue => {console.log(Component); return Vue.component(Component.name, Component); }
