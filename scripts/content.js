const reg = /[^.*]+\.twitter\.com(.*)/;

// Doing a setInterval because I'm lazy. Change it if you want.
setInterval(() => {
    const targets = document.getElementsByTagName(`a`);
    Array.from(targets).forEach((a) => {
        const match = a.href.match(reg);
        if (!a.href.startsWith(`https://twitter.com`) && !match) {
            a.remove();
            console.log(`Removed ${a.innerText}`);
        }
    });
}, 1000);
