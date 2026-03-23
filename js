// 1. Создаем квадрат прямо из JS
const box = document.createElement('div');
Object.assign(box.style, {
  width: '50px',
  height: '50px',
  background: 'red',
  position: 'absolute',
  top: '50%',
  left: '0px'
});
document.body.appendChild(box);

// 2. Анимируем его (всего одна функция)
let pos = 0;
function animate() {
  pos += 2; // Скорость
  box.style.left = pos + 'px';
  
  // Если ушел за экран — возвращаем в начало
  if (pos > window.innerWidth) pos = -50;
  
  requestAnimationFrame(animate); // Запускает следующий кадр
}

animate();
