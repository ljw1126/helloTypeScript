forEach(console.log, 
    filter(x => x % 2 === 1, 
        map(node => parseInt(node.textContent), document.querySelectorAll('li'))
    )
);