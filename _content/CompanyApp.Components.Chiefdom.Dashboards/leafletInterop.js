// leafletInterop.js - Leaflet map interop for Blazor
// This module provides JavaScript functions to interact with Leaflet maps from Blazor

// Store map instances
let maps = {};

/**
 * Initialize a Leaflet map
 * @param {string} mapId - The HTML element ID for the map
 * @param {number} latitude - Center latitude
 * @param {number} longitude - Center longitude
 * @param {number} zoom - Initial zoom level
 */
export function initializeMap(mapId, latitude, longitude, zoom) {
    // Wait for the DOM element to be ready
    setTimeout(() => {
        const element = document.getElementById(mapId);
        if (!element) {
            console.error(`Map element with ID '${mapId}' not found`);
            return;
        }

        // Create map if it doesn't exist
        if (!maps[mapId]) {
            const map = L.map(mapId).setView([latitude, longitude], zoom);
            
            // Add OpenStreetMap tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18
            }).addTo(map);

            // Store map instance and create layers array
            maps[mapId] = {
                map: map,
                layers: []
            };
        }
    }, 100);
}

/**
 * Add a single marker to the map
 * @param {string} mapId - The map ID
 * @param {number} latitude - Marker latitude
 * @param {number} longitude - Marker longitude
 * @param {string} title - Marker title/tooltip
 * @param {string} popupContent - Popup content HTML
 */
export function addMarker(mapId, latitude, longitude, title, popupContent) {
    const mapData = maps[mapId];
    if (!mapData) {
        console.error(`Map '${mapId}' not initialized`);
        return;
    }

    const marker = L.marker([latitude, longitude], { title: title })
        .addTo(mapData.map);
    
    if (popupContent) {
        marker.bindPopup(popupContent);
    }

    mapData.layers.push(marker);
}

/**
 * Add multiple markers to the map
 * @param {string} mapId - The map ID
 * @param {Array} markers - Array of marker objects with lat, lng, title, and popup properties
 */
export function addMarkers(mapId, markers) {
    const mapData = maps[mapId];
    if (!mapData) {
        console.error(`Map '${mapId}' not initialized`);
        return;
    }

    markers.forEach(markerData => {
        const marker = L.marker([markerData.lat, markerData.lng], { 
            title: markerData.title || '' 
        }).addTo(mapData.map);
        
        if (markerData.popup) {
            marker.bindPopup(markerData.popup);
        }

        mapData.layers.push(marker);
    });
}

/**
 * Add a circle overlay to the map
 * @param {string} mapId - The map ID
 * @param {number} latitude - Circle center latitude
 * @param {number} longitude - Circle center longitude
 * @param {number} radius - Radius in meters
 * @param {string} color - Circle border color
 * @param {string} fillColor - Fill color
 * @param {number} fillOpacity - Fill opacity (0.0 to 1.0)
 */
export function addCircle(mapId, latitude, longitude, radius, color, fillColor, fillOpacity) {
    const mapData = maps[mapId];
    if (!mapData) {
        console.error(`Map '${mapId}' not initialized`);
        return;
    }

    const circle = L.circle([latitude, longitude], {
        color: color,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        radius: radius
    }).addTo(mapData.map);

    mapData.layers.push(circle);
}

/**
 * Clear all markers and overlays from the map
 * @param {string} mapId - The map ID
 */
export function clearMap(mapId) {
    const mapData = maps[mapId];
    if (!mapData) {
        console.error(`Map '${mapId}' not initialized`);
        return;
    }

    // Remove all layers
    mapData.layers.forEach(layer => {
        mapData.map.removeLayer(layer);
    });
    
    // Clear the layers array
    mapData.layers = [];
}

/**
 * Fit the map bounds to show all markers
 * @param {string} mapId - The map ID
 */
export function fitBounds(mapId) {
    const mapData = maps[mapId];
    if (!mapData) {
        console.error(`Map '${mapId}' not initialized`);
        return;
    }

    if (mapData.layers.length > 0) {
        const group = L.featureGroup(mapData.layers);
        mapData.map.fitBounds(group.getBounds().pad(0.1));
    }
}
