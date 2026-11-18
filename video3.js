const ParksApi = "https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"

const PokeMonAPI = "https://pokeapi.co/api/v2/pokemon/ditto"

function fetchData() {
    fetch(PokeMonAPI)
        .then(res => {
            if (!res.ok) {
                throw Error("Response not ok.")
            }
            console.log("API fetched")
            return res.json()
        })
        .then(data => {
            console.log(data)
            // const pokeName = data.name

            // document.querySelector("#app")
            //     .insertAdjacentHTML("afterbegin", data.base_experience)

            for (const [key, value] of Object.entries(data)) {
                // console.log(`${key}: ${value}`)
                const html = `<div class="data-row">
                <strong>${key}:</strong> <span>${value}</span></div>`

                document.querySelector("#app")
                    .insertAdjacentHTML("beforeend", html)
            }

            // document.querySelector("#app")
            //     .insertAdjacentHTML("afterbegin", data)

            // const parkName = data.features[0].attributes.ParkName
            // const features = data.features

            // document.querySelector("#app")
            //     .insertAdjacentHTML("afterbegin", `<h1>${parkName}</h1>`)

            // My loop
            // for (let i = 0; i < features.length; i++) {
            //     const feature = data.features[i];
            //     console.log(feature.attributes.ParkName)
            //     const park = feature.attributes.ParkName
            //     document.querySelector("#app")
            //         .insertAdjacentHTML("afterbegin", `<h1>${park}</h1>`)
            // }

            // Video 3's loop (.map) 
            // const features = data.features.map(f => {
            //     // console.log(f.attributes)
            //     return `<p>${f.attributes.OBJECTID}. ${f.attributes.ParkName}</p>`
            // }).join(" ")
            // // console.log(features)
            // document.querySelector("#app")
            //     .insertAdjacentHTML("afterbegin", features)


        })
        .catch(err => {
            console.log(err)
        })
}

fetchData()