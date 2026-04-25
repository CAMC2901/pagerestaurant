
let posicion = 0;

function moverChef(direccion) {
    const track = document.getElementById('chefsTrack');
    const tarjetas = track.querySelectorAll('.tarjeta');
    const total = tarjetas.length;
    const ancho = tarjetas[0].offsetWidth + 40; // 40 = gap

    posicion += direccion;

    if (posicion < 0) posicion = total - 1;
    if (posicion >= total) posicion = 0;

    track.style.transform = `translateX(-${posicion * ancho}px)`;
}

function abrirZoom(item) {
  const src = item.querySelector('img').src;
  document.getElementById('zoomImg').src = src;
  document.getElementById('zoomOverlay').classList.add('activo');
}

function cerrarZoom() {
  document.getElementById('zoomOverlay').classList.remove('activo');
}

// También cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarZoom();
});