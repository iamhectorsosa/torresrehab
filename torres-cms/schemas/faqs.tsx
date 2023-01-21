export default {
  name: 'questions',
  type: 'document',
  title: '📓 FAQs',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'expanded',
      title: 'Expanded',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
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
      question: 'question',
      order: 'order',
      expanded: 'expanded',
    },
    prepare({question, order, expanded}: Record<string, string>) {
      return {
        title: question,
        subtitle: `${order} - ${expanded}`,
        media: <>📓</>,
      }
    },
  },
}
