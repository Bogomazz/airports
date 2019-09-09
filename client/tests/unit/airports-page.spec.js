import AirportsPage from '@/components/AirportsPage.vue'
import {shallowMount} from "@vue/test-utils";
import flushPromises from 'flush-promises'
import {mockResponseData} from "./mock-response-data";

jest.mock('axios', () => ({
  create: () => ({
    get: jest.fn(() => {
      return Promise.resolve({
        data: mockResponseData
      })
    })
  })
}));

describe('AirportsPage.vue', () => {
  it('has a created hook', () => {
    expect(typeof AirportsPage.created).toBe('function');
  });

  it('sets the correct default data', () => {
    expect(typeof AirportsPage.data).toBe('function');
    const defaultData = AirportsPage.data();
    expect(defaultData).toEqual({
      airports: [],
      searchQuery: '',
      paginationState: {
        page: 1,
        itemsPerPage: 20,
        totalNumberOfPages: 0
      }
    });
  });

  it('sets the correct data received from server', async done => {
    const wrapper = shallowMount(AirportsPage);
    await flushPromises();
    expect(wrapper.vm.$data).toEqual({
      searchQuery: '',
      airports: mockResponseData.data,
      paginationState: {
        page: mockResponseData.page,
        itemsPerPage: mockResponseData.itemsPerPage,
        totalNumberOfPages: mockResponseData.totalNumberOfPages,
      }
    });
    done();
  });
});


