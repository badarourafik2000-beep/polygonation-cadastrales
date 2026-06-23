# Polygonation Cadastrale

Outil web pour transformer un relevé de géomètre (PDF ou image) en polygone cadastral exploitable : calcul de superficie, périmètre, gisements, visualisation sur fond satellite, et export GeoJSON / Shapefile / CSV.

100 % local : tout le traitement se fait dans le navigateur, aucune donnée n'est envoyée à un serveur.

## Utilisation

👉 **[Ouvrir l'outil](https://badarourafik2000-beep.github.io/polygonation-cadastrales/)**

1. Déposez un ou plusieurs fichiers (PDF, PNG ou JPEG) — un fichier = une parcelle
2. Le tableau de coordonnées (bornes X/Y) est lu automatiquement :
   - **PDF natif** (texte sélectionnable) → extraction directe
   - **PDF scanné ou image** → reconnaissance automatique par OCR (Tesseract.js)
   - Si l'OCR ne suffit pas, un aperçu agrandi du cartouche s'affiche pour saisie manuelle ou collage du tableau (bouton « Coller un tableau brut »)
3. Vérifiez/corrigez les coordonnées dans le tableau
4. Cliquez sur **Générer la polygonation** : superficie, périmètre, gisements, et carte sont calculés
5. Visualisez la parcelle superposée à une image satellite dans la fenêtre dédiée
6. Exportez en GeoJSON, Shapefile (.zip) ou CSV

## Systèmes de coordonnées supportés

- UTM Zone 31N — EPSG:32631 (Bénin, par défaut)
- UTM Zone 30N — EPSG:32630
- WGS84 géographique (latitude/longitude) — EPSG:4326

## Technologies utilisées

- [PDF.js](https://mozilla.github.io/pdf.js/) — lecture des PDF
- [Tesseract.js](https://github.com/naptha/tesseract.js) — OCR
- [Leaflet](https://leafletjs.com/) — carte et fond satellite
- [proj4js](http://proj4js.org/) — conversion de systèmes de coordonnées
- [shp-write](https://github.com/mapbox/shp-write) / [JSZip](https://stuk.github.io/jszip/) — export Shapefile

## Limitations connues

- L'OCR fonctionne dans un navigateur normal (ce dépôt, hébergé sur GitHub Pages) mais **pas** dans l'aperçu d'artifact de Claude.ai, qui bloque par sécurité la création de certains processus internes nécessaires à l'OCR. Dans cet environnement, l'outil reste utilisable via saisie manuelle ou collage du tableau de coordonnées.
- La qualité de l'OCR dépend de la résolution et de la netteté du scan/photo fourni.

## Licence

Usage libre, fourni sans garantie.
