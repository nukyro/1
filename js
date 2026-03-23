<!DOCTYPE html>
<html>
<body>
    <div id="cube" style="width: 50px; height: 50px; background: red; position: relative;"></div>

    <script>
        // 2. Сама анимация (всего одна команда)
        document.getElementById('cube').animate([
            { left: '0px' },         /* Старт */
            { left: '200px' }       /* Финиш */
        ], {
            duration: 1000,         // Время движения (1 секунда)
            iterations: Infinity,  // Повторять бесконечно
            direction: 'alternate' // Двигаться туда-обратно
        });
    </script>
</body>
</html>
