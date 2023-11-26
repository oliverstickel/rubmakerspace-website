document.getElementById('interactive-svg').addEventListener('load', function() {
  const svgObject = this.contentDocument;

  const clickableAreas = [
    {id: 'imap_montage', link: '../coworking#montagezone'},
    {id: 'imap_firstaid', link: '../sicherheit'},
    {id: 'imap_p-seminar', link: '../projektraeume#praxisseminarraum'},
    {id: 'imap_digitallabor', link: '../digitallabor'},
    {id: 'imap_metal', link: '../metallbauwerkstatt'},
    {id: 'imap_holz', link: '../holzwerkstatt'},
    {id: 'imap_plastic', link: '../kunststoffwerkstatt'},
    {id: 'imap_ceramic', link: '../keramikwerkstatt'},
    {id: 'imap_storage', link: '../lager'},
    {id: 'imap_project-storage', link: '../lager#projektboxen'},
    {id: 'imap_Project-rooms-UG', link: '../projektraeume#projekraume'},
    {id: 'imap_tee_UG', link: '../coworking#teekuechen'},
    {id: 'imap_hof', link: '../coworking#aussenbereich'},
    {id: 'imap_kuechenlabor', link: '../kuechenlabor'},
    {id: 'imap_seminarraum', link: '../projektraeume#seminar'},
    {id: 'imap_medienlabor', link: '../medienlabor'},
    {id: 'imap_designlabor', link: '../designlabor'},
    {id: 'imap_teekueche_eg', link: '../coworking#teekuechen'},
    {id: 'imap_projektraeume_eg', link: '../projektraeume#projekraume'},
    {id: 'imap_coworking_eg', link: '../coworking'},
    {id: 'imap_computerraum', link: '../projektraeume#computerraum'}
  ];

 clickableAreas.forEach(area => {
    const element = svgObject.getElementById(area.id);
    element.addEventListener('click', () => {
      window.location.href = area.link;
    });

    element.addEventListener('mouseover', () => {
      element.setAttribute('style', 'fill: #dadada !important; fill-opacity: 0.4 !important; cursor: pointer !important; filter: url(#f3) !important;');
      element.style.cursor = 'pointer';
      element.style.filter = 'url(#f3)';
    });

    element.addEventListener('mouseout', () => {
      element.setAttribute('style', 'fill: #efc11a !important; fill-opacity: 0 !important; cursor: default !important;');
      element.style.cursor = '';
    });
  });
});