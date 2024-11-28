let pName = document.getElementById("pName");
let pPhoto = document.getElementById("pPhoto");
let pPosition = document.getElementById("pPosition");
let pNationality = document.getElementById("pNationality");
let pFlag = document.getElementById("pFlag");
let pClub = document.getElementById("pClub");
let pLogo = document.getElementById("pLogo");
let pRating = document.getElementById("pRating");
let pPace = document.getElementById("pPace");
let pShooting = document.getElementById("pShooting");
let pPassing = document.getElementById("pPassing");
let pDribbling = document.getElementById("pDribbling");
let pDefending = document.getElementById("pDefending");
let pPhysical = document.getElementById("pPhysical");

let editName = document.getElementById("editName");
let editPhoto = document.getElementById("editPhoto");
let editPosition = document.getElementById("editPosition");
let editNationality = document.getElementById("editNationality");
let editFlag = document.getElementById("editFlag");
let editClub = document.getElementById("editClub");
let editLogo = document.getElementById("editLogo");
let editRating = document.getElementById("editRating");
let editPace = document.getElementById("editPace");
let editShooting = document.getElementById("editShooting");
let editPassing = document.getElementById("editPassing");
let editDribbling = document.getElementById("editDribbling");
let editDefending = document.getElementById("editDefending");
let editPhysical = document.getElementById("editPhysical");

let add = document.getElementById("add");
let addPlayer = document.getElementById("addPlayer");
let addModal = document.getElementById("addModal");
let editModal = document.getElementById("editModal");


//Array of players 
let players = [];
let counter = 0;
addPlayer.addEventListener('click', function () {
    addModal.classList.remove("hidden");
})

function closeAddModal() {
    addModal.classList.add("hidden");
}
function closeEditModal() {
    editModal.classList.add("hidden");
}
function add_Player(name, photo, pos, nat, flag, club, logo, rat, pace, shoot, pass, dribl, def, phys, state) {
    const player = {
        id: counter++,
        name: name,
        photo: photo,
        pos: pos,
        nat: nat,
        flag: flag,
        club: club,
        logo: logo,
        rat: rat,
        pace: pace,
        shoot: shoot,
        pass: pass,
        dribl: dribl,
        def: def,
        phys: phys,
        is_active: state,
        is_taken: 1,
    };
    players.push(player);
    updateScreen();
}

add.onclick = function () {
    //validation 
    add_Player(pName.value, pPhoto.value, pPosition.value, pNationality.value,
        pFlag.value, pClub.value, pLogo.value, pRating.value, pPace.value,
        pShooting.value, pPassing.value, pDribbling.value, pDefending.value, pPhysical.value);
    closeAddModal();
}


function updateScreen() {
    const LB = document.getElementById("LB");
    const CBL = document.getElementById("CBL");
    const CBR = document.getElementById("CBR");
    const RB = document.getElementById("RB");
    const LM = document.getElementById("LM");
    const CML = document.getElementById("CML");
    const CMR = document.getElementById("CMR");
    const RM = document.getElementById("RM");
    const STL = document.getElementById("STL");
    const STR = document.getElementById("STR");
    const GK = document.getElementById("GK");

    
    LB.innerHTML = "";
    CBL.innerHTML = "";
    CBR.innerHTML = "";
    RB.innerHTML = "";
    LM.innerHTML = "";
    CML.innerHTML = "";
    CMR.innerHTML = "";
    RM.innerHTML = "";
    STL.innerHTML = "";
    STR.innerHTML = "";
    GK.innerHTML = "";

    players.forEach(player => {
        const playerElement = document.createElement("div");
        playerElement.classList.add("h-[70px]", "w-[50px]", "md:w-[120px]", "md:h-[160px]", "lg:h-[222px]", "lg:w-[170px]", "bg-[url('img/badge_gold.png')]", "bg-contain", "bg-center", "bg-no-repeat", "flex", "flex-col");
        playerElement.innerHTML = `
                        <div class="flex items-start justify-center mt-1 text-white">
                            <div class="flex flex-col mt-1 lg:mt-4">
                                <span class="text-[8px] md:text-lg font-bold">${player.rat}</span>
                                <span class="text-[8px] md:text-lg">${player.pos}</span>
                            </div>
                            <img src="${player.photo}" class=" w-[30px] md:w-[70px] lg:w-[100px] h-auto">
                        </div>
                        <h4 class="text-white text-[6px] md:text-[12px] lg:text-[16px] text-center">${player.name}</h4>
                        <div class="stats flex justify-center lg:gap-1 text-[4px] md:text-[9px] lg:text-[12px] font-bold px-1 lg:px-2">
                            <div>
                                <span>PAC</span>
                                <p>${player.pace}</p>
                            </div>
                            <div>
                                <span>SHO</span>
                                <p>${player.shoot}</p>
                            </div>
                            <div>
                                <span>PAS</span>
                                <p>${player.pass}</p>
                            </div>
                            <div>
                                <span>DRI</span>
                                <p>${player.dribl}</p>
                            </div>
                            <div>
                                <span>DEF</span>
                                <p>${player.def}</p>
                            </div>
                            <div>
                                <span>PHY</span>
                                <p>${player.phys}</p>
                            </div>
                        </div>

                        <div class="icons flex justify-evenly">
                            <img src="${player.flag}" class="w-3 h-3 md:w-6 md:h-6 lg:w-8 lg:h-8" alt="flag">
                            <img src="${player.logo}" class="w-3 h-3 md:w-6 md:h-6 lg:w-8 lg:h-8" alt="logo">
                        </div>
                        <div class="flex justify-evenly mt-2">
                            <button class="edit bg-yellow-400 text-white px-2 py-1 text-xs" onclick="editPlayer(${player.id})">Edit</button>
                            <button class="delete bg-red-400 text-white px-2 py-1 text-xs" onclick="deletePlayer(${player.id})">Delete</button>
                        </div>

        `;

        switch (player.pos) {
            case "LB":
                LB.appendChild(playerElement);
                break;
            case "CBL":
                CBL.appendChild(playerElement);
                break;
            case "CBR":
                CBR.appendChild(playerElement);
                break;
            case "RB":
                RB.appendChild(playerElement);
                break;
            case "LM":
                LM.appendChild(playerElement);
                break;
            case "CML":
                CML.appendChild(playerElement);
                break;
            case "CMR":
                CMR.appendChild(playerElement);
                break;
            case "RM":
                RM.appendChild(playerElement);
                break;
            case "STL":
                STL.appendChild(playerElement);
                break;
            case "STR":
                STR.appendChild(playerElement);
                break;
            case "GK":
                GK.appendChild(playerElement);
                break;
            default:
                window.alert("Invalide Position !");
                break;
        }
    });
}
let save = document.getElementById("save");
function editPlayer(id) {
    const index = players.findIndex(p => p.id === id);
    if (index > -1) {
        editName.value = players[index].name;
        editPhoto.value = players[index].photo;
        editPosition.value = players[index].pos;
        editNationality.value = players[index].nat;
        editFlag.value = players[index].flag;
        editClub.value = players[index].club;
        editLogo.value = players[index].logo;
        editRating.value = players[index].rat;
        editPace.value = players[index].pace;
        editShooting.value = players[index].shoot;
        editPassing.value = players[index].pass;
        editDribbling.value = players[index].dribl;
        editDefending.value = players[index].def;
        editPhysical.value = players[index].phys;

        editModal.classList.remove("hidden");

        save.onclick = function () {
            players[index].name = editName.value;
            players[index].photo = editPhoto.value;
            players[index].pos = editPosition.value;
            players[index].nat = editNationality.value;
            players[index].flag = editFlag.value;
            players[index].club = editClub.value;
            players[index].logo = editLogo.value;
            players[index].rat = editRating.value;
            players[index].pace = editPace.value;
            players[index].shoot = editShooting.value;
            players[index].pass = editPassing.value;
            players[index].dribl = editDribbling.value;
            players[index].def = editDefending.value;
            players[index].phys = editPhysical.value;

            updateScreen();
            closeEditModal();
        };

    }
}

function deletePlayer(id) {
    players = players.filter(player => player.id !== id);
    updateScreen();
}