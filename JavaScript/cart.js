// Sistema de Carrito de Compras
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartBadge();
    }

    // Cargar carrito desde localStorage
    loadCart() {
        const savedCart = localStorage.getItem('veterinariaCart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    // Guardar carrito en localStorage
    saveCart() {
        localStorage.setItem('veterinariaCart', JSON.stringify(this.items));
        this.updateCartBadge();
    }

    // Agregar producto al carrito
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.showAddNotification(product.name);
    }

    // Remover producto del carrito
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
    }

    // Actualizar cantidad de un producto
    updateQuantity(id, quantity) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(id);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    // Calcular total del carrito
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (parseFloat(item.price) * item.quantity);
        }, 0);
    }

    // Obtener cantidad total de items
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Limpiar carrito
    clearCart() {
        this.items = [];
        this.saveCart();
    }

    // Actualizar badge del carrito en el menú
    updateCartBadge() {
        const badge = document.getElementById('cart-badge');
        const totalItems = this.getTotalItems();
        
        if (badge) {
            if (totalItems > 0) {
                badge.textContent = totalItems;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }
    }

    // Mostrar notificación al agregar producto
    showAddNotification(productName) {
        // Crear notificación temporal
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
        `;
        notification.textContent = `✓ ${productName} agregado al carrito`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

// Instancia global del carrito
const cart = new Cart();

// Función para agregar producto al carrito desde botones
function addToCart(productName, productPrice, productId) {
    const price = parseFloat(productPrice.replace(/[^0-9.]/g, ''));
    cart.addItem({
        id: productId || productName.toLowerCase().replace(/\s+/g, '-'),
        name: productName,
        price: price
    });
}

// Función para renderizar el carrito en la página de carrito
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartContainer) return;
    
    if (cart.items.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos desde nuestras páginas de productos</p>
                <a href="alimentos.html" class="btn" style="margin-top: 1rem;">Ver Productos</a>
            </div>
        `;
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    if (cartSummary) cartSummary.style.display = 'block';
    
    cartContainer.innerHTML = cart.items.map(item => `
        <div class="cart-item scroll-animate fade-in-up">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${parseFloat(item.price).toFixed(2)} c/u</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1}); renderCart();">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1}); renderCart();">+</button>
                </div>
                <div style="min-width: 100px; text-align: right; font-weight: 600; color: var(--primary);">
                    $${(parseFloat(item.price) * item.quantity).toFixed(2)}
                </div>
                <button class="remove-btn" onclick="cart.removeItem('${item.id}'); renderCart();">Eliminar</button>
            </div>
        </div>
    `).join('');
    
    if (cartTotal) {
        cartTotal.textContent = `$${cart.getTotal().toFixed(2)}`;
    }
    
    // Animar elementos al cargar
    setTimeout(() => {
        const items = cartContainer.querySelectorAll('.cart-item');
        items.forEach((item, index) => {
            setTimeout(() => item.classList.add('animated'), index * 100);
        });
    }, 100);
}

// Función para limpiar carrito
function clearCart() {
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
        cart.clearCart();
        renderCart();
    }
}

// Inicializar carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    cart.updateCartBadge();
    
    // Si estamos en la página del carrito, renderizar
    if (document.getElementById('cart-items')) {
        renderCart();
    }
    
    // Agregar animaciones a los elementos del carrito
    setTimeout(() => {
        const items = document.querySelectorAll('.cart-item');
        items.forEach((item, index) => {
            setTimeout(() => item.classList.add('animated'), index * 100);
        });
    }, 100);
});


