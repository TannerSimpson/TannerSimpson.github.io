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

    getSection() {
        return `<div class="tree-box" onclick="showTreeInfo(${trees.indexOf(this)})">
                    <img src="images/${this.imgFileName}" alt="${this.title}">
                    <h3>${this.title}</h3>
                </div>`;
    }

    getExpandedSection() {
        return `<div class="tree-box">
                    <img src="images/${this.imgFileName}" alt="${this.title}" style="float:right; width:50%;">
                    <h2>${this.title}</h2>
                    <p><strong>Type:</strong> ${this.type}</p>
                    <p><strong>Growth Rate:</strong> ${this.growthRate}</p>
                    <p><strong>Height:</strong> ${this.height}</p>
                    <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                    <p><strong>Habitat:</strong> ${this.habitat}</p>
                    <p>${this.description}</p>
                </div>`;
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
    trees.forEach((tree, index) => {
        const treeBox = document.createElement('div');
        treeBox.classList.add('tree-box');
        treeBox.onclick = () => showTreeInfo(index);

        const treeImage = document.createElement('img');
        treeImage.src = `images/${tree.imgFileName}`;
        treeImage.alt = tree.title;

        const treeTitle = document.createElement('h3');
        treeTitle.textContent = tree.title;

        treeBox.appendChild(treeImage);
        treeBox.appendChild(treeTitle);

        mainElement.appendChild(treeBox);
    });
}

function showTreeInfo(index) {
    document.getElementById('treeModalContent').innerHTML = trees[index].getExpandedSection();
    document.getElementById('treeModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('treeModal').style.display = 'none';
}

// Initialize
addTreesToDOM();