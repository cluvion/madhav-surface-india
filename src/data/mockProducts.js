export const mockProducts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Stone Product ${i + 1}`,
    image: i % 2 === 0 ? "/assets/stones/stone1.png" : "/assets/stones/stone2.png",
    category: i % 3 === 0 ? "Marble" : i % 3 === 1 ? "Granite" : "Quartz",
}));
