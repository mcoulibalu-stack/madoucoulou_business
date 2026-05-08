function buildWhatsappMessage(formData) {
    const lines = [
        'Bonjour Madou Coulou Business, je veux commander un design PC.',
        '',
        `Nom: ${formData.get('nom') || ''}`,
        `WhatsApp: ${formData.get('whatsapp') || ''}`,
        `Appareil: ${formData.get('appareil') || ''}`,
        `Style choisi: ${formData.get('style_choisi') || 'A discuter'}`,
        `Idee: ${formData.get('idee') || 'A discuter'}`
    ];

    return encodeURIComponent(lines.join('\n'));
}

function prefillStyle(styleName) {
    const styleInput = document.getElementById('style_choisi');
    const orderSection = document.getElementById('commande');

    if (styleInput) {
        styleInput.value = styleName;
    }

    if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToSection(id) {
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');

    if (!orderForm) {
        return;
    }

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!orderForm.reportValidity()) {
            return;
        }

        const formData = new FormData(orderForm);
        const message = buildWhatsappMessage(formData);
        const whatsappUrl = `https://wa.me/22361027891?text=${message}`;

        window.open(whatsappUrl, '_blank', 'noopener');
        orderForm.reset();
    });
});
