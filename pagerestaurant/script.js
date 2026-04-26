let posicionChef = 0;

function moverChef(direccion) {
  const track = document.getElementById('chefsTrack');
  const tarjetas = track.querySelectorAll('.tarjeta');
  const ancho = tarjetas[0].offsetWidth + 40;
  const maxPos = -(tarjetas.length - 1) * ancho;

  posicionChef += direccion * -ancho;
  if (posicionChef > 0) posicionChef = 0;
  if (posicionChef < maxPos) posicionChef = maxPos;

  track.style.transform = `translateX(${posicionChef}px)`;
}

function abrirModal() {
  document.getElementById('modalReserva').classList.add('activo');
}

function cerrarModalBtn() {
  document.getElementById('modalReserva').classList.remove('activo');
}

function cerrarModal(event) {
  if (event.target.id === 'modalReserva') {
    document.getElementById('modalReserva').classList.remove('activo');
  }
}

function confirmarReserva() {
  const inputs = document.querySelectorAll('.modal-content input, .modal-content select');
  let valido = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      valido = false;
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = 'var(--gold2)';
    }
  });

  if (valido) {
    document.querySelector('.modal-content').innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <p style="font-size: 40px;">✅</p>
        <h3 style="color: var(--gold); margin: 16px 0;">¡Reserva Confirmada!</h3>
        <p style="font-size: 18px; color: var(--gold2);">Gracias por tu reserva. Te enviaremos los detalles a tu correo.</p>
        <button class="btn-reservar-modal" style="margin-top: 24px;" onclick="cerrarModalBtn()">Cerrar</button>
      </div>
    `;
  }
}

function abrirZoom(item) {
  const src = item.querySelector('img').src;
  document.getElementById('zoomImg').src = src;
  document.getElementById('zoomOverlay').classList.add('activo');
}

function cerrarZoom() {
  document.getElementById('zoomOverlay').classList.remove('activo');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cerrarZoom();
    cerrarModalBtn();
  }
});