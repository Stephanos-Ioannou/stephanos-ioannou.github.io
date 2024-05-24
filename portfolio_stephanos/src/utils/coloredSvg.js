const createColoredSvgUrl = (icon, color) => {
    const modifiedSvg = icon.svg.replace(/<path /g, `<path fill="${color}" `);
    return `data:image/svg+xml;utf8,${encodeURIComponent(modifiedSvg)}`;
};

export default createColoredSvgUrl;