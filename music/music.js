const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '怀念青春',
        artist: '刘刚',
        url: 'https://raw.githubusercontent.com/athlonreg/BlogImages/master/huainianqingchun.mp3',
        cover: 'https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/blogcover/huainianqingchun.jpg',
      },
      {
        name: '一首关于理想的歌',
        artist: '小闯',
        url: 'https://music.163.com/song/media/outer/url?id=406752046.mp3',
        cover: 'https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/blogcover/yishouguanyulixiangdege.jpg',
      },
      {
        name: '成都',
        artist: '赵雷',
        url: 'https://music.163.com/song/media/outer/url?id=436514312.mp3',
        cover: 'https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/blogcover/chengdu.jpg',
      },
      {
        name: '化身孤岛的鲸',
        artist: '李逸朗',
        url: 'https://music.163.com/song/media/outer/url?id=30987882.mp3',
        cover: 'https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/blogcover/huashengudaodejing.jpg',
      },
      {
        name: '一曲相思',
        artist: '半阳',
        url: 'https://music.163.com/song/media/outer/url?id=1313558186.mp3',
        cover: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=f65ae70fffd3572c72ef948eeb7a0842/77c6a7efce1b9d1601712a87fedeb48f8d5464a6.jpg',
      }
    ]
});
