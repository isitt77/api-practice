console.log("Hello.")

// fetch("https://sampleserver6.arcgisonline.com/arcgis/rest/info")

fetch("https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-130.153%2C44.672%2C-111.300%2C49.883&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json", {
    method: "GET",
    body: Object.features
})
    // 5:45 in https://www.youtube.com/watch?v=cuEtnrL9-H0 

    // Fetch json data
    // // .then(res => res.json())
    // .then(data => console.log(data))


    .then(res => {
        return res.json()
    })
    // .then(data => console.log(data.features))
    // .then(data => console.log(data.features[0])) // <-- specific index from array
    // .then(data => console.log(data.features[1].attributes.ParkName))
    // .then(data => document.write(data.features[1].attributes.ParkName))
    .then(data => console.log(data.features[1].geometry.rings[0][0])) // <-- Coordinates long lat




    // .then(res => {
    //     if (res.ok) {
    //         console.log("Success!")
    //     } else {
    //         console.log("Not successful")
    //     }
    // })
    // // .then(res => res.json())
    // .then(data => console.log(data))
