let myLeads = [];
const inputEl = document.getElementById("input-el");
const searchEl = document.getElementById("search-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("dlt-btn");
const fileEl = document.getElementById("file-el");
const themeTrigger = document.getElementById("theme-trigger");
const modal = document.getElementById("modal-overlay");
const confirmYes = document.getElementById("confirm-yes");
const confirmNo = document.getElementById("confirm-no");
const clockEl = document.getElementById("clock-el");

const savedLeads = JSON.parse(localStorage.getItem("myLeads"));
if (savedLeads) { 
    myLeads = savedLeads; 
    render(myLeads); 
}

function updateClock() {
    clockEl.textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

themeTrigger.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

window.copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        const copyBtns = document.querySelectorAll('.copy-btn');
        copyBtns.forEach(btn => {
            if(btn.getAttribute('onclick').includes(text)) {
                const originalText = btn.textContent;
                btn.textContent = "COPIED!";
                setTimeout(() => btn.textContent = originalText, 1500);
            }
        });
    });
};

function render(leads) {
    let listItems = "";
    leads.forEach((lead, i) => {
        const isImage = lead.startsWith("data:image");
        let content = isImage ? `<img src="${lead}" class="lead-img">` : `<span class="lead-text">${lead}</span>`;
        listItems += `
            <li>
                <div class="list-container">
                    <a target='_blank' href='${lead}' class="content-link">${content}</a>
                    <div class="item-btns">
                        <button class="copy-btn" onclick="copyToClipboard('${lead}')">COPY</button>
                        <button class="delete-item-btn" onclick="deleteItem(${i})">X</button>
                    </div>
                </div>
            </li>`;
    });
    ulEl.innerHTML = listItems;
}

searchEl.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = myLeads.filter(lead => lead.toLowerCase().includes(term));
    render(filtered);
});

window.deleteItem = (index) => {
    myLeads.splice(index, 1);
    saveAndRender();
};

deleteBtn.addEventListener("click", () => modal.style.display = "flex");
confirmNo.addEventListener("click", () => modal.style.display = "none");
confirmYes.addEventListener("click", () => {
    myLeads = [];
    localStorage.clear();
    saveAndRender();
    modal.style.display = "none";
});

inputBtn.addEventListener("click", () => {
    if (inputEl.value) {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        saveAndRender();
    }
});

fileEl.addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = () => { myLeads.push(reader.result); saveAndRender(); };
    if (this.files[0]) reader.readAsDataURL(this.files[0]);
});

function saveAndRender() {
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
}


const fileInput = document.getElementById("file-el");
const uploadWarning = document.getElementById("upload-warning-overlay");
const closeWarningBtn = document.getElementById("close-warning");
const backWarningBtn = document.getElementById("back-warning");

fileInput.addEventListener("click", function(e) {
    if (!uploadWarning.dataset.acknowledged) {
        e.preventDefault();
        uploadWarning.style.display = "flex";
    }
});

closeWarningBtn.addEventListener("click", function() {
    uploadWarning.style.display = "none";
    uploadWarning.dataset.acknowledged = "true";
    fileInput.click();
});

backWarningBtn.addEventListener("click", function() {
    uploadWarning.style.display = "none";
    uploadWarning.dataset.acknowledged = ""; 
});

fileInput.addEventListener("change", function() {
    uploadWarning.dataset.acknowledged = "";
});