const app = Vue.createApp({
    data() {
        return {
            tableName: "Parks"

        }
    },
    methods: {
        printFeatures() {
            console.log(this.tableName)
            return this.tableName
        }
    }
})

app.mount("#VueTable")


// const parksApi = "https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-130.153%2C44.672%2C-111.300%2C49.883&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json"
// const table = document.querySelector("table")

// async function loadIntoTable(url, table) {
//     const tableHead = document.querySelector("thead")
//     const tableBody = document.querySelector("tbody")
//     const response = await fetch(url)
//     const { features } = await response.json()

//     console.log(features)

//     let header = "Park Name"
//     // let rows = features[0].geometry.rings[0][0]
//     let rows = features.map(f => {
//         const row = f.attributes.ParkName
//         // console.log(row)
//         return row
//     })
//     // .join(" ")
//     // console.log(rows)
//     // document.querySelector("#app")
//     //     .insertAdjacentHTML("afterbegin", rows)

//     // Clear the table
//     tableHead.innerHTML = "<tr></tr>"
//     tableBody.innerHTML = ""

//     // Populate headers 
//     const headerElement = document.createElement("th")

//     headerElement.textContent = header
//     tableHead.querySelector("tr").appendChild(headerElement)

//     // Populate rows

//     const rowElement = document.createElement("tr")
//     for (const cellText of rows) {
//         const cellElement = document.createElement("td")

//         cellElement.textContent = cellText
//         rowElement.appendChild(cellElement)
//     }
//     tableBody.appendChild(rowElement)
// }

// loadIntoTable(parksApi, table)