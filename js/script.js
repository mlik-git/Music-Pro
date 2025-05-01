// 音乐数据
const musicList = [
    // 周杰伦 - 流行
    {
        title: '七里香',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=1',
        audio: 'audio/七里香-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '半岛铁盒',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=2',
        audio: 'audio/半岛铁盒-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '不能说的秘密',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=3',
        audio: 'audio/不能说的秘密-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '反方向的钟',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=4',
        audio: 'audio/反方向的钟-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '枫',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=5',
        audio: 'audio/枫-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '告白气球',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=6',
        audio: 'audio/告白气球-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '简单爱',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=7',
        audio: 'audio/简单爱-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '菊花台',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=8',
        audio: 'audio/菊花台-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '兰亭序',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=9',
        audio: 'audio/兰亭序-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '明明就',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=10',
        audio: 'audio/明明就-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '晴天',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=11',
        audio: 'audio/晴天-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '搁浅',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=12',
        audio: 'audio/搁浅-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '轨迹',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=13',
        audio: 'audio/轨迹-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '花海',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=14',
        audio: 'audio/花海-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '甜甜的',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=15',
        audio: 'audio/甜甜的-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '烟花易冷',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=16',
        audio: 'audio/烟花易冷-周杰伦.mp3',
        category: '流行'
    },
    {
        title: '蒲公英的约定',
        artist: '周杰伦',
        cover: 'https://picsum.photos/300/300?random=17',
        audio: 'audio/蒲公英的约定-周杰伦.mp3',
        category: '流行'
    },
    // 许嵩 - 民谣
    {
        title: '庐州月',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=18',
        audio: 'audio/庐州月-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '断桥残雪',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=19',
        audio: 'audio/断桥残雪-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '多余的解释',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=20',
        audio: 'audio/多余的解释-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '灰色头像',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=21',
        audio: 'audio/灰色头像-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '玫瑰花的葬礼',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=22',
        audio: 'audio/玫瑰花的葬礼-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '你若成风',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=23',
        audio: 'audio/你若成风-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '千百度',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=24',
        audio: 'audio/千百度-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '清明雨上',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=25',
        audio: 'audio/清明雨上-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '如果当时',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=26',
        audio: 'audio/如果当时-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '天龙八部之宿敌',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=27',
        audio: 'audio/天龙八部之宿敌-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '雅俗共赏',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=28',
        audio: 'audio/雅俗共赏-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '燕归巢',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=29',
        audio: 'audio/燕归巢-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '野人',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=30',
        audio: 'audio/野人-许嵩.mp3',
        category: '民谣'
    },
    {
        title: '有何不可',
        artist: '许嵩',
        cover: 'https://picsum.photos/300/300?random=31',
        audio: 'audio/有何不可-许嵩.mp3',
        category: '民谣'
    },
    // 其他流行歌手
    {
        title: '爱情转移',
        artist: '陈奕迅',
        cover: 'https://picsum.photos/300/300?random=32',
        audio: 'audio/爱情转移-陈奕迅.mp3',
        category: '流行'
    },
    {
        title: '凑热闹',
        artist: 'BY2',
        cover: 'https://picsum.photos/300/300?random=33',
        audio: 'audio/凑热闹-BY2.mp3',
        category: '流行'
    },
    {
        title: '恋人心',
        artist: '魏新雨',
        cover: 'https://picsum.photos/300/300?random=34',
        audio: 'audio/恋人心-魏新雨.mp3',
        category: '流行'
    },
    {
        title: '绿光',
        artist: '孙燕姿',
        cover: 'https://picsum.photos/300/300?random=35',
        audio: 'audio/绿光-孙燕姿.mp3',
        category: '流行'
    },
    {
        title: '陪我过个冬',
        artist: '李嘉嘉',
        cover: 'https://picsum.photos/300/300?random=36',
        audio: 'audio/陪我过个冬-李嘉嘉.mp3',
        category: '流行'
    },
    {
        title: '偏爱',
        artist: '张芸京',
        cover: 'https://picsum.photos/300/300?random=37',
        audio: 'audio/偏爱-张芸京.mp3',
        category: '流行'
    },
    {
        title: '说爱你',
        artist: '蔡依林',
        cover: 'https://picsum.photos/300/300?random=38',
        audio: 'audio/说爱你-蔡依林.mp3',
        category: '流行'
    },
    // F.I.R.飞儿乐团 - 摇滚
    {
        title: 'Fly Away',
        artist: 'F.I.R.飞儿乐团',
        cover: 'https://picsum.photos/300/300?random=39',
        audio: 'audio/Fly Away-F.I.R.飞儿乐团.mp3',
        category: '摇滚'
    },
    {
        title: 'Lydia',
        artist: 'F.I.R.飞儿乐团',
        cover: 'https://picsum.photos/300/300?random=40',
        audio: 'audio/Lydia-F.I.R.飞儿乐团.mp3',
        category: '摇滚'
    },
    {
        title: '你的微笑',
        artist: 'F.I.R.飞儿乐团',
        cover: 'https://picsum.photos/300/300?random=41',
        audio: 'audio/你的微笑-F.I.R.飞儿乐团.mp3',
        category: '摇滚'
    },
    {
        title: '千年之恋',
        artist: 'F.I.R.飞儿乐团',
        cover: 'https://picsum.photos/300/300?random=42',
        audio: 'audio/千年之恋-F.I.R.飞儿乐团.mp3',
        category: '摇滚'
    },
    {
        title: '月牙湾',
        artist: 'F.I.R.飞儿乐团',
        cover: 'https://picsum.photos/300/300?random=43',
        audio: 'audio/月牙湾-F.I.R.飞儿乐团.mp3',
        category: '摇滚'
    },
    // 其他摇滚歌手
    {
        title: '平凡之路',
        artist: '朴树',
        cover: 'https://picsum.photos/300/300?random=44',
        audio: 'audio/平凡之路-朴树.mp3',
        category: '摇滚'
    },
    {
        title: '挪威的森林',
        artist: '伍佰',
        cover: 'https://picsum.photos/300/300?random=45',
        audio: 'audio/挪威的森林-伍佰.mp3',
        category: '摇滚'
    }
];

// DOM 元素
const audioPlayer = new Audio();
const playPauseBtn = document.querySelector('.play-pause');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const shuffleBtn = document.querySelector('.shuffle');
const repeatBtn = document.querySelector('.repeat');
const progressBar = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const currentTimeSpan = document.querySelector('.current-time');
const durationSpan = document.querySelector('.duration');
const trackList = document.querySelector('.track-list');
const albumArt = document.querySelector('.album-art img');
const trackName = document.querySelector('.track-name');
const artistName = document.querySelector('.artist-name');
const categoryButtons = document.querySelectorAll('.category-nav button');

// 播放器状态
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffled = false;
let repeatMode = 'none'; // none, one, all

// 初始化播放器
function initPlayer() {
    loadTrack(currentTrackIndex);
    renderPlaylist();
}

// 加载歌曲
function loadTrack(index) {
    const track = musicList[index];
    audioPlayer.src = track.audio;
    albumArt.src = track.cover;
    trackName.textContent = track.title;
    artistName.textContent = track.artist;
    currentTrackIndex = index;
}

// 播放/暂停
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
    } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="ri-pause-fill"></i>';
    }
    isPlaying = !isPlaying;
}

// 更新进度条
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // 更新时间显示
    currentTimeSpan.textContent = formatTime(currentTime);
    durationSpan.textContent = formatTime(duration);
}

// 设置进度条
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
}

// 格式化时间
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// 下一首
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audioPlayer.play();
}

// 上一首
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audioPlayer.play();
}

// 切换随机播放
function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active');
}

// 切换重复模式
function toggleRepeat() {
    const modes = ['none', 'one', 'all'];
    const currentIndex = modes.indexOf(repeatMode);
    repeatMode = modes[(currentIndex + 1) % modes.length];
    
    // 更新图标
    switch(repeatMode) {
        case 'one':
            repeatBtn.innerHTML = '<i class="ri-repeat-one-line"></i>';
            break;
        case 'all':
            repeatBtn.innerHTML = '<i class="ri-repeat-line active"></i>';
            break;
        default:
            repeatBtn.innerHTML = '<i class="ri-repeat-line"></i>';
    }
}

// 渲染播放列表
function renderPlaylist(category = '全部') {
    trackList.innerHTML = '';
    const filteredList = category === '全部' 
        ? musicList 
        : musicList.filter(track => track.category === category);

    filteredList.forEach((track, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="track-item ${index === currentTrackIndex ? 'active' : ''}">
                <img src="${track.cover}" alt="${track.title}">
                <div class="track-info">
                    <h4>${track.title}</h4>
                    <p>${track.artist}</p>
                </div>
            </div>
        `;
        li.addEventListener('click', () => {
            currentTrackIndex = musicList.indexOf(track);
            loadTrack(currentTrackIndex);
            if (!isPlaying) togglePlay();
        });
        trackList.appendChild(li);
    });
}

// 事件监听
playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
shuffleBtn.addEventListener('click', toggleShuffle);
repeatBtn.addEventListener('click', toggleRepeat);
progressContainer.addEventListener('click', setProgress);

audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', () => {
    switch(repeatMode) {
        case 'one':
            audioPlayer.currentTime = 0;
            audioPlayer.play();
            break;
        case 'all':
            nextTrack();
            break;
        default:
            if (currentTrackIndex < musicList.length - 1) {
                nextTrack();
            } else {
                loadTrack(0);
                isPlaying = false;
                playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
            }
    }
});

categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderPlaylist(e.target.textContent);
    });
});

// 添加样式
const style = document.createElement('style');
style.textContent = `
.track-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.track-item:hover {
    background: rgba(255, 255, 255, 0.1);
}

.track-item.active {
    background: rgba(255, 255, 255, 0.2);
}

.track-item img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 15px;
}

.track-item .track-info h4 {
    margin: 0;
    font-size: 1em;
    color: #fff;
}

.track-item .track-info p {
    margin: 5px 0 0;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.7);
}

.buttons button.active {
    color: #4ecdc4;
}
`;
document.head.appendChild(style);

// 初始化播放器
initPlayer();