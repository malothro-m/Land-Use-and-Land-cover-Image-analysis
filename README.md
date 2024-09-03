# Lower Dibang Valley LULC Mapping Project

This project involves Land Use Land Cover (LULC) mapping of the Lower Dibang Valley district using Landsat 8 satellite imagery. The project employs Google Earth Engine to classify different land cover types and exports the results as images and data files.

## Project Overview

The project performs the following tasks:

1. **Area of Interest (AOI) Definition:** Filters the Lower Dibang Valley district from administrative boundary data.
2. **Landsat 8 Imagery Processing:** Filters and processes Landsat 8 images to create a median composite.
3. **Land Cover Classification:** Uses a Random Forest classifier to categorize land cover into different classes such as urban, water, forest, agriculture, and floodplains.
4. **Exporting Results:** Exports the true-color image, classified LULC image, and training data markers as output files.

## Project Structure

- **Scripts:**
  - `ldv_lulc.js`: Main script that runs the LULC mapping and exports the outputs.
  
- **Outputs:**
  - `True_Color_Lower_Dibang_Valley.tif`: True-color satellite image.
  - `LULC_Classification_Lower_Dibang_Valley.tif`: Classified LULC image.
  - `Training_Data_Markers_Lower_Dibang_Valley.csv`: Shapefile containing training data points.

## How to Run the Script

1. **Import the necessary datasets:**
   - Administrative boundaries.
   - Landsat 8 Collection.
   - Training data for various land cover types.

2. **Run the Script:**
   - Open the `lulc_mapping.js` file in the Google Earth Engine Code Editor.
   - Execute the script to generate and visualize the LULC map.
   - Export the images and data to Google Drive.

3. **Exported Files:**
   - The script exports three files: the true-color image, the classified LULC image, and the shapefile with training data markers. You can download these files from your Google Drive.

## Sample Outputs

### Classified LULC Image
![Classified LULC Image](https://your-link-to-image/LULC_Classification_Lower_Dibang_Valley.png)

### Training Data Markers
![Training Data Markers](https://your-link-to-image/Training_Data_Markers_Lower_Dibang_Valley.png)

## Requirements

- **Google Earth Engine Account:** To run the script and access the datasets.
- **Google Drive:** To save the exported files.

## References

- **Landsat 8 Data:** [LANDSAT/LC08/C02/T1_TOA](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_TOA)
- **Google Earth Engine:** [Code Editor](https://code.earthengine.google.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [Your Name](mailto:your.email@example.com).

