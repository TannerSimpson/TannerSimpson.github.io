class Tree {
    constructor(title, imgFileName, type, growthRate, height, lifespan, habitat, description) {
        this.title = title;
        this.imgFileName = imgFileName;
        this.type = type;
        this.growthRate = growthRate;
        this.height = height;
        this.lifespan = lifespan;
        this.habitat = habitat;
        this.description = description;
    }

}

const trees = [
    new Tree("Bald Cypress", "Bald_Cypress.jpeg", "Deciduous", "Medium", "50-70 ft", "600 years", "Wetlands", "Tall, straight, and pyramidal, often found in swampy areas."),
    new Tree("Eastern Redbud", "Eastern_Redbud.jpeg", "Deciduous", "Medium", "20-30 ft", "20-30 years", "Woodlands", "Known for its pink or lavender flowers, heart-shaped leaves."),
    new Tree("Loblolly Pine", "Loblolly_Pine.jpeg", "Evergreen", "Fast", "60-100 ft", "100-150 years", "Forests", "Common in the southeastern United States, valuable timber tree."),
    new Tree("Southern Magnolia", "Southern_Magnolia.jpeg", "Evergreen", "Medium", "60-80 ft", "80-120 years", "Gardens", "Large, fragrant flowers and glossy leaves, popular ornamental tree."),
];

function addTreesToDOM() {
    const mainElement = document.getElementById('treeContainer');
    trees.forEach((tree) => {
        const treeBox = document.createElement('div');
        treeBox.innerHTML = tree.getSection();
        mainElement.appendChild(treeBox);
    });
}

function showTreeInfo(index) {
    const modalContent = document.getElementById('modalContent');
    const tree = trees[index];
    modalContent.innerHTML = `<div class="tree-info-box">
                                <img src="images/${tree.imgFileName}" alt="${tree.title}" style="float:right; width:50%;">
                                <div class="tree-info">
                                    <h2>${tree.title}</h2>
                                    <p><strong>Type:</strong> ${tree.type}</p>
                                    <p><strong>Growth Rate:</strong> ${tree.growthRate}</p>
                                    <p><strong>Height:</strong> ${tree.height}</p>
                                    <p><strong>Lifespan:</strong> ${tree.lifespan}</p>
                                    <p><strong>Habitat:</strong> ${tree.habitat}</p>
                                    <p>${tree.description}</p>
                                </div>
                             </div>`;
    document.getElementById('treeModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('treeModal').style.display = 'none';
}

// Initialize
addTreesToDOM();