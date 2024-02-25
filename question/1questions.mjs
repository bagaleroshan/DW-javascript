/* [
    {
        "fieldName": "fff",
        "originalname": "js.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "./public",
        "filename": "1673334935126js.jpg",
        "path": "public\\1673334935126js.jpg",
        "size": 10222
    },
    {
        "fieldName": "fff",
        "originalname": "houseOfJobBannerImage.png",
        "encoding": "7bit",
        "mimetype": "image/png",
        "destination": "./public",
        "filename": "1673334935126houseOfJobBannerImage.png",
        "path": "public\\1673334935126houseOfJobBannerImage.png",
        "size": 106821
    }
] */

//find array of filename such that it will product ["localhost:8000/1673334935126houseOfJobBannerImage.png", ....]

let files =[
    {
        "fieldName": "fff",
        "originalname": "js.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "./public",
        "filename": "1673334935126js.jpg",
        "path": "public\\1673334935126js.jpg",
        "size": 10222
    },
    {
        "fieldName": "fff",
        "originalname": "houseOfJobBannerImage.png",
        "encoding": "7bit",
        "mimetype": "image/png",
        "destination": "./public",
        "filename": "1673334935126houseOfJobBannerImage.png",
        "path": "public\\1673334935126houseOfJobBannerImage.png",
        "size": 106821
    }
]
let output = files.map((v,i)=>{
    return `localhost:8000/${v.filename}`
})
console.log(output)
