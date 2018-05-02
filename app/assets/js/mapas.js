const initMapa = () => {
  const urlJSON = './brasil.geojson';
  const urlCSV = './data.csv';
  const width = 650;
  const height = 650;

  // Eliminar
  const target = document.querySelector('.g-map');

  const projection = d3.geoMercator()
    .scale(793.9355968773373)
    .center([-54.39273725799998, -15.14395108745566])
    .translate([width / 2, height / 2]);

  const geoPath = d3.geoPath()
    .projection(projection);

  const container = d3.select('.g-map__container');

  const svg = container.append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMaxYMin');

  const tooltip = container.append('div')
    .attr('class', 'g-tooltip')
    .html('');

  const g = svg.append('g')
    .attr('class', 'features');

  const mouseoverPath = ({ properties }, data) => {
    // console.log('data', data);
    const { NM_ESTADO } = properties;
    tooltip
      .style('display', 'block')
      .html(`${NM_ESTADO}`);
  };

  const mousemovePath = () => {
    const { offsetTop, offsetLeft } = target;
    const { pageX, pageY } = d3.event;
    tooltip
      .style('transform', `translate(${(pageX - offsetLeft) + 20}px, ${(pageY - offsetTop) - 20}px)`);
  };

  const mouseoutPath = () => {
    tooltip.style('display', 'none');
  };

  const readyMap = (error, geodata, data) => {
    if (error) throw error;
    // console.log('data', data);
    const { features } = geodata;
    // console.log('features', features)
    g.selectAll('path')
      .data(features)
      .enter()
      .append('path')
      .attr('d', geoPath)
      .attr('class', 'g-path')
      .attr('data-regiao', ({ properties }) => properties.NM_REGIAO.toLowerCase())
      .on('mousemove', mousemovePath)
      .on('mouseover', e => mouseoverPath(e, data))
      .on('mouseout', mouseoutPath);
  };

  d3.queue()
    .defer(d3.json, urlJSON)
    .defer(d3.csv, urlCSV)
    .await(readyMap);

  // d3.json(URL, (error, geodata) => {
  //   const { features } = geodata;
  //   g.selectAll('path')
  //     .data(features)
  //     .enter()
  //     .append('path')
  //     .attr('d', geoPath)
  //     .attr('class', 'g-path')
  //     .attr('data-regiao', ({ properties }) => properties.NM_REGIAO.toLowerCase())
  //     .on('mousemove', mousemovePath)
  //     .on('mouseover', mouseoverPath)
  //     .on('mouseout', mouseoutPath);
  // });
};

export default initMapa;
