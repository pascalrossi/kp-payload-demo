import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Inhalte',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'sections',
      type: 'blocks',
      localized: true,
      blocks: [
        {
          slug: 'hero',
          fields: [
            { name: 'headline', type: 'text', localized: true },
            { name: 'subline', type: 'text', localized: true },
            { name: 'image', type: 'upload', relationTo: 'media' },
            {
              name: 'cta',
              type: 'group',
              fields: [
                { name: 'label', type: 'text', localized: true },
                { name: 'url', type: 'text' },
              ],
            },
          ],
        },
        {
          slug: 'servicesGrid',
          label: 'Services Grid',
          fields: [
            { name: 'sectionLabel', type: 'text', localized: true },
            {
              name: 'services',
              type: 'array',
              localized: true,
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'ctaLabel', type: 'text' },
                { name: 'ctaUrl', type: 'text' },
              ],
            },
          ],
        },
        {
          slug: 'philosophySection',
          label: 'Philosophy Section',
          fields: [
            { name: 'label', type: 'text', localized: true },
            { name: 'title', type: 'text', localized: true },
            { name: 'body', type: 'textarea', localized: true },
            { name: 'videoUrl', type: 'text' },
          ],
        },
        {
          slug: 'textBlock',
          fields: [
            { name: 'content', type: 'richText', localized: true },
          ],
        },
        {
          slug: 'teamSection',
          fields: [
            { name: 'title', type: 'text', localized: true },
            {
              name: 'members',
              type: 'relationship',
              relationTo: 'team',
              hasMany: true,
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'metaTitle', type: 'text', localized: true },
        { name: 'metaDescription', type: 'textarea', localized: true },
      ],
    },
  ],
}
