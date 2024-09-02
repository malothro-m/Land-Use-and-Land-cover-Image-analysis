// Define the area of interest using a geometry or by importing a shapefile
// Load the FAO GAUL dataset for administrative boundaries


// Filter the dataset to get only Lower Dibang Valley district
var lowerDibangValley = adminBoundaries.filter(ee.Filter.eq('ADM2_NAME', 'Lower Dibang Valley'));

// Display the boundary on the map
Map.centerObject(lowerDibangValley, 10);
Map.addLayer(lowerDibangValley, {}, 'Lower Dibang Valley');


// Simplify the geometry (reduce the complexity of the polygon)
var simplifiedAOI = lowerDibangValley.geometry().simplify(500);

// Use the simplified AOI for filtering
var landsat = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
               .filterBounds(simplifiedAOI)
               .filterDate('2023-01-01', '2023-12-31')
               .filter(ee.Filter.lt('CLOUD_COVER', 10));
Map.addLayer(
  landsat.median().clip(lowerDibangValley.geometry()), 
  {min: 0, max: 0.3, bands: ['B4', 'B3', 'B2']}, 
  'True-Color'
);


// Merge all classes into one feature collection
var trainingData = urban.merge(water).merge(forest).merge(agriculture).merge(floodplains);

// Extract spectral bands for training
var bands = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
var medianImage = landsat.median().clip(lowerDibangValley.geometry());
var training = medianImage.select(bands).sampleRegions({
  collection: trainingData,
  properties: ['Landcover'],
  scale: 30
});

// Train the Random Forest classifier
var classifier = ee.Classifier.smileRandomForest(100).train({
  features: training,
  classProperty: 'Landcover',
  inputProperties: bands
});
var classified = medianImage.classify(classifier);
Map.addLayer(classified, {min: 0, max:4, palette: ['red', 'green', 'blue','yellow','white']}, 'classified image');
print("done");
  Export.image.toDrive({
  image: classified,
  description: 'LULC_Classification_Lower_Dibang_Valley',
  scale: 30, // Adjust scale as needed
  region: lowerDibangValley.geometry().bounds(), // Define the region for export
  fileNamePrefix: 'LULC_Classification',
  formatOptions: {
    cloudOptimized: true
  }
});



// Export the classified image
Export.image.toDrive({
  image: classified,
  description: 'LULC_Classification_Lower_Dibang_Valley',
  scale: 30, // Adjust scale as needed
  region: lowerDibangValley.geometry().bounds(), // Define the region for export fileNamePrefix: 'LULC_Classification_Lower_Dibang_Valley',
  formatOptions: {
    cloudOptimized: true
  }
});

// Export the training data markers as a feature collection
Export.table.toDrive({
  collection: trainingData,
  description: 'Training_Data_Markers_Lower_Dibang_Valley',
  fileFormat: 'CSV', // or 'CSV' if you prefer
  folder: 'EarthEngineExports', // Optional folder in Google Drive
});
