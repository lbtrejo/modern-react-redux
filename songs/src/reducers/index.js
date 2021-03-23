const songsReducer = () => {
    return [
        { title: 'Holy Diver', duration: '3:57' },
        { title: 'Eruption', duration: '1:37' },
        { title: 'Chop Suey', duration: '4:19' },
        { title: 'Change', duration: '6:24' },
    ];
};

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};
