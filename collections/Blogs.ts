import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'thumbnail',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'array',
      label: 'Page Content',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
            { label: 'Editor', value: 'editor' },
          ],
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Text',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'text',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'image',
          },
        },
        {
          name: 'video',
          type: 'text',
          label: 'Video URL',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'video',
          },
        },
        {
          name: 'editor',
          type: 'richText',
          required: true,
          admin: {
            condition: (data, siblingData) => siblingData.type === 'editor',
          },
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Convert slug to lowercase and replace spaces with hyphens
        if (data && data.slug) {
          data.slug = data.slug
            .toLowerCase() // Convert to lowercase
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/[^\w\-]+/g, '') // Remove any special characters other than hyphens and letters
        }
        return data
      },
    ],
  },
}
