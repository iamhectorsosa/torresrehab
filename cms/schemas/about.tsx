export default {
  name: 'about',
  type: 'document',
  title: '👋🏼 About',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
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
      name: 'weekdaySchedule',
      title: 'Weekday Schedule',
      type: 'string',
    },
    {
      name: 'weekendSchedule',
      title: 'Weekend Schedule',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      name: 'name',
      title: 'title',
    },
    prepare({name, title}: Record<string, string>) {
      return {
        title: name,
        subtitle: title,
        media: <>👋🏼</>,
      }
    },
  },
}
