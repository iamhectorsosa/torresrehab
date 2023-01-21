export default {
  name: 'pages',
  type: 'document',
  title: '📄 Pages',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      readOnly: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description SEO',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'Keywords SEO',
      type: 'string',
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
      title: 'title',
      headline: 'headline',
    },
    prepare({title, headline}: Record<string, string>) {
      return {
        title: title,
        subtitle: headline,
        media: <>📄</>,
      }
    },
  },
}
