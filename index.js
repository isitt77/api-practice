console.log("Hello.")

// fetch("https://sampleserver6.arcgisonline.com/arcgis/rest/info")

// fetch("https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-130.153%2C44.672%2C-111.300%2C49.883&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json", {
//     method: "GET",
//     body: Object.features
// })

const ParksApi = "https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"

function fetchData() {
    fetch(ParksApi)
        .then(res => {
            if (!res.ok) {
                throw Error("Response not ok.")
            }
            return res.json()
        })
        .then(data => {
            // console.log(data.features)
            const parkName = data.features[0].attributes.ParkName
            // const features = data.features

            document.querySelector("#app")
                .innerHTML = `<h1>${parkName}</h1>`

            // for (let i = 0; i < features.length; i++) {
            //     const feature = features[i];
            //     console.log(feature.attributes.ParkName)



            // for (let j = 0; j < feature.length; j++) {
            //     const parkName = feature[j].attributes.ParkName;
            //     console.log(parkName)
            //     // document.querySelector("#app")
            //     //     .innerHTML = `<h1>${parkName}</h1>`
            // }
            // }
        })
        .catch(err => {
            console.log(err)
        })
}

fetchData()