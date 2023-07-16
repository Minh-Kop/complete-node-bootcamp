/* eslint-disable */
export const displayMap = (locations) => {
    mapboxgl.accessToken =
        'pk.eyJ1IjoibWluaC1rb3AiLCJhIjoiY2xrNDVtZTJrMDlhZzNncnljc2x3OWd5NSJ9.p9AANHE-_EvyYj6Wx924qg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/minh-kop/clk46ihqm00fn01qj3p4zdcw5',
        scrollZoom: false,
        // center: [-118.2476, 33.898794],
        // zoom: 8,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((loc) => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom',
        })
            .setLngLat(loc.coordinates)
            .addTo(map);

        // Add popup
        new mapboxgl.Popup({
            offset: 30,
        })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100,
        },
    });
};
