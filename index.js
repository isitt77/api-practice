console.log("Hello.")

// fetch("https://sampleserver6.arcgisonline.com/arcgis/rest/info")

fetch("https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-130.153%2C44.672%2C-111.300%2C49.883&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json", {
    method: "GET",
    body: Object.features
})

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


// Video 2 Displaying data on browser

const parksApi = "https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-130.153%2C44.672%2C-111.300%2C49.883&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json"
const table = document.querySelector("table")

async function loadIntoTable(url, table) {
    const tableHead = document.querySelector("thead")
    const tableBody = document.querySelector("tbody")
    const response = await fetch(url)
    const { features } = await response.json()
    // console.log(features)

    // const data = await response.json()
    // console.log(data)

    let headers = async () => {
        let header = []
        for (let i = 0; i < features.length; i++) {
            const parks = await features[i].attributes.ParkName
            // console.log(header.attributes.ParkName)
            // return parks
            header.push(parks)
            // console.log(parks)
        }
        // features[0].attributes.ParkName
        // console.log(header)
        // return header.join("")
        return header
        // console.log(parksArr)
        // return parksArr
    }
    // headers()

    let rows = features[0].geometry.rings[0][0]

    // Clear the table
    tableHead.innerHTML = "<tr></tr>"
    tableBody.innerHTML = ""

    // Populate headers 
    for (let headerText of headers) {
        const headerElement = document.createElement("th")

        headerElement.textContent = headerText
        tableHead.querySelector("tr").appendChild(headerElement)
    }

    // Populate headers v2
    // for (let headerText of headers) {
    //     const headerElement = document.createElement("th")

    //     headerElement.textContent = headerText
    //     tableHead.querySelector("tr").appendChild(headerElement)
    // }



    // Populate rows

    const rowElement = document.createElement("tr")
    for (const cellText of rows) {
        const cellElement = document.createElement("td")

        cellElement.textContent = cellText
        rowElement.appendChild(cellElement)
    }
    tableBody.appendChild(rowElement)
}

loadIntoTable(parksApi, table)