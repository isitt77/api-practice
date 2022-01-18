console.log("Hello.")

// Video 2 Displaying data on browser

const parksApi = "https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-130.153%2C44.672%2C-111.300%2C49.883&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json"
const table = document.querySelector("table")

async function loadIntoTable(url, table) {
    const tableHead = document.querySelector("thead")
    const tableBody = document.querySelector("tbody")
    const response = await fetch(url)
    const { features } = await response.json()

    console.log(features)

    let headers = features[0].attributes.ParkName
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