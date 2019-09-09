import Search from '@/components/Search.vue'
import {shallowMount} from "@vue/test-utils";
import Vue from "vue";
import {MdButton, MdField} from "vue-material/dist/components";

describe('Search.vue', () => {
  it('Emits event with proper values', () => {
    Vue.use(MdButton);
    Vue.use(MdField);
    const wrapper = shallowMount(Search);
    wrapper.vm.emitSearch();
    wrapper.vm.$data.query = 'Canada';
    wrapper.vm.emitSearch();
    expect(wrapper.emitted().search).toEqual([[''], ['Canada']]);
  })
});
