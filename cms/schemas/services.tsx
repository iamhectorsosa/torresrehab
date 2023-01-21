export default {
  name: 'services',
  type: 'document',
  title: '💪🏼 Services',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
    },
    {
      name: 'href',
      title: 'External Link',
      type: 'url',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      name: 'name',
      order: 'order',
    },
    prepare({name, order}: Record<string, string>) {
      return {
        title: name,
        subtitle: order,
        media: <>💪🏼</>,
      }
    },
  },
}
