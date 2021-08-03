const colorRandom = _ =>
    `#${((1 << 24) * Math.random() | 0).toString(16).slice(0, 4)}`;

export {colorRandom};