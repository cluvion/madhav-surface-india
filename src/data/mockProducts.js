export const mockProducts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Stone Product ${i + 1}`,
    image: i % 2 === 0 ? "/assets/Step4.png" : "/assets/Step6.png",
    category: i % 3 === 0 ? "Marble" : i % 3 === 1 ? "Granite" : "Quartz",
    description: "Experience the premium quality of our handcrafted stone surfaces. Perfect for modern interiors and architectural masterpieces, offering both durability and timeless elegance.",
    tags: ["luxury", "premium", "stone"],
    finishes: ["Polished", "Honed", "Leathered"],
    thumbnailImages: [
        i % 2 === 0 ? "/assets/Step4.png" : "/assets/Step6.png",
        i % 2 === 0 ? "/assets/Step6.png" : "/assets/Step4.png",
    ],
    specifications: {
        sizes: ["3200 x 1600 mm", "3000 x 1400 mm"],
    },
}));
