console.log("Hello.")

// fetch("https://sampleserver6.arcgisonline.com/arcgis/rest/info")

fetch("https://services5.arcgis.com/4LKAHwqnBooVDUlX/arcgis/rest/services/LandClassification/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-130.153%2C44.672%2C-111.300%2C49.883&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json")
    .then(res => console.log(res))
