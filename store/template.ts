import { ITemplate } from '~/types/ITemplate';

export const useTemplateStore = defineStore('template', {
  // arrow function recommended for full type inference
  state: (): {
    templates: ITemplate[];
    template: ITemplate | undefined;
  } => ({
    templates: [],
    template: undefined,
  }),

  actions: {
    async fetchAll() {
      // const templates: { templates: ITemplate[] } = await useApi().fetch(
      //   'GET',
      //   '/template',
      // );

      // this.templates = templates.templates;

      this.templates = [
        {
          id: 1,
          name: 'oleg',
          position: 'developer',
          image: 'string/image',
          file: undefined,
          list: [1, 2],
          select: 1,
          description: '<h1>Test</h1>',
        },
        {
          id: 2,
          file: undefined,
          name: 'temek',
          position: 'developer',
          image: 'string/image',
          list: [1, 2],
          description: '<h1>Test</h1>',
        },
      ];
    },

    async create(data: ITemplate) {
      // const template: ITemplate = await useApi().fetch('POST', '/template', {
      //   body: data,
      // });
      // if (template.message) {
      //   useAlert(template.message);
      //   return navigateTo('/admin/template');
      // }

      console.log('created');
    },
    async update(data: ITemplate, id: number) {
      // const template: ITemplate = await useApi().fetch(
      //   'PATCH',
      //   `/template/${id}`,
      //   { body: data },
      // );
      // if (template.message) {
      //   useAlert(template.message);
      //   return navigateTo('/admin/template');
      // }

      console.log('updated');
    },
    async destroy(id: number) {
      // const template: ITemplate = await useApi().fetch(
      //   'DELETE',
      //   `/template/${id}`,
      // );
      // if (template.message) {
      //   useAlert(template.message);
      //   this.fetchAll();
      //   return navigateTo('/admin/template');
      // }

      console.log('will be destroyed');
    },

    async fetchOne(id: number) {
      // const template: { template: ITemplate } = await useApi().fetch(
      //   'GET',
      //   `/template/${id}`,
      // );
      // this.template = template.template;

      this.template = {
        id: 3,
        file: undefined,
        name: 'temek',
        position: 'developer',
        image: 'string/image',
        list: [1],
        select: 1,
        description: '<h1>Test</h1>',
      };
    },
  },
  getters: {
    getTemplates({ templates }) {
      return templates;
    },
    getTemplate({ template }) {
      return template;
    },
  },
});
