
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  document.querySelectorAll('[data-search-target]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = (form.querySelector('input')?.value || '').trim().toLowerCase();
      if (!q) { window.location.href = '/calculators/'; return; }
      const routes = {
        concrete: '/concrete/', slab: '/concrete/slab-concrete-calculator/', beam: '/concrete/beam-concrete-calculator/', column: '/concrete/column-concrete-calculator/', footing: '/concrete/footing-concrete-calculator/',
        brick: '/brickwork/brick-quantity-calculator/', wall: '/brickwork/wall-brick-calculator/', mortar: '/brickwork/mortar-calculator/',
        steel: '/steel/steel-weight-calculator/', rebar: '/steel/rebar-unit-weight-calculator/',
        plaster: '/plastering/plaster-quantity-calculator/', tile: '/tiles/tile-quantity-calculator/', adhesive: '/tiles/tile-adhesive-calculator/',
        paint: '/painting/paint-quantity-calculator/', floor: '/flooring/floor-area-calculator/', screed: '/flooring/screed-calculator/',
        length: '/converters/length-converter/', area: '/converters/area-converter/', volume: '/converters/volume-converter/', weight: '/converters/weight-converter/',
        cost: '/estimators/concrete-cost-estimator/', pop: '/pop-gypsum/', gypsum: '/pop-gypsum/', block: '/blocks/', cement: '/cement-mortar/', mortar: '/cement-mortar/', excavation: '/earthwork/excavation-volume-calculator/', earthwork: '/earthwork/', roof: '/roofing/', asphalt: '/roadwork/asphalt-quantity-calculator/', road: '/roadwork/', tank: '/water-tanks/', water: '/water-tanks/', survey: '/surveying/', slope: '/surveying/slope-gradient-calculator/', stair: '/stairs/', structural: '/structural/', electrical: '/electrical/load-calculator/', load: '/electrical/load-calculator/', wire: '/electrical/wire-length-calculator/'
      };
      const key = Object.keys(routes).find(k => q.includes(k));
      window.location.href = key ? routes[key] : '/calculators/';
    });
  });
});
