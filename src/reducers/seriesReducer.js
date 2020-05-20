const series = [
    {id: 1, title: 'Sidekick Squad', author: 'C.B. Lee', seriesStatus: 'Ongoing', myStatus: 'Ongoing', next: 'Not Your Backup', number: 3},
    {id: 2, title: 'Nemesis', author: 'April Daniels', seriesStatus: 'Ongoing', myStatus: 'Caught up', next: 'Untitled', number: 3},
    {id: 3, title: 'Crazy Rich Asians', author: 'Kevin Kwan', seriesStatus: 'Completed', myStatus: 'Completed', next: '', number: 0},
    {id: 4, title: 'The Most Beautiful Moment in Life', author: 'Big Hit Entertainment', seriesStatus: 'Ongoing', myStatus: 'Caught up', next: '', number: 2},
    {id: 5, title: 'Montague Siblings', author: 'Mackenzi Lee', seriesStatus: 'Ongoing', myStatus: 'Caught up', next: "The Nobleman's Guide to Scandal and Shipwreaks", number: 3},
    {id: 6, title: 'Witchlands', author: 'Susan Dennard', seriesStatus: 'Ongoing', myStatus: 'Started', next: 'Windwitch', number: 2},
    {id: 7, title: 'The Magicians', author: 'Lev Grossman', seriesStatus: 'Completed', myStatus: 'DNF', next: '', number: 0},
    {id: 8, title: "Seafarer's Kiss", author: 'Julia Ember', seriesStatus: 'Completed', myStatus: 'Completed', next: '', number: 0},
    {id: 9, title: 'Weather Warden', author: 'Rachel Caine', seriesStatus: 'Ongoing', myStatus: 'Started', next: 'Heat Stroke', number: 2},
    {id: 10, title: 'Renegades', author: 'Marissa Meyer', seriesStatus: 'Completed', myStatus: 'Started', next: 'Supernova', number: 3},
    {id: 11, title: 'Simon Snow', author: 'Rainbow Rowell', seriesStatus: 'Ongoing', myStatus: 'Caught up', next: '', number: 3},
    {id: 12, title: 'Three Dark Crowns', author: 'Kendare Blake', seriesStatus: 'Completed', myStatus: 'DNF', next: '', number: 0},
    {id: 13, title: 'Wayward Children', author: 'Seanan McGuire', seriesStatus: 'Ongoing', myStatus: 'Ongoing', next: 'Come Tumbling Down', number: 5},
    {id: 14, title: 'The Locked Tomb', author: 'Tamsyn Muir', seriesStatus: 'Started', myStatus: 'Caught up', next: 'Harrow the Ninth', number: 2}
];

const seriesReducer = () => ({
    series: series
});
export default seriesReducer;