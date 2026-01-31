/**
 * Matrix Rain Background Effect
 * Creates a subtle Matrix-style falling code rain animation
 */

(function() {
    'use strict';

    // Configuration
    const config = {
        fontSize: 14,
        columns: null,
        drops: [],
        chars: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01',
        fadeSpeed: 0.05,
        speed: 33,
        color: '#39FF14'
    };

    function initMatrix() {
        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.id = 'matrix-bg';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.15';
        canvas.style.pointerEvents = 'none';
        
        document.body.insertBefore(canvas, document.body.firstChild);
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Calculate columns
            config.columns = Math.floor(canvas.width / config.fontSize);
            
            // Initialize drops
            config.drops = [];
            for (let i = 0; i < config.columns; i++) {
                config.drops[i] = Math.random() * -100;
            }
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Draw function
        function draw() {
            // Fade effect
            ctx.fillStyle = 'rgba(0, 0, 0, ' + config.fadeSpeed + ')';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Set text style
            ctx.fillStyle = config.color;
            ctx.font = config.fontSize + 'px monospace';
            
            // Draw characters
            for (let i = 0; i < config.drops.length; i++) {
                // Random character
                const char = config.chars[Math.floor(Math.random() * config.chars.length)];
                
                // Draw character
                ctx.fillText(char, i * config.fontSize, config.drops[i] * config.fontSize);
                
                // Reset drop when it reaches bottom or randomly
                if (config.drops[i] * config.fontSize > canvas.height && Math.random() > 0.975) {
                    config.drops[i] = 0;
                }
                
                // Move drop down
                config.drops[i]++;
            }
        }
        
        // Start animation
        setInterval(draw, config.speed);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMatrix);
    } else {
        initMatrix();
    }
    
    // Expose control functions globally
    window.MatrixRain = {
        setOpacity: function(opacity) {
            const canvas = document.getElementById('matrix-bg');
            if (canvas) {
                canvas.style.opacity = opacity;
            }
        },
        setColor: function(color) {
            config.color = color;
        },
        setSpeed: function(speed) {
            config.speed = speed;
        },
        disable: function() {
            const canvas = document.getElementById('matrix-bg');
            if (canvas) {
                canvas.style.display = 'none';
            }
        },
        enable: function() {
            const canvas = document.getElementById('matrix-bg');
            if (canvas) {
                canvas.style.display = 'block';
            }
        }
    };
})();
