function toggleDisco(button, target) {
    const disco_shit = button.closest(target);
    if (disco_shit.classList.contains('js-paused')) {
        disco_shit.classList.remove('js-paused');
        button.textContent = 'Arrêter les effets';
    } else {
        disco_shit.classList.add('js-paused');
        button.textContent = 'Jouer les effets';
    }
}