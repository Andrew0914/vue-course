export default {
    bind(el, binding) {
        // value
        const colors = binding.value;
        let i = 0;

        // arguments
        const speeds = {
            "slow": 2000,
            "normal": 1000,
            "fast": 500,
            "crazy": 100
        };

        const speedName = binding.arg || 'normal';
        const speed = speeds[speedName];

        // podemos guardar la referencia para usarla en unbind
        el.__ColorInterval__ = setInterval(() => {
            el.style.color = colors[i++];
            if (i > colors.length - 1) i = 0;
        }, speed);
    },
    unbind(el) {
        clearInterval(el.__ColorInterval__);
    }
}