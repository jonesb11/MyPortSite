const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C#', 'React',
    'Python', 'Java', 'Git',
    '.NET', 'MySQL', 'Linux',
    'PHP'
];


var tagCloud = TagCloud('.Cloud', myTags, {

    radius: 220,

    maxSpeed: 'fast',

    initSpeed: 'fast',

    direction: 135,

  
    // keep: true

});

