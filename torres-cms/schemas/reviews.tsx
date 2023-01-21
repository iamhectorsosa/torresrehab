export default {
  name: 'reviews',
  type: 'document',
  title: '❤️ Reviews',
  fields: [
    {
      name: 'read',
      title: 'Read',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
  ],
  orderings: [
    {
      title: 'Read',
      name: 'read',
      by: [{field: 'read', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      read: 'read',
      rating: 'rating',
    },
    prepare({title, read, rating}: Record<string, string>) {
      return {
        title: title,
        subtitle: `${rating}/5 - ${read ? 'read' : 'unread'}`,
        media: <>❤️</>,
      }
    },
  },
}
