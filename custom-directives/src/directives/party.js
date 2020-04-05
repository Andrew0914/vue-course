export default {
    bind(el, binding) {
        // value
        const colors = binding.value;
        let i = 0;

        // podemos guardar la referencia para usarla en unbind
        el.__ColorInterval__ = setInterval(() => {
            el.style.color = colors[i++];
            if (i > colors.length - 1) i = 0;
        }, 1000);
    },
    unbind(el) {
        clearInterval(el.__ColorInterval__);
    }
}