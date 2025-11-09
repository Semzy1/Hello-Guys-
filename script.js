// Improved script: safe element access, toggle helper, and basic form validation handlers
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const themeToggle = document.getElementById('themeToggle');

// Theme handling
function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme === 'dark');

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
});

const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

// Social media login handling
async function handleSocialLogin(platform, e) {
    e.preventDefault();
    const button = e.currentTarget;
    const originalIconClass = button.querySelector('i').className;
    
    // Configuration for different platforms
    const platformConfig = {
        facebook: {
            color: '#1877f2',
            name: 'Facebook'
        },
        google: {
            color: '#DB4437',
            name: 'Google'
        },
        github: {
            color: '#333',
            name: 'GitHub'
        },
        linkedin: {
            color: '#0077b5',
            name: 'LinkedIn'
        }
    };

    // Disable button and show loading state
    button.style.opacity = '0.7';
    const icon = button.querySelector('i');
    if (icon) {
        icon.className = 'fas fa-spinner fa-spin';
    }

    try {
        // Simulate OAuth flow with a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Demo: Show success message
        const config = platformConfig[platform];
        
        // Demo: Redirect to dashboard with 3D animation
        container.innerHTML = `
            <div id="dashboard-3d" style="text-align: center; padding: 2em;">
                <h2>Welcome!</h2>
                <p>You're logged in with ${config.name}</p>
                <div id="threejs-cube" style="width: 320px; height: 240px; margin: 2em auto;"></div>
                <p style="color: #666; font-size: 0.9em; margin: 1em 0;">
                    In production, this would:<br>
                    1. Open ${config.name} OAuth dialog<br>
                    2. Handle the OAuth callback<br>
                    3. Create/update user session
                </p>
                <button onclick="window.location.reload()" 
                        style="background: ${config.color}; border: none; color: white; 
                               padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                    Logout (Demo)
                </button>
            </div>
        `;
        // 3D Cube Animation using Three.js
        setTimeout(() => {
            if (window.THREE && document.getElementById('threejs-cube')) {
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, 320/240, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(320, 240);
                const mount = document.getElementById('threejs-cube');
                mount.appendChild(renderer.domElement);

                // Cube
                const geometry = new THREE.BoxGeometry();
                const material = new THREE.MeshStandardMaterial({ color: config.color, metalness: 0.5, roughness: 0.3 });
                const cube = new THREE.Mesh(geometry, material);
                scene.add(cube);

                // Lighting
                const light = new THREE.PointLight(0xffffff, 1, 100);
                light.position.set(2, 2, 5);
                scene.add(light);

                camera.position.z = 3;

                function animate() {
                    requestAnimationFrame(animate);
                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.01;
                    renderer.render(scene, camera);
                }
                animate();
            }
        }, 100);
    } catch (error) {
        alert('Login failed: ' + (error.message || 'Please try again'));
    } finally {
        // Reset button state
        button.style.opacity = '1';
        if (icon) {
            icon.className = originalIconClass;
        }
    }
}

// Platform-specific handlers
const handleFacebookLogin = (e) => handleSocialLogin('facebook', e);
const handleGoogleLogin = (e) => handleSocialLogin('google', e);
const handleGithubLogin = (e) => handleSocialLogin('github', e);
const handleLinkedinLogin = (e) => handleSocialLogin('linkedin', e);

function setActive(isActive) {
    if (!container) return;
    container.classList.toggle('active', !!isActive);
}

function safeAddListener(el, event, fn) {
    if (!el) return;
    el.addEventListener(event, fn);
}

safeAddListener(registerBtn, 'click', () => setActive(true));
safeAddListener(loginBtn, 'click', () => setActive(false));

// Basic client-side validation (demo only). Prevents form submit and shows simple alerts.
if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = signUpForm.querySelector('input[type="text"]');
        const emailInput = signUpForm.querySelector('input[type="email"]');
        const passwordInput = signUpForm.querySelector('input[type="password"]');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const password = passwordInput ? passwordInput.value : '';

        const errors = [];
        if (name.length < 2) errors.push('Please enter your name (at least 2 characters).');
        if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email address.');
        if (password.length < 6) errors.push('Password must be at least 6 characters.');

        if (errors.length) {
            alert(errors.join('\n'));
            return;
        }

        // Demo behaviour: show success and reset form. Replace with real signup logic as needed.
        alert('Sign up successful (demo).');
        signUpForm.reset();
        setActive(false);
    });
}

if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = signInForm.querySelector('input[type="email"]');
        const passwordInput = signInForm.querySelector('input[type="password"]');

        const email = emailInput ? emailInput.value.trim() : '';
        const password = passwordInput ? passwordInput.value : '';

        const errors = [];
        if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email address.');
        if (!password) errors.push('Please enter your password.');

        if (errors.length) {
            alert(errors.join('\n'));
            return;
        }

        // Demo behaviour: show success. Replace with real authentication.
        alert('Sign in successful (demo).');
        signInForm.reset();
    });
}