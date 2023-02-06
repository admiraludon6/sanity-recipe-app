export default {
    name: "chef",
    title: "Chef",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Chef's name",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "bio",
            title: "Bio",
            type: "array", // this create a rich text (default html)
            of: [
                // {
                //     title: "Bio",
                //     name: "bio",
                //     type: "string", // this will create a list of string
                // },
                {
                    title: "Block",
                    type: "block", // this convert rich text to json (no need to parse html to json)
                    styles: [{title: "Normal", value: "normal"}],
                    lists: []
                }
            ]
        },
    ]
}