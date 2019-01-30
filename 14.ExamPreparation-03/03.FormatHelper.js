function formatHelper([text]) {
    console.log(text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, group1) => `${group1} `)
        .replace(/\.\s+(?=[0-9]+)/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, group1) => `"${group1}"`)
        .replace(/([.,!?:;])[ ]+(?=[.,!?:;])/g, (match, group1) => group1))
}

formatHelper(['Terribly formatted text    . With chaotic spacings.\" Terrible quoting   \"! Also this date is pretty confusing : 20  .  12.  16 .'])
//formatHelper(['Make,sure to give:proper spacing where is needed...    !'])