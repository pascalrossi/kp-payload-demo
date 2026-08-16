import type { CollectionConfig } from 'payload'

// Ersetzt: Custom Post Type "Team" + ACF Pro Felder
// Kein Plugin nötig — alles in TypeScript definiert
export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    group: 'Inhalte',
  },
  // Mehrsprachigkeit: ersetzt WPML — built-in in Payload
  localization: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: 'Position',
      localized: true, // wird in DE + EN übersetzt
    },
    {
      name: 'bio',
      type: 'richText',
      label: 'Biografie',
      localized: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Kontakt',
      fields: [
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'linkedin', type: 'text' },
      ],
    },
    {
      name: 'expertise',
      type: 'array',
      label: 'Fachgebiete',
      localized: true,
      fields: [
        { name: 'area', type: 'text' },
      ],
    },
  ],
}
