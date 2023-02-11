import {defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: 'Title',
      description: "Title of the skill",
      type: 'string',
    },
    {
      name: "name",
      title: 'Name',
      type: 'string',
      description: "Name of the skill",
    },
    {
      name: "image",
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
   
  ],
})
