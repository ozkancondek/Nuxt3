import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'

// page or layout to test
import app from './app.vue'

// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

describe('app.vue', () => {
  let wrapper: { vm: { $metaInfo: { title: any; meta: any[] } } };

  // // test set up
  // beforeEach(() => {
  //   wrapper = shallowMount(app, {
  //     localVue
  //   })
  // })

  // // test tear down
  // afterEach(() => {
  //   if (wrapper) {
  //     wrapper.destroy()
  //   }
  // })

  it('has correct <head> content', () => {
    // head data injected by the page or layout to test is accessible with
    // wrapper.vm.$metaInfo. Note that this object will not contain data
    // defined in nuxt.config.js.

    // test title
    expect(wrapper.vm.$metaInfo.title).toBe('ozkan')

    // test meta entry
    const descriptionMeta = wrapper.vm.$metaInfo.meta.find(
      (item) => item.hid === 'og:title'
    )
    expect(descriptionMeta.content).toBe('Pflanzen im Garten – Tipps, Ideen & Anleitungen | OBI')
  })
})
