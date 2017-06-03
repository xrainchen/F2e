
fis.match('*', {
    release: '$0'
});


fis.match('::package', {
    postpackager: fis.plugin('loader', {}),
});


fis.match('/widget/**/*.scss', {
    rExt: '.css',
    optimizer: fis.plugin('clean-css'),
    parser: fis.plugin('node-sass', {
        // options...
    }),
    packTo: '/css/index.css'
})

fis.match('/**/{*,**/*}.js', {
    optimizer: fis.plugin('uglify-js'),
});