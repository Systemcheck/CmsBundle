var Encore = require('@symfony/webpack-encore');  
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}
    
Encore
    // directory where compiled assets will be stored
    .setOutputPath('./src/Resources/public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/bundles/cms/build/')
    // only needed for CDN's or sub-directory deploy
    .setManifestKeyPrefix('src/Resources/public/build/')
    .enableReactPreset()
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')
    
    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    
    //startup
    .addEntry('cms', './assets/cms.js')
    .addEntry('editor', './assets/editor.js')
    
    .copyFiles({from: './assets/images', to: '../images/[path][name].[ext]',})
    .copyFiles({from: './assets/themes/startup/js', to: '../js/[path][name].[ext]'})
    .copyFiles({from: './assets/themes/startup/vendor', to: '../vendor/[path][name].[ext]'})
    .copyFiles({from: './assets/themes/startup/master', to: '../master/[path][name].[ext]'})
        
                 // if versioning is enabled, add the file hash too
                 //to: 'images/[path][name].[hash:8].[ext]',
        
                 // only copy files matching this pattern
                 //pattern: /\.(png|jpg|jpeg)$/


    
    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()
    
    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    //.enableSingleRuntimeChunk()
    .enableSingleRuntimeChunk()
    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    .autoProvidejQuery()
    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .enableLessLoader()
    .autoProvidejQuery()
;
    
module.exports = Encore.getWebpackConfig();