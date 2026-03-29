// ==========================================
// RPG NOTEPAD: CORE LOGIC & STATE
// ==========================================

// --- State Management ---
const STORAGE_KEY = 'questscribe_data_v1';

const defaultState = {
    character: {
        name: 'Adventurer',
        avatar: '⚔️',
        level: 1,
        xp: 0,
        class: 'Novice Scribe',
        streak: 0,
        lastLogin: new Date().toDateString(),
        stats: { str: 1, int: 1, agi: 1, vit: 1, luk: 1, wis: 1 },
        lifetime: { xpEarned: 0, questsDone: 0, notesWritten: 0, bestStreak: 0 }
    },
    quests: [], // { id, title, desc, type, diff, subtasks, completed, date }
    notes: [], // { id, title, cat, content, color, date }
    achievements: [] // string IDs of unlocked achievements
};

let state = null;

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        state = JSON.parse(saved);
        // Handle streak logic
        const today = new Date().toDateString();
        if (state.character.lastLogin !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (state.character.lastLogin === yesterday.toDateString()) {
                state.character.streak++;
                if (state.character.streak > state.character.lifetime.bestStreak) {
                    state.character.lifetime.bestStreak = state.character.streak;
                }
            } else {
                state.character.streak = 1; // Reset streak
            }
            state.character.lastLogin = today;
            saveState();
        }
    } else {
        state = JSON.parse(JSON.stringify(defaultState));
        saveState();
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateAllUI();
}

// --- RPG Mechanics Constants ---
const CLASSES = [
    { level: 1, name: 'Novice Scribe' },
    { level: 5, name: 'Apprentice Chronicler' },
    { level: 10, name: 'Journeyman Scholar' },
    { level: 15, name: 'Adept Archivist' },
    { level: 20, name: 'Master Historian' },
    { level: 30, name: 'Legendary Loremaster' },
    { level: 50, name: 'God of Knowledge' }
];

const XP_MAP = {
    'easy': 10,
    'medium': 25,
    'hard': 50,
    'legendary': 100
};

const ACHIEVEMENTS_DB = {
    'first_blood': { title: 'First Blood', desc: 'Complete your first quest', icon: '🩸' },
    'scholar': { title: 'Budding Scholar', desc: 'Write your first note', icon: '📝' },
    'dedicated': { title: 'Dedicated', desc: 'Reach a 3-day streak', icon: '🔥' },
    'level_5': { title: 'Rising Star', desc: 'Reach level 5', icon: '🌟' },
    'master_slayer': { title: 'Dragon Slayer', desc: 'Complete 10 epic quests', icon: '🐉' },
    'librarian': { title: 'Grand Librarian', desc: 'Write 20 notes', icon: '📚' }
};

function getRequiredXp(level) {
    return Math.floor(100 * Math.pow(1.2, level - 1));
}

function getClassForLevel(level) {
    let currentClass = CLASSES[0].name;
    for (const cls of CLASSES) {
        if (level >= cls.level) currentClass = cls.name;
    }
    return currentClass;
}

function addXP(amount, statBoost = null) {
    state.character.xp += amount;
    state.character.lifetime.xpEarned += amount;
    
    // Show XP Toast
    showXpToast(amount);

    if (statBoost) {
        state.character.stats[statBoost]++;
    } else {
        // Randomly boost a stat slightly
        const stats = ['str', 'int', 'agi', 'vit', 'luk', 'wis'];
        const randomStat = stats[Math.floor(Math.random() * stats.length)];
        // Add random fractional stat, integer representation
        state.character.stats[randomStat] += Math.random() > 0.5 ? 1 : 0;
    }

    let leveledUp = false;
    let reqXp = getRequiredXp(state.character.level);
    
    while (state.character.xp >= reqXp) {
        state.character.xp -= reqXp;
        state.character.level++;
        state.character.class = getClassForLevel(state.character.level);
        
        // Massive stat boost on level up
        for(let key in state.character.stats) {
            state.character.stats[key] += Math.floor(Math.random() * 3) + 1;
        }
        
        leveledUp = true;
        reqXp = getRequiredXp(state.character.level);
    }

    saveState();

    if (leveledUp) {
        showLevelUpModal();
        checkAchievements(); // Level achievements
    }
}

function checkAchievements() {
    let unlocked = false;
    
    const check = (id, condition) => {
        if (!state.achievements.includes(id) && condition) {
            state.achievements.push(id);
            showAchievementToast(id);
            unlocked = true;
        }
    };

    check('first_blood', state.character.lifetime.questsDone >= 1);
    check('scholar', state.character.lifetime.notesWritten >= 1);
    check('dedicated', state.character.streak >= 3);
    check('level_5', state.character.level >= 5);
    check('librarian', state.character.lifetime.notesWritten >= 20);
    
    const epicCount = state.quests.filter(q => q.type === 'epic' && q.completed).length;
    check('master_slayer', epicCount >= 10);

    if (unlocked) saveState();
}

// --- UI Updates ---
function updateAllUI() {
    updateSidebar();
    updateDashboard();
    updateCharacterSheet();
    updateTrophySpace();
    
    // Determine active view and render
    const activeBtn = document.querySelector('.nav-btn.active');
    if(activeBtn) {
        const view = activeBtn.dataset.view;
        if(view === 'quests') renderQuests();
        if(view === 'notepad') renderNotes();
    }
}

function updateSidebar() {
    document.getElementById('mini-char-name').textContent = state.character.name;
    document.getElementById('mini-char-level').textContent = `Lvl ${state.character.level}`;
    document.querySelector('.mini-avatar').textContent = state.character.avatar;
}

function updateDashboard() {
    document.getElementById('dash-char-name').textContent = state.character.name;
    document.getElementById('streak-count').textContent = state.character.streak;
    
    const reqXp = getRequiredXp(state.character.level);
    const xpPercent = Math.min(100, (state.character.xp / reqXp) * 100);
    
    document.getElementById('dash-level-num').textContent = state.character.level;
    document.getElementById('dash-level-text').textContent = state.character.level;
    document.getElementById('dash-class-name').textContent = state.character.class;
    
    document.getElementById('dash-xp-fill').style.width = `${xpPercent}%`;
    document.getElementById('dash-xp-current').textContent = state.character.xp;
    document.getElementById('dash-xp-max').textContent = reqXp;

    // Stats
    const activeQuests = state.quests.filter(q => !q.completed).length;
    document.getElementById('stat-quests-num').textContent = activeQuests;
    document.getElementById('stat-completed-num').textContent = state.character.lifetime.questsDone;
    document.getElementById('stat-notes-num').textContent = state.notes.length;
    document.getElementById('stat-trophies-num').textContent = state.achievements.length;

    // Render Recent Activity
    const recentQuests = document.getElementById('recent-quests-list');
    const activeFirst = state.quests.filter(q=>!q.completed).slice(0,3);
    
    if (activeFirst.length > 0) {
        recentQuests.innerHTML = activeFirst.map(q => `
            <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; border-left: 3px solid var(--gold); display: flex; justify-content: space-between;">
                <span>${q.title}</span> <span style="font-size: 0.8em; color: var(--gold)">${XP_MAP[q.diff]} XP</span>
            </div>
        `).join('');
    } else {
        recentQuests.innerHTML = `<div class="empty-state-mini"><p>No active quests. Need adventure!</p></div>`;
    }
    
    // Activity Log - Mocked from notes for now
    const logList = document.getElementById('activity-list');
    const recentNotes = state.notes.slice(-3).reverse();
    if(recentNotes.length > 0) {
        logList.innerHTML = recentNotes.map(n => `
            <div style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.9rem;">
                <span style="color: var(--text-muted)">📝 Penned a note:</span> ${n.title}
            </div>
        `).join('');
    } else {
        logList.innerHTML = `<div class="empty-state-mini"><p>Your grimoire whispers empty tales.</p></div>`;
    }
}

function updateCharacterSheet() {
    document.getElementById('char-name-input').value = state.character.name;
    document.getElementById('char-class').textContent = state.character.class;
    document.getElementById('char-avatar').textContent = state.character.avatar;
    document.getElementById('char-level-num').textContent = state.character.level;
    
    const reqXp = getRequiredXp(state.character.level);
    const xpPercent = Math.min(100, (state.character.xp / reqXp) * 100);
    document.getElementById('char-xp-fill').style.width = `${xpPercent}%`;
    document.getElementById('char-xp-current').textContent = state.character.xp;
    document.getElementById('char-xp-max').textContent = reqXp;

    // Render Stats
    const maxStat = Math.max(...Object.values(state.character.stats), 10); // scale reference
    
    for (let key in state.character.stats) {
        const val = state.character.stats[key];
        const pct = Math.min(100, (val / maxStat) * 100);
        document.getElementById(`stat-val-${key}`).textContent = val;
        // Small timeout for animation
        setTimeout(() => {
            const bar = document.getElementById(`stat-bar-${key}`);
            if(bar) bar.style.width = `${Math.max(5, pct)}%`;
        }, 100);
    }

    // Avatar active state
    document.querySelectorAll('.avatar-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.avatar === state.character.avatar);
    });

    // Lifetime
    document.getElementById('lt-total-xp').textContent = state.character.lifetime.xpEarned;
    document.getElementById('lt-quests-done').textContent = state.character.lifetime.questsDone;
    document.getElementById('lt-notes-written').textContent = state.character.lifetime.notesWritten;
    document.getElementById('lt-best-streak').textContent = state.character.lifetime.bestStreak;
}

function updateTrophySpace() {
    document.getElementById('trophy-count-display').textContent = `${state.achievements.length} / ${Object.keys(ACHIEVEMENTS_DB).length}`;
    
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = Object.keys(ACHIEVEMENTS_DB).map(key => {
        const ach = ACHIEVEMENTS_DB[key];
        const unlocked = state.achievements.includes(key);
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : ''}">
                <div class="ach-icon">${ach.icon}</div>
                <div class="ach-info">
                    <div class="ach-title">${ach.title}</div>
                    <div class="ach-desc">${ach.desc}</div>
                </div>
            </div>
        `;
    }).join('');
}

// --- DOM INIT ---
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    
    // Simulate Initial Loading Screen
    setTimeout(() => {
        document.getElementById('loading-fill').style.width = '100%';
        setTimeout(() => {
            const loader = document.getElementById('loading-screen');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.getElementById('app').classList.remove('hidden');
            }, 1000);
        }, 500);
    }, 1000);

    loadState();

    // Listeners for Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            const viewId = `view-${target.dataset.view}`;
            document.getElementById(viewId).classList.add('active');
            
            if (target.dataset.view === 'quests') renderQuests();
            if (target.dataset.view === 'notepad') renderNotes();
        });
    });

    // Character Edit Listeners
    const nameInput = document.getElementById('char-name-input');
    nameInput.addEventListener('change', (e) => {
        state.character.name = e.target.value.trim() || 'Adventurer';
        saveState();
    });

    document.querySelectorAll('.avatar-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            state.character.avatar = e.currentTarget.dataset.avatar;
            saveState();
        });
    });

    // Setup Modals
    setupQuestLogic();
    setupNoteLogic();

    document.getElementById('levelup-dismiss').addEventListener('click', () => {
        document.getElementById('levelup-modal').classList.remove('active');
    });
});

// --- Modals & Toasts ---
function showAchievementToast(id) {
    const data = ACHIEVEMENTS_DB[id];
    const toast = document.getElementById('achievement-toast');
    document.getElementById('toast-achievement-name').textContent = data.title;
    toast.classList.remove('hidden');
    setTimeout(() => { toast.classList.add('show'); }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 500);
    }, 5000);
}

function showXpToast(amount) {
    const container = document.getElementById('xp-toast-container');
    const toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.innerHTML = `<span style="color:var(--gold)">✨ +${amount} XP</span>`;
    container.appendChild(toast);
    
    setTimeout(() => { toast.remove(); }, 2500);
}

function showLevelUpModal() {
    const modal = document.getElementById('levelup-modal');
    document.getElementById('levelup-level-num').textContent = state.character.level;
    document.getElementById('levelup-class-name').textContent = state.character.class;
    
    const rw = document.getElementById('levelup-rewards');
    rw.innerHTML = `<div style="color:var(--text-main); margin-bottom: 20px;">
        <p>Stats increased drastically!</p>
        <p>Health restored.</p>
    </div>`;

    modal.classList.add('active');
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}


// --- Quest Logic ---
let activeFilter = 'all';

function setupQuestLogic() {
    // Buttons
    document.getElementById('btn-new-quest').addEventListener('click', () => {
        document.getElementById('quest-modal').classList.add('active');
        document.getElementById('quest-title-input').value = '';
        document.getElementById('quest-desc-input').value = '';
        document.getElementById('subtasks-container').innerHTML = '';
    });
    
    document.getElementById('quest-modal-close').addEventListener('click', closeAllModals);
    document.getElementById('quest-modal-cancel').addEventListener('click', closeAllModals);

    document.getElementById('btn-add-subtask').addEventListener('click', () => {
        const cont = document.getElementById('subtasks-container');
        const div = document.createElement('div');
        div.className = 'subtask-input-row';
        div.innerHTML = `
            <input type="text" placeholder="Subtask description..." class="subtask-val" />
            <button class="btn-remove-subtask">&times;</button>
        `;
        div.querySelector('.btn-remove-subtask').addEventListener('click', () => div.remove());
        cont.appendChild(div);
    });

    document.getElementById('quest-modal-save').addEventListener('click', () => {
        const title = document.getElementById('quest-title-input').value.trim();
        if(!title) return alert('Quest needs a name!');
        
        const subtasks = Array.from(document.querySelectorAll('.subtask-val'))
            .map(inp => inp.value.trim()).filter(v => v)
            .map(text => ({ text, done: false }));

        const quest = {
            id: Date.now().toString(),
            title,
            desc: document.getElementById('quest-desc-input').value.trim(),
            type: document.getElementById('quest-type-input').value,
            diff: document.getElementById('quest-diff-input').value,
            subtasks,
            completed: false,
            date: new Date().toISOString()
        };

        state.quests.push(quest);
        saveState();
        closeAllModals();
        renderQuests();
    });

    // Filters
    document.querySelectorAll('.quest-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.quest-filters .filter-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeFilter = e.currentTarget.dataset.filter;
            renderQuests();
        });
    });
}

function renderQuests() {
    const list = document.getElementById('quest-list');
    
    let filtered = state.quests;
    if (activeFilter !== 'all') {
        filtered = state.quests.filter(q => q.type === activeFilter);
    }
    
    // Sort: uncompleted first, then by date desc
    filtered.sort((a,b) => (a.completed === b.completed) ? (b.date.localeCompare(a.date)) : (a.completed ? 1 : -1));

    if (filtered.length === 0) {
        list.innerHTML = `<div class="empty-state">
            <div class="empty-icon">📋</div>
            <h3>No Quests Yet</h3>
            <p>Your quest log is empty for this category.</p>
        </div>`;
        return;
    }

    list.innerHTML = filtered.map(q => {
        const xp = XP_MAP[q.diff];
        const subsHTML = q.subtasks.length > 0 ? `
            <div class="quest-subtasks">
                ${q.subtasks.map((st, i) => `
                    <div class="subtask-item">
                        <input type="checkbox" onchange="toggleSubtask('${q.id}', ${i})" ${st.done ? 'checked' : ''} ${q.completed ? 'disabled': ''}/>
                        <span style="${st.done ? 'text-decoration: line-through; opacity: 0.5' : ''}">${st.text}</span>
                    </div>
                `).join('')}
            </div>
        ` : '';

        return `
            <div class="quest-card ${q.completed ? 'completed' : ''}" style="border-left-color: var(--diff-${q.diff === 'legendary'? 'legend': q.diff === 'medium'? 'md': q.diff})">
                <div class="quest-info">
                    <div class="quest-title-row">
                        <span class="quest-title" style="${q.completed ? 'text-decoration: line-through' : ''}">${q.title}</span>
                        <span class="quest-type-badge">${q.type === 'main'?'⚔️ Main':q.type==='side'?'🛡️ Side':q.type==='epic'?'🐉 Epic':'🌟 Daily'}</span>
                    </div>
                    <p class="quest-desc">${q.desc}</p>
                    <div class="quest-meta">
                        <span class="quest-xp">+${xp} XP</span>
                    </div>
                    ${subsHTML}
                </div>
                <div class="quest-actions">
                    ${!q.completed ? `<button class="btn btn-primary btn-sm" onclick="completeQuest('${q.id}')">Complete</button>` : ''}
                    <button class="btn btn-danger btn-sm" onclick="deleteQuest('${q.id}')">Drop</button>
                </div>
            </div>
        `;
    }).join('');
}

window.toggleSubtask = (questId, subIdx) => {
    const q = state.quests.find(x => x.id === questId);
    if(q) {
        q.subtasks[subIdx].done = !q.subtasks[subIdx].done;
        saveState();
        renderQuests();
    }
}

window.completeQuest = (questId) => {
    const q = state.quests.find(x => x.id === questId);
    if(q) {
        q.completed = true;
        state.character.lifetime.questsDone++;
        
        let statBoost = q.type === 'epic' ? 'str' : q.type === 'main' ? 'vit' : null;
        addXP(XP_MAP[q.diff], statBoost);
        
        checkAchievements();
        saveState();
    }
}

window.deleteQuest = (questId) => {
    if(confirm('Are you sure you want to abandon this quest?')) {
        state.quests = state.quests.filter(q => q.id !== questId);
        saveState();
    }
}


// --- Note Logic ---
let activeNoteFilter = 'all';
let editingNoteId = null;

function setupNoteLogic() {
    document.getElementById('btn-new-note').addEventListener('click', () => {
        editingNoteId = null;
        document.getElementById('note-modal-title').textContent = 'New Note';
        document.getElementById('note-title-input').value = '';
        document.getElementById('note-content-input').value = '';
        document.getElementById('note-modal-delete').classList.add('hidden');
        document.getElementById('note-modal').classList.add('active');
        
        // Reset colors
        document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
        document.querySelector('.color-option').classList.add('active');
    });

    document.getElementById('note-modal-close').addEventListener('click', closeAllModals);
    document.getElementById('note-modal-cancel').addEventListener('click', closeAllModals);

    // Categories
    document.querySelectorAll('.note-categories .cat-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.note-categories .cat-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeNoteFilter = e.currentTarget.dataset.category;
            renderNotes();
        });
    });

    // Search
    document.getElementById('note-search-input').addEventListener('input', () => {
        renderNotes();
    });

    // Colors
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });

    document.getElementById('note-modal-save').addEventListener('click', () => {
        const title = document.getElementById('note-title-input').value.trim();
        const content = document.getElementById('note-content-input').value.trim();
        if(!title) return alert('Magic requires a title.');

        const activeColorBtn = document.querySelector('.color-option.active');
        const color = activeColorBtn ? activeColorBtn.dataset.color : '#a78bfa';
        const cat = document.getElementById('note-category-input').value;

        if (editingNoteId) {
            const n = state.notes.find(x => x.id === editingNoteId);
            if(n) {
                n.title = title;
                n.content = content;
                n.color = color;
                n.cat = cat;
            }
        } else {
            state.notes.push({
                id: Date.now().toString(),
                title, content, cat, color,
                date: new Date().toISOString()
            });
            state.character.lifetime.notesWritten++;
            checkAchievements();
        }

        saveState();
        closeAllModals();
        renderNotes();
    });

    document.getElementById('note-modal-delete').addEventListener('click', () => {
        if(editingNoteId && confirm('Burn this parchment to ash?')) {
            state.notes = state.notes.filter(n => n.id !== editingNoteId);
            saveState();
            closeAllModals();
        }
    });

}

window.openNote = (id) => {
    const n = state.notes.find(x => x.id === id);
    if(n) {
        editingNoteId = id;
        document.getElementById('note-modal-title').textContent = 'Edit Note';
        document.getElementById('note-title-input').value = n.title;
        document.getElementById('note-content-input').value = n.content;
        document.getElementById('note-category-input').value = n.cat;
        
        document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
        const clrBtn = document.querySelector(`.color-option[data-color="${n.color}"]`);
        if(clrBtn) clrBtn.classList.add('active');

        document.getElementById('note-modal-delete').classList.remove('hidden');
        document.getElementById('note-modal').classList.add('active');
    }
}

function renderNotes() {
    const grid = document.getElementById('notes-grid');
    const searchStr = document.getElementById('note-search-input').value.toLowerCase();
    
    let filtered = state.notes;
    
    if (activeNoteFilter !== 'all') {
        filtered = filtered.filter(n => n.cat === activeNoteFilter);
    }
    
    if (searchStr) {
        filtered = filtered.filter(n => n.title.toLowerCase().includes(searchStr) || (n.content && n.content.toLowerCase().includes(searchStr)));
    }
    
    filtered.sort((a,b) => b.date.localeCompare(a.date));

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column: 1/-1">
            <div class="empty-icon">📝</div>
            <h3>No Notes Found</h3>
            <p>Your search revealed no ancient texts.</p>
        </div>`;
        return;
    }

    const catMap = { 'work': '💼 Work', 'personal': '🏠 Personal', 'study': '📖 Study', 'creative': '🎨 Creative', 'health': '💚 Health', 'code': '💻 Code' };

    grid.innerHTML = filtered.map(n => `
        <div class="note-card" style="border-top-color: ${n.color}" onclick="openNote('${n.id}')">
            <div class="note-header">
                <div class="note-title">${n.title}</div>
            </div>
            <div class="note-body">${n.content ? n.content.replace(/</g, "&lt;") : '<i>Empty parchment...</i>'}</div>
            <div class="note-footer">
                <span class="note-cat-badge" style="color: ${n.color}; border: 1px solid ${n.color}40">${catMap[n.cat]}</span>
                <span class="note-date">${new Date(n.date).toLocaleDateString()}</span>
            </div>
        </div>
    `).join('');
}


// --- Particle Canvas ---
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5 - 0.2; // slight upward drift
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = Math.random() > 0.5 ? 'rgba(167, 139, 250,' : 'rgba(251, 191, 36,';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y < 0 || this.x < 0 || this.x > width || this.y > height) {
                this.reset();
                this.y = height; // emerge from bottom mostly
            }
        }
        draw() {
            ctx.fillStyle = `${this.color}${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 70; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let p of particles) {
            p.update();
            p.draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
}
