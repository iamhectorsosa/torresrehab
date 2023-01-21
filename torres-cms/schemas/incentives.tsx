export default {
  name: 'incentives',
  type: 'document',
  title: '🔥 Incentives',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
      headline: 'headline',
      order: 'order',
    },
    prepare({headline, order}: Record<string, string>) {
      return {
        title: headline,
        subtitle: order,
        media: <>🔥</>,
      }
    },
  },
}
