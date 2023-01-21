export default {
  name: 'messages',
  type: 'document',
  title: '📥 Messages',
  fields: [
    {
      name: 'read',
      title: 'Read',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
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
      name: 'name',
      read: 'read',
    },
    prepare({name, read}: Record<string, string>) {
      return {
        title: name,
        subtitle: `${read ? 'Read ✅' : 'Unread ✉️'}`,
        media: <>📥</>,
      }
    },
  },
}
