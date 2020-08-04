let data = [
    {
        rid: 100,
        fields: [
            {
                fid: 200,
                value: "string",
            },
            {
                fid: 300,
                value: 123,
            },
        ]
    },
    {
        rid: 200,
        fields: [
            {
                fid: 144,
                value: 1255,
            },
            {
                fid: 122,
                value: "value",
            }
        ]
    }
]

const handler = (data) => {
    let postData = []

    data.forEach(element => {
        postData.push({ 
            3: {value: element.rid}
        })
        element.fields.forEach(el => {
            postData[postData.length-1][el.fid] = { value: el.value }
        });
    })

    console.log(postData)
}

handler(data)