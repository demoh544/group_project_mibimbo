// === БУРГЕР-МЕНЮ ===
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
if (burger) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
}

// === ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ ===
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === location.pathname.split('/').pop()) {
        link.classList.add('active');
    }
});

// === МОДАЛЬНОЕ ОКНО (только на странице каталога) ===
if (document.getElementById('productGrid')) {
    const grid = document.getElementById('productGrid');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalBrand = document.getElementById('modalBrand');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');

    // Рендер карточек
    products.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img" style="background-image:url('${p.img}')"></div>
            <div class="product-info">
                <div class="brand">${p.brand}</div>
                <h3>${p.name}</h3>
                <div class="price">${p.price}</div>
            </div>
        `;
        card.addEventListener('click', () => openModal(i));
        grid.appendChild(card);
    });

    function openModal(index) {
        const p = products[index];
        modalImg.style.backgroundImage = `url('${p.img}')`;
        modalBrand.textContent = p.brand;
        modalTitle.textContent = p.name;
        modalDesc.textContent = p.desc;
        modalPrice.textContent = p.price;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.getElementById('modalClose').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// === ФОРМА ОБРАТНОЙ СВЯЗИ ===
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за заявку! Наш менеджер свяжется с вами в течение 15 минут.');
        contactForm.reset();
    });
}