var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_STOrtofotocolor2020_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_1, 0]);
var format_SantVicensdelsHorts1_12_23950_2 = new ol.format.GeoJSON();
var features_SantVicensdelsHorts1_12_23950_2 = format_SantVicensdelsHorts1_12_23950_2.readFeatures(json_SantVicensdelsHorts1_12_23950_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantVicensdelsHorts1_12_23950_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantVicensdelsHorts1_12_23950_2.addFeatures(features_SantVicensdelsHorts1_12_23950_2);
var lyr_SantVicensdelsHorts1_12_23950_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantVicensdelsHorts1_12_23950_2, 
                style: style_SantVicensdelsHorts1_12_23950_2,
                interactive: true,
                title: '<img src="styles/legend/SantVicensdelsHorts1_12_23950_2.png" /> Sant Vicençs dels Horts 1_12_23 950'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                title: "Mapas de fondo"});

lyr_GoogleSatellite_0.setVisible(true);lyr_STOrtofotocolor2020_1.setVisible(true);lyr_SantVicensdelsHorts1_12_23950_2.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_STOrtofotocolor2020_1,lyr_SantVicensdelsHorts1_12_23950_2];
lyr_SantVicensdelsHorts1_12_23950_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'área': 'área', 'layer': 'layer', 'path': 'path', });
lyr_SantVicensdelsHorts1_12_23950_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area': 'Range', 'área': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SantVicensdelsHorts1_12_23950_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'área': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SantVicensdelsHorts1_12_23950_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});