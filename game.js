// 全域狀態
let gameState = {
    currentNode: 'start',
    stats: {
        chenxi: 0,    // 晨希好感度
        yuxuan: 0,    // 宇軒好感度
        wen: 0,       // 新增：溫若雨
        fang: 0,      // 新增：方景行
    }
};

// 抓取 DOM 元素
const textElement = document.getElementById('story-text');
const choicesElement = document.getElementById('choices');
const bgElement = document.getElementById('game-bg');
const bgmPlayer = document.getElementById('bgm-player');
const statChenxi = document.getElementById('stat-chenxi');
const statYuxuan = document.getElementById('stat-yuxuan');
const statWen = document.getElementById('stat-wen');
const statFang = document.getElementById('stat-fang');

// 更新畫面上的數值
function updateUI() {
    statChenxi.innerText = gameState.stats.chenxi;
    statYuxuan.innerText = gameState.stats.yuxuan;
    if(statWen) statWen.innerText = gameState.stats.wen;
    if(statFang) statFang.innerText = gameState.stats.fang;
}

// 開始遊戲函數
function startGame() {
    // 隱藏開始畫面
    document.getElementById('start-screen').style.display = 'none';
    // 顯示遊戲主畫面
    document.getElementById('game-main').style.display = 'flex';
    
    // 開始播放音樂
    if (bgmPlayer && storyData['start'] && storyData['start'].bgm) {
        bgmPlayer.src = 'assets/' + storyData['start'].bgm;
        bgmPlayer.volume = 0.3;
        bgmPlayer.play().catch(e => console.log("音樂播放需要用戶互動"));
    }
    
    // 渲染第一個劇情節點
    renderNode('start');
}

// 音樂開關
function toggleMusic() {
    const btn = document.getElementById('music-btn');
    if (bgmPlayer.paused) {
        bgmPlayer.play().catch(e => {
            alert('無法播放音樂，請確認音檔路徑是否正確');
        });
        btn.textContent = '🔊 音樂';
    } else {
        bgmPlayer.pause();
        btn.textContent = '🔇 音樂';
    }
}

// 渲染劇情
function renderNode(nodeId) {
    const node = storyData[nodeId];
    if (!node) {
        textElement.innerHTML = "錯誤：找不到劇情節點 " + nodeId;
        return;
    }

    // 1. 更新當前節點紀錄
    gameState.currentNode = nodeId;
    
    // 2. 切換背景 (如果有設定)
    let bgImage = null;
    if (typeof sceneAssets !== 'undefined' && sceneAssets[nodeId]) {
        bgImage = sceneAssets[nodeId];
    }
    // 檢查 script 是否有寫 (兼容舊寫法)
    else if (node.bg) {
        bgImage = node.bg;
    }
    
    if (bgImage && bgElement) {
        bgElement.style.backgroundImage = `url('assets/${bgImage}')`;
    }

    // 3. 切換音樂 (如果有設定且與當前不同)
    if (node.bgm) {
        const bgmPath = `assets/${node.bgm}`;
        // 只有當音樂路徑不同時才切換，避免重頭播放
        if (!bgmPlayer.src.includes(node.bgm)) {
            bgmPlayer.src = bgmPath;
            bgmPlayer.volume = 0.3;
            bgmPlayer.play().catch(e => console.log("音樂切換"));
        }
    }

    // 4. 顯示文字 (淡入動畫)
    textElement.classList.remove('fade-in');
    void textElement.offsetWidth;
    textElement.classList.add('fade-in');
    textElement.innerHTML = node.text.replace(/\n/g, '<br>');

    // 5. 生成選項
    choicesElement.innerHTML = '';
    if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.onclick = () => makeChoice(choice);
            choicesElement.appendChild(button);
        });
    } else {
        // 結局按鈕
        const button = document.createElement('button');
        button.innerText = "返回標題";
        button.onclick = () => backToTitle();
        choicesElement.appendChild(button);
    }

    updateUI();
}

// 處理選擇
function makeChoice(choice) {
    // 處理好感度變化
    if (choice.effect) {
        for (let key in choice.effect) {
            if (gameState.stats.hasOwnProperty(key)) {
                gameState.stats[key] += choice.effect[key];
            }
        }
    }
    
    // 跳轉
    renderNode(choice.nextNode);
}

// 返回標題畫面
function backToTitle() {
    document.getElementById('game-main').style.display = 'none';
    document.getElementById('start-screen').style.display = 'flex';
    bgmPlayer.pause();
    bgmPlayer.currentTime = 0;
}

// --- 存檔系統 ---
function saveGame() {
    localStorage.setItem('schoolCrush_save', JSON.stringify(gameState));
    alert('✅ 遊戲進度已保存！');
}

function loadGame() {
    const savedData = localStorage.getItem('schoolCrush_save');
    if (savedData) {
        gameState = JSON.parse(savedData);
        alert('📂 讀取成功！');
        
        // 確保遊戲畫面顯示
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-main').style.display = 'flex';
        
        renderNode(gameState.currentNode);
    } else {
        alert('❌ 沒有找到存檔記錄。');
    }
}

function restartGame() {
    if(confirm("確定要重頭開始嗎？")) {
        gameState.stats = { chenxi: 0, yuxuan: 0, wen: 0, fang: 0 };
        renderNode('start');
    }
}

// 頁面載入時顯示開始畫面
window.onload = () => {
    // 預設顯示開始畫面
    document.getElementById('start-screen').style.display = 'flex';
    document.getElementById('game-main').style.display = 'none';
};
