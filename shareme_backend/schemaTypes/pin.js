export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userId',
            title: 'User ID',
            type: 'string'
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{ type: 'save' }]
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment' }]
        },
    ]
}