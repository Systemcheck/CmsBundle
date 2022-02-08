(self["webpackChunk"] = self["webpackChunk"] || []).push([["cms"],{

/***/ "./assets/cms.js":
/*!***********************!*\
  !*** ./assets/cms.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themes_startup_vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes/startup/vendor/bootstrap/css/bootstrap.min.css */ "./assets/themes/startup/vendor/bootstrap/css/bootstrap.min.css");
/* harmony import */ var _themes_startup_vendor_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes/startup/vendor/fontawesome-free/css/all.min.css */ "./assets/themes/startup/vendor/fontawesome-free/css/all.min.css");
/* harmony import */ var _themes_startup_vendor_animate_animate_compat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes/startup/vendor/animate/animate.compat.css */ "./assets/themes/startup/vendor/animate/animate.compat.css");
/* harmony import */ var _themes_startup_vendor_simple_line_icons_css_simple_line_icons_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes/startup/vendor/simple-line-icons/css/simple-line-icons.min.css */ "./assets/themes/startup/vendor/simple-line-icons/css/simple-line-icons.min.css");
/* harmony import */ var _themes_startup_vendor_owl_carousel_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themes/startup/vendor/owl.carousel/assets/owl.carousel.min.css */ "./assets/themes/startup/vendor/owl.carousel/assets/owl.carousel.min.css");
/* harmony import */ var _themes_startup_vendor_owl_carousel_assets_owl_theme_default_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes/startup/vendor/owl.carousel/assets/owl.theme.default.min.css */ "./assets/themes/startup/vendor/owl.carousel/assets/owl.theme.default.min.css");
/* harmony import */ var _themes_startup_vendor_magnific_popup_magnific_popup_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes/startup/vendor/magnific-popup/magnific-popup.min.css */ "./assets/themes/startup/vendor/magnific-popup/magnific-popup.min.css");
/* harmony import */ var _themes_startup_css_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes/startup/css/theme.css */ "./assets/themes/startup/css/theme.css");
/* harmony import */ var _themes_startup_css_theme_elements_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themes/startup/css/theme-elements.css */ "./assets/themes/startup/css/theme-elements.css");
/* harmony import */ var _themes_startup_css_theme_blog_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./themes/startup/css/theme-blog.css */ "./assets/themes/startup/css/theme-blog.css");
/* harmony import */ var _themes_startup_css_theme_shop_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./themes/startup/css/theme-shop.css */ "./assets/themes/startup/css/theme-shop.css");
/* harmony import */ var _themes_startup_css_demos_demo_startup_agency_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./themes/startup/css/demos/demo-startup-agency.css */ "./assets/themes/startup/css/demos/demo-startup-agency.css");
/* harmony import */ var _themes_startup_css_skins_skin_startup_agency_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./themes/startup/css/skins/skin-startup-agency.css */ "./assets/themes/startup/css/skins/skin-startup-agency.css");
/* harmony import */ var _themes_startup_css_custom_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./themes/startup/css/custom.css */ "./assets/themes/startup/css/custom.css");
/* harmony import */ var _themes_startup_master_style_switcher_style_switcher_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./themes/startup/master/style-switcher/style-switcher.css */ "./assets/themes/startup/master/style-switcher/style-switcher.css");
/* harmony import */ var _themes_startup_master_less_skin_startup_agency_less__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./themes/startup/master/less/skin-startup-agency.less */ "./assets/themes/startup/master/less/skin-startup-agency.less");
/* harmony import */ var _themes_startup_master_style_switcher_bootstrap_colorpicker_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./themes/startup/master/style-switcher/bootstrap-colorpicker/css/bootstrap-colorpicker.css */ "./assets/themes/startup/master/style-switcher/bootstrap-colorpicker/css/bootstrap-colorpicker.css");
/* harmony import */ var _themes_startup_vendor_jquery_appear_jquery_appear_min_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./themes/startup/vendor/jquery.appear/jquery.appear.min.js */ "./assets/themes/startup/vendor/jquery.appear/jquery.appear.min.js");
/* harmony import */ var _themes_startup_vendor_jquery_appear_jquery_appear_min_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_jquery_appear_jquery_appear_min_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _themes_startup_vendor_jquery_easing_jquery_easing_min_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./themes/startup/vendor/jquery.easing/jquery.easing.min.js */ "./assets/themes/startup/vendor/jquery.easing/jquery.easing.min.js");
/* harmony import */ var _themes_startup_vendor_jquery_easing_jquery_easing_min_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_jquery_easing_jquery_easing_min_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _themes_startup_vendor_jquery_cookie_jquery_cookie_min_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./themes/startup/vendor/jquery.cookie/jquery.cookie.min.js */ "./assets/themes/startup/vendor/jquery.cookie/jquery.cookie.min.js");
/* harmony import */ var _themes_startup_vendor_jquery_cookie_jquery_cookie_min_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_jquery_cookie_jquery_cookie_min_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _themes_startup_vendor_bootstrap_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./themes/startup/vendor/bootstrap/js/bootstrap.bundle.min.js */ "./assets/themes/startup/vendor/bootstrap/js/bootstrap.bundle.min.js");
/* harmony import */ var _themes_startup_vendor_bootstrap_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_bootstrap_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _themes_startup_vendor_jquery_validation_jquery_validate_min_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./themes/startup/vendor/jquery.validation/jquery.validate.min.js */ "./assets/themes/startup/vendor/jquery.validation/jquery.validate.min.js");
/* harmony import */ var _themes_startup_vendor_jquery_validation_jquery_validate_min_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_jquery_validation_jquery_validate_min_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _themes_startup_vendor_jquery_easy_pie_chart_jquery_easypiechart_min_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./themes/startup/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js */ "./assets/themes/startup/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js");
/* harmony import */ var _themes_startup_vendor_jquery_easy_pie_chart_jquery_easypiechart_min_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_jquery_easy_pie_chart_jquery_easypiechart_min_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _themes_startup_vendor_jquery_gmap_jquery_gmap_min_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./themes/startup/vendor/jquery.gmap/jquery.gmap.min.js */ "./assets/themes/startup/vendor/jquery.gmap/jquery.gmap.min.js");
/* harmony import */ var _themes_startup_vendor_jquery_gmap_jquery_gmap_min_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_jquery_gmap_jquery_gmap_min_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _themes_startup_vendor_lazysizes_lazysizes_min_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./themes/startup/vendor/lazysizes/lazysizes.min.js */ "./assets/themes/startup/vendor/lazysizes/lazysizes.min.js");
/* harmony import */ var _themes_startup_vendor_lazysizes_lazysizes_min_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_lazysizes_lazysizes_min_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _themes_startup_vendor_isotope_jquery_isotope_min_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./themes/startup/vendor/isotope/jquery.isotope.min.js */ "./assets/themes/startup/vendor/isotope/jquery.isotope.min.js");
/* harmony import */ var _themes_startup_vendor_isotope_jquery_isotope_min_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_isotope_jquery_isotope_min_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _themes_startup_vendor_owl_carousel_owl_carousel_min_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./themes/startup/vendor/owl.carousel/owl.carousel.min.js */ "./assets/themes/startup/vendor/owl.carousel/owl.carousel.min.js");
/* harmony import */ var _themes_startup_vendor_owl_carousel_owl_carousel_min_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_owl_carousel_owl_carousel_min_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _themes_startup_vendor_magnific_popup_jquery_magnific_popup_min_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./themes/startup/vendor/magnific-popup/jquery.magnific-popup.min.js */ "./assets/themes/startup/vendor/magnific-popup/jquery.magnific-popup.min.js");
/* harmony import */ var _themes_startup_vendor_magnific_popup_jquery_magnific_popup_min_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_magnific_popup_jquery_magnific_popup_min_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _themes_startup_vendor_vide_jquery_vide_min_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./themes/startup/vendor/vide/jquery.vide.min.js */ "./assets/themes/startup/vendor/vide/jquery.vide.min.js");
/* harmony import */ var _themes_startup_vendor_vide_jquery_vide_min_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_vide_jquery_vide_min_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _themes_startup_vendor_vivus_vivus_min_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./themes/startup/vendor/vivus/vivus.min.js */ "./assets/themes/startup/vendor/vivus/vivus.min.js");
/* harmony import */ var _themes_startup_vendor_vivus_vivus_min_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_vendor_vivus_vivus_min_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _themes_startup_js_theme_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./themes/startup/js/theme.js */ "./assets/themes/startup/js/theme.js");
/* harmony import */ var _themes_startup_js_theme_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_js_theme_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _themes_startup_js_views_view_contact_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./themes/startup/js/views/view.contact.js */ "./assets/themes/startup/js/views/view.contact.js");
/* harmony import */ var _themes_startup_js_views_view_contact_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_js_views_view_contact_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _themes_startup_js_custom_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./themes/startup/js/custom.js */ "./assets/themes/startup/js/custom.js");
/* harmony import */ var _themes_startup_js_custom_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_js_custom_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _themes_startup_js_theme_init_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./themes/startup/js/theme.init.js */ "./assets/themes/startup/js/theme.init.js");
/* harmony import */ var _themes_startup_js_theme_init_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_themes_startup_js_theme_init_js__WEBPACK_IMPORTED_MODULE_33__);
/*const $ = require('jquery');
window.jQuery = $;
window.$ = $;*/
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js"); //import '../fontawesome/css/all.min.css'
//import "../node_modules/bootstrap/dist/css/bootstrap.css"
//vendor css








 //theme




 //Demo

 //Skin

 //Custom

 //StyleSwitcher



 //Vendor JS
//import './themes/startup/vendor/jquery/jquery.min.js'













 //import './themes/startup/vendor/kute/kute.min.js'
// Theme Base, Components and Settings

 // Current Page Vendor and Views -->

 // Demo -->
//import './themes/startup/js/demos/demo-startup-agency.js'
// Theme Custom -->

 // Theme Initialization Files -->


/*import './themes/startup/master/style-switcher/style.switcher.localstorage'
import './themes/startup/master/style-switcher/style.switcher'*/

/***/ }),

/***/ "./assets/themes/startup/js/custom.js":
/*!********************************************!*\
  !*** ./assets/themes/startup/js/custom.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$('#saveskincss').on('click', function () {
  var css = $('style[id^="less:"]').text();
  console.log(css);
});

/***/ }),

/***/ "./assets/themes/startup/js/theme.init.js":
/*!************************************************!*\
  !*** ./assets/themes/startup/js/theme.init.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

// Commom Plugins
(function ($) {
  'use strict'; // Scroll to Top Button.

  if (typeof theme.PluginScrollToTop !== 'undefined') {
    theme.PluginScrollToTop.initialize();
  } // Tooltips


  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {//return new boo//tstrap.Tooltip(tooltipTriggerEl)
  }); // Popovers

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {//return new bootstrap.Popover(popoverTriggerEl)
  }); // Validations

  if ($.isFunction($.validator) && typeof theme.PluginValidation !== 'undefined') {
    theme.PluginValidation.initialize();
  } // Animate


  if ($.isFunction($.fn['themePluginAnimate']) && $('[data-appear-animation]').length) {
    theme.fn.dynIntObsInit('[data-appear-animation], [data-appear-animation-svg]', 'themePluginAnimate', theme.PluginAnimate.defaults);
  } // Animated Letters


  if ($.isFunction($.fn['themePluginAnimatedLetters']) && ($('[data-plugin-animated-letters]').length || $('.animated-letters').length)) {
    theme.fn.intObsInit('[data-plugin-animated-letters]:not(.manual), .animated-letters', 'themePluginAnimatedLetters');
  } // Before / After


  if ($.isFunction($.fn['themePluginBeforeAfter']) && $('[data-plugin-before-after]').length) {
    theme.fn.intObsInit('[data-plugin-before-after]:not(.manual)', 'themePluginBeforeAfter');
  } // Carousel Light


  if ($.isFunction($.fn['themePluginCarouselLight']) && $('.owl-carousel-light').length) {
    theme.fn.intObsInit('.owl-carousel-light', 'themePluginCarouselLight');
  } // Carousel


  if ($.isFunction($.fn['themePluginCarousel']) && $('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').length) {
    theme.fn.intObsInit('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)', 'themePluginCarousel');
  } // Chart.Circular


  if ($.isFunction($.fn['themePluginChartCircular']) && ($('[data-plugin-chart-circular]').length || $('.circular-bar-chart').length)) {
    theme.fn.dynIntObsInit('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)', 'themePluginChartCircular', theme.PluginChartCircular.defaults);
  } // Countdown


  if ($.isFunction($.fn['themePluginCountdown']) && ($('[data-plugin-countdown]').length || $('.countdown').length)) {
    theme.fn.intObsInit('[data-plugin-countdown]:not(.manual), .countdown', 'themePluginCountdown');
  } // Counter


  if ($.isFunction($.fn['themePluginCounter']) && ($('[data-plugin-counter]').length || $('.counters [data-to]').length)) {
    theme.fn.dynIntObsInit('[data-plugin-counter]:not(.manual), .counters [data-to]', 'themePluginCounter', theme.PluginCounter.defaults);
  } // Cursor Effect


  if ($.isFunction($.fn['themePluginCursorEffect']) && $('[data-plugin-cursor-effect]').length) {
    theme.fn.intObsInit('[data-plugin-cursor-effect]:not(.manual)', 'themePluginCursorEffect');
  } // Float Element


  if ($.isFunction($.fn['themePluginFloatElement']) && $('[data-plugin-float-element]').length) {
    theme.fn.intObsInit('[data-plugin-float-element], [data-plugin-float-element-svg]', 'themePluginFloatElement');
  } // GDPR


  if ($.isFunction($.fn['themePluginGDPR']) && $('[data-plugin-gdpr]').length) {
    $(function () {
      $('[data-plugin-gdpr]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginGDPR(opts);
      });
    });
  } // GDPR Wrapper


  if ($.isFunction($.fn['themePluginGDPRWrapper']) && $('[data-plugin-gdpr-wrapper]').length) {
    $(function () {
      $('[data-plugin-gdpr-wrapper]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginGDPRWrapper(opts);
      });
    });
  } // Animated Icon


  if ($.isFunction($.fn['themePluginIcon']) && $('[data-icon]').length) {
    theme.fn.dynIntObsInit('[data-icon]:not(.svg-inline--fa)', 'themePluginIcon', theme.PluginIcon.defaults);
  } // Lightbox


  if ($.isFunction($.fn['themePluginLightbox']) && ($('[data-plugin-lightbox]').length || $('.lightbox').length)) {
    theme.fn.execOnceTroughEvent('[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)', 'mouseover.trigger.lightbox', function () {
      var $this = $(this),
          opts;
      var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
      if (pluginOptions) opts = pluginOptions;
      $this.themePluginLightbox(opts);
    });
  } // Masonry


  if ($.isFunction($.fn['themePluginMasonry']) && $('[data-plugin-masonry]').length) {
    $(function () {
      $('[data-plugin-masonry]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMasonry(opts);
      });
    });
  } // Match Height


  if ($.isFunction($.fn['themePluginMatchHeight']) && $('[data-plugin-match-height]').length) {
    $(function () {
      $('[data-plugin-match-height]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMatchHeight(opts);
      });
    });
  } // Parallax


  if ($.isFunction($.fn['themePluginParallax']) && $('[data-plugin-parallax]').length) {
    theme.fn.intObsInit('[data-plugin-parallax]:not(.manual)', 'themePluginParallax');
  } // Progress Bar


  if ($.isFunction($.fn['themePluginProgressBar']) && ($('[data-plugin-progress-bar]') || $('[data-appear-progress-animation]').length)) {
    theme.fn.dynIntObsInit('[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]', 'themePluginProgressBar', theme.PluginProgressBar.defaults);
  } // Random Images


  if ($.isFunction($.fn['themePluginRandomImages']) && $('[data-plugin-random-images]').length) {
    theme.fn.dynIntObsInit('.plugin-random-images', 'themePluginRandomImages', theme.PluginRandomImages.defaults);
  } // Read More


  if ($.isFunction($.fn['themePluginReadMore']) && $('[data-plugin-readmore]').length) {
    theme.fn.intObsInit('[data-plugin-readmore]:not(.manual)', 'themePluginReadMore');
  } // Revolution Slider


  if ($.isFunction($.fn['themePluginRevolutionSlider']) && ($('[data-plugin-revolution-slider]').length || $('.slider-container .slider').length)) {
    $(function () {
      $('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginRevolutionSlider(opts);
      });
    });
  } // Scroll Spy


  if ($.isFunction($.fn['themePluginScrollSpy']) && $('[data-plugin-scroll-spy]').length) {
    $(function () {
      $('[data-plugin-scroll-spy]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginScrollSpy(opts);
      });
    });
  } // Scrollable


  if ($.isFunction($.fn['nanoScroller']) && $('[data-plugin-scrollable]').length) {
    theme.fn.intObsInit('[data-plugin-scrollable]', 'themePluginScrollable');
  } // Section Scroll


  if ($.isFunction($.fn['themePluginSectionScroll']) && $('[data-plugin-section-scroll]').length) {
    $(function () {
      $('[data-plugin-section-scroll]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSectionScroll(opts);
      });
    });
  } // Sort


  if ($.isFunction($.fn['themePluginSort']) && ($('[data-plugin-sort]').length || $('.sort-source').length)) {
    theme.fn.intObsInit('[data-plugin-sort]:not(.manual), .sort-source:not(.manual)', 'themePluginSort');
  } // Star Rating


  if ($.isFunction($.fn['themePluginStarRating']) && $('[data-plugin-star-rating]').length) {
    theme.fn.intObsInit('[data-plugin-star-rating]:not(.manual)', 'themePluginStarRating');
  } // Sticky


  if ($.isFunction($.fn['themePluginSticky']) && $('[data-plugin-sticky]').length) {
    theme.fn.execOnceTroughWindowEvent(window, 'scroll.trigger.sticky', function () {
      $('[data-plugin-sticky]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSticky(opts);
      });
    });
  } // Toggle


  if ($.isFunction($.fn['themePluginToggle']) && $('[data-plugin-toggle]').length) {
    theme.fn.intObsInit('[data-plugin-toggle]:not(.manual)', 'themePluginToggle');
  } // Tweets


  if ($.isFunction($.fn['themePluginTweets']) && $('[data-plugin-tweets]').length) {
    $(function () {
      $('[data-plugin-tweets]:not(.manual)').each(function () {
        var $this = $(this),
            opts;
        var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginTweets(opts);
      });
    });
  } // Video Background


  if ($.isFunction($.fn['themePluginVideoBackground']) && $('[data-plugin-video-background]').length) {
    theme.fn.intObsInit('[data-plugin-video-background]:not(.manual)', 'themePluginVideoBackground');
  } // -- Commom Partials
  // Sticky Header


  if (typeof theme.StickyHeader !== 'undefined') {
    theme.StickyHeader.initialize();
  } // Nav Menu


  if (typeof theme.Nav !== 'undefined') {
    theme.Nav.initialize();
  } // Search


  if (typeof theme.Search !== 'undefined' && ($('#searchForm').length || $('.header-nav-features-search-reveal').length)) {
    theme.Search.initialize();
  } // Newsletter


  if (typeof theme.Newsletter !== 'undefined' && $('#newsletterForm').length) {
    theme.fn.intObs('#newsletterForm', 'theme.Newsletter.initialize();', {});
  } // Account


  if (typeof theme.Account !== 'undefined' && ($('#headerAccount').length || $('#headerSignUp').length || $('#headerSignIn').length || $('#headerRecover').length || $('#headerRecoverCancel').length)) {
    theme.Account.initialize();
  }
}).apply(this, [jQuery]);

/***/ }),

/***/ "./assets/themes/startup/js/theme.js":
/*!*******************************************!*\
  !*** ./assets/themes/startup/js/theme.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	9.3.0
*/
// Theme
window.theme = {}; // Theme Common Functions

window.theme.fn = {
  getOptions: function getOptions(opts) {
    if (_typeof(opts) == 'object') {
      return opts;
    } else if (typeof opts == 'string') {
      try {
        return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
      } catch (e) {
        return {};
      }
    } else {
      return {};
    }
  },
  execPluginFunction: function execPluginFunction(functionName, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();

    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }

    return context[func].apply(context, args);
  },
  intObs: function intObs(selector, functionName, intObsOptions, alwaysObserve) {
    var $el = document.querySelectorAll(selector);
    var intersectionObserverOptions = {
      rootMargin: '0px 0px 200px 0px'
    };

    if (Object.keys(intObsOptions).length) {
      intersectionObserverOptions = $.extend(intersectionObserverOptions, intObsOptions);
    }

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];

        if (entry.intersectionRatio > 0) {
          if (typeof functionName === 'string') {
            var func = Function('return ' + functionName)();
          } else {
            var callback = functionName;
            callback.call($(entry.target));
          } // Unobserve


          if (!alwaysObserve) {
            observer.unobserve(entry.target);
          }
        }
      }
    }, intersectionObserverOptions);
    $($el).each(function () {
      observer.observe($(this)[0]);
    });
  },
  intObsInit: function intObsInit(selector, functionName) {
    var $el = document.querySelectorAll(selector);
    var intersectionObserverOptions = {
      rootMargin: '200px'
    };
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];

        if (entry.intersectionRatio > 0) {
          var $this = $(entry.target),
              opts;
          var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
          if (pluginOptions) opts = pluginOptions;
          theme.fn.execPluginFunction(functionName, $this, opts); // Unobserve

          observer.unobserve(entry.target);
        }
      }
    }, intersectionObserverOptions);
    $($el).each(function () {
      observer.observe($(this)[0]);
    });
  },
  dynIntObsInit: function dynIntObsInit(selector, functionName, pluginDefaults) {
    var $el = document.querySelectorAll(selector);
    $($el).each(function () {
      var $this = $(this),
          opts;
      var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
      if (pluginOptions) opts = pluginOptions;
      var mergedPluginDefaults = theme.fn.mergeOptions(pluginDefaults, opts);
      var intersectionObserverOptions = {
        rootMargin: theme.fn.getRootMargin(functionName, mergedPluginDefaults),
        threshold: 0
      };

      if (!mergedPluginDefaults.forceInit) {
        var observer = new IntersectionObserver(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];

            if (entry.intersectionRatio > 0) {
              theme.fn.execPluginFunction(functionName, $this, mergedPluginDefaults); // Unobserve

              observer.unobserve(entry.target);
            }
          }
        }, intersectionObserverOptions);
        observer.observe($this[0]);
      } else {
        theme.fn.execPluginFunction(functionName, $this, mergedPluginDefaults);
      }
    });
  },
  getRootMargin: function getRootMargin(plugin, pluginDefaults) {
    switch (plugin) {
      case 'themePluginCounter':
        return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
        break;

      case 'themePluginAnimate':
        return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
        break;

      case 'themePluginIcon':
        return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
        break;

      case 'themePluginRandomImages':
        return pluginDefaults.accY ? '0px 0px ' + pluginDefaults.accY + 'px 0px' : '0px 0px 200px 0px';
        break;

      default:
        return '0px 0px 200px 0px';
        break;
    }
  },
  mergeOptions: function mergeOptions(obj1, obj2) {
    var obj3 = {};

    for (var attrname in obj1) {
      obj3[attrname] = obj1[attrname];
    }

    for (var attrname in obj2) {
      obj3[attrname] = obj2[attrname];
    }

    return obj3;
  },
  execOnceTroughEvent: function execOnceTroughEvent($el, event, callback) {
    var self = this,
        dataName = self.formatDataName(event);
    $($el).on(event, function () {
      if (!$(this).data(dataName)) {
        // Exec Callback Function
        callback.call($(this)); // Add data name 

        $(this).data(dataName, true); // Unbind event

        $(this).off(event);
      }
    });
    return this;
  },
  execOnceTroughWindowEvent: function execOnceTroughWindowEvent($el, event, callback) {
    var self = this,
        dataName = self.formatDataName(event);
    $($el).on(event, function () {
      if (!$(this).data(dataName)) {
        // Exec Callback Function
        callback(); // Add data name 

        $(this).data(dataName, true); // Unbind event

        $(this).off(event);
      }
    });
    return this;
  },
  formatDataName: function formatDataName(name) {
    name = name.replace('.', '');
    return name;
  },
  isElementInView: function isElementInView($el) {
    var rect = $el[0].getBoundingClientRect();
    return rect.top <= window.innerHeight / 3;
  }
};
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

!function () {
  "use strict";

  if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
    get: function get() {
      return this.intersectionRatio > 0;
    }
  });else {
    var t = function (t) {
      for (var e = window.document, o = i(e); o;) {
        o = i(e = o.ownerDocument);
      }

      return e;
    }(),
        e = [],
        o = null,
        n = null;

    s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.USE_MUTATION_OBSERVER = !0, s._setupCrossOriginUpdater = function () {
      return o || (o = function o(t, _o) {
        n = t && _o ? l(t, _o) : {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }, e.forEach(function (t) {
          t._checkForIntersections();
        });
      }), o;
    }, s._resetCrossOriginUpdater = function () {
      o = null, n = null;
    }, s.prototype.observe = function (t) {
      if (!this._observationTargets.some(function (e) {
        return e.element == t;
      })) {
        if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
        this._registerInstance(), this._observationTargets.push({
          element: t,
          entry: null
        }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections();
      }
    }, s.prototype.unobserve = function (t) {
      this._observationTargets = this._observationTargets.filter(function (e) {
        return e.element != t;
      }), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance();
    }, s.prototype.disconnect = function () {
      this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance();
    }, s.prototype.takeRecords = function () {
      var t = this._queuedEntries.slice();

      return this._queuedEntries = [], t;
    }, s.prototype._initThresholds = function (t) {
      var e = t || [0];
      return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, o) {
        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
        return t !== o[e - 1];
      });
    }, s.prototype._parseRootMargin = function (t) {
      var e = (t || "0px").split(/\s+/).map(function (t) {
        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
        return {
          value: parseFloat(e[1]),
          unit: e[2]
        };
      });
      return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e;
    }, s.prototype._monitorIntersections = function (e) {
      var o = e.defaultView;

      if (o && -1 == this._monitoringDocuments.indexOf(e)) {
        var n = this._checkForIntersections,
            r = null,
            s = null;
        this.POLL_INTERVAL ? r = o.setInterval(n, this.POLL_INTERVAL) : (h(o, "resize", n, !0), h(e, "scroll", n, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in o && (s = new o.MutationObserver(n)).observe(e, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        })), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push(function () {
          var t = e.defaultView;
          t && (r && t.clearInterval(r), c(t, "resize", n, !0)), c(e, "scroll", n, !0), s && s.disconnect();
        });
        var u = this.root && (this.root.ownerDocument || this.root) || t;

        if (e != u) {
          var a = i(e);
          a && this._monitorIntersections(a.ownerDocument);
        }
      }
    }, s.prototype._unmonitorIntersections = function (e) {
      var o = this._monitoringDocuments.indexOf(e);

      if (-1 != o) {
        var n = this.root && (this.root.ownerDocument || this.root) || t;

        if (!this._observationTargets.some(function (t) {
          var o = t.element.ownerDocument;
          if (o == e) return !0;

          for (; o && o != n;) {
            var r = i(o);
            if ((o = r && r.ownerDocument) == e) return !0;
          }

          return !1;
        })) {
          var r = this._monitoringUnsubscribes[o];

          if (this._monitoringDocuments.splice(o, 1), this._monitoringUnsubscribes.splice(o, 1), r(), e != n) {
            var s = i(e);
            s && this._unmonitorIntersections(s.ownerDocument);
          }
        }
      }
    }, s.prototype._unmonitorAllIntersections = function () {
      var t = this._monitoringUnsubscribes.slice(0);

      this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;

      for (var e = 0; e < t.length; e++) {
        t[e]();
      }
    }, s.prototype._checkForIntersections = function () {
      if (this.root || !o || n) {
        var t = this._rootIsInDom(),
            e = t ? this._getRootRect() : {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        };

        this._observationTargets.forEach(function (n) {
          var i = n.element,
              s = u(i),
              h = this._rootContainsTarget(i),
              c = n.entry,
              a = t && h && this._computeTargetAndRootIntersection(i, s, e),
              l = null;

          this._rootContainsTarget(i) ? o && !this.root || (l = e) : l = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
          };
          var f = n.entry = new r({
            time: window.performance && performance.now && performance.now(),
            target: i,
            boundingClientRect: s,
            rootBounds: l,
            intersectionRect: a
          });
          c ? t && h ? this._hasCrossedThreshold(c, f) && this._queuedEntries.push(f) : c && c.isIntersecting && this._queuedEntries.push(f) : this._queuedEntries.push(f);
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
      }
    }, s.prototype._computeTargetAndRootIntersection = function (e, i, r) {
      if ("none" != window.getComputedStyle(e).display) {
        for (var s, h, c, a, f, d, g, m, v = i, _ = p(e), b = !1; !b && _;) {
          var w = null,
              y = 1 == _.nodeType ? window.getComputedStyle(_) : {};
          if ("none" == y.display) return null;
          if (_ == this.root || 9 == _.nodeType) {
            if (b = !0, _ == this.root || _ == t) o && !this.root ? !n || 0 == n.width && 0 == n.height ? (_ = null, w = null, v = null) : w = n : w = r;else {
              var I = p(_),
                  E = I && u(I),
                  T = I && this._computeTargetAndRootIntersection(I, E, r);

              E && T ? (_ = I, w = l(E, T)) : (_ = null, v = null);
            }
          } else {
            var R = _.ownerDocument;
            _ != R.body && _ != R.documentElement && "visible" != y.overflow && (w = u(_));
          }
          if (w && (s = w, h = v, c = void 0, a = void 0, f = void 0, d = void 0, g = void 0, m = void 0, c = Math.max(s.top, h.top), a = Math.min(s.bottom, h.bottom), f = Math.max(s.left, h.left), d = Math.min(s.right, h.right), m = a - c, v = (g = d - f) >= 0 && m >= 0 && {
            top: c,
            bottom: a,
            left: f,
            right: d,
            width: g,
            height: m
          } || null), !v) break;
          _ = _ && p(_);
        }

        return v;
      }
    }, s.prototype._getRootRect = function () {
      var e;
      if (this.root && !d(this.root)) e = u(this.root);else {
        var o = d(this.root) ? this.root : t,
            n = o.documentElement,
            i = o.body;
        e = {
          top: 0,
          left: 0,
          right: n.clientWidth || i.clientWidth,
          width: n.clientWidth || i.clientWidth,
          bottom: n.clientHeight || i.clientHeight,
          height: n.clientHeight || i.clientHeight
        };
      }
      return this._expandRectByRootMargin(e);
    }, s.prototype._expandRectByRootMargin = function (t) {
      var e = this._rootMarginValues.map(function (e, o) {
        return "px" == e.unit ? e.value : e.value * (o % 2 ? t.width : t.height) / 100;
      }),
          o = {
        top: t.top - e[0],
        right: t.right + e[1],
        bottom: t.bottom + e[2],
        left: t.left - e[3]
      };

      return o.width = o.right - o.left, o.height = o.bottom - o.top, o;
    }, s.prototype._hasCrossedThreshold = function (t, e) {
      var o = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
          n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
      if (o !== n) for (var i = 0; i < this.thresholds.length; i++) {
        var r = this.thresholds[i];
        if (r == o || r == n || r < o != r < n) return !0;
      }
    }, s.prototype._rootIsInDom = function () {
      return !this.root || f(t, this.root);
    }, s.prototype._rootContainsTarget = function (e) {
      var o = this.root && (this.root.ownerDocument || this.root) || t;
      return f(o, e) && (!this.root || o == e.ownerDocument);
    }, s.prototype._registerInstance = function () {
      e.indexOf(this) < 0 && e.push(this);
    }, s.prototype._unregisterInstance = function () {
      var t = e.indexOf(this);
      -1 != t && e.splice(t, 1);
    }, window.IntersectionObserver = s, window.IntersectionObserverEntry = r;
  }

  function i(t) {
    try {
      return t.defaultView && t.defaultView.frameElement || null;
    } catch (t) {
      return null;
    }
  }

  function r(t) {
    this.time = t.time, this.target = t.target, this.rootBounds = a(t.rootBounds), this.boundingClientRect = a(t.boundingClientRect), this.intersectionRect = a(t.intersectionRect || {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    }), this.isIntersecting = !!t.intersectionRect;
    var e = this.boundingClientRect,
        o = e.width * e.height,
        n = this.intersectionRect,
        i = n.width * n.height;
    this.intersectionRatio = o ? Number((i / o).toFixed(4)) : this.isIntersecting ? 1 : 0;
  }

  function s(t, e) {
    var o,
        n,
        i,
        r = e || {};
    if ("function" != typeof t) throw new Error("callback must be a function");
    if (r.root && 1 != r.root.nodeType && 9 != r.root.nodeType) throw new Error("root must be a Document or Element");
    this._checkForIntersections = (o = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, i = null, function () {
      i || (i = setTimeout(function () {
        o(), i = null;
      }, n));
    }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map(function (t) {
      return t.value + t.unit;
    }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = [];
  }

  function h(t, e, o, n) {
    "function" == typeof t.addEventListener ? t.addEventListener(e, o, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, o);
  }

  function c(t, e, o, n) {
    "function" == typeof t.removeEventListener ? t.removeEventListener(e, o, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, o);
  }

  function u(t) {
    var e;

    try {
      e = t.getBoundingClientRect();
    } catch (t) {}

    return e ? (e.width && e.height || (e = {
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      width: e.right - e.left,
      height: e.bottom - e.top
    }), e) : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }

  function a(t) {
    return !t || "x" in t ? t : {
      top: t.top,
      y: t.top,
      bottom: t.bottom,
      left: t.left,
      x: t.left,
      right: t.right,
      width: t.width,
      height: t.height
    };
  }

  function l(t, e) {
    var o = e.top - t.top,
        n = e.left - t.left;
    return {
      top: o,
      left: n,
      height: e.height,
      width: e.width,
      bottom: o + e.height,
      right: n + e.width
    };
  }

  function f(t, e) {
    for (var o = e; o;) {
      if (o == t) return !0;
      o = p(o);
    }

    return !1;
  }

  function p(e) {
    var o = e.parentNode;
    return 9 == e.nodeType && e != t ? i(e) : (o && o.assignedSlot && (o = o.assignedSlot.parentNode), o && 11 == o.nodeType && o.host ? o.host : o);
  }

  function d(t) {
    return t && 9 === t.nodeType;
  }
}();
/*
Plugin Name: 	BrowserSelector
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	8.0.0
*/

(function ($) {
  $.extend({
    browserSelector: function browserSelector() {
      // jQuery.browser.mobile (http://detectmobilebrowser.com/)
      (function (a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
      })(navigator.userAgent || navigator.vendor || window.opera); // Touch


      var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

      var u = navigator.userAgent,
          ua = u.toLowerCase(),
          is = function is(t) {
        return ua.indexOf(t) > -1;
      },
          g = 'gecko',
          w = 'webkit',
          s = 'safari',
          o = 'opera',
          h = document.documentElement,
          b = [!/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua) ? 'ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1]) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '') : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : is('x11') || is('linux') ? 'linux' : '', 'js'];

      c = b.join(' ');

      if ($.browser.mobile) {
        c += ' mobile';
      }

      if (hasTouch) {
        c += ' touch';
      }

      h.className += ' ' + c; // Edge Detect

      var isEdge = /Edge/.test(navigator.userAgent);

      if (isEdge) {
        $('html').removeClass('chrome').addClass('edge');
      } // IE11 Detect


      var isIE11 = !window.ActiveXObject && "ActiveXObject" in window;

      if (isIE11) {
        $('html').removeClass('gecko').addClass('ie ie11');
        return;
      } // Dark and Boxed Compatibility


      if ($('body').hasClass('dark')) {
        $('html').addClass('dark');
      }

      if ($('body').hasClass('boxed')) {
        $('html').addClass('boxed');
      }
    }
  });
  $.browserSelector();
  /*
  Global Variable For Screen Size
  */

  theme.globalWindowWidth = $(window).width();
  var globalWindowWidth = $(window).width();

  window.onresize = function () {
    theme.globalWindowWidth = $(window).width();
  };
  /*
  Browser Workarounds
  */


  if (/iPad|iPhone|iPod/.test(navigator.platform)) {
    // iPad/Iphone/iPod Hover Workaround
    $(document).ready(function ($) {
      $('.thumb-info').attr('onclick', 'return true');
    });
  }
  /*
  Tabs
  */


  if ($('a[data-bs-toggle="tab"]').length) {
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      var $tabPane = $($(e.target).attr('href')); // Carousel Refresh

      if ($tabPane.length) {
        $tabPane.find('.owl-carousel').trigger('refresh.owl.carousel');
      } // Change Active Class


      $(this).parents('.nav-tabs').find('.active').removeClass('active');
      $(this).addClass('active').parent().addClass('active');
    });

    if (window.location.hash) {
      $(window).on('load', function () {
        if (window.location.hash !== '*' && $(window.location.hash).get(0)) {
          new bootstrap.Tab($('a.nav-link[href="' + window.location.hash + '"]:not([data-hash])')[0]).show();
        }
      });
    }
  }
  /*
  On Load Scroll
  */


  if (!$('html').hasClass('disable-onload-scroll') && window.location.hash && !['#*'].includes(window.location.hash)) {
    window.scrollTo(0, 0);
    $(window).on('load', function () {
      setTimeout(function () {
        var target = window.location.hash,
            offset = $(window).width() < 768 ? 180 : 90;

        if (!$(target).length) {
          return;
        }

        if ($("a[href$='" + window.location.hash + "']").is('[data-hash-offset]')) {
          offset = parseInt($("a[href$='" + window.location.hash + "']").first().attr('data-hash-offset'));
        } else if ($("html").is('[data-hash-offset]')) {
          offset = parseInt($("html").attr('data-hash-offset'));
        }

        if (isNaN(offset)) {
          offset = 0;
        }

        $('body').addClass('scrolling');
        $('html, body').animate({
          scrollTop: $(target).offset().top - offset
        }, 600, 'easeOutQuad', function () {
          $('body').removeClass('scrolling');
        });
      }, 1);
    });
  }
  /*
  * Text Rotator
  */


  $.fn.extend({
    textRotator: function textRotator(options) {
      var defaults = {
        fadeSpeed: 500,
        pauseSpeed: 100,
        child: null
      };
      var options = $.extend(defaults, options);
      return this.each(function () {
        var o = options;
        var obj = $(this);
        var items = $(obj.children(), obj);
        items.each(function () {
          $(this).hide();
        });

        if (!o.child) {
          var next = $(obj).children(':first');
        } else {
          var next = o.child;
        }

        $(next).fadeIn(o.fadeSpeed, function () {
          $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
            var next = $(this).next();

            if (next.length == 0) {
              next = $(obj).children(':first');
            }

            $(obj).textRotator({
              child: next,
              fadeSpeed: o.fadeSpeed,
              pauseSpeed: o.pauseSpeed
            });
          });
        });
      });
    }
  });
  /*
  * Notice Top bar
  */

  var $noticeTopBar = {
    $wrapper: $('.notice-top-bar'),
    $closeBtn: $('.notice-top-bar-close'),
    $header: $('#header'),
    $body: $('.body'),
    init: function init() {
      var self = this;

      if (!$.cookie('portoNoticeTopBarClose')) {
        self.build().events();
      } else {
        self.$wrapper.parent().prepend('<!-- Notice Top Bar removed by cookie -->');
        self.$wrapper.remove();
      }

      return this;
    },
    build: function build() {
      var self = this;
      $(window).on('load', function () {
        setTimeout(function () {
          self.$body.css({
            'margin-top': self.$wrapper.outerHeight(),
            'transition': 'ease margin 300ms'
          });
          $('#noticeTopBarContent').textRotator({
            fadeSpeed: 500,
            pauseSpeed: 5000
          });

          if (['absolute', 'fixed'].includes(self.$header.css('position'))) {
            self.$header.css({
              'top': self.$wrapper.outerHeight(),
              'transition': 'ease top 300ms'
            });
          }

          $(window).trigger('notice.top.bar.opened');
        }, 1000);
      });
      return this;
    },
    events: function events() {
      var self = this;
      self.$closeBtn.on('click', function (e) {
        e.preventDefault();
        self.$body.animate({
          'margin-top': 0
        }, 300, function () {
          self.$wrapper.remove();
          self.saveCookie();
        });

        if (['absolute', 'fixed'].includes(self.$header.css('position'))) {
          self.$header.animate({
            top: 0
          }, 300);
        } // When header has shrink effect


        if (self.$header.hasClass('header-effect-shrink')) {
          self.$header.find('.header-body').animate({
            top: 0
          }, 300);
        }

        $(window).trigger('notice.top.bar.closed');
      });
      return this;
    },
    checkCookie: function checkCookie() {
      var self = this;

      if ($.cookie('portoNoticeTopBarClose')) {
        return true;
      } else {
        return false;
      }

      return this;
    },
    saveCookie: function saveCookie() {
      var self = this;
      $.cookie('portoNoticeTopBarClose', true);
      return this;
    }
  };

  if ($('.notice-top-bar').length) {
    $noticeTopBar.init();
  }
  /*
  * Image Hotspots
  */


  if ($('.image-hotspot').length) {
    $('.image-hotspot').append('<span class="ring"></span>').append('<span class="circle"></span>');
  }
  /*
  * Page Transition
  */


  if ($('body[data-plugin-page-transition]').length) {
    var link_click = false;
    $(document).on('click', 'a', function (e) {
      link_click = $(this);
    });
    $(window).on("beforeunload", function (e) {
      if (_typeof(link_click) === 'object') {
        var href = link_click.attr('href');

        if (href.indexOf('mailto:') != 0 && href.indexOf('tel:') != 0 && !link_click.data('rm-from-transition')) {
          $('body').addClass('page-transition-active');
        }
      }
    });
    $(window).on("pageshow", function (e) {
      if (e.persisted) {
        if ($('html').hasClass('safari')) {
          window.location.reload();
        }

        $('body').removeClass('page-transition-active');
      }
    });
  }
  /*
  * Thumb Info Floating Caption
  */


  if ($('.thumb-info-floating-caption').length) {
    $('.thumb-info-floating-caption').on('mouseenter', function () {
      if (!$('.thumb-info-floating-caption-title').length) {
        $('.body').append('<div class="thumb-info-floating-caption-title">' + $(this).data('title') + '</div>');

        if ($(this).data('type')) {
          $('.thumb-info-floating-caption-title').append('<div class="thumb-info-floating-caption-type">' + $(this).data('type') + '</div>').css({
            'padding-bottom': 22
          });
        }

        if ($(this).hasClass('thumb-info-floating-caption-clean')) {
          $('.thumb-info-floating-caption-title').addClass('bg-transparent');
        }
      }
    }).on('mouseout', function () {
      $('.thumb-info-floating-caption-title').remove();
    });
    $(document).on('mousemove', function (e) {
      $('.thumb-info-floating-caption-title').css({
        position: 'fixed',
        left: e.clientX - 20,
        top: e.clientY + 20
      });
    });
  }
  /*
  * Toggle Text Click
  */


  $('[data-toggle-text-click]').on('click', function () {
    $(this).text(function (i, text) {
      return text === $(this).attr('data-toggle-text-click') ? $(this).attr('data-toggle-text-click-alt') : $(this).attr('data-toggle-text-click');
    });
  });
  /*
  * Shape Divider Aspect Ratio
  */

  if ($('.shape-divider').length) {
    aspectRatioSVG();
    $(window).on('resize', function () {
      aspectRatioSVG();
    });
  }
  /*
  * Shape Divider Animated
  */


  if ($('.shape-divider-horizontal-animation').length) {
    theme.fn.intObs('.shape-divider-horizontal-animation', function () {
      for (var i = 0; i <= 1; i++) {
        var svgClone = $(this).find('svg:nth-child(1)').clone();
        $(this).append(svgClone);
      }

      $(this).addClass('start');
    }, {});
  }
  /*
  * Toggle Class
  */


  $('[data-porto-toggle-class]').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass($(this).data('porto-toggle-class'));
  });
  /*
  * Dynamic Height
  */

  var $window = $(window);
  $window.on('resize dynamic.height.resize', function () {
    $('[data-dynamic-height]').each(function () {
      var $this = $(this),
          values = JSON.parse($this.data('dynamic-height').replace(/'/g, '"').replace(';', '')); // XS

      if ($window.width() < 576) {
        $this.height(values[4]);
      } // SM


      if ($window.width() > 575 && $window.width() < 768) {
        $this.height(values[3]);
      } // MD


      if ($window.width() > 767 && $window.width() < 992) {
        $this.height(values[2]);
      } // LG


      if ($window.width() > 991 && $window.width() < 1200) {
        $this.height(values[1]);
      } // XS


      if ($window.width() > 1199) {
        $this.height(values[0]);
      }
    });
  }); // Mobile First Load

  if ($window.width() < 992) {
    $window.trigger('dynamic.height.resize');
  }
  /* Video - Trigger Play */


  if ($('[data-trigger-play-video]').length) {
    theme.fn.execOnceTroughEvent('[data-trigger-play-video]', 'mouseover.trigger.play.video', function () {
      var $video = $($(this).data('trigger-play-video'));
      $(this).on('click', function (e) {
        e.preventDefault();

        if ($(this).data('trigger-play-video-remove') == 'yes') {
          $(this).animate({
            opacity: 0
          }, 300, function () {
            $video[0].play();
            $(this).remove();
          });
        } else {
          setTimeout(function () {
            $video[0].play();
          }, 300);
        }
      });
    });
  }
  /* Video - Custom Auto Play */


  if ($('video[data-auto-play]').length) {
    $(window).on('load', function () {
      $('video[data-auto-play]').each(function () {
        var $video = $(this);
        setTimeout(function () {
          if ($('#' + $video.attr('id')).length) {
            if ($('[data-trigger-play-video="#' + $video.attr('id') + '"]').data('trigger-play-video-remove') == 'yes') {
              $('[data-trigger-play-video="#' + $video.attr('id') + '"]').animate({
                opacity: 0
              }, 300, function () {
                $video[0].play();
                $('[data-trigger-play-video="#' + $video.attr('id') + '"]').remove();
              });
            } else {
              setTimeout(function () {
                $video[0].play();
              }, 300);
            }
          }
        }, 100);
      });
    });
  }
  /*
  * Remove min height after the load of page
  */


  if ($('[data-remove-min-height]').length) {
    $(window).on('load', function () {
      $('[data-remove-min-height]').each(function () {
        $(this).css({
          'min-height': 0
        });
      });
    });
  }
  /*
  * Style Switcher Open Loader Button
  */


  if ($('.style-switcher-open-loader').length) {
    $('.style-switcher-open-loader').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      console.log('loader-clicked'); // Add Spinner to icon

      $this.addClass('style-switcher-open-loader-loading');
      var basePath = $(this).data('base-path'),
          skinSrc = $(this).data('skin-src');
      var script1 = document.createElement("script");
      script1.src = basePath + "../bundles/cms/master/style-switcher/style.switcher.localstorage.js";
      var script2 = document.createElement("script");
      script2.src = basePath + "../bundles/cms/master/style-switcher/style.switcher.js";
      script2.id = "styleSwitcherScript";
      script2.setAttribute('data-base-path', basePath);
      script2.setAttribute('data-skin-src', '../bundles/cms/' + skinSrc);

      script2.onload = function () {
        setTimeout(function () {
          // Trigger a click to open the style switcher sidebar
          function checkIfReady() {
            if (!$('.style-switcher-open').length) {
              window.setTimeout(checkIfReady, 100);
            } else {
              $('.style-switcher-open').trigger('click');
            }
          }

          checkIfReady();
        }, 500);
      };

      document.body.appendChild(script1);
      document.body.appendChild(script2);
    });
  } else {
    $('.style-switcher-open-loader').length;
  }
})(jQuery);
/*
* Scroll and Focus
*/


function scrollAndFocus($this, scrollTarget, focusTarget, scrollOffset, scrollAgain) {
  (function ($) {
    $('body').addClass('scrolling'); // if it's inside a header menu

    if ($($this).closest('#mainNav').length) {
      $($this).parents('.collapse.show').collapse('hide');
    }

    $('html, body').animate({
      scrollTop: $(scrollTarget).offset().top - (scrollOffset ? scrollOffset : 0)
    }, 300, function () {
      $('body').removeClass('scrolling');
      setTimeout(function () {
        $(focusTarget).focus();
      }, 500);

      if (scrollAgain) {
        $('html, body').animate({
          scrollTop: $(scrollTarget).offset().top - (scrollOffset ? scrollOffset : 0)
        });
      }
    });
  })(jQuery);
}
/*
* Shape Divider - SVG Aspect Ratio
*/


function aspectRatioSVG() {
  if ($(window).width() < 1950) {
    $('.shape-divider svg[preserveAspectRatio]').each(function () {
      if (!$(this).parent().hasClass('shape-divider-horizontal-animation')) {
        $(this).attr('preserveAspectRatio', 'xMinYMin');
      } else {
        $(this).attr('preserveAspectRatio', 'none');
      }
    });
  } else {
    $('.shape-divider svg[preserveAspectRatio]').each(function () {
      $(this).attr('preserveAspectRatio', 'none');
    });
  }
}
/*
* Lazy Load Background Images (with lazySizes plugin)
*/


document.addEventListener('lazybeforeunveil', function (e) {
  var bg = e.target.getAttribute('data-bg-src');

  if (bg) {
    e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});

(function (factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var CountTo = function CountTo(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0,
    // the number the element should start at
    to: 0,
    // the number the element should end at
    speed: 1000,
    // how long it should take to count between the target numbers
    refreshInterval: 100,
    // how often the element should be updated
    decimals: 0,
    // the number of decimal places to show
    formatter: formatter,
    // handler for formatting the value before rendering
    onUpdate: null,
    // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating

  };

  CountTo.prototype.init = function () {
    this.value = this.options.from;
    this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from: this.$element.data('from'),
      to: this.$element.data('to'),
      speed: this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals: this.$element.data('decimals')
    };
    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof options[key] === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;
    this.render();

    if (typeof this.options.onUpdate == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof this.options.onComplete == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('countTo');
      var init = !data || _typeof(option) === 'object';
      var options = _typeof(option) === 'object' ? option : {};
      var method = typeof option === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
});

(function ($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *       the user visible viewport of a web browser.
   *       only accounts for vertical position, not horizontal.
   */
  $.fn.visible = function (partial, hidden, direction, container) {
    if (this.length < 1) return;
    var $t = this.length > 1 ? this.eq(0) : this,
        isContained = typeof container !== 'undefined' && container !== null,
        $w = isContained ? $(container) : $(window),
        wPosition = isContained ? $w.position() : 0,
        t = $t.get(0),
        vpWidth = $w.outerWidth(),
        vpHeight = $w.outerHeight(),
        direction = direction ? direction : 'both',
        clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

    if (typeof t.getBoundingClientRect === 'function') {
      // Use this native browser method, if available.
      var rec = t.getBoundingClientRect(),
          tViz = isContained ? rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top : rec.top >= 0 && rec.top < vpHeight,
          bViz = isContained ? rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top : rec.bottom > 0 && rec.bottom <= vpHeight,
          lViz = isContained ? rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left : rec.left >= 0 && rec.left < vpWidth,
          rViz = isContained ? rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left : rec.right > 0 && rec.right <= vpWidth,
          vVisible = partial ? tViz || bViz : tViz && bViz,
          hVisible = partial ? lViz || rViz : lViz && rViz;
      if (direction === 'both') return clientSize && vVisible && hVisible;else if (direction === 'vertical') return clientSize && vVisible;else if (direction === 'horizontal') return clientSize && hVisible;
    } else {
      var viewTop = isContained ? 0 : wPosition,
          viewBottom = viewTop + vpHeight,
          viewLeft = $w.scrollLeft(),
          viewRight = viewLeft + vpWidth,
          position = $t.position(),
          _top = position.top,
          _bottom = _top + $t.height(),
          _left = position.left,
          _right = _left + $t.width(),
          compareTop = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom,
          compareLeft = partial === true ? _right : _left,
          compareRight = partial === true ? _left : _right;

      if (direction === 'both') return !!clientSize && compareBottom <= viewBottom && compareTop >= viewTop && compareRight <= viewRight && compareLeft >= viewLeft;else if (direction === 'vertical') return !!clientSize && compareBottom <= viewBottom && compareTop >= viewTop;else if (direction === 'horizontal') return !!clientSize && compareRight <= viewRight && compareLeft >= viewLeft;
    }
  };
})(jQuery);
/**
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/


;

(function (factory) {
  // eslint-disable-line no-extra-semi
  'use strict';

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  /*
  *  internal
  */
  var _previousResizeWidth = -1,
      _updateTimeout = -1;
  /*
  *  _parse
  *  value parse utility function
  */


  var _parse = function _parse(value) {
    // parse value and convert NaN to 0
    return parseFloat(value) || 0;
  };
  /*
  *  _rows
  *  utility function returns array of jQuery selections representing each row
  *  (as displayed after float wrapping applied by browser)
  */


  var _rows = function _rows(elements) {
    var tolerance = 1,
        $elements = $(elements),
        lastTop = null,
        rows = []; // group elements by their top position

    $elements.each(function () {
      var $that = $(this),
          top = $that.offset().top - _parse($that.css('margin-top')),
          lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

      if (lastRow === null) {
        // first item on the row, so just push it
        rows.push($that);
      } else {
        // if the row top is the same, add to the row group
        if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
          rows[rows.length - 1] = lastRow.add($that);
        } else {
          // otherwise start a new row group
          rows.push($that);
        }
      } // keep track of the last row top


      lastTop = top;
    });
    return rows;
  };
  /*
  *  _parseOptions
  *  handle plugin options
  */


  var _parseOptions = function _parseOptions(options) {
    var opts = {
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    };

    if (_typeof(options) === 'object') {
      return $.extend(opts, options);
    }

    if (typeof options === 'boolean') {
      opts.byRow = options;
    } else if (options === 'remove') {
      opts.remove = true;
    }

    return opts;
  };
  /*
  *  matchHeight
  *  plugin definition
  */


  var matchHeight = $.fn.matchHeight = function (options) {
    var opts = _parseOptions(options); // handle remove


    if (opts.remove) {
      var that = this; // remove fixed height from all selected elements

      this.css(opts.property, ''); // remove selected elements from all groups

      $.each(matchHeight._groups, function (key, group) {
        group.elements = group.elements.not(that);
      }); // TODO: cleanup empty groups

      return this;
    }

    if (this.length <= 1 && !opts.target) {
      return this;
    } // keep track of this group so we can re-apply later on load and resize events


    matchHeight._groups.push({
      elements: this,
      options: opts
    }); // match each element's height to the tallest element in the selection


    matchHeight._apply(this, opts);

    return this;
  };
  /*
  *  plugin global options
  */


  matchHeight.version = '0.7.2';
  matchHeight._groups = [];
  matchHeight._throttle = 80;
  matchHeight._maintainScroll = false;
  matchHeight._beforeUpdate = null;
  matchHeight._afterUpdate = null;
  matchHeight._rows = _rows;
  matchHeight._parse = _parse;
  matchHeight._parseOptions = _parseOptions;
  /*
  *  matchHeight._apply
  *  apply matchHeight to given elements
  */

  matchHeight._apply = function (elements, options) {
    var opts = _parseOptions(options),
        $elements = $(elements),
        rows = [$elements]; // take note of scroll position


    var scrollTop = $(window).scrollTop(),
        htmlHeight = $('html').outerHeight(true); // get hidden parents

    var $hiddenParents = $elements.parents().filter(':hidden'); // cache the original inline style

    $hiddenParents.each(function () {
      var $that = $(this);
      $that.data('style-cache', $that.attr('style'));
    }); // temporarily must force hidden parents visible

    $hiddenParents.css('display', 'block'); // get rows if using byRow, otherwise assume one row

    if (opts.byRow && !opts.target) {
      // must first force an arbitrary equal height so floating elements break evenly
      $elements.each(function () {
        var $that = $(this),
            display = $that.css('display'); // temporarily force a usable display value

        if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
          display = 'block';
        } // cache the original inline style


        $that.data('style-cache', $that.attr('style'));
        $that.css({
          'display': display,
          'padding-top': '0',
          'padding-bottom': '0',
          'margin-top': '0',
          'margin-bottom': '0',
          'border-top-width': '0',
          'border-bottom-width': '0',
          'height': '100px',
          'overflow': 'hidden'
        });
      }); // get the array of rows (based on element top position)

      rows = _rows($elements); // revert original inline styles

      $elements.each(function () {
        var $that = $(this);
        $that.attr('style', $that.data('style-cache') || '');
      });
    }

    $.each(rows, function (key, row) {
      var $row = $(row),
          targetHeight = 0;

      if (!opts.target) {
        // skip apply to rows with only one item
        if (opts.byRow && $row.length <= 1) {
          $row.css(opts.property, '');
          return;
        } // iterate the row and find the max height


        $row.each(function () {
          var $that = $(this),
              style = $that.attr('style'),
              display = $that.css('display'); // temporarily force a usable display value

          if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
            display = 'block';
          } // ensure we get the correct actual height (and not a previously set height value)


          var css = {
            'display': display
          };
          css[opts.property] = '';
          $that.css(css); // find the max height (including padding, but not margin)

          if ($that.outerHeight(false) > targetHeight) {
            targetHeight = $that.outerHeight(false);
          } // revert styles


          if (style) {
            $that.attr('style', style);
          } else {
            $that.css('display', '');
          }
        });
      } else {
        // if target set, use the height of the target element
        targetHeight = opts.target.outerHeight(false);
      } // iterate the row and apply the height to all elements


      $row.each(function () {
        var $that = $(this),
            verticalPadding = 0; // don't apply to a target

        if (opts.target && $that.is(opts.target)) {
          return;
        } // handle padding and border correctly (required when not using border-box)


        if ($that.css('box-sizing') !== 'border-box') {
          verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
          verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
        } // set the height (accounting for padding and border)


        $that.css(opts.property, targetHeight - verticalPadding + 'px');
      });
    }); // revert hidden parents

    $hiddenParents.each(function () {
      var $that = $(this);
      $that.attr('style', $that.data('style-cache') || null);
    }); // restore scroll position if enabled

    if (matchHeight._maintainScroll) {
      $(window).scrollTop(scrollTop / htmlHeight * $('html').outerHeight(true));
    }

    return this;
  };
  /*
  *  matchHeight._applyDataApi
  *  applies matchHeight to all elements with a data-match-height attribute
  */


  matchHeight._applyDataApi = function () {
    var groups = {}; // generate groups by their groupId set by elements using data-match-height

    $('[data-match-height], [data-mh]').each(function () {
      var $this = $(this),
          groupId = $this.attr('data-mh') || $this.attr('data-match-height');

      if (groupId in groups) {
        groups[groupId] = groups[groupId].add($this);
      } else {
        groups[groupId] = $this;
      }
    }); // apply matchHeight to each group

    $.each(groups, function () {
      this.matchHeight(true);
    });
  };
  /*
  *  matchHeight._update
  *  updates matchHeight on all current groups with their correct options
  */


  var _update = function _update(event) {
    if (matchHeight._beforeUpdate) {
      matchHeight._beforeUpdate(event, matchHeight._groups);
    }

    $.each(matchHeight._groups, function () {
      matchHeight._apply(this.elements, this.options);
    });

    if (matchHeight._afterUpdate) {
      matchHeight._afterUpdate(event, matchHeight._groups);
    }
  };

  matchHeight._update = function (throttle, event) {
    // prevent update if fired from a resize event
    // where the viewport width hasn't actually changed
    // fixes an event looping bug in IE8
    if (event && event.type === 'resize') {
      var windowWidth = $(window).width();

      if (windowWidth === _previousResizeWidth) {
        return;
      }

      _previousResizeWidth = windowWidth;
    } // throttle updates


    if (!throttle) {
      _update(event);
    } else if (_updateTimeout === -1) {
      _updateTimeout = setTimeout(function () {
        _update(event);

        _updateTimeout = -1;
      }, matchHeight._throttle);
    }
  };
  /*
  *  bind events
  */
  // apply on DOM ready event


  $(matchHeight._applyDataApi); // use on or bind where supported

  var on = $.fn.on ? 'on' : 'bind'; // update heights on load and resize events

  $(window)[on]('load', function (event) {
    matchHeight._update(false, event);
  }); // throttled update heights on resize events

  $(window)[on]('resize orientationchange', function (event) {
    matchHeight._update(true, event);
  });
});
/*! waitForImages jQuery Plugin - v2.4.0 - 2018-02-13
* https://github.com/alexanderdickson/waitForImages
* Copyright (c) 2018 Alex Dickson; Licensed MIT */


;

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // Namespace all events.
  var eventNamespace = 'waitForImages'; // Is srcset supported by this browser?

  var hasSrcset = function (img) {
    return img.srcset && img.sizes;
  }(new Image()); // CSS properties which contain references to images.


  $.waitForImages = {
    hasImageProperties: ['backgroundImage', 'listStyleImage', 'borderImage', 'borderCornerImage', 'cursor'],
    hasImageAttributes: ['srcset']
  }; // Custom selector to find all `img` elements with a valid `src` attribute.

  $.expr.pseudos['has-src'] = function (obj) {
    // Ensure we are dealing with an `img` element with a valid
    // `src` attribute.
    return $(obj).is('img[src][src!=""]');
  }; // Custom selector to find images which are not already cached by the
  // browser.


  $.expr.pseudos.uncached = function (obj) {
    // Ensure we are dealing with an `img` element with a valid
    // `src` attribute.
    if (!$(obj).is(':has-src')) {
      return false;
    }

    return !obj.complete;
  };

  $.fn.waitForImages = function () {
    var allImgsLength = 0;
    var allImgsLoaded = 0;
    var deferred = $.Deferred();
    var originalCollection = this;
    var allImgs = []; // CSS properties which may contain an image.

    var hasImgProperties = $.waitForImages.hasImageProperties || []; // Element attributes which may contain an image.

    var hasImageAttributes = $.waitForImages.hasImageAttributes || []; // To match `url()` references.
    // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri

    var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
    var finishedCallback;
    var eachCallback;
    var waitForAll; // Handle options object (if passed).

    if ($.isPlainObject(arguments[0])) {
      waitForAll = arguments[0].waitForAll;
      eachCallback = arguments[0].each;
      finishedCallback = arguments[0].finished;
    } else {
      // Handle if using deferred object and only one param was passed in.
      if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
        waitForAll = arguments[0];
      } else {
        finishedCallback = arguments[0];
        eachCallback = arguments[1];
        waitForAll = arguments[2];
      }
    } // Handle missing callbacks.


    finishedCallback = finishedCallback || $.noop;
    eachCallback = eachCallback || $.noop; // Convert waitForAll to Boolean.

    waitForAll = !!waitForAll; // Ensure callbacks are functions.

    if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
      throw new TypeError('An invalid callback was supplied.');
    }

    this.each(function () {
      // Build a list of all imgs, dependent on what images will
      // be considered.
      var obj = $(this);

      if (waitForAll) {
        // Get all elements (including the original), as any one of
        // them could have a background image.
        obj.find('*').addBack().each(function () {
          var element = $(this); // If an `img` element, add it. But keep iterating in
          // case it has a background image too.

          if (element.is('img:has-src') && !element.is('[srcset]')) {
            allImgs.push({
              src: element.attr('src'),
              element: element[0]
            });
          }

          $.each(hasImgProperties, function (i, property) {
            var propertyValue = element.css(property);
            var match; // If it doesn't contain this property, skip.

            if (!propertyValue) {
              return true;
            } // Get all url() of this element.


            while (match = matchUrl.exec(propertyValue)) {
              allImgs.push({
                src: match[2],
                element: element[0]
              });
            }
          });
          $.each(hasImageAttributes, function (i, attribute) {
            var attributeValue = element.attr(attribute);
            var attributeValues; // If it doesn't contain this property, skip.

            if (!attributeValue) {
              return true;
            }

            allImgs.push({
              src: element.attr('src'),
              srcset: element.attr('srcset'),
              element: element[0]
            });
          });
        });
      } else {
        // For images only, the task is simpler.
        obj.find('img:has-src').each(function () {
          allImgs.push({
            src: this.src,
            element: this
          });
        });
      }
    });
    allImgsLength = allImgs.length;
    allImgsLoaded = 0; // If no images found, don't bother.

    if (allImgsLength === 0) {
      finishedCallback.call(originalCollection);
      deferred.resolveWith(originalCollection);
    } // Now that we've found all imgs in all elements in this,
    // load them and attach callbacks.


    $.each(allImgs, function (i, img) {
      var image = new Image();
      var events = 'load.' + eventNamespace + ' error.' + eventNamespace; // Handle the image loading and error with the same callback.

      $(image).one(events, function me(event) {
        // If an error occurred with loading the image, set the
        // third argument accordingly.
        var eachArguments = [allImgsLoaded, allImgsLength, event.type == 'load'];
        allImgsLoaded++;
        eachCallback.apply(img.element, eachArguments);
        deferred.notifyWith(img.element, eachArguments); // Unbind the event listeners. I use this in addition to
        // `one` as one of those events won't be called (either
        // 'load' or 'error' will be called).

        $(this).off(events, me);

        if (allImgsLoaded == allImgsLength) {
          finishedCallback.call(originalCollection[0]);
          deferred.resolveWith(originalCollection[0]);
          return false;
        }
      });

      if (hasSrcset && img.srcset) {
        image.srcset = img.srcset;
        image.sizes = img.sizes;
      }

      image.src = img.src;
    });
    return deferred.promise();
  };
});
/* jQuery-FontSpy.js v3.0.0
 * https://github.com/patrickmarabeas/jQuery-FontSpy.js
 *
 * Copyright 2013, Patrick Marabeas http://pulse-dev.com
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 02/11/2015
 */


(function (w, $) {
  fontSpy = function fontSpy(fontName, conf) {
    var $html = $('html'),
        $body = $('body'),
        fontFamilyName = fontName; // Throw error if fontName is not a string or not is left as an empty string

    if (typeof fontFamilyName !== 'string' || fontFamilyName === '') {
      throw 'A valid fontName is required. fontName must be a string and must not be an empty string.';
    }

    var defaults = {
      font: fontFamilyName,
      fontClass: fontFamilyName.toLowerCase().replace(/\s/g, ''),
      success: function success() {},
      failure: function failure() {},
      testFont: 'Courier New',
      testString: 'QW@HhsXJ',
      glyphs: '',
      delay: 50,
      timeOut: 1000,
      callback: $.noop
    };
    var config = $.extend(defaults, conf);
    var $tester = $('<span>' + config.testString + config.glyphs + '</span>').css('position', 'absolute').css('top', '-9999px').css('left', '-9999px').css('visibility', 'hidden').css('fontFamily', config.testFont).css('fontSize', '250px');
    $body.append($tester);
    var fallbackFontWidth = $tester.outerWidth();
    $tester.css('fontFamily', config.font + ',' + config.testFont);

    var failure = function failure() {
      $html.addClass("no-" + config.fontClass);

      if (config && config.failure) {
        config.failure();
      }

      config.callback(new Error('FontSpy timeout'));
      $tester.remove();
    };

    var success = function success() {
      config.callback();
      $html.addClass(config.fontClass);

      if (config && config.success) {
        config.success();
      }

      $tester.remove();
    };

    var retry = function retry() {
      setTimeout(checkFont, config.delay);
      config.timeOut = config.timeOut - config.delay;
    };

    var checkFont = function checkFont() {
      var loadedFontWidth = $tester.outerWidth();

      if (fallbackFontWidth !== loadedFontWidth) {
        success();
      } else if (config.timeOut < 0) {
        failure();
      } else {
        retry();
      }
    };

    checkFont();
  };
})(this, jQuery);
/*
Plugin Name: 	jQuery.pin
https://github.com/webpop/jquery.pin
Licensed under the terms of the MIT license.
*/


(function ($) {
  "use strict";

  $.fn.pin = function (options) {
    var scrollY = 0,
        elements = [],
        disabled = false,
        $window = $(window);
    options = options || {};

    var recalculateLimits = function recalculateLimits() {
      for (var i = 0, len = elements.length; i < len; i++) {
        var $this = elements[i];

        if (options.minWidth && $window.outerWidth() <= options.minWidth) {
          if ($this.parent().is(".pin-wrapper")) {
            $this.unwrap();
          }

          $this.css({
            width: "",
            left: "",
            top: "",
            position: ""
          });

          if (options.activeClass) {
            $this.removeClass(options.activeClass);
          }

          disabled = true;
          continue;
        } else {
          disabled = false;
        }

        var $container = options.containerSelector ? $this.closest(options.containerSelector) : $(document.body);
        var offset = $this.offset();
        var containerOffset = $container.offset();
        var parentOffset = $this.parent().offset();

        if (!$this.parent().is(".pin-wrapper")) {
          $this.wrap("<div class='pin-wrapper'>");
        }

        var pad = $.extend({
          top: 0,
          bottom: 0
        }, options.padding || {});
        $this.data("pin", {
          pad: pad,
          from: (options.containerSelector ? containerOffset.top : offset.top) - pad.top,
          to: containerOffset.top + $container.height() - $this.outerHeight() - pad.bottom,
          end: containerOffset.top + $container.height(),
          parentTop: parentOffset.top
        });
        $this.css({
          width: $this.outerWidth()
        });
        $this.parent().css("height", $this.outerHeight());
      }
    };

    var onScroll = function onScroll() {
      if (disabled) {
        return;
      }

      scrollY = $window.scrollTop();
      var elmts = [];

      for (var i = 0, len = elements.length; i < len; i++) {
        var $this = $(elements[i]),
            data = $this.data("pin");

        if (!data) {
          // Removed element
          continue;
        }

        elmts.push($this);
        var from = data.from - data.pad.bottom,
            to = data.to - data.pad.top;

        if (from + $this.outerHeight() > data.end) {
          $this.css('position', '');
          continue;
        }

        if (from < scrollY && to > scrollY) {
          !($this.css("position") == "fixed") && $this.css({
            left: $this.offset().left,
            top: data.pad.top
          }).css("position", "fixed");

          if (options.activeClass) {
            $this.addClass(options.activeClass);
          }
        } else if (scrollY >= to) {
          $this.css({
            left: "",
            top: to - data.parentTop + data.pad.top
          }).css("position", "absolute");

          if (options.activeClass) {
            $this.addClass(options.activeClass);
          }
        } else {
          $this.css({
            position: "",
            top: "",
            left: ""
          });

          if (options.activeClass) {
            $this.removeClass(options.activeClass);
          }
        }
      }

      elements = elmts;
    };

    var update = function update() {
      recalculateLimits();
      onScroll();
    };

    this.each(function () {
      var $this = $(this),
          data = $(this).data('pin') || {};

      if (data && data.update) {
        return;
      }

      elements.push($this);
      $("img", this).one("load", recalculateLimits);
      data.update = update;
      $(this).data('pin', data);
    });
    $window.scroll(onScroll);
    $window.resize(function () {
      recalculateLimits();
    });
    recalculateLimits();
    $window.on('load', update);
    return this;
  };
})(jQuery);

(function ($) {
  "use strict"; // Define default settings

  var defaults = {
    action: function action() {},
    runOnLoad: false,
    duration: 500
  }; // Define global variables

  var settings = defaults,
      running = false,
      start;
  var methods = {}; // Initial plugin configuration

  methods.init = function () {
    // Allocate passed arguments to settings based on type
    for (var i = 0; i <= arguments.length; i++) {
      var arg = arguments[i];

      switch (_typeof(arg)) {
        case "function":
          settings.action = arg;
          break;

        case "boolean":
          settings.runOnLoad = arg;
          break;

        case "number":
          settings.duration = arg;
          break;
      }
    } // Process each matching jQuery object


    return this.each(function () {
      if (settings.runOnLoad) {
        settings.action();
      }

      $(this).resize(function () {
        methods.timedAction.call(this);
      });
    });
  };

  methods.timedAction = function (code, millisec) {
    var doAction = function doAction() {
      var remaining = settings.duration;

      if (running) {
        var elapse = new Date() - start;
        remaining = settings.duration - elapse;

        if (remaining <= 0) {
          // Clear timeout and reset running variable
          clearTimeout(running);
          running = false; // Perform user defined function

          settings.action();
          return;
        }
      }

      wait(remaining);
    };

    var wait = function wait(time) {
      running = setTimeout(doAction, time);
    }; // Define new action starting time


    start = new Date(); // Define runtime settings if function is run directly

    if (typeof millisec === 'number') {
      settings.duration = millisec;
    }

    if (typeof code === 'function') {
      settings.action = code;
    } // Only run timed loop if not already running


    if (!running) {
      doAction();
    }
  };

  $.fn.afterResize = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      return methods.init.apply(this, arguments);
    }
  };
})(jQuery);
/*
Plugin Name: 	Animated Headlines
Written by: 	Codyhouse - (https://codyhouse.co/demo/animated-headlines/index.html)
*/


jQuery(document).ready(function ($) {
  //set animation timing
  var animationDelay = 2500,
      //loading bar effect
  barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3000,
      //3000 is the duration of the transition on the loading bar - set in the scss/css file
  //letters effect
  lettersDelay = 50,
      //type effect
  typeLettersDelay = 150,
      selectionDuration = 500,
      typeAnimationDelay = selectionDuration + 800,
      //clip effect 
  revealDuration = 600,
      revealAnimationDelay = 1500;
  initHeadline();

  function initHeadline() {
    //initialise headline animation
    animateHeadline('.word-rotator', '.word-rotator.letters');
  }

  function animateHeadline($selector) {
    var duration = animationDelay;
    theme.fn.intObs($selector, function () {
      // Single Letters - Insert <i> element for each letter of a changing word
      if ($(this).hasClass('letters')) {
        $(this).find('b').each(function () {
          var word = $(this),
              letters = word.text().split(''),
              selected = word.hasClass('is-visible');

          for (i in letters) {
            if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            letters[i] = selected ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
          }

          var newLetters = letters.join('');
          word.html(newLetters).css('opacity', 1);
        });
      } // Animate the Headline


      var headline = $(this);

      if (headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        setTimeout(function () {
          headline.find('.word-rotator-words').addClass('is-loading');
        }, barWaiting);
      } else if (headline.hasClass('clip')) {
        var spanWrapper = headline.find('.word-rotator-words'),
            newWidth = spanWrapper.outerWidth() + 10;
        spanWrapper.css('width', newWidth);
      } else if (!headline.hasClass('type')) {
        //assign to .word-rotator-words the width of its longest word
        var words = headline.find('.word-rotator-words b'),
            width = 0;
        words.each(function () {
          var wordWidth = $(this).outerWidth();
          if (wordWidth > width) width = wordWidth;
        });
        headline.find('.word-rotator-words').css('width', width);
      }

      ; // Trigger animation

      setTimeout(function () {
        hideWord(headline.find('.is-visible').eq(0));
      }, duration);
    }, {});
  }

  function hideWord($word) {
    var nextWord = takeNext($word);

    if ($word.parents('.word-rotator').hasClass('type')) {
      var parentSpan = $word.parent('.word-rotator-words');
      parentSpan.addClass('selected').removeClass('waiting');
      setTimeout(function () {
        parentSpan.removeClass('selected');
        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
      }, selectionDuration);
      setTimeout(function () {
        showWord(nextWord, typeLettersDelay);
      }, typeAnimationDelay);
    } else if ($word.parents('.word-rotator').hasClass('letters')) {
      var bool = $word.children('i').length >= nextWord.children('i').length ? true : false;
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
    } else if ($word.parents('.word-rotator').hasClass('clip')) {
      $word.parents('.word-rotator-words').stop(true, true).animate({
        width: '2px'
      }, revealDuration, function () {
        switchWord($word, nextWord);
        showWord(nextWord);
      });
    } else if ($word.parents('.word-rotator').hasClass('loading-bar')) {
      $word.parents('.word-rotator-words').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(function () {
        hideWord(nextWord);
      }, barAnimationDelay);
      setTimeout(function () {
        $word.parents('.word-rotator-words').addClass('is-loading');
      }, barWaiting);
    } else {
      switchWord($word, nextWord);
      setTimeout(function () {
        hideWord(nextWord);
      }, animationDelay);
    }
  }

  function showWord($word, $duration) {
    if ($word.parents('.word-rotator').hasClass('type')) {
      showLetter($word.find('i').eq(0), $word, false, $duration);
      $word.addClass('is-visible').removeClass('is-hidden');
    } else if ($word.parents('.word-rotator').hasClass('clip')) {
      if (document.hasFocus()) {
        $word.parents('.word-rotator-words').stop(true, true).animate({
          'width': $word.outerWidth() + 10
        }, revealDuration, function () {
          setTimeout(function () {
            hideWord($word);
          }, revealAnimationDelay);
        });
      } else {
        $word.parents('.word-rotator-words').stop(true, true).animate({
          width: $word.outerWidth() + 10
        });
        setTimeout(function () {
          hideWord($word);
        }, revealAnimationDelay);
      }
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function () {
        hideLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else if ($bool) {
      setTimeout(function () {
        hideWord(takeNext($word));
      }, animationDelay);
    }

    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function () {
        showLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else {
      if ($word.parents('.word-rotator').hasClass('type')) {
        setTimeout(function () {
          $word.parents('.word-rotator-words').addClass('waiting');
        }, 200);
      }

      if (!$bool) {
        setTimeout(function () {
          hideWord($word);
        }, animationDelay);
      }

      if (!$word.closest('.word-rotator').hasClass('type')) {
        $word.closest('.word-rotator-words').stop(true, true).animate({
          width: $word.outerWidth()
        });
      }
    }
  }

  function takeNext($word) {
    return !$word.is(':last-child') ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return !$word.is(':first-child') ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');

    if (!$newWord.closest('.word-rotator').hasClass('clip')) {
      var space = 0,
          delay = $newWord.outerWidth() > $oldWord.outerWidth() ? 0 : 600;

      if ($newWord.closest('.word-rotator').hasClass('loading-bar') || $newWord.closest('.word-rotator').hasClass('slide')) {
        space = 3;
        delay = 0;
      }

      setTimeout(function () {
        $newWord.closest('.word-rotator-words').stop(true, true).animate({
          width: $newWord.outerWidth() + space
        });
      }, delay);
    }
  }
});
/*
jQuery Hover3d
=================================================
Version: 1.1.0
Author: Rian Ariona
Website: http://ariona.net
Docs: http://ariona.github.io/hover3d
Repo: http://github.com/ariona/hover3d
Issues: http://github.com/ariona/hover3d/issues
*/

(function ($) {
  $.fn.hover3d = function (options) {
    var settings = $.extend({
      selector: null,
      perspective: 1000,
      sensitivity: 20,
      invert: false,
      shine: false,
      hoverInClass: "hover-in",
      hoverOutClass: "hover-out",
      hoverClass: "hover-3d"
    }, options);
    return this.each(function () {
      var $this = $(this),
          $card = $this.find(settings.selector);
      currentX = 0;
      currentY = 0;

      if (settings.shine) {
        $card.append('<div class="shine"></div>');
      }

      var $shine = $(this).find(".shine"); // Set perspective and transformStyle value
      // for element and 3d object

      $this.css({
        perspective: settings.perspective + "px",
        transformStyle: "preserve-3d"
      });
      $card.css({
        perspective: settings.perspective + "px",
        transformStyle: "preserve-3d"
      });
      $shine.css({
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transform: 'translateZ(1px)',
        "z-index": 9
      }); // Mouse Enter function, this will add hover-in
      // Class so when mouse over it will add transition
      // based on hover-in class

      function enter(event) {
        $card.addClass(settings.hoverInClass + " " + settings.hoverClass);
        currentX = currentY = 0;
        setTimeout(function () {
          $card.removeClass(settings.hoverInClass);
        }, 1000);
      } // Mouse movement Parallax effect


      function move(event) {
        var w = $card.innerWidth(),
            h = $card.innerHeight(),
            currentX = Math.round(event.pageX - $card.offset().left),
            currentY = Math.round(event.pageY - $card.offset().top),
            ax = settings.invert ? (w / 2 - currentX) / settings.sensitivity : -(w / 2 - currentX) / settings.sensitivity,
            ay = settings.invert ? -(h / 2 - currentY) / settings.sensitivity : (h / 2 - currentY) / settings.sensitivity,
            dx = currentX - w / 2,
            dy = currentY - h / 2,
            theta = Math.atan2(dy, dx),
            angle = theta * 180 / Math.PI - 90;

        if (angle < 0) {
          angle = angle + 360;
        }

        $card.css({
          perspective: settings.perspective + "px",
          transformStyle: "preserve-3d",
          transform: "rotateY(" + ax + "deg) rotateX(" + ay + "deg)"
        });
        $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');
      } // Mouse leave function, will set the transform
      // property to 0, and add transition class
      // for exit animation


      function leave() {
        $card.addClass(settings.hoverOutClass + " " + settings.hoverClass);
        $card.css({
          perspective: settings.perspective + "px",
          transformStyle: "preserve-3d",
          transform: "rotateX(0) rotateY(0)"
        });
        setTimeout(function () {
          $card.removeClass(settings.hoverOutClass + " " + settings.hoverClass);
          currentX = currentY = 0;
        }, 1000);
      } // Mouseenter event binding


      $this.on("mouseenter", function () {
        return enter();
      }); // Mousemove event binding

      $this.on("mousemove", function (event) {
        return move(event);
      }); // Mouseleave event binding

      $this.on("mouseleave", function () {
        return leave();
      });
    });
  };
})(jQuery);
/*
jQuery Hover3d
*/


(function ($) {
  if ($.isFunction($.fn['hover3d']) && $('.hover-effect-3d').length) {
    theme.fn.execOnceTroughEvent('.hover-effect-3d', 'mouseover.trigger.hover3d', function () {
      $(this).each(function () {
        var $this = $(this);
        $this.hover3d({
          selector: ".thumb-info"
        });
      });
    });
  }
}).apply(this, [jQuery]);
/*
* Title Border
*/

if ($('[data-title-border]').length) {
  var $pageHeaderTitleBorder = $('<span class="page-header-title-border"></span>'),
      $pageHeaderTitle = $('[data-title-border]'),
      $window = $(window);
  $pageHeaderTitle.before($pageHeaderTitleBorder);

  var setPageHeaderTitleBorderWidth = function setPageHeaderTitleBorderWidth() {
    $pageHeaderTitleBorder.width($pageHeaderTitle.width());
  };

  $window.afterResize(function () {
    setPageHeaderTitleBorderWidth();
  });
  setPageHeaderTitleBorderWidth();
  $pageHeaderTitleBorder.addClass('visible');
}
/*
* Footer Reveal
*/


(function ($) {
  var $footerReveal = {
    $wrapper: $('.footer-reveal'),
    init: function init() {
      var self = this;
      self.build();
      self.events();
    },
    build: function build() {
      var self = this,
          footer_height = self.$wrapper.outerHeight(true),
          window_height = $(window).height() - $('.header-body').height();

      if (footer_height > window_height) {
        $('#footer').removeClass('footer-reveal');
        $('body').css('margin-bottom', 0);
      } else {
        $('#footer').addClass('footer-reveal');
        $('body').css('margin-bottom', footer_height);
      }
    },
    events: function events() {
      var self = this,
          $window = $(window);
      $window.on('load', function () {
        $window.afterResize(function () {
          self.build();
        });
      });
    }
  };

  if ($('.footer-reveal').length) {
    $footerReveal.init();
  }
})(jQuery);
/* Re-Init Plugin */


if ($('[data-reinit-plugin]').length) {
  $('[data-reinit-plugin]').on('click', function (e) {
    e.preventDefault();
    var pluginInstance = $(this).data('reinit-plugin'),
        pluginFunction = $(this).data('reinit-plugin-function'),
        pluginElement = $(this).data('reinit-plugin-element'),
        pluginOptions = theme.fn.getOptions($(this).data('reinit-plugin-options'));
    $(pluginElement).data(pluginInstance).destroy();
    setTimeout(function () {
      theme.fn.execPluginFunction(pluginFunction, $(pluginElement), pluginOptions);
    }, 1000);
  });
}
/* Simple Copy To Clipboard */


if ($('[data-copy-to-clipboard]').length) {
  theme.fn.intObs('[data-copy-to-clipboard]', function () {
    var $this = $(this);
    $this.wrap('<div class="copy-to-clipboard-wrapper position-relative"></div>');
    var $copyButton = $('<a href="#" class="btn btn-primary btn-px-2 py-1 text-0 position-absolute top-8 right-8">COPY</a>');
    $this.parent().prepend($copyButton);
    $copyButton.on('click', function (e) {
      e.preventDefault();
      var $btn = $(this),
          $temp = $('<textarea class="d-block opacity-0" style="height: 0;">');
      $btn.parent().append($temp);
      $temp.val($this.text());
      $temp[0].select();
      $temp[0].setSelectionRange(0, 99999);
      document.execCommand("copy");
      $btn.addClass('copied');
      setTimeout(function () {
        $btn.removeClass('copied');
      }, 1000);
      $temp.remove();
    });
  }, {
    rootMargin: '0px 0px 0px 0px'
  });
} // Animate


(function (theme, $) {
  theme = theme || {};
  var instanceName = '__animate';

  var PluginAnimate = function PluginAnimate($el, opts) {
    return this.initialize($el, opts);
  };

  PluginAnimate.defaults = {
    accX: 0,
    accY: -80,
    delay: 100,
    duration: '750ms',
    minWindowWidth: 767,
    forceAnimation: false,
    flagClassOnly: false
  };
  PluginAnimate.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this; // Flag Class Only
      // - Useful for simple animations like hightlight
      // - Less process and memory

      if (self.options.flagClassOnly) {
        var delay = self.options.wrapper.attr('data-appear-animation-delay') ? self.options.wrapper.attr('data-appear-animation-delay') : self.options.delay;
        self.options.wrapper.css({
          'animation-delay': delay + 'ms',
          'transition-delay': delay + 'ms'
        });
        self.options.wrapper.addClass(self.options.wrapper.attr('data-appear-animation'));
        return this;
      }

      if ($('body').hasClass('loading-overlay-showing')) {
        $(window).on('loading.overlay.ready', function () {
          self.animate();
        });
      } else {
        self.animate();
      }

      return this;
    },
    animate: function animate() {
      var self = this,
          $el = this.options.wrapper,
          delay = 0,
          duration = this.options.duration,
          elTopDistance = $el.offset().top,
          windowTopDistance = $(window).scrollTop(); // If has appear animation elements inside a SVG. 
      // Intersection Observer API do not check elements inside SVG's, so we need initialize trough top parent SVG

      if ($el.data('appear-animation-svg')) {
        $el.find('[data-appear-animation]').each(function () {
          var $this = $(this),
              opts;
          var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginAnimate(opts);
        });
        return this;
      } // No animation at the first load of page. This is good for performance


      if (self.options.firstLoadNoAnim) {
        $el.removeClass('appear-animation'); // Inside Carousel

        if ($el.closest('.owl-carousel').get(0)) {
          setTimeout(function () {
            $el.closest('.owl-carousel').on('change.owl.carousel', function () {
              self.options.firstLoadNoAnim = false;
              $el.removeData('__animate');
              $el.themePluginAnimate(self.options);
            });
          }, 500);
        }

        return this;
      }

      $el.addClass('appear-animation animated');

      if (!$('html').hasClass('no-csstransitions') && $(window).width() > self.options.minWindowWidth && elTopDistance >= windowTopDistance || self.options.forceAnimation == true) {
        delay = $el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay;
        duration = $el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration;

        if (duration != '750ms') {
          $el.css('animation-duration', duration);
        }

        $el.css('animation-delay', delay + 'ms');
        $el.addClass($el.attr('data-appear-animation') + ' appear-animation-visible');
        $el.trigger('animation:show');
      } else {
        $el.addClass('appear-animation-visible');
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginAnimate: PluginAnimate
  }); // jquery plugin

  $.fn.themePluginAnimate = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginAnimate($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Animated Letters

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__animatedLetters';

  var PluginAnimatedLetters = function PluginAnimatedLetters($el, opts) {
    return this.initialize($el, opts);
  };

  PluginAnimatedLetters.defaults = {
    animationName: 'fadeIn',
    animationSpeed: 50,
    startDelay: 500,
    minWindowWidth: 768,
    letterClass: ''
  };
  PluginAnimatedLetters.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      var self = this;
      this.$el = $el;
      this.initialText = $el.text();
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginAnimatedLetters.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          letters = self.$el.text().split('');

      if ($(window).width() < self.options.minWindowWidth) {
        return this;
      }

      if (self.options.firstLoadNoAnim) {
        self.$el.css({
          visibility: 'visible'
        }); // Inside Carousel

        if (self.$el.closest('.owl-carousel').get(0)) {
          setTimeout(function () {
            self.$el.closest('.owl-carousel').on('change.owl.carousel', function () {
              self.options.firstLoadNoAnim = false;
              self.build();
            });
          }, 500);
        }

        return this;
      } // Add class to show


      self.$el.addClass('initialized'); // Set Min Height to avoid flicking issues

      self.setMinHeight();
      self.$el.text('');

      if (self.options.animationName == 'typeWriter') {
        self.$el.append('<span class="letters-wrapper"></span><span class="typeWriter"></pre>');
        var index = 0;
        setTimeout(function () {
          var timeout = function timeout() {
            var st = setTimeout(function () {
              var letter = letters[index];
              self.$el.find('.letters-wrapper').append('<span class="letter ' + (self.options.letterClass ? self.options.letterClass + ' ' : '') + '">' + letter + '</span>');
              index++;
              timeout();
            }, self.options.animationSpeed);

            if (index >= letters.length) {
              clearTimeout(st);
            }
          };

          timeout();
        }, self.options.startDelay);
      } else {
        setTimeout(function () {
          for (var i = 0; i < letters.length; i++) {
            var letter = letters[i];
            self.$el.append('<span class="letter ' + (self.options.letterClass ? self.options.letterClass + ' ' : '') + self.options.animationName + ' animated" style="animation-delay: ' + i * self.options.animationSpeed + 'ms;">' + letter + '</span>');
          }
        }, self.options.startDelay);
      }

      return this;
    },
    setMinHeight: function setMinHeight() {
      var self = this; // if it's inside carousel

      if (self.$el.closest('.owl-carousel').get(0)) {
        self.$el.closest('.owl-carousel').addClass('d-block');
        self.$el.css('min-height', self.$el.height());
        self.$el.closest('.owl-carousel').removeClass('d-block');
      } else {
        self.$el.css('min-height', self.$el.height());
      }

      return this;
    },
    destroy: function destroy() {
      var self = this;
      self.$el.html(self.initialText).css('min-height', '');
      return this;
    },
    events: function events() {
      var self = this; // Destroy

      self.$el.on('animated.letters.destroy', function () {
        self.destroy();
      }); // Initialize

      self.$el.on('animated.letters.initialize', function () {
        self.build();
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginAnimatedLetters: PluginAnimatedLetters
  }); // jquery plugin

  $.fn.themePluginAnimatedLetters = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginAnimatedLetters($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Before / After

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__beforeafter';

  var PluginBeforeAfter = function PluginBeforeAfter($el, opts) {
    return this.initialize($el, opts);
  };

  PluginBeforeAfter.defaults = {};
  PluginBeforeAfter.prototype = {
    initialize: function initialize($el, opts) {
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginBeforeAfter.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.twentytwenty)) {
        return this;
      }

      var self = this;
      self.options.wrapper.twentytwenty(self.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginBeforeAfter: PluginBeforeAfter
  }); // jquery plugin

  $.fn.themePluginBeforeAfter = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginBeforeAfter($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Carousel Light

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__carouselLight';

  var PluginCarouselLight = function PluginCarouselLight($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCarouselLight.defaults = {
    autoplay: true,
    autoplayTimeout: 7000,
    disableAutoPlayOnClick: true
  };
  PluginCarouselLight.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.clickFlag = true;
      this.setData().setOptions(opts).build().owlNav().owlDots().autoPlay().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCarouselLight.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;
      self.$el.css('opacity', 1).find('.owl-item:first-child').addClass('active');
      self.$el.trigger('initialized.owl.carousel'); // Carousel Navigate By ID and item index

      self.carouselNavigate();
      return this;
    },
    changeSlide: function changeSlide($nextSlide) {
      var self = this,
          $prevSlide = self.$el.find('.owl-item.active');
      self.$el.find('.owl-item.active').addClass('removing');
      $prevSlide.removeClass('fadeIn').addClass('fadeOut animated');
      setTimeout(function () {
        setTimeout(function () {
          $prevSlide.removeClass('active');
        }, 400);
        $nextSlide.addClass('active').removeClass('fadeOut').addClass('fadeIn animated');
      }, 200); // Dots

      self.$el.find('.owl-dot').removeClass('active').eq($nextSlide.index()).addClass('active');
      self.$el.trigger({
        type: 'change.owl.carousel',
        nextSlideIndex: $nextSlide.index(),
        prevSlideIndex: $prevSlide.index()
      });
      setTimeout(function () {
        self.$el.trigger({
          type: 'changed.owl.carousel',
          nextSlideIndex: $nextSlide.index(),
          prevSlideIndex: $prevSlide.index()
        });
      }, 500);
    },
    owlNav: function owlNav() {
      var self = this,
          $owlNext = self.$el.find('.owl-next'),
          $owlPrev = self.$el.find('.owl-prev');
      $owlPrev.on('click', function (e) {
        e.preventDefault();

        if (self.options.disableAutoPlayOnClick) {
          window.clearInterval(self.autoPlayInterval);
        }

        if (self.avoidMultipleClicks()) {
          return false;
        }

        self.owlPrev();
      });
      $owlNext.on('click', function (e) {
        e.preventDefault();

        if (self.options.disableAutoPlayOnClick) {
          window.clearInterval(self.autoPlayInterval);
        }

        if (self.avoidMultipleClicks()) {
          return false;
        }

        self.owlNext();
      });
      return this;
    },
    owlDots: function owlDots() {
      var self = this,
          $owlDot = self.$el.find('.owl-dot');
      $owlDot.on('click', function (e) {
        $this = $(this);
        e.preventDefault();

        if (self.options.disableAutoPlayOnClick) {
          window.clearInterval(self.autoPlayInterval);
        }

        if (self.avoidMultipleClicks()) {
          return false;
        }

        var dotIndex = $(this).index(); // Do nothing if respective dot slide is active/showing

        if ($this.hasClass('active')) {
          return false;
        }

        self.changeSlide(self.$el.find('.owl-item').eq(dotIndex));
      });
      return this;
    },
    owlPrev: function owlPrev() {
      var self = this;

      if (self.$el.find('.owl-item.active').prev().get(0)) {
        self.changeSlide(self.$el.find('.owl-item.active').prev());
      } else {
        self.changeSlide(self.$el.find('.owl-item:last-child'));
      }
    },
    owlNext: function owlNext() {
      var self = this;

      if (self.$el.find('.owl-item.active').next().get(0)) {
        self.changeSlide(self.$el.find('.owl-item.active').next());
      } else {
        self.changeSlide(self.$el.find('.owl-item').eq(0));
      }
    },
    avoidMultipleClicks: function avoidMultipleClicks() {
      var self = this;

      if (!self.clickFlag) {
        return true;
      }

      if (self.clickFlag) {
        self.clickFlag = false;
        setTimeout(function () {
          self.clickFlag = true;
        }, 1000);
      }

      return false;
    },
    autoPlay: function autoPlay() {
      var self = this,
          $el = this.options.wrapper;

      if (self.options.autoplay) {
        self.autoPlayInterval = window.setInterval(function () {
          self.owlNext();
        }, self.options.autoplayTimeout);
      }

      return this;
    },
    carouselNavigate: function carouselNavigate() {
      var self = this,
          $el = this.options.wrapper,
          $carousel = $el;

      if ($('[data-carousel-navigate]').get(0)) {
        $('[data-carousel-navigate-id="#' + $el.attr('id') + '"]').each(function () {
          var $this = $(this),
              hasCarousel = $($this.data('carousel-navigate-id')).get(0),
              toIndex = $this.data('carousel-navigate-to');

          if (hasCarousel) {
            $this.on('click', function () {
              if (self.options.disableAutoPlayOnClick) {
                window.clearInterval(self.autoPlayInterval);
              }

              self.changeSlide(self.$el.find('.owl-item').eq(parseInt(toIndex) - 1));
            });
          }
        });
        $el.on('change.owl.carousel', function (e) {
          $('[data-carousel-navigate-id="#' + $el.attr('id') + '"]').removeClass('active');
        });
        $el.on('changed.owl.carousel', function (e) {
          $('[data-carousel-navigate-id="#' + $el.attr('id') + '"][data-carousel-navigate-to="' + (e.nextSlideIndex + 1) + '"]').addClass('active');
        });
      }

      return this;
    },
    events: function events() {
      var self = this;
      self.$el.on('change.owl.carousel', function (event) {
        // Hide elements inside carousel
        self.$el.find('[data-appear-animation]:not(.background-image-wrapper), [data-plugin-animated-letters]').addClass('invisible'); // Animated Letters

        self.$el.find('[data-plugin-animated-letters]').trigger('animated.letters.destroy'); // Remove "d-none" class before show the element. This is useful when using background images inside a carousel. Like ken burns effect

        self.$el.find('.owl-item:not(.active) [data-carousel-onchange-show]').removeClass('d-none');
      });
      self.$el.on('changed.owl.carousel', function (event) {
        setTimeout(function () {
          // Appear Animation
          if (self.$el.find('.owl-item.cloned [data-appear-animation]').get(0)) {
            self.$el.find('.owl-item.cloned [data-appear-animation]').each(function () {
              var $this = $(this),
                  opts;
              var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
              if (pluginOptions) opts = pluginOptions;
              $this.themePluginAnimate(opts);
            });
          } // Show elements inside carousel


          self.$el.find('.owl-item.active [data-appear-animation]:not(.background-image-wrapper), [data-plugin-animated-letters]').removeClass('invisible'); // Animated Letters

          self.$el.find('.owl-item.active [data-plugin-animated-letters]').trigger('animated.letters.initialize'); // Background Video

          self.$el.find('.owl-item.cloned.active [data-plugin-video-background]').trigger('video.background.initialize');
        }, 500);
      });
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCarouselLight: PluginCarouselLight
  }); // jquery plugin

  $.fn.themePluginCarouselLight = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCarouselLight($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Carousel

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__carousel';

  var PluginCarousel = function PluginCarousel($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCarousel.defaults = {
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      479: {
        items: 1
      },
      768: {
        items: 2
      },
      979: {
        items: 3
      },
      1199: {
        items: 4
      }
    },
    navText: [],
    refresh: false
  };
  PluginCarousel.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el; // If has data-icon inside, initialize only after icons get rendered
      // Prevent flicking issues

      if ($el.find('[data-icon]').get(0)) {
        var self = this;
        $(window).on('icon.rendered', function () {
          if ($el.data(instanceName)) {
            return this;
          }

          setTimeout(function () {
            self.setData().setOptions(opts).build();
          }, 1000);
        });
        return this;
      }

      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.owlCarousel)) {
        return this;
      }

      var self = this,
          $el = this.options.wrapper; // Add Theme Class

      $el.addClass('owl-theme'); // Add Loading

      $el.addClass('owl-loading'); // Force RTL according to HTML dir attribute

      if ($('html').attr('dir') == 'rtl') {
        this.options = $.extend(true, {}, this.options, {
          rtl: true
        });
      }

      if (this.options.items == 1) {
        this.options.responsive = {};
      }

      if (this.options.items > 4) {
        this.options = $.extend(true, {}, this.options, {
          responsive: {
            1199: {
              items: this.options.items
            }
          }
        });
      } // Auto Height Fixes


      if (this.options.autoHeight) {
        var itemsHeight = [];
        $el.find('.owl-item').each(function () {
          if ($(this).hasClass('active')) {
            itemsHeight.push($(this).height());
          }
        });
        $(window).afterResize(function () {
          $el.find('.owl-stage-outer').height(Math.max.apply(null, itemsHeight));
        });
        $(window).on('load', function () {
          $el.find('.owl-stage-outer').height(Math.max.apply(null, itemsHeight));
        });
      } // Initialize OwlCarousel


      $el.owlCarousel(this.options).addClass('owl-carousel-init animated fadeIn'); // Remove "animated fadeIn" class to prevent conflicts

      setTimeout(function () {
        $el.removeClass('animated fadeIn');
      }, 1000); // Owl Carousel Wrapper

      if ($el.closest('.owl-carousel-wrapper').get(0)) {
        setTimeout(function () {
          $el.closest('.owl-carousel-wrapper').css({
            height: ''
          });
        }, 500);
      } // Owl Carousel Loader


      if ($el.prev().hasClass('owl-carousel-loader')) {
        $el.prev().remove();
      } // Nav Offset


      self.navigationOffsets(); // Nav Outside

      if ($el.hasClass('nav-outside')) {
        $(window).on('owl.carousel.nav.outside', function () {
          if ($(window).width() < 992) {
            self.options.stagePadding = 40;
            $el.addClass('stage-margin');
          } else {
            self.options.stagePadding = 0;
            $el.removeClass('stage-margin');
          }

          $el.owlCarousel('destroy').owlCarousel(self.options); // Nav Offset

          self.navigationOffsets();
        }); // Window Resize

        $(window).on('load', function () {
          $(window).afterResize(function () {
            $(window).trigger('owl.carousel.nav.outside');
          });
        }); // First Load

        $(window).trigger('owl.carousel.nav.outside');
      } // Nav style 5 (SVG Arrows)


      if ($el.hasClass('nav-svg-arrows-1')) {
        var svg_arrow = '' + '<svg version="1.1" viewBox="0 0 15.698 8.706" width="17" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<polygon stroke="#212121" stroke-width="0.1" fill="#212121" points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "/>' + '</svg>';
        $el.find('.owl-next, .owl-prev').append(svg_arrow);
      } // Sync


      if ($el.attr('data-sync')) {
        $el.on('change.owl.carousel', function (event) {
          if (event.namespace && event.property.name === 'position') {
            var target = event.relatedTarget.relative(event.property.value, true);
            $($el.data('sync')).owlCarousel('to', target, 300, true);
          }
        });
      } // Carousel Center Active Item


      if ($el.hasClass('carousel-center-active-item')) {
        var itemsActive = $el.find('.owl-item.active'),
            indexCenter = Math.floor(($el.find('.owl-item.active').length - 1) / 2),
            itemCenter = itemsActive.eq(indexCenter);
        itemCenter.addClass('current');
        $el.on('change.owl.carousel', function (event) {
          $el.find('.owl-item').removeClass('current');
          setTimeout(function () {
            var itemsActive = $el.find('.owl-item.active'),
                indexCenter = Math.floor(($el.find('.owl-item.active').length - 1) / 2),
                itemCenter = itemsActive.eq(indexCenter);
            itemCenter.addClass('current');
          }, 100);
        }); // Refresh

        $el.trigger('refresh.owl.carousel');
      } // AnimateIn / AnimateOut Fix


      if (self.options.animateIn || self.options.animateOut) {
        $el.on('change.owl.carousel', function (event) {
          // Hide elements inside carousel
          $el.find('[data-appear-animation], [data-plugin-animated-letters]').addClass('d-none'); // Animated Letters

          $el.find('[data-plugin-animated-letters]').trigger('animated.letters.destroy'); // Remove "d-none" class before show the element. This is useful when using background images inside a carousel. Like ken burns effect

          $el.find('.owl-item:not(.active) [data-carousel-onchange-show]').removeClass('d-none');
        });
        $el.on('changed.owl.carousel', function (event) {
          setTimeout(function () {
            // Appear Animation
            $el.find('[data-appear-animation]').each(function () {
              var $this = $(this),
                  opts;
              var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
              if (pluginOptions) opts = pluginOptions;
              $this.themePluginAnimate(opts);
            }); // Show elements inside carousel

            $el.find('.owl-item.active [data-appear-animation], [data-plugin-animated-letters]').removeClass('d-none'); // Animated Letters

            $el.find('.owl-item.active [data-plugin-animated-letters]').trigger('animated.letters.initialize'); // Background Video

            $el.find('.owl-item.cloned.active [data-plugin-video-background]').trigger('video.background.initialize');
          }, 10);
        });
      } // data-icon inside carousel


      if ($el.find('[data-icon]').length) {
        $el.on('change.owl.carousel drag.owl.carousel', function () {
          $el.find('.owl-item.cloned [data-icon]').each(function () {
            var $this = $(this),
                opts;
            var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
            if (pluginOptions) opts = pluginOptions;
            $this.themePluginIcon(opts);
          });
        });
      } // Render Background Videos inside carousel. Just a trigger on window is sufficient to render


      if ($el.find('[data-plugin-video-background]').get(0)) {
        $(window).resize();
      } // Remove Loading


      $el.removeClass('owl-loading'); // Remove Height

      $el.css('height', 'auto'); // Carousel Navigate By ID and item index

      self.carouselNavigate(); // Refresh Carousel

      if (self.options.refresh) {
        $el.owlCarousel('refresh');
      }

      return this;
    },
    navigationOffsets: function navigationOffsets() {
      var self = this,
          $el = this.options.wrapper,
          navHasTransform = $el.find('.owl-nav').css('transform') == 'none' ? false : true,
          dotsHasTransform = $el.find('.owl-dots').css('transform') == 'none' ? false : true; // ************* NAV *****************
      // Nav Offset - Horizontal

      if (self.options.navHorizontalOffset && !self.options.navVerticalOffset) {
        if (!navHasTransform) {
          $el.find('.owl-nav').css({
            transform: 'translate3d(' + self.options.navHorizontalOffset + ', 0, 0)'
          });
        } else {
          $el.find('.owl-nav').css({
            left: self.options.navHorizontalOffset
          });
        }
      } // Nav Offset - Vertical


      if (self.options.navVerticalOffset && !self.options.navHorizontalOffset) {
        if (!navHasTransform) {
          $el.find('.owl-nav').css({
            transform: 'translate3d(0, ' + self.options.navVerticalOffset + ', 0)'
          });
        } else {
          $el.find('.owl-nav').css({
            top: 'calc( 50% - ' + self.options.navVerticalOffset + ' )'
          });
        }
      } // Nav Offset - Horizontal & Vertical


      if (self.options.navVerticalOffset && self.options.navHorizontalOffset) {
        if (!navHasTransform) {
          $el.find('.owl-nav').css({
            transform: 'translate3d(' + self.options.navHorizontalOffset + ', ' + self.options.navVerticalOffset + ', 0)'
          });
        } else {
          $el.find('.owl-nav').css({
            top: 'calc( 50% - ' + self.options.navVerticalOffset + ' )',
            left: self.options.navHorizontalOffset
          });
        }
      } // ********** DOTS *********************
      // Dots Offset - Horizontal


      if (self.options.dotsHorizontalOffset && !self.options.dotsVerticalOffset) {
        $el.find('.owl-dots').css({
          transform: 'translate3d(' + self.options.dotsHorizontalOffset + ', 0, 0)'
        });
      } // Dots Offset - Vertical


      if (self.options.dotsVerticalOffset && !self.options.dotsHorizontalOffset) {
        if (!dotsHasTransform) {
          $el.find('.owl-dots').css({
            transform: 'translate3d(0, ' + self.options.dotsVerticalOffset + ', 0)'
          });
        } else {
          $el.find('.owl-dots').css({
            top: 'calc( 50% - ' + self.options.dotsVerticalOffset + ' )'
          });
        }
      } // Dots Offset - Horizontal & Vertical


      if (self.options.dotsVerticalOffset && self.options.dotsHorizontalOffset) {
        $el.find('.owl-dots').css({
          transform: 'translate3d(' + self.options.dotsHorizontalOffset + ', ' + self.options.dotsVerticalOffset + ', 0)'
        });
      }

      return this;
    },
    carouselNavigate: function carouselNavigate() {
      var self = this,
          $el = this.options.wrapper,
          $carousel = $el.data('owl.carousel');

      if ($('[data-carousel-navigate]').get(0)) {
        $('[data-carousel-navigate-id="#' + $el.attr('id') + '"]').each(function () {
          var $this = $(this),
              hasCarousel = $($this.data('carousel-navigate-id')).get(0),
              toIndex = $this.data('carousel-navigate-to');

          if (hasCarousel) {
            $this.on('click', function () {
              $carousel.to(parseInt(toIndex) - 1);
            });
          }
        });
        $el.on('change.owl.carousel', function () {
          $('[data-carousel-navigate-id="#' + $el.attr('id') + '"]').removeClass('active');
        });
        $el.on('changed.owl.carousel', function (e) {
          $('[data-carousel-navigate-id="#' + $el.attr('id') + '"][data-carousel-navigate-to="' + (e.item.index + 1) + '"]').addClass('active');
        });
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCarousel: PluginCarousel
  }); // jquery plugin

  $.fn.themePluginCarousel = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCarousel($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Chart Circular

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__chartCircular';

  var PluginChartCircular = function PluginChartCircular($el, opts) {
    return this.initialize($el, opts);
  };

  PluginChartCircular.defaults = {
    accX: 0,
    accY: -150,
    delay: 1,
    barColor: '#0088CC',
    trackColor: '#f2f2f2',
    scaleColor: false,
    scaleLength: 5,
    lineCap: 'round',
    lineWidth: 13,
    size: 175,
    rotate: 0,
    animate: {
      duration: 2500,
      enabled: true
    }
  };
  PluginChartCircular.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.easyPieChart)) {
        return this;
      }

      var self = this,
          $el = this.options.wrapper,
          value = $el.attr('data-percent') ? $el.attr('data-percent') : 0,
          percentEl = $el.find('.percent');
      $.extend(true, self.options, {
        onStep: function onStep(from, to, currentValue) {
          percentEl.html(parseInt(currentValue));
        }
      });
      $el.attr('data-percent', 0);
      $el.easyPieChart(self.options);
      setTimeout(function () {
        $el.data('easyPieChart').update(value);
        $el.attr('data-percent', value);
      }, self.options.delay);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginChartCircular: PluginChartCircular
  }); // jquery plugin

  $.fn.themePluginChartCircular = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginChartCircular($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Countdown

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__countdown';

  var PluginCountdown = function PluginCountdown($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCountdown.defaults = {
    date: '2030/06/10 12:00:00',
    textDay: 'DAY',
    textHour: 'HRS',
    textMin: 'MIN',
    textSec: 'SEC',
    uppercase: true,
    numberClass: '',
    wrapperClass: '',
    insertHTMLbefore: '',
    insertHTMLafter: ''
  };
  PluginCountdown.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCountdown.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.countTo)) {
        return this;
      }

      var self = this,
          $el = this.options.wrapper,
          numberClass = self.options.numberClass ? ' ' + self.options.numberClass : '',
          wrapperClass = self.options.wrapperClass ? ' ' + self.options.wrapperClass : '';

      if (self.options.uppercase) {
        $el.countdown(self.options.date).on('update.countdown', function (event) {
          var $this = $(this).html(event.strftime(self.options.insertHTMLbefore + '<span class="days' + wrapperClass + '"><span class="' + numberClass + '">%D</span> ' + self.options.textDay + '<div class="d-inline text-uppercase">%!d</div></span> ' + '<span class="hours' + wrapperClass + '"><span class="' + numberClass + '">%H</span> ' + self.options.textHour + '</span> ' + '<span class="minutes' + wrapperClass + '"><span class="' + numberClass + '">%M</span> ' + self.options.textMin + '</span> ' + '<span class="seconds' + wrapperClass + '"><span class="' + numberClass + '">%S</span> ' + self.options.textSec + '</span> ' + self.options.insertHTMLafter));
        });
      } else {
        $el.countdown(self.options.date).on('update.countdown', function (event) {
          var $this = $(this).html(event.strftime(self.options.insertHTMLbefore + '<span class="days' + wrapperClass + '"><span class="' + numberClass + '">%D</span> ' + self.options.textDay + '%!d</span> ' + '<span class="hours' + wrapperClass + '"><span class="' + numberClass + '">%H</span> ' + self.options.textHour + '</span> ' + '<span class="minutes' + wrapperClass + '"><span class="' + numberClass + '">%M</span> ' + self.options.textMin + '</span> ' + '<span class="seconds' + wrapperClass + '"><span class="' + numberClass + '">%S</span> ' + self.options.textSec + '</span> ' + self.options.insertHTMLafter));
        });
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCountdown: PluginCountdown
  }); // jquery plugin

  $.fn.themePluginCountdown = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCountdown($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Counter

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__counter';

  var PluginCounter = function PluginCounter($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCounter.defaulst = {
    accX: 0,
    accY: 0,
    appendWrapper: false,
    prependWrapper: false,
    speed: 3000,
    refreshInterval: 100,
    decimals: 0,
    onUpdate: null,
    onComplete: null
  };
  PluginCounter.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCounter.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.countTo)) {
        return this;
      }

      var self = this,
          $el = this.options.wrapper;
      $.extend(self.options, {
        onComplete: function onComplete() {
          if ($el.data('append')) {
            if (self.options.appendWrapper) {
              var appendWrapper = $(self.options.appendWrapper);
              appendWrapper.append($el.data('append'));
              $el.html($el.html() + appendWrapper[0].outerHTML);
            } else {
              $el.html($el.html() + $el.data('append'));
            }
          }

          if ($el.data('prepend')) {
            if (self.options.prependWrapper) {
              var prependWrapper = $(self.options.prependWrapper);
              prependWrapper.append($el.data('prepend'));
              $el.html($el.html() + prependWrapper[0].outerHTML);
            } else {
              $el.html($el.data('prepend') + $el.html());
            }
          }
        }
      });
      $el.countTo(self.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCounter: PluginCounter
  }); // jquery plugin

  $.fn.themePluginCounter = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCounter($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // CursorEffect

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__cursorEffect';

  var PluginCursorEffect = function PluginCursorEffect($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCursorEffect.defaulst = {};
  PluginCursorEffect.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCursorEffect.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this; // Global Variables for cursor position

      self.clientX = -100;
      self.clientY = -100; // Hide Mouse Cursor

      if (self.options.hideMouseCursor) {
        self.$el.addClass('hide-mouse-cursor');
      } // Creates the cursor wrapper node


      var cursorOuter = document.createElement('DIV');
      cursorOuter.className = 'cursor-outer'; // Creates the cursor inner node

      var cursorInner = document.createElement('DIV');
      cursorInner.className = 'cursor-inner'; // Custom Cursor Outer Color

      if (self.options.cursorOuterColor) {
        cursorOuter.style = 'border-color: ' + self.options.cursorOuterColor + ';';
      } // Custom Cursor Inner Color


      if (self.options.cursorInnerColor) {
        cursorInner.style = 'background-color: ' + self.options.cursorInnerColor + ';';
      } // Size


      if (self.options.size) {
        switch (self.options.size) {
          case 'small':
            self.$el.addClass('cursor-effect-size-small');
            break;

          case 'big':
            self.$el.addClass('cursor-effect-size-big');
            break;
        }
      } // Style


      if (self.options.style) {
        self.$el.addClass(self.options.style);
      } // Prepend cursor wrapper node to the body


      document.body.prepend(cursorOuter); // Prepend cursor inner node to the body

      document.body.prepend(cursorInner); // Loop for render

      var render = function render() {
        cursorOuter.style.transform = 'translate(' + self.clientX + 'px, ' + self.clientY + 'px)';
        cursorInner.style.transform = 'translate(' + self.clientX + 'px, ' + self.clientY + 'px)';
        self.loopInside = requestAnimationFrame(render);
      };

      self.loop = requestAnimationFrame(render);
      return this;
    },
    events: function events() {
      var self = this,
          $cursorOuter = $('.cursor-outer'),
          $cursorInner = $('.cursor-inner');
      var initialCursorOuterBox = $cursorOuter[0].getBoundingClientRect(),
          initialCursorOuterRadius = $cursorOuter.css('border-radius'); // Update Cursor Position

      document.addEventListener('mousemove', function (e) {
        if (!self.isStuck) {
          self.clientX = e.clientX - 20;
          self.clientY = e.clientY - 20;
        }

        $cursorOuter.removeClass('opacity-0');
      });
      self.isStuck = false;
      $('[data-cursor-effect-hover]').on('mouseenter', function (e) {
        // Identify Event With Hover Class
        $cursorOuter.addClass('cursor-outer-hover');
        $cursorInner.addClass('cursor-inner-hover'); // Hover Color

        var hoverColor = $(this).data('cursor-effect-hover-color');
        $cursorOuter.addClass('cursor-color-' + hoverColor);
        $cursorInner.addClass('cursor-color-' + hoverColor); // Effect Types

        switch ($(this).data('cursor-effect-hover')) {
          case 'fit':
            var thisBox = $(this)[0].getBoundingClientRect();
            self.clientX = thisBox.x;
            self.clientY = thisBox.y;
            $cursorOuter.css({
              width: thisBox.width,
              height: thisBox.height,
              'border-radius': $(this).css('border-radius')
            }).addClass('cursor-outer-fit');
            $cursorInner.addClass('opacity-0');
            self.isStuck = true;
            break;

          case 'plus':
            $cursorInner.addClass('cursor-inner-plus');
            break;
        }
      });
      $('[data-cursor-effect-hover]').on('mouseleave', function () {
        // Identify Event With Hover Class
        $cursorOuter.removeClass('cursor-outer-hover');
        $cursorInner.removeClass('cursor-inner-hover'); // Remove Color Class

        var hoverColor = $(this).data('cursor-effect-hover-color');
        $cursorOuter.removeClass('cursor-color-' + hoverColor);
        $cursorInner.removeClass('cursor-color-' + hoverColor); // Effect Types

        switch ($(this).data('cursor-effect-hover')) {
          case 'fit':
            $cursorOuter.css({
              width: initialCursorOuterBox.width,
              height: initialCursorOuterBox.height,
              'border-radius': initialCursorOuterRadius
            }).removeClass('cursor-outer-fit');
            $cursorInner.removeClass('opacity-0');
            self.isStuck = false;
            break;

          case 'plus':
            $cursorInner.removeClass('cursor-inner-plus');
            break;
        }
      });
      $(window).on('scroll', function () {
        if ($cursorOuter.hasClass('cursor-outer-fit')) {
          $cursorOuter.addClass('opacity-0').removeClass('cursor-outer-fit');
        }
      });
      return this;
    },
    destroy: function destroy() {
      var self = this;
      self.$el.removeClass('hide-mouse-cursor cursor-effect-size-small cursor-effect-size-big cursor-effect-style-square');
      cancelAnimationFrame(self.loop);
      cancelAnimationFrame(self.loopInside);
      document.querySelector('.cursor-outer').remove();
      document.querySelector('.cursor-inner').remove();
      self.$el.removeData(instanceName, self);
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCursorEffect: PluginCursorEffect
  }); // jquery plugin

  $.fn.themePluginCursorEffect = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCursorEffect($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Float Element

(function (theme, $) {
  'use strict';

  theme = theme || {};
  var instanceName = '__floatElement';

  var PluginFloatElement = function PluginFloatElement($el, opts) {
    return this.initialize($el, opts);
  };

  PluginFloatElement.defaults = {
    startPos: 'top',
    speed: 3,
    horizontal: false,
    isInsideSVG: false,
    transition: false,
    transitionDelay: 0,
    transitionDuration: 500
  };
  PluginFloatElement.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginFloatElement.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper,
          $window = $(window),
          minus; // If has floating elements inside a SVG. 
      // Intersection Observer API do not check elements inside SVG's, so we need initialize trough top parent SVG

      if ($el.data('plugin-float-element-svg')) {
        $el.find('[data-plugin-float-element]').each(function () {
          var $this = $(this),
              opts;
          var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
          if (pluginOptions) opts = pluginOptions;
          $this.themePluginFloatElement(opts);
        });
        return this;
      }

      if (self.options.style) {
        $el.attr('style', self.options.style);
      }

      if ($window.width() > 767) {
        // Set Start Position
        if (self.options.startPos == 'none') {
          minus = '';
        } else if (self.options.startPos == 'top') {
          $el.css({
            top: 0
          });
          minus = '';
        } else {
          $el.css({
            bottom: 0
          });
          minus = '-';
        } // Set Transition


        if (self.options.transition) {
          $el.css({
            transition: 'ease-out transform ' + self.options.transitionDuration + 'ms ' + self.options.transitionDelay + 'ms'
          });
        } // First Load


        self.movement(minus); // Scroll

        $window.on('scroll', function () {
          self.movement(minus);
        });
      }

      return this;
    },
    movement: function movement(minus) {
      var self = this,
          $el = this.options.wrapper,
          $window = $(window),
          scrollTop = $window.scrollTop(),
          elementOffset = $el.offset().top,
          currentElementOffset = elementOffset - scrollTop,
          factor = self.options.isInsideSVG ? 2 : 100;
      var scrollPercent = factor * currentElementOffset / $window.height();

      if ($el.visible(true)) {
        if (!self.options.horizontal) {
          $el.css({
            transform: 'translate3d(0, ' + minus + scrollPercent / self.options.speed + '%, 0)'
          });
        } else {
          $el.css({
            transform: 'translate3d(' + minus + scrollPercent / self.options.speed + '%, ' + minus + scrollPercent / self.options.speed + '%, 0)'
          });
        }
      }
    }
  }; // expose to scope

  $.extend(theme, {
    PluginFloatElement: PluginFloatElement
  }); // jquery plugin

  $.fn.themePluginFloatElement = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginFloatElement($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // GDPR

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__gdpr';

  var PluginGDPR = function PluginGDPR($el, opts) {
    return this.initialize($el, opts);
  };

  PluginGDPR.defaults = {
    cookieBarShowDelay: 3000
  };
  PluginGDPR.prototype = {
    initialize: function initialize($el, opts) {
      var self = this;
      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginGDPR.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this; // Show

      if (!$.cookie('porto-privacy-bar')) {
        setTimeout(function () {
          self.options.wrapper.addClass('show');
        }, self.options.cookieBarShowDelay);
      } // If already has preferences cookie, check inputs according preferences cookie data


      if ($.cookie('porto-gdpr-preferences')) {
        var preferencesArr = $.cookie('porto-gdpr-preferences').split(',');

        for (var i = 0; i < preferencesArr.length; i++) {
          if ($('input[value="' + preferencesArr[i] + '"]').get(0)) {
            if ($('input[value="' + preferencesArr[i] + '"]').is(':checkbox')) {
              $('input[value="' + preferencesArr[i] + '"]').prop('checked', true);
            }
          }
        }
      }

      return this;
    },
    events: function events() {
      var self = this; // Agree Trigger

      self.options.wrapper.find('.gdpr-agree-trigger').on('click', function (e) {
        e.preventDefault();
        $('.gdpr-preferences-form').find('.gdpr-input').each(function () {
          if ($(this).is(':checkbox') || $(this).is(':hidden')) {
            $(this).prop('checked', true);
          }
        });
        $('.gdpr-preferences-form').trigger('submit').removeClass('show');
        self.removeCookieBar();
      }); // Preferences Trigger

      self.options.wrapper.find('.gdpr-preferences-trigger').on('click', function (e) {
        e.preventDefault();
        $('.gdpr-preferences-popup').addClass('show');
      }); // Close Popup Button

      $('.gdpr-close-popup').on('click', function (e) {
        e.preventDefault();
        $('.gdpr-preferences-popup').removeClass('show');
      }); // Close Popup When Click Outside of popup area

      $('.gdpr-preferences-popup').on('click', function (e) {
        if (!$(e.target).closest('.gdpr-preferences-popup-content').get(0)) {
          $('.gdpr-preferences-popup').removeClass('show');
        }
      }); // Preference Form

      $('.gdpr-preferences-form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this); // Save Preferences Button

        $this.find('button[type="submit"]').text('SAVING...'); // Form Data

        var formData = [];
        $this.find('.gdpr-input').each(function () {
          if ($(this).is(':checkbox') && $(this).is(':checked') || $(this).is(':hidden')) {
            formData.push($(this).val());
          }
        });
        $.cookie('porto-privacy-bar', true);
        setTimeout(function () {
          $this.find('button[type="submit"]').text('SAVED!').removeClass('btn-primary').addClass('btn-success');
          setTimeout(function () {
            $('.gdpr-preferences-popup').removeClass('show');
            self.removeCookieBar();
            $this.find('button[type="submit"]').text('SAVE PREFERENCES').removeClass('btn-success').addClass('btn-primary');

            if ($.cookie('porto-gdpr-preferences')) {
              $.cookie('porto-gdpr-preferences', formData);
              location.reload();
            } else {
              $.cookie('porto-gdpr-preferences', formData);

              if ($.isFunction($.fn['themePluginGDPRWrapper']) && $('[data-plugin-gdpr-wrapper]').length) {
                $(function () {
                  $('[data-plugin-gdpr-wrapper]:not(.manual)').each(function () {
                    var $this = $(this),
                        opts;
                    $this.removeData('__gdprwrapper');
                    var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
                    if (pluginOptions) opts = pluginOptions;
                    $this.themePluginGDPRWrapper(opts);
                  });
                });
              }
            }
          }, 500);
        }, 1000);
      }); // Remove/Reset Cookies

      $('.gdpr-reset-cookies').on('click', function (e) {
        e.preventDefault();
        self.clearCookies();
        location.reload();
      }); // Open Preferences

      $('.gdpr-open-preferences').on('click', function (e) {
        e.preventDefault();
        $('.gdpr-preferences-popup').toggleClass('show');
      });
      return this;
    },
    removeCookieBar: function removeCookieBar() {
      var self = this;
      self.options.wrapper.addClass('removing').on('transitionend', function () {
        setTimeout(function () {
          self.options.wrapper.removeClass('show removing');
        }, 500);
      });
      return this;
    },
    clearCookies: function clearCookies() {
      var self = this;
      $.removeCookie('porto-privacy-bar');
      $.removeCookie('porto-gdpr-preferences');
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginGDPR: PluginGDPR
  }); // jquery plugin

  $.fn.themePluginGDPR = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginGDPR($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // GDPR Wrapper

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__gdprwrapper';

  var PluginGDPRWrapper = function PluginGDPRWrapper($el, opts) {
    return this.initialize($el, opts);
  };

  PluginGDPRWrapper.defaults = {};
  PluginGDPRWrapper.prototype = {
    initialize: function initialize($el, opts) {
      var self = this;
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginGDPRWrapper.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;

      if ($.cookie('porto-gdpr-preferences') && $.cookie('porto-gdpr-preferences').indexOf(self.options.checkCookie) != -1) {
        $.ajax({
          url: self.options.ajaxURL,
          cache: false,
          complete: function complete(data) {
            setTimeout(function () {
              self.options.wrapper.html(data.responseText).addClass('show');
            }, 1000);
          }
        });
      } else {
        self.options.wrapper.addClass('show');
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginGDPRWrapper: PluginGDPRWrapper
  }); // jquery plugin

  $.fn.themePluginGDPRWrapper = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginGDPRWrapper($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Icon

(function (theme, $) {
  'use strict';

  theme = theme || {};
  var instanceName = '__icon';

  var PluginIcon = function PluginIcon($el, opts) {
    return this.initialize($el, opts);
  };

  PluginIcon.defaults = {
    color: '#2388ED',
    animated: false,
    delay: 300,
    onlySVG: false,
    removeClassAfterInit: false,
    fadeIn: true,
    accY: 0
  };
  PluginIcon.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginIcon.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper,
          color = self.options.color,
          elTopDistance = $el.offset().top,
          windowTopDistance = $(window).scrollTop(),
          duration = self.options.animated && !self.options.strokeBased ? 200 : 100; // Check origin

      if (window.location.protocol === 'file:') {
        $el.css({
          opacity: 1,
          width: $el.attr('width')
        });

        if (self.options.extraClass) {
          $el.addClass(self.options.extraClass);
        }

        if (self.options.extraClass.indexOf('-color-light') > 0) {
          $el.css({
            filter: 'invert(1)'
          });
        }

        $(window).trigger('icon.rendered');
        return;
      } // Duration


      if (self.options.duration) {
        duration = self.options.duration;
      } // SVG Content


      var SVGContent = $.get({
        url: $el.attr('src'),
        success: function success(data, status, xhr) {
          var iconWrapper = self.options.fadeIn ? $('<div class="animated-icon animated fadeIn">' + xhr.responseText + '</div>') : $('<div class="animated-icon animated">' + xhr.responseText + '</div>'),
              uniqid = 'icon_' + Math.floor(Math.random() * 26) + Date.now(); // Add ID

          iconWrapper.find('svg').attr('id', uniqid); // Identify with filename

          iconWrapper.find('svg').attr('data-filename', $el.attr('src').split(/(\\|\/)/g).pop());

          if ($el.attr('width')) {
            iconWrapper.find('svg').attr('width', $el.attr('width')).attr('height', $el.attr('width'));
          }

          if ($el.attr('height')) {
            iconWrapper.find('svg').attr('height', $el.attr('height'));
          }

          if (self.options.svgViewBox) {
            iconWrapper.find('svg').attr('viewBox', self.options.svgViewBox);
          }

          $el.replaceWith(iconWrapper);

          if (self.options.extraClass) {
            iconWrapper.addClass(self.options.extraClass);
          }

          if (self.options.removeClassAfterInit) {
            iconWrapper.removeClass(self.options.removeClassAfterInit);
          }

          if (self.options.onlySVG) {
            $(window).trigger('icon.rendered');
            return this;
          }

          $el = iconWrapper;
          var icon = new Vivus(uniqid, {
            start: 'manual',
            type: 'sync',
            selfDestroy: true,
            duration: duration,
            onReady: function onReady(obj) {
              var styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style"),
                  animateStyle = ''; // SVG Fill Based

              if (self.options.animated && !self.options.strokeBased || !self.options.animated && color && !self.options.strokeBased) {
                animateStyle = 'stroke-width: 0.1px; fill-opacity: 0; transition: ease fill-opacity 300ms;'; // Set Style on SVG inside object

                styleElement.textContent = '#' + uniqid + ' path, #' + uniqid + ' line, #' + uniqid + ' rect, #' + uniqid + ' circle, #' + uniqid + ' polyline { fill: ' + color + '; stroke: ' + color + '; ' + animateStyle + (self.options.svgStyle ? self.options.svgStyle : "") + ' } .finished path { fill-opacity: 1; }';
                obj.el.appendChild(styleElement);
              } // SVG Stroke Based


              if (self.options.animated && self.options.strokeBased || !self.options.animated && color && self.options.strokeBased) {
                // Set Style on SVG inside object
                styleElement.textContent = '#' + uniqid + ' path, #' + uniqid + ' line, #' + uniqid + ' rect, #' + uniqid + ' circle, #' + uniqid + ' polyline { stroke: ' + color + '; ' + (self.options.svgStyle ? self.options.svgStyle : "") + '}';
                obj.el.appendChild(styleElement);
              }

              $.event.trigger('theme.plugin.icon.svg.ready');
            }
          }); // Isn't animated

          if (!self.options.animated) {
            setTimeout(function () {
              icon.finish();
            }, 10);
            $el.css({
              opacity: 1
            });
          } // Animated


          if (self.options.animated && $(window).width() > 767) {
            // First Load
            if ($el.visible(true)) {
              self.startIconAnimation(icon, $el);
            } else if (elTopDistance < windowTopDistance) {
              self.startIconAnimation(icon, $el);
            } // On Scroll


            $(window).on('scroll', function () {
              if ($el.visible(true)) {
                self.startIconAnimation(icon, $el);
              }
            });
          } else {
            $el.css({
              opacity: 1
            });
            icon.finish();
            $(window).on('theme.plugin.icon.svg.ready', function () {
              setTimeout(function () {
                icon.el.setAttribute('class', 'finished');
                icon.finish();
              }, 300);
            });
          }

          $(window).trigger('icon.rendered');
        }
      });
      return this;
    },
    startIconAnimation: function startIconAnimation(icon, $el) {
      var self = this; // Animate for better performance

      $({
        to: 0
      }).animate({
        to: 1
      }, self.options.strokeBased ? self.options.delay : self.options.delay + 300, function () {
        $el.css({
          opacity: 1
        });
      });
      $({
        to: 0
      }).animate({
        to: 1
      }, self.options.delay, function () {
        icon.play(1);
        setTimeout(function () {
          icon.el.setAttribute('class', 'finished');
        }, icon.duration * 5);
      });
    }
  }; // expose to scope

  $.extend(theme, {
    PluginIcon: PluginIcon
  }); // jquery plugin

  $.fn.themePluginIcon = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginIcon($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Lightbox

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__lightbox';

  var PluginLightbox = function PluginLightbox($el, opts) {
    return this.initialize($el, opts);
  };

  PluginLightbox.defaults = {
    tClose: 'Close (Esc)',
    // Alt text on close button
    tLoading: 'Loading...',
    // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
      tPrev: 'Previous (Left arrow key)',
      // Alt text on left arrow
      tNext: 'Next (Right arrow key)',
      // Alt text on right arrow
      tCounter: '%curr% of %total%' // Markup for "1 of 7" counter

    },
    image: {
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded

    },
    ajax: {
      tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed

    },
    callbacks: {
      open: function open() {
        $('html').addClass('lightbox-opened');
      },
      close: function close() {
        $('html').removeClass('lightbox-opened');
      }
    }
  };
  PluginLightbox.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.magnificPopup)) {
        return this;
      }

      this.options.wrapper.magnificPopup(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginLightbox: PluginLightbox
  }); // jquery plugin

  $.fn.themePluginLightbox = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginLightbox($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Loading Overlay

(function (theme, $) {
  'use strict';

  theme = theme || {}; // Default

  var loadingOverlayDefaultTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>', '</div>'].join(''); // Percentage

  var loadingOverlayPercentageTemplate = ['<div class="loading-overlay loading-overlay-percentage">', '<div class="page-loader-progress-wrapper"><span class="page-loader-progress">0</span><span class="page-loader-progress-symbol">%</span></div>', '</div>'].join(''); // Cubes

  var loadingOverlayCubesTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-thecube"><div class="cssload-cube cssload-c1"></div><div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div><div class="cssload-cube cssload-c3"></div></div></div>', '</div>'].join(''); // Cube Progress

  var loadingOverlayCubeProgressTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><span class="cssload-cube-progress"><span class="cssload-cube-progress-inner"></span></span></div>', '</div>'].join(''); // Float Rings

  var loadingOverlayFloatRingsTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-float-rings-loader"><div class="cssload-float-rings-inner cssload-one"></div><div class="cssload-float-rings-inner cssload-two"></div><div class="cssload-float-rings-inner cssload-three"></div></div></div>', '</div>'].join(''); // Floating Bars

  var loadingOverlayFloatBarsTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-float-bars-container"><ul class="cssload-float-bars-flex-container"><li><span class="cssload-float-bars-loading"></span></li></div></div></div>', '</div>'].join(''); // Speeding Wheel

  var loadingOverlaySpeedingWheelTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-speeding-wheel-container"><div class="cssload-speeding-wheel"></div></div></div>', '</div>'].join(''); // Zenith

  var loadingOverlayZenithTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-zenith-container"><div class="cssload-zenith"></div></div></div>', '</div>'].join(''); // Spinning Square

  var loadingOverlaySpinningSquareTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="cssload-spinning-square-loading"></div></div>', '</div>'].join(''); // Pulse

  var loadingOverlayPulseTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="wrapper-pulse"><div class="cssload-pulse-loader"></div></div></div>', '</div>'].join('');

  var LoadingOverlay = function LoadingOverlay($wrapper, options, noInheritOptions) {
    return this.initialize($wrapper, options, noInheritOptions);
  };

  LoadingOverlay.prototype = {
    options: {
      css: {},
      hideDelay: 500,
      progressMinTimeout: 0,
      effect: 'default'
    },
    initialize: function initialize($wrapper, options, noInheritOptions) {
      this.$wrapper = $wrapper;
      this.setVars().setOptions(options, noInheritOptions).build().events().dynamicShowHideEvents();
      this.$wrapper.data('loadingOverlay', this);
    },
    setVars: function setVars() {
      this.$overlay = this.$wrapper.find('.loading-overlay');
      this.pageStatus = null;
      this.progress = null;
      this.animationInterval = 33;
      return this;
    },
    setOptions: function setOptions(options, noInheritOptions) {
      if (!this.$overlay.get(0)) {
        this.matchProperties();
      }

      if (noInheritOptions) {
        this.options = $.extend(true, {}, this.options, options);
      } else {
        this.options = $.extend(true, {}, this.options, options, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
      }

      this.loaderClass = this.getLoaderClass(this.options.css.backgroundColor);
      return this;
    },
    build: function build() {
      var _self = this;

      if (!this.$overlay.closest(document.documentElement).get(0)) {
        if (!this.$cachedOverlay) {
          switch (_self.options.effect) {
            case 'percentageProgress1':
              this.$overlay = $(loadingOverlayPercentageTemplate).clone();
              break;

            case 'percentageProgress2':
              this.$overlay = $(loadingOverlayPercentageTemplate).clone();
              this.$overlay.addClass('loading-overlay-percentage-effect-2').prepend('<div class="loading-overlay-background-layer"></div>');
              break;

            case 'cubes':
              this.$overlay = $(loadingOverlayCubesTemplate).clone();
              break;

            case 'cubeProgress':
              this.$overlay = $(loadingOverlayCubeProgressTemplate).clone();
              break;

            case 'floatRings':
              this.$overlay = $(loadingOverlayFloatRingsTemplate).clone();
              break;

            case 'floatBars':
              this.$overlay = $(loadingOverlayFloatBarsTemplate).clone();
              break;

            case 'speedingWheel':
              this.$overlay = $(loadingOverlaySpeedingWheelTemplate).clone();
              break;

            case 'zenith':
              this.$overlay = $(loadingOverlayZenithTemplate).clone();
              break;

            case 'spinningSquare':
              this.$overlay = $(loadingOverlaySpinningSquareTemplate).clone();
              break;

            case 'pulse':
              this.$overlay = $(loadingOverlayPulseTemplate).clone();
              break;

            case 'default':
            default:
              this.$overlay = $(loadingOverlayDefaultTemplate).clone();
              break;
          }

          if (this.options.css) {
            this.$overlay.css(this.options.css);
            this.$overlay.find('.loader').addClass(this.loaderClass);
          }
        } else {
          this.$overlay = this.$cachedOverlay.clone();
        }

        this.$wrapper.prepend(this.$overlay);
      }

      if (!this.$cachedOverlay) {
        this.$cachedOverlay = this.$overlay.clone();
      }

      if (['percentageProgress1', 'percentageProgress2'].includes(_self.options.effect)) {
        _self.updateProgress();

        if (_self.options.isDynamicHideShow) {
          setTimeout(function () {
            _self.progress = 'complete';
            $('.page-loader-progress').text(100);

            if (['percentageProgress2'].includes(_self.options.effect)) {
              $('.loading-overlay-background-layer').css({
                width: '100%'
              });
            }
          }, 2800);
        }
      }

      return this;
    },
    events: function events() {
      var _self = this;

      if (this.options.startShowing) {
        _self.show();
      }

      if (this.$wrapper.is('body') || this.options.hideOnWindowLoad) {
        $(window).on('load error', function () {
          setTimeout(function () {
            _self.hide();
          }, _self.options.progressMinTimeout);
        });
      }

      if (this.options.listenOn) {
        $(this.options.listenOn).on('loading-overlay:show beforeSend.ic', function (e) {
          e.stopPropagation();

          _self.show();
        }).on('loading-overlay:hide complete.ic', function (e) {
          e.stopPropagation();

          _self.hide();
        });
      }

      this.$wrapper.on('loading-overlay:show beforeSend.ic', function (e) {
        if (e.target === _self.$wrapper.get(0)) {
          e.stopPropagation();

          _self.show();

          return true;
        }

        return false;
      }).on('loading-overlay:hide complete.ic', function (e) {
        if (e.target === _self.$wrapper.get(0)) {
          e.stopPropagation();

          _self.hide();

          return true;
        }

        return false;
      });

      if (['percentageProgress1', 'percentageProgress2'].includes(_self.options.effect)) {
        $(window).on('load', function () {
          setTimeout(function () {
            _self.pageStatus = "complete";
            $('.page-loader-progress').text(100);

            if (['percentageProgress2'].includes(_self.options.effect)) {
              $('.loading-overlay-background-layer').css({
                width: '100%'
              });
            }
          }, _self.options.progressMinTimeout);
        });
      }

      return this;
    },
    show: function show() {
      this.build();
      this.position = this.$wrapper.css('position').toLowerCase();

      if (this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed') {
        this.$wrapper.css({
          position: 'relative'
        });
      }

      this.$wrapper.addClass('loading-overlay-showing');
    },
    hide: function hide() {
      var _self = this;

      setTimeout(function () {
        _self.$wrapper.removeClass('loading-overlay-showing');

        if (this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed') {
          _self.$wrapper.css({
            position: ''
          });
        }

        $(window).trigger('loading.overlay.ready');
      }, _self.options.hideDelay);
    },
    updateProgress: function updateProgress() {
      var _self = this;

      var render = function render() {
        if (_self.pageStatus == "complete") {
          $('.page-loader-progress').text(100);
          setTimeout(function () {
            $('.page-loader-progress').addClass('d-none');
          }, 700);
        } else {
          if (_self.progress == null) {
            _self.progress = 1;
          }

          _self.progress = _self.progress + 1;

          if (_self.progress >= 0 && _self.progress <= 30) {
            _self.animationInterval += 1;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 30 && _self.progress <= 60) {
            _self.animationInterval += 2;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 60 && _self.progress <= 80) {
            _self.animationInterval += 40;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 80 && _self.progress <= 90) {
            _self.animationInterval += 80;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 90 && _self.progress <= 95) {
            _self.animationInterval += 150;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress > 95 && _self.progress <= 99) {
            _self.animationInterval += 400;
            $('.page-loader-progress').text(_self.progress);
          } else if (_self.progress >= 100) {
            $('.page-loader-progress').text(99);
          }

          if (['percentageProgress2'].includes(_self.options.effect)) {
            $('.loading-overlay-background-layer').css({
              width: _self.progress + '%'
            });
          }

          self.loopInside = setTimeout(render, _self.animationInterval);
        }
      };

      render();
      return this;
    },
    matchProperties: function matchProperties() {
      var i, l, properties;
      properties = ['backgroundColor', 'borderRadius'];
      l = properties.length;

      for (i = 0; i < l; i++) {
        var obj = {};
        obj[properties[i]] = this.$wrapper.css(properties[i]);
        $.extend(this.options.css, obj);
      }
    },
    getLoaderClass: function getLoaderClass(backgroundColor) {
      if (!backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit') {
        return 'black';
      }

      var hexColor, r, g, b, yiq;

      var colorToHex = function colorToHex(color) {
        var hex, rgb;

        if (color.indexOf('#') > -1) {
          hex = color.replace('#', '');
        } else {
          rgb = color.match(/\d+/g);
          hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
        }

        if (hex.length === 3) {
          hex = hex + hex;
        }

        return hex;
      };

      hexColor = colorToHex(backgroundColor);
      r = parseInt(hexColor.substr(0, 2), 16);
      g = parseInt(hexColor.substr(2, 2), 16);
      b = parseInt(hexColor.substr(4, 2), 16);
      yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? 'black' : 'white';
    },
    dynamicShowHide: function dynamicShowHide(effect) {
      var _self = this; // Remove Loading Overlay Data


      $('body').removeData('loadingOverlay'); // Remove Html Of Loading Overlay

      $('.loading-overlay').remove();

      if (effect == '') {
        return this;
      } // Initialize New Loading Overlay (second parameter is to NO inherit data-plugin-options)


      $('body').loadingOverlay({
        effect: effect ? effect : 'pulse',
        isDynamicHideShow: true
      }, true); // Show Loading Overlay Loader

      $('body').data('loadingOverlay').show(); // Hide Loading Overlay Loader

      setTimeout(function () {
        $('body').data('loadingOverlay').hide();
      }, 3000);
      return this;
    },
    dynamicShowHideEvents: function dynamicShowHideEvents() {
      var _self = this; // Button


      $(document).off('click.loading-overlay-button').on('click.loading-overlay-button', '.loading-overlay-button', function (e) {
        e.preventDefault();

        _self.dynamicShowHide($(this).data('effect'));
      }); // Select

      $(document).off('change.loading-overlay-select').on('change.loading-overlay-select', '.loading-overlay-select', function () {
        _self.dynamicShowHide($(this).val());
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    LoadingOverlay: LoadingOverlay
  }); // expose as a jquery plugin

  $.fn.loadingOverlay = function (opts, noInheritOptions) {
    return this.each(function () {
      var $this = $(this);
      var loadingOverlay = $this.data('loadingOverlay');

      if (loadingOverlay) {
        return loadingOverlay;
      } else {
        var options = opts || $this.data('loading-overlay-options') || {};
        return new LoadingOverlay($this, options, noInheritOptions);
      }
    });
  }; // auto init
  //$('[data-loading-overlay]').loadingOverlay();

}).apply(this, [window.theme, jQuery]); // Masonry

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__masonry';

  var PluginMasonry = function PluginMasonry($el, opts) {
    return this.initialize($el, opts);
  };

  PluginMasonry.defaults = {};
  PluginMasonry.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMasonry.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.isotope)) {
        return this;
      }

      var self = this,
          $window = $(window);
      self.$loader = false;

      if (self.options.wrapper.parents('.masonry-loader').get(0)) {
        self.$loader = self.options.wrapper.parents('.masonry-loader');
        self.createLoader();
      }

      self.options.wrapper.one('layoutComplete', function (event, laidOutItems) {
        self.removeLoader();
      });
      self.options.wrapper.waitForImages(function () {
        self.options.wrapper.isotope(self.options);
      }); // IE10/11 fix

      if ($('html').hasClass('ie10') || $('html').hasClass('ie11')) {
        var padding = parseInt(self.options.wrapper.children().css('padding-left')) + parseInt(self.options.wrapper.children().css('padding-right'));
      }

      $(window).on('resize', function () {
        setTimeout(function () {
          self.options.wrapper.isotope('layout');
        }, 300);
      });
      setTimeout(function () {
        self.removeLoader();
      }, 3000);
      return this;
    },
    createLoader: function createLoader() {
      var self = this;
      var loaderTemplate = ['<div class="bounce-loader">', '<div class="bounce1"></div>', '<div class="bounce2"></div>', '<div class="bounce3"></div>', '</div>'].join('');
      self.$loader.append(loaderTemplate);
      return this;
    },
    removeLoader: function removeLoader() {
      var self = this;

      if (self.$loader) {
        self.$loader.removeClass('masonry-loader-showing');
        setTimeout(function () {
          self.$loader.addClass('masonry-loader-loaded');
        }, 300);
      }
    }
  }; // expose to scope

  $.extend(theme, {
    PluginMasonry: PluginMasonry
  }); // jquery plugin

  $.fn.themePluginMasonry = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMasonry($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Match Height

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__matchHeight';

  var PluginMatchHeight = function PluginMatchHeight($el, opts) {
    return this.initialize($el, opts);
  };

  PluginMatchHeight.defaults = {
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  };
  PluginMatchHeight.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMatchHeight.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.matchHeight)) {
        return this;
      }

      var self = this;
      self.options.wrapper.matchHeight(self.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginMatchHeight: PluginMatchHeight
  }); // jquery plugin

  $.fn.themePluginMatchHeight = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMatchHeight($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Parallax

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__parallax';

  var PluginParallax = function PluginParallax($el, opts) {
    return this.initialize($el, opts);
  };

  PluginParallax.defaults = {
    speed: 1.5,
    horizontalPosition: '50%',
    offset: 0,
    parallaxDirection: 'top',
    parallaxHeight: '180%',
    scrollableParallax: false,
    scrollableParallaxMinWidth: 991,
    startOffset: 7,
    transitionDuration: '200ms',
    cssProperty: 'width',
    cssValueStart: 40,
    cssValueEnd: 100,
    cssValueUnit: 'vw',
    mouseParallax: false
  };
  PluginParallax.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginParallax.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $window = $(window),
          offset,
          yPos,
          bgpos,
          background,
          rotateY; // Mouse Parallax

      if (self.options.mouseParallax) {
        $window.mousemove(function (e) {
          $('.parallax-mouse-object', self.options.wrapper).each(function () {
            var moving_value = $(this).attr('data-value');
            var x = e.clientX * moving_value / 250;
            var y = e.clientY * moving_value / 250;
            $(this).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
          });
        });
        return this;
      } // Scrollable


      if (self.options.scrollableParallax && $(window).width() > self.options.scrollableParallaxMinWidth) {
        var $scrollableWrapper = self.options.wrapper.find('.scrollable-parallax-wrapper');

        if ($scrollableWrapper.get(0)) {
          var progress = $(window).scrollTop() > self.options.wrapper.offset().top + $(window).outerHeight() ? self.options.cssValueEnd : self.options.cssValueStart,
              cssValueUnit = self.options.cssValueUnit ? self.options.cssValueUnit : '';
          $scrollableWrapper.css({
            'background-image': 'url(' + self.options.wrapper.data('image-src') + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-attachment': 'fixed',
            'transition': 'ease ' + self.options.cssProperty + ' ' + self.options.transitionDuration,
            'width': progress + '%'
          });
          $(window).on('scroll', function (e) {
            if (self.options.wrapper.visible(true)) {
              var $window = $(window),
                  scrollTop = $window.scrollTop(),
                  elementOffset = self.options.wrapper.offset().top,
                  currentElementOffset = elementOffset - scrollTop;
              var scrollPercent = Math.abs(+(currentElementOffset - $window.height()) / (self.options.startOffset ? self.options.startOffset : 7)); // Increment progress value according scroll position

              if (scrollPercent <= self.options.cssValueEnd && progress <= self.options.cssValueEnd) {
                progress = self.options.cssValueStart + scrollPercent;
              } // Adjust CSS end value


              if (progress > self.options.cssValueEnd) {
                progress = self.options.cssValueEnd;
              } // Adjust CSS start value


              if (progress < self.options.cssValueStart) {
                progress = self.options.cssValueStart;
              }

              var styles = {};
              styles[self.options.cssProperty] = progress + cssValueUnit;
              $scrollableWrapper.css(styles);
            }
          });
        }

        return;
      } // Create Parallax Element


      if (self.options.fadeIn) {
        background = $('<div class="parallax-background fadeIn animated"></div>');
      } else {
        background = $('<div class="parallax-background"></div>');
      } // Set Style for Parallax Element


      background.css({
        'background-image': 'url(' + self.options.wrapper.data('image-src') + ')',
        'background-size': 'cover',
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': self.options.parallaxHeight
      }); // Add Parallax Element on DOM

      self.options.wrapper.prepend(background); // Set Overlfow Hidden and Position Relative to Parallax Wrapper

      self.options.wrapper.css({
        'position': 'relative',
        'overflow': 'hidden'
      }); // Parallax Effect on Scroll & Resize

      var parallaxEffectOnScrolResize = function parallaxEffectOnScrolResize() {
        $window.on('scroll resize', function () {
          offset = self.options.wrapper.offset();
          yPos = -($window.scrollTop() - (offset.top - 100)) / (self.options.speed + 2);
          plxPos = yPos < 0 ? Math.abs(yPos) : -Math.abs(yPos);
          rotateY = $('html[dir="rtl"]').get(0) ? ' rotateY(180deg)' : ''; // RTL

          if (self.options.parallaxDirection == 'bottom') {
            self.options.offset = 250;
          }

          var y = plxPos - 50 + self.options.offset;

          if (self.options.parallaxDirection == 'bottom') {
            y = y < 0 ? Math.abs(y) : -Math.abs(y);
          }

          background.css({
            'transform': 'translate3d(0, ' + y + 'px, 0)' + rotateY,
            'background-position-x': self.options.horizontalPosition
          });
        });
        $window.trigger('scroll');
      };

      if (!$.browser.mobile) {
        parallaxEffectOnScrolResize();
      } else {
        if (self.options.enableOnMobile == true) {
          parallaxEffectOnScrolResize();
        } else {
          self.options.wrapper.addClass('parallax-disabled');
        }
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginParallax: PluginParallax
  }); // jquery plugin

  $.fn.themePluginParallax = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginParallax($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Progress Bar

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__progressBar';

  var PluginProgressBar = function PluginProgressBar($el, opts) {
    return this.initialize($el, opts);
  };

  PluginProgressBar.defaults = {
    accX: 0,
    accY: -50,
    delay: 1
  };
  PluginProgressBar.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginProgressBar.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper,
          delay = 1;
      delay = $el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay;
      $el.addClass($el.attr('data-appear-animation'));
      setTimeout(function () {
        $el.animate({
          width: $el.attr('data-appear-progress-animation')
        }, 1500, 'easeOutQuad', function () {
          $el.find('.progress-bar-tooltip').animate({
            opacity: 1
          }, 500, 'easeOutQuad');
        });
      }, delay);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginProgressBar: PluginProgressBar
  }); // jquery plugin

  $.fn.themePluginProgressBar = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginProgressBar($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Random Images

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__randomimages';

  var PluginRandomImages = function PluginRandomImages($el, opts) {
    return this.initialize($el, opts);
  };

  PluginRandomImages.defaults = {
    minWindowWidth: 0,
    random: true,
    imagesListURL: null,
    lightboxImagesListURL: null,
    delay: null,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    stopAtImageIndex: false,
    // The value shoudl be the index value of array with images as string. Eg: '2' 
    stopAfterFewSeconds: false,
    // The value should be in mili-seconds. Eg: 10000 = 10 seconds
    stopAfterXTimes: false,
    accY: 0
  };
  PluginRandomImages.prototype = {
    initialize: function initialize($el, opts) {
      this.$el = $el;
      this.st = '';
      this.times = 0;
      this.perImageIndex = 0;

      if ($el.is('img') && typeof opts.imagesListURL == 'undefined') {
        return false;
      }

      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginRandomImages.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this; // Control the screens size we want to have the plugin working

      if ($(window).width() < self.options.minWindowWidth) {
        return false;
      } // Check if is single image or wrapper with images inside


      if (self.$el.is('img')) {
        // Check it's inside a lightbox
        self.isInsideLightbox = self.$el.closest('.lightbox').length ? true : false; // Push the initial image to lightbox list/array

        if (self.isInsideLightbox && self.options.lightboxImagesListURL) {
          self.options.lightboxImagesListURL.push(self.$el.closest('.lightbox').attr('href'));
        } // Push the current image src to the array


        self.options.imagesListURL.push(self.$el.attr('src')); // Start with lastIndex as the first image loaded on the page

        self.lastIndex = self.options.imagesListURL.length - 1; // Identify the last random image element (if has more than one on the page)

        if (self.options.random == false) {
          $('.plugin-random-images').each(function (i) {
            if (i == $('.plugin-random-images').length - 1) {
              $(this).addClass('the-last');
            }
          });
        } // Start the recursive timeout


        setTimeout(function () {
          self.recursiveTimeout(self.perImageTag, self.options.delay == null ? 3000 : self.options.delay);
        }, self.options.delay == null ? 300 : self.options.delay / 3);
      } else {
        // Start the recursive timeout
        setTimeout(self.recursiveTimeout(self.perWrapper, self.options.delay ? self.options.delay : getPerWrapperHighDelay(), false), 300);
      } // Stop After Few Seconds


      if (self.options.stopAfterFewSeconds) {
        setTimeout(function () {
          clearTimeout(self.st);
        }, self.options.stopAfterFewSeconds);
      }

      return this;
    },
    perImageTag: function perImageTag() {
      var self = this; // Generate a random index to make the images rotate randomly

      var index = self.options.random ? Math.floor(Math.random() * self.options.imagesListURL.length) : self.lastIndex; // Avoid repeat the same image

      if (self.lastIndex !== '' && self.lastIndex == index) {
        if (self.options.random) {
          while (index == self.lastIndex) {
            index = Math.floor(Math.random() * self.options.imagesListURL.length);
          }
        } else {
          index = index - 1;

          if (index == -1) {
            index = self.options.imagesListURL.length - 1;
          }
        }
      } // Turn the image ready for animations


      self.$el.addClass('animated'); // Remove the entrance animation class and add the out animation class

      self.$el.removeClass(self.options.animateIn).addClass(self.options.animateOut); // Change the image src and add the class for entrance animation

      setTimeout(function () {
        self.$el.attr('src', self.options.imagesListURL[index]).removeClass(self.options.animateOut).addClass(self.options.animateIn);

        if (self.isInsideLightbox && self.options.lightboxImagesListURL) {
          self.$el.closest('.lightbox').attr('href', self.options.lightboxImagesListURL[index]);
        }
      }, 1000); // Save the last index for future checks

      self.lastIndex = index; // Increment the times var

      self.times++; // Save the index for stopAtImageIndex option

      self.perImageIndex = index;
      return this;
    },
    // Iterate the imaes loop and get the higher value
    getPerWrapperHighDelay: function getPerWrapperHighDelay() {
      var self = this,
          $wrapper = self.$el,
          delay = 0;
      $wrapper.find('img').each(function () {
        var $image = $(this);

        if ($image.data('rimage-delay') && parseInt($image.data('rimage-delay')) > delay) {
          delay = parseInt($image.data('rimage-delay'));
        }
      });
      return delay;
    },
    perWrapper: function perWrapper() {
      var self = this,
          $wrapper = self.$el; // Turns the imageLlistURL into an array

      self.options.imagesListURL = []; // Find all images inside the element wrapper and push their sources to image list array

      $wrapper.find('img').each(function () {
        var $image = $(this);
        self.options.imagesListURL.push($image.attr('src'));
      }); // Shuffle the images list array (random effect)

      self.options.imagesListURL = self.shuffle(self.options.imagesListURL); // Iterate over each image and make some checks like delay for each image, animations, etc...

      $wrapper.find('img').each(function (index) {
        var $image = $(this),
            animateIn = $image.data('rimage-animate-in') ? $image.data('rimage-animate-in') : self.options.animateIn,
            animateOut = $image.data('rimage-animate-out') ? $image.data('rimage-animate-out') : self.options.animateOut,
            delay = $image.data('rimage-delay') ? $image.data('rimage-delay') : 2000;
        $image.addClass('animated');
        setTimeout(function () {
          $image.removeClass(animateIn).addClass(animateOut);
        }, delay / 2);
        setTimeout(function () {
          $image.attr('src', self.options.imagesListURL[index]).removeClass(animateOut).addClass(animateIn);
        }, delay);
      }); // Increment the times variable

      self.times++;
      return this;
    },
    recursiveTimeout: function recursiveTimeout(callback, delay) {
      var self = this;

      var timeout = function timeout() {
        if (callback !== null) {
          callback.call(self);
        } // Recursive


        self.st = setTimeout(timeout, delay == null ? 1000 : delay);

        if (self.options.random == false) {
          if (self.$el.hasClass('the-last')) {
            $('.plugin-random-images').trigger('rimages.start');
          } else {
            clearTimeout(self.st);
          }
        } // Stop At Image Index


        if (self.options.stopAtImageIndex && parseInt(self.options.stopAtImageIndex) == self.perImageIndex) {
          clearTimeout(self.st);
        } // Stop After X Timers


        if (self.options.stopAfterXTimes == self.times) {
          clearTimeout(self.st);
        }
      };

      timeout();
      self.$el.on('rimages.start', function () {
        clearTimeout(self.st);
        self.st = setTimeout(timeout, delay == null ? 1000 : delay);
      });
    },
    shuffle: function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginRandomImages: PluginRandomImages
  }); // jquery plugin

  $.fn.themePluginRandomImages = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginRandomImages($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Read More

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__readmore';

  var PluginReadMore = function PluginReadMore($el, opts) {
    return this.initialize($el, opts);
  };

  PluginReadMore.defaults = {
    buttonOpenLabel: 'Read More <i class="fas fa-chevron-down text-2 ms-1"></i>',
    buttonCloseLabel: 'Read Less <i class="fas fa-chevron-up text-2 ms-1"></i>',
    enableToggle: true,
    maxHeight: 110,
    overlayColor: '#FFF',
    overlayHeight: 100,
    startOpened: false,
    align: 'left'
  };
  PluginReadMore.prototype = {
    initialize: function initialize($el, opts) {
      var self = this;
      this.$el = $el;
      this.setData().setOptions(opts).build().events();

      if (self.options.startOpened) {
        self.options.wrapper.find('.readmore-button-wrapper > a').trigger('click');
      }

      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginReadMore.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;
      self.options.wrapper.addClass('position-relative'); // Overlay

      self.options.wrapper.append('<div class="readmore-overlay"></div>'); // Check if is Safari

      var backgroundCssValue = 'linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, ' + self.options.overlayColor + ' 100%)';

      if ($('html').hasClass('safari')) {
        backgroundCssValue = '-webkit-linear-gradient(top, rgba(2, 0, 36, 0) 0%, ' + self.options.overlayColor + ' 100%)';
      }

      self.options.wrapper.find('.readmore-overlay').css({
        background: backgroundCssValue,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: self.options.overlayHeight,
        'z-index': 1
      }); // Read More Button

      self.options.wrapper.find('.readmore-button-wrapper').removeClass('d-none').css({
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        'z-index': 2
      }); // Button Label

      self.options.wrapper.find('.readmore-button-wrapper > a').html(self.options.buttonOpenLabel);
      self.options.wrapper.css({
        'height': self.options.maxHeight,
        'overflow-y': 'hidden'
      }); // Alignment

      switch (self.options.align) {
        case 'center':
          self.options.wrapper.find('.readmore-button-wrapper').addClass('text-center');
          break;

        case 'right':
          self.options.wrapper.find('.readmore-button-wrapper').addClass('text-right');
          break;

        case 'left':
        default:
          self.options.wrapper.find('.readmore-button-wrapper').addClass('text-left');
          break;
      }

      return this;
    },
    events: function events() {
      var self = this; // Read More

      self.readMore = function () {
        self.options.wrapper.find('.readmore-button-wrapper > a:not(.readless)').on('click', function (e) {
          e.preventDefault();
          var $this = $(this);
          setTimeout(function () {
            self.options.wrapper.animate({
              'height': self.options.wrapper[0].scrollHeight
            }, function () {
              if (!self.options.enableToggle) {
                $this.fadeOut();
              }

              $this.html(self.options.buttonCloseLabel).addClass('readless').off('click');
              self.readLess();
              self.options.wrapper.find('.readmore-overlay').fadeOut();
              self.options.wrapper.css({
                'max-height': 'none',
                'overflow': 'visible'
              });
              self.options.wrapper.find('.readmore-button-wrapper').animate({
                bottom: -20
              });
            });
          }, 200);
        });
      }; // Read Less


      self.readLess = function () {
        self.options.wrapper.find('.readmore-button-wrapper > a.readless').on('click', function (e) {
          e.preventDefault();
          var $this = $(this); // Button

          self.options.wrapper.find('.readmore-button-wrapper').animate({
            bottom: 0
          }); // Overlay

          self.options.wrapper.find('.readmore-overlay').fadeIn();
          setTimeout(function () {
            self.options.wrapper.height(self.options.wrapper[0].scrollHeight).animate({
              'height': self.options.maxHeight
            }, function () {
              $this.html(self.options.buttonOpenLabel).removeClass('readless').off('click');
              self.readMore();
              self.options.wrapper.css({
                'overflow': 'hidden'
              });
            });
          }, 200);
        });
      }; // First Load


      self.readMore();
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginReadMore: PluginReadMore
  }); // jquery plugin

  $.fn.themePluginReadMore = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginReadMore($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Revolution Slider

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__revolution';

  var PluginRevolutionSlider = function PluginRevolutionSlider($el, opts) {
    return this.initialize($el, opts);
  };

  PluginRevolutionSlider.defaults = {
    sliderType: 'standard',
    sliderLayout: 'fullwidth',
    delay: 9000,
    gridwidth: 1170,
    gridheight: 500,
    spinner: 'spinner3',
    disableProgressBar: 'on',
    parallax: {
      type: 'off',
      bgparallax: 'off'
    },
    navigation: {
      keyboardNavigation: 'off',
      keyboard_direction: 'horizontal',
      mouseScrollNavigation: 'off',
      onHoverStop: 'off',
      touch: {
        touchenabled: 'on',
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: 'horizontal',
        drag_block_vertical: false
      },
      arrows: {
        enable: true,
        hide_onmobile: false,
        hide_under: 0,
        hide_onleave: true,
        hide_delay: 200,
        hide_delay_mobile: 1200,
        left: {
          h_align: 'left',
          v_align: 'center',
          h_offset: 30,
          v_offset: 0
        },
        right: {
          h_align: 'right',
          v_align: 'center',
          h_offset: 30,
          v_offset: 0
        }
      }
    },

    /* ADDONS */
    addOnTypewriter: {
      enable: false
    },
    addOnWhiteboard: {
      enable: false
    },
    whiteboard: {
      movehand: {
        src: '../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/hand_point_right.png',
        width: 400,
        height: 1000,
        handtype: 'right',
        transform: {
          transformX: 50,
          transformY: 50
        },
        jittering: {
          distance: '80',
          distance_horizontal: '100',
          repeat: '5',
          offset: '10',
          offset_horizontal: '0'
        },
        rotation: {
          angle: '10',
          repeat: '3'
        }
      },
      writehand: {
        src: '../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/write_right_angle.png',
        width: 572,
        height: 691,
        handtype: 'right',
        transform: {
          transformX: 50,
          transformY: 50
        },
        jittering: {
          distance: '80',
          distance_horizontal: '100',
          repeat: '5',
          offset: '10',
          offset_horizontal: '0'
        },
        rotation: {
          angle: '10',
          repeat: '3'
        }
      }
    },
    addOnParticles: {
      enable: false
    },
    particles: {
      startSlide: "first",
      endSlide: "last",
      zIndex: "1",
      particles: {
        number: {
          value: 80
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ffffff",
            opacity: 1
          },
          image: {
            src: ""
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          min: 0.25,
          anim: {
            enable: false,
            speed: 3,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 2,
          random: false,
          min: 30,
          anim: {
            enable: false,
            speed: 40,
            size_min: 1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: true,
          min_speed: 6,
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "repulse"
          }
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            opacity: 0.4
          },
          repulse: {
            distance: 200
          }
        }
      }
    },
    addOnCountdown: {
      enable: false,
      targetdate: new Date().getTime() + 864000000,
      // http://www.freeformatter.com/epoch-timestamp-to-date-converter.html
      slidechanges: [{
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        slide: 2
      }]
    },
    addOnSlicey: {
      enable: false
    },
    addOnFilmstrip: {
      enable: false
    },
    addOnBeforeAfter: {
      enable: false,
      options: {
        cursor: "move",
        carousel: false,
        arrowStyles: {
          leftIcon: "fa-icon-caret-left",
          rightIcon: "fa-icon-caret-right",
          topIcon: "fa-icon-caret-up",
          bottomIcon: "fa-icon-caret-down",
          size: "35",
          color: "#ffffff",
          spacing: "10",
          bgColor: "transparent",
          padding: "0",
          borderRadius: "0"
        },
        dividerStyles: {
          width: "1",
          color: "rgba(255, 255, 255, 0.5)"
        }
      }
    },
    addOnPanorama: {
      enable: false
    },
    addOnRevealer: {
      enable: false
    },
    revealer: {
      direction: "open_horizontal",
      color: "#ffffff",
      duration: "1500",
      delay: "0",
      easing: "Power2.easeInOut",
      overlay_enabled: true,
      overlay_color: "#000000",
      overlay_duration: "1500",
      overlay_delay: "0",
      overlay_easing: "Power2.easeInOut",
      spinner: "1",
      spinnerColor: "#006dd2",
      spinnerHtml: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-1'><div class='rsaddon-revealer-1'><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><\/div><\/div \/>"
    },
    addOnDuotone: {
      enable: false
    },
    addOnBubblemorph: {
      enable: false
    },
    addOnDistortion: {
      enable: false
    }
  };
  PluginRevolutionSlider.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginRevolutionSlider.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.revolution)) {
        return this;
      } // Single Slider Class


      if (this.options.wrapper.find('> ul > li').length == 1) {
        this.options.wrapper.addClass('slider-single-slide'); // Remove Bullets
        // this.options.navigation.bullets.enable = false;

        $.extend(this.options.navigation, {
          bullets: {
            enable: false
          }
        });
      } // Full Screen Class


      if (this.options.sliderLayout == 'fullscreen') {
        this.options.wrapper.closest('.slider-container').addClass('fullscreen-slider');
      } // Initialize Revolution Slider


      this.options.wrapper.revolution(this.options); // Addon Init - Typewriter

      if (this.options.addOnTypewriter.enable) {
        RsTypewriterAddOn($, this.options.wrapper);
      } // Addon Init - Whiteboard


      if (this.options.addOnWhiteboard.enable) {
        this.options.wrapper.rsWhiteBoard();
      } // Addon Init - Particles


      if (this.options.addOnParticles.enable) {
        RsParticlesAddOn(this.options.wrapper);
      } // Addon Init - Countdown


      if (this.options.addOnCountdown.enable) {
        tp_countdown(this.options.wrapper, this.options.addOnCountdown.targetdate, this.options.addOnCountdown.slidechanges);
      } // Addon Init - Slicey


      if (this.options.addOnSlicey.enable) {
        this.options.wrapper.revSliderSlicey();
      } // Addon Init - Filmstrip


      if (this.options.addOnFilmstrip.enable) {
        RsFilmstripAddOn($, this.options.wrapper, '../vendor/rs-plugin/revolution-addons/filmstrip/', false);
      } // Addon Init - Before After


      if (this.options.addOnBeforeAfter.enable) {
        RevSliderBeforeAfter($, this.options.wrapper, this.options.addOnBeforeAfter.options);
      } // Addon Init - Panorama


      if (this.options.addOnPanorama.enable) {
        RsAddonPanorama($, this.options.wrapper);
      } // Addon Init - Revealer


      if (this.options.addOnRevealer.enable) {
        RsRevealerAddOn($, this.options.wrapper, this.options.revealer.spinnerHtml);
      } // Addon Init - Duotone


      if (this.options.addOnDuotone.enable) {
        RsAddonDuotone($, this.options.wrapper, true, "cubic-bezier(0.645, 0.045, 0.355, 1.000)", "1000");
      } // Addon Init - Bubblemorph


      if (this.options.addOnBubblemorph.enable) {
        BubbleMorphAddOn($, this.options.wrapper, false);
      } // Addon Init - Distortion


      if (this.options.addOnDistortion.enable) {
        RsLiquideffectAddOn($, this.options.wrapper);
      }

      return this;
    },
    events: function events() {
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginRevolutionSlider: PluginRevolutionSlider
  }); // jquery plugin

  $.fn.themePluginRevolutionSlider = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginRevolutionSlider($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Scroll Spy

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__scrollSpy';

  var PluginScrollSpy = function PluginScrollSpy($el, opts) {
    return this.initialize($el, opts);
  };

  PluginScrollSpy.defaults = {
    target: '#header',
    debugMode: false
  };
  PluginScrollSpy.prototype = {
    initialize: function initialize($el, opts) {
      if (document.querySelector(opts.target) == null) {
        return false;
      }

      this.$el = $el;
      this.setData().setOptions(opts);

      if (this.options.debugMode) {
        this.debugMode();
      }

      this.build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginScrollSpy.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          target = document.querySelector(self.options.target) != null ? document.querySelector(self.options.target) : false,
          navItems = target == '#header' || target == '.wrapper-spy' ? target.querySelectorAll('.header-nav .nav > li a') : target.querySelectorAll('.nav > li a'); // Get all section ID's

      var sectionIDs = Object.keys(navItems).map(function (key, index) {
        return navItems[key].hash;
      }); // Remove empty values from sectionIDs array

      sectionIDs = sectionIDs.filter(function (value) {
        return value != '';
      }); // Store in a global variable

      self.sectionIDs = sectionIDs;

      for (var i = 0; i < sectionIDs.length; i++) {
        // Default Root Margin
        var rootMargin = '-20% 0px -80% 0px'; // Spy Offset

        if ($(sectionIDs[i]).data('spy-offset')) {
          var rootMarginOffset = $(sectionIDs[i]).data('spy-offset'),
              isNegativeOffset = parseInt(rootMarginOffset) < 0 ? true : false; // Mount a new rootMargin based on offset value

          rootMargin = rootMargin.split(' ').map(function (element, index) {
            if (element.indexOf('%') > 0) {
              var valueToInt = parseInt(element.replace('%', '')),
                  newValue = 0;

              switch (index) {
                case 0:
                  if (isNegativeOffset) {
                    newValue = valueToInt - rootMarginOffset;
                  } else {
                    newValue = Math.abs(valueToInt) + rootMarginOffset;
                  }

                  break;

                case 2:
                  if (isNegativeOffset) {
                    newValue = valueToInt + rootMarginOffset;
                  } else {
                    newValue = Math.abs(valueToInt) - rootMarginOffset;
                  }

                  break;
              }

              if (isNegativeOffset) {
                newValue = newValue + '%';
              } else {
                newValue = '-' + newValue + '%';
              }

              return newValue;
            } else {
              return element;
            }
          }).join(' ');
        }

        var selector = sectionIDs[i],
            callback = function callback() {
          var $section = $(this);

          if (target == '#header' || target == '.wrapper-spy') {
            $('#header .header-nav .nav > li a').removeClass('active');
            $('#header .header-nav .nav > li a[href="#' + $section[0].id + '"]').addClass('active');
          } else {
            $(target).find('.nav > li a').removeClass('active');
            $(target).find('.nav > li a[href="#' + $section[0].id + '"]').addClass('active');
          }
        };

        this.scrollSpyIntObs(selector, callback, {
          rootMargin: rootMargin,
          threshold: 0
        }, true, i, true);
      }

      return this;
    },
    scrollSpyIntObs: function scrollSpyIntObs(selector, functionName, intObsOptions, alwaysObserve, index, firstLoad) {
      var self = this;
      var $el = document.querySelectorAll(selector);
      var intersectionObserverOptions = {
        rootMargin: '0px 0px 200px 0px'
      };

      if (Object.keys(intObsOptions).length) {
        intersectionObserverOptions = $.extend(intersectionObserverOptions, intObsOptions);
      }

      var observer = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];

          if (entry.intersectionRatio > 0) {
            if (typeof functionName === 'string') {
              var func = Function('return ' + functionName)();
            } else {
              var callback = functionName;
              callback.call($(entry.target));
            } // Unobserve


            if (!alwaysObserve) {
              observer.unobserve(entry.target);
            }
          } else {
            if (firstLoad == false) {
              if (index == self.sectionIDs.length - 1) {
                $('#header .header-nav .nav > li a').removeClass('active');
                $('#header .header-nav .nav > li a[href="#' + entry.target.id + '"]').parent().prev().find('a').addClass('active');
              }
            }

            firstLoad = false;
          }
        }
      }, intersectionObserverOptions);
      $($el).each(function () {
        observer.observe($(this)[0]);
      });
      return this;
    },
    debugMode: function debugMode() {
      function wrapCallback(cb) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return wrapper.apply(void 0, [cb].concat(args));
        };
      }

      function addFlashingRect(bounds) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var entry = arguments.length > 2 ? arguments[2] : undefined;
        var width = bounds.width,
            left = bounds.left,
            height = bounds.height,
            top = bounds.top;
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.width = width + "px";
        div.style.left = left + "px";
        div.style.top = top + "px";
        div.style.height = height + "px";
        div.style.pointerEvents = "none";
        div.style.transition = "opacity 2s ease-in";
        div.style.zIndex = 9999999999;
        Object.assign(div.style, style);
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            div.style.opacity = 0;
          });
        });
        div.addEventListener("transitionend", function () {
          document.body.removeChild(div);
        });
        document.body.appendChild(div);

        if (entry) {
          var newdiv = document.createElement("div");
          newdiv.style.backgroundColor = '#000';
          newdiv.style.color = '#FFF';
          newdiv.style.paddingTop = '10px';
          newdiv.style.paddingRight = '10px';
          newdiv.style.paddingLeft = '10px';
          newdiv.style.paddingBottom = '10px';
          newdiv.innerHTML = entry.target.id;
          div.appendChild(newdiv);
        }

        return div;
      }

      var iodOptions = {
        rootColor: "#9428AB",
        enterColor: "#B35C00",
        exitColor: "#035570",
        interColor: "#9CAF00BB"
      };

      function showEntry(entry) {
        addFlashingRect(entry.rootBounds, {
          border: "".concat(Math.min(10, entry.rootBounds.height / 2), "px solid ").concat(iodOptions.rootColor),
          overflow: "hidden",
          boxSizing: "border-box"
        }, entry);
      }

      function wrapper(cb, entries, observer) {
        entries.forEach(showEntry);
        return cb(entries, observer);
      }

      if (typeof window != "undefined") {
        window.IntersectionObserver = /*#__PURE__*/function (_IntersectionObserver) {
          "use strict";

          _inherits(_class, _IntersectionObserver);

          var _super = _createSuper(_class);

          function _class(cb, o) {
            _classCallCheck(this, _class);

            return _super.call(this, wrapCallback(cb), o);
          }

          return _createClass(_class);
        }( /*#__PURE__*/_wrapNativeSuper(IntersectionObserver));
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginScrollSpy: PluginScrollSpy
  }); // jquery plugin

  $.fn.themePluginScrollSpy = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginScrollSpy($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Scroll to Top

(function (theme, $) {
  theme = theme || {};
  $.extend(theme, {
    PluginScrollToTop: {
      defaults: {
        wrapper: $('body'),
        offset: 150,
        buttonClass: 'scroll-to-top',
        iconClass: 'fas fa-chevron-up',
        delay: 1000,
        visibleMobile: false,
        label: false,
        easing: 'easeOutBack'
      },
      initialize: function initialize(opts) {
        initialized = true; // Don't initialize if the page has Section Scroll

        if ($('body[data-plugin-section-scroll]').get(0)) {
          return;
        }

        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts);
        return this;
      },
      build: function build() {
        var self = this,
            $el; // Base HTML Markup

        $el = $('<a />').addClass(self.options.buttonClass).attr({
          'href': '#'
        }).append($('<i />').addClass(self.options.iconClass)); // Visible Mobile

        if (!self.options.visibleMobile) {
          $el.addClass('hidden-mobile');
        } // Label


        if (self.options.label) {
          $el.append($('<span />').html(self.options.label));
        }

        this.options.wrapper.append($el);
        this.$el = $el;
        return this;
      },
      events: function events() {
        var self = this,
            _isScrolling = false; // Click Element Action

        self.$el.on('click', function (e) {
          e.preventDefault();
          $('html').animate({
            scrollTop: 0
          }, self.options.delay, self.options.easing);
          return false;
        }); // Show/Hide Button on Window Scroll event.

        $(window).scroll(function () {
          if (!_isScrolling) {
            _isScrolling = true;

            if ($(window).scrollTop() > self.options.offset) {
              self.$el.stop(true, true).addClass('visible');
              _isScrolling = false;
            } else {
              self.$el.stop(true, true).removeClass('visible');
              _isScrolling = false;
            }
          }
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Scrollable

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__scrollable';

  var PluginScrollable = function PluginScrollable($el, opts) {
    return this.initialize($el, opts);
  };

  PluginScrollable.updateModals = function () {
    PluginScrollable.updateBootstrapModal();
  };

  PluginScrollable.updateBootstrapModal = function () {
    var updateBoostrapModal;
    updateBoostrapModal = typeof $.fn.modal !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype.enforceFocus !== 'undefined';

    if (!updateBoostrapModal) {
      return false;
    }

    var originalFocus = $.fn.modal.Constructor.prototype.enforceFocus;

    $.fn.modal.Constructor.prototype.enforceFocus = function () {
      originalFocus.apply(this);
      var $scrollable = this.$element.find('.scrollable');

      if ($scrollable) {
        if ($.isFunction($.fn['themePluginScrollable'])) {
          $scrollable.themePluginScrollable();
        }

        if ($.isFunction($.fn['nanoScroller'])) {
          $scrollable.nanoScroller();
        }
      }
    };
  };

  PluginScrollable.defaults = {
    contentClass: 'scrollable-content',
    paneClass: 'scrollable-pane',
    sliderClass: 'scrollable-slider',
    alwaysVisible: true,
    preventPageScrolling: true
  };
  PluginScrollable.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginScrollable.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      this.options.wrapper.nanoScroller(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginScrollable: PluginScrollable
  }); // jquery plugin

  $.fn.themePluginScrollable = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginScrollable($this, opts);
      }
    });
  };

  $(function () {
    PluginScrollable.updateModals();
  });
}).apply(this, [window.theme, jQuery]); // Section Scroll

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__sectionScroll';

  var PluginSectionScroll = function PluginSectionScroll($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSectionScroll.defaults = {
    targetClass: '.section',
    dotsNav: true,
    changeHeaderLogo: true,
    headerLogoDark: 'img/logo-default-slim.png',
    headerLogoLight: 'img/logo-default-slim-dark.png'
  };
  PluginSectionScroll.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSectionScroll.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper; // Check type of header and change the target for header (by change header color purpose)

      if ($('html').hasClass('side-header-overlay-full-screen')) {
        self.$header = $('.sticky-wrapper');
      } else {
        self.$header = $('#header');
      } // Turn the section full height or not depeding on the content size


      self.updateSectionsHeight(); // Wrap all sections in a section wrapper

      $(this.options.targetClass).wrap('<div class="section-wrapper"></div>'); // Set the section wrapper height

      $('.section-wrapper').each(function () {
        $(this).height($(this).find('.section-scroll').outerHeight());
      }); // Add active class to the first section on page load

      $('.section-wrapper').first().addClass('active');
      var flag = false,
          scrollableFlag = false,
          touchDirection = '',
          touchstartY = 0,
          touchendY = 0;
      $(window).on('touchstart', function (event) {
        touchstartY = event.changedTouches[0].screenY;
      });
      var wheelEvent = 'onwheel' in document ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';

      if ($(window).width() < 992 && $('html').hasClass('touch')) {
        wheelEvent = 'onwheel' in document ? 'wheel touchend' : document.onmousewheel !== undefined ? 'mousewheel touchend' : 'DOMMouseScroll touchend';
      }

      if ($(window).width() < 992) {
        $('html').removeClass('overflow-hidden');
        $(window).on('scroll', function () {
          var index = 0;
          $('.section-scroll').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 50) {
              var $currentSection2 = $('.section-wrapper').eq(index).find('.section-scroll');
              $('.section-scroll-dots-navigation > ul > li').removeClass('active');
              $('.section-scroll-dots-navigation > ul > li').eq(index).addClass('active');
              $(window).trigger({
                type: 'section.scroll.mobile.change.header.color',
                currentSection: $currentSection2
              });
            }

            index++;
          });
        });
        $(window).on('section.scroll.mobile.change.header.color', function (e) {
          if (typeof e.currentSection == 'undefined') {
            return;
          }

          var $currentSection = e.currentSection,
              headerColor = $currentSection.data('section-scroll-header-color');
          $('#header .header-nav').removeClass('header-nav-light-text header-nav-dark-text').addClass('header-nav-' + headerColor + '-text');
          $('#header .header-nav-features').removeClass('header-nav-features-dark header-nav-features-light').addClass('header-nav-features-' + headerColor);
          $('#header .header-social-icons').removeClass('social-icons-icon-dark social-icons-icon-light').addClass('social-icons-icon-' + headerColor); // Change Logo

          if (self.options.changeHeaderLogo && headerColor != undefined) {
            if (headerColor == 'light') {
              $('#header .header-logo img').attr('src', self.options.headerLogoLight);
            } else if (headerColor == 'dark') {
              $('#header .header-logo img').attr('src', self.options.headerLogoDark);
            }
          }

          self.$header.css({
            opacity: 1
          });
        });
      }

      $(window).on(wheelEvent, function (e) {
        if ($(window).width() < 992) {
          return;
        }

        if ($(window).width() < 992 && $('html').hasClass('touch')) {
          if ($(e.target).closest('.section-scroll-dots-navigation').get(0) || $(e.target).closest('.header-body').get(0) || $(e.target).closest('.owl-carousel').get(0)) {
            return;
          }
        } // Side Header Overlay Full Screen


        if ($('html.side-header-overlay-full-screen.side-header-hide').get(0)) {
          return;
        }

        var wheelDirection = e.originalEvent.wheelDelta == undefined ? e.originalEvent.deltaY > 0 : e.originalEvent.wheelDelta < 0;

        if ($(window).width() < 992 && $('html').hasClass('touch')) {
          touchendY = event.changedTouches[0].screenY;

          if (touchendY <= touchstartY) {
            touchDirection = 'up';
          }

          if (touchendY >= touchstartY) {
            touchDirection = 'down';
          }

          if (touchendY == touchstartY) {
            return;
          }
        }

        var $currentSection = $('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll'),
            $nextSection = self.getNextSection(wheelDirection, touchDirection),
            nextSectionOffsetTop; // If is the last section, then change the offsetTop value

        if (self.getCurrentIndex() == $('.section-wrapper').length - 1) {
          nextSectionOffsetTop = $(document).height();
        } else {
          nextSectionOffsetTop = $nextSection.offset().top;
        }

        if ($(window).width() < 992 && $('html').hasClass('touch')) {
          setTimeout(function () {
            if ($('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll').hasClass('section-scroll-scrollable')) {
              $('html').removeClass('overflow-hidden');
            } else {
              $('html').addClass('overflow-hidden');
            }
          }, 1200);
        } // For non full height sections


        if ($currentSection.hasClass('section-scroll-scrollable')) {
          if (!flag && !scrollableFlag) {
            // Scroll Direction
            if (wheelDirection || touchDirection == 'up') {
              if ($(window).scrollTop() + $(window).height() >= nextSectionOffsetTop) {
                flag = true;
                setTimeout(function () {
                  $(window).trigger('section.scroll.change.header.color');
                  setTimeout(function () {
                    flag = false;
                  }, 500);
                }, 1000);

                if (self.getCurrentIndex() == $('.section-wrapper').length - 1) {
                  return false;
                } // Move to the next section


                self.moveTo($currentSection.offset().top + $currentSection.outerHeight()); // Change Section Active Class

                self.changeSectionActiveState($nextSection);
                self.$header.css({
                  opacity: 0,
                  transition: 'ease opacity 500ms'
                });
              }

              if (!$('html').hasClass('touch')) {
                for (var i = 1; i < 100; i++) {
                  $('body, html').scrollTop($(window).scrollTop() + 1);

                  if ($(window).scrollTop() + $(window).height() >= nextSectionOffsetTop) {
                    scrollableFlag = true;
                    setTimeout(function () {
                      $(window).trigger('section.scroll.change.header.color');
                      scrollableFlag = false;
                    }, 500);
                    break;
                  }
                }
              }
            } else {
              if ($(window).scrollTop() <= $currentSection.offset().top) {
                flag = true;
                setTimeout(function () {
                  $(window).trigger('section.scroll.change.header.color');
                  setTimeout(function () {
                    flag = false;
                  }, 500);
                }, 1000);

                if (self.getCurrentIndex() == 0) {
                  return false;
                } // Move to the next section


                self.moveTo($currentSection.offset().top - $(window).height()); // Change Section Active Class

                self.changeSectionActiveState($nextSection);
                self.$header.css({
                  opacity: 0,
                  transition: 'ease opacity 500ms'
                });
              }

              if (!$('html').hasClass('touch')) {
                for (var i = 1; i < 100; i++) {
                  $('body, html').scrollTop($(window).scrollTop() - 1);

                  if ($(window).scrollTop() <= $currentSection.offset().top) {
                    scrollableFlag = true;
                    setTimeout(function () {
                      $(window).trigger('section.scroll.change.header.color');
                      scrollableFlag = false;
                    }, 500);
                    break;
                  }
                }
              }
            } // Change Dots Active Class


            self.changeDotsActiveState();
            return;
          }
        } // For full height sections


        if (!flag && !scrollableFlag) {
          if (wheelDirection || touchDirection == 'up') {
            if (self.getCurrentIndex() == $('.section-wrapper').length - 1) {
              return false;
            } // Change Section Active Class


            self.changeSectionActiveState($nextSection);
            setTimeout(function () {
              // Move to the next section
              self.moveTo($nextSection.offset().top);
            }, 150);
          } else {
            if (self.getCurrentIndex() == 0) {
              return false;
            } // Change Section Active Class


            self.changeSectionActiveState($nextSection);

            if ($nextSection.height() > $(window).height()) {
              // Move to the next section
              self.moveTo($currentSection.offset().top - $(window).height());
            } else {
              setTimeout(function () {
                // Move to the next section
                self.moveTo($nextSection.offset().top);
              }, 150);
            }
          } // Change Dots Active Class


          self.changeDotsActiveState();
          self.$header.css({
            opacity: 0,
            transition: 'ease opacity 500ms'
          }); // Style next section

          $nextSection.css({
            position: 'relative',
            opacity: 1,
            'z-index': 1,
            transform: 'translate3d(0,0,0) scale(1)'
          }); // Style previous section

          $currentSection.css({
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            opacity: 0,
            'z-index': 0,
            transform: 'translate3d(0,0,-10px) scale(0.7)',
            transition: 'ease transform 600ms, ease opacity 600ms'
          });
          setTimeout(function () {
            $currentSection.css({
              position: 'relative',
              opacity: 1,
              transform: 'translate3d(0,0,-10px) scale(1)'
            });
            $(window).trigger('section.scroll.change.header.color');
            setTimeout(function () {
              flag = false;
            }, 500);
          }, 1000);
          flag = true;
        }

        return;
      }); // Dots Navigation

      if (this.options.dotsNav) {
        self.dotsNavigation();
      } // First Load


      setTimeout(function () {
        if ($(window.location.hash).get(0)) {
          self.moveTo($(window.location.hash).parent().offset().top);
          self.changeSectionActiveState($(window.location.hash)); // Change Dots Active Class

          self.changeDotsActiveState();
          self.updateHash(true);
        } else {
          var hash = window.location.hash,
              index = hash.replace('#', '');

          if (!hash) {
            index = 1;
          }

          self.moveTo($('.section-wrapper').eq(index - 1).offset().top);
          self.changeSectionActiveState($('.section-wrapper').eq(index - 1).find('.section-scroll')); // Change Dots Active Class

          self.changeDotsActiveState();
          self.updateHash(true);
        }

        $(window).trigger('section.scroll.ready');
        $(window).trigger('section.scroll.change.header.color');
      }, 500);
      return this;
    },
    updateSectionsHeight: function updateSectionsHeight() {
      var self = this;
      $('.section-scroll').css({
        height: ''
      });
      $('.section-scroll').each(function () {
        if ($(this).outerHeight() < $(window).height() + 3) {
          $(this).css({
            height: '100vh'
          });
        } else {
          $(this).addClass('section-scroll-scrollable');
        }
      }); // Set the section wrapper height

      $('.section-wrapper').each(function () {
        $(this).height($(this).find('.section-scroll').outerHeight());
      });
      return this;
    },
    updateHash: function updateHash(first_load) {
      var self = this;

      if (!window.location.hash) {
        window.location.hash = 1;
      } else {
        if (!first_load) {
          var $section = $('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll'),
              section_id = $section.attr('id') ? $section.attr('id') : $section.parent().index() + 1;
          window.location.hash = section_id;
        }
      }

      return this;
    },
    getCurrentIndex: function getCurrentIndex() {
      var self = this,
          currentIndex = 0;
      currentIndex = $('.section-wrapper.active').index();
      return currentIndex;
    },
    moveTo: function moveTo($scrollTopValue, first_load) {
      var self = this;
      $('body, html').animate({
        scrollTop: $scrollTopValue
      }, 1000, 'easeOutQuint');
      setTimeout(function () {
        self.updateHash();
      }, 500);
      return this;
    },
    getNextSection: function getNextSection(wheelDirection, touchDirection) {
      var self = this,
          $nextSection = ''; // Scroll Direction

      if (wheelDirection || touchDirection == 'up') {
        $nextSection = $('.section-wrapper').eq(self.getCurrentIndex() + 1).find('.section-scroll');
      } else {
        $nextSection = $('.section-wrapper').eq(self.getCurrentIndex() - 1).find('.section-scroll');
      }

      return $nextSection;
    },
    changeSectionActiveState: function changeSectionActiveState($nextSection) {
      var self = this;
      $('.section-wrapper').removeClass('active');
      $nextSection.parent().addClass('active');
      return this;
    },
    changeDotsActiveState: function changeDotsActiveState() {
      var self = this;
      $('.section-scroll-dots-navigation > ul > li').removeClass('active');
      $('.section-scroll-dots-navigation > ul > li').eq(self.getCurrentIndex()).addClass('active');
      return this;
    },
    dotsNavigation: function dotsNavigation() {
      var self = this;
      var dotsNav = $('<div class="section-scroll-dots-navigation"><ul class="list list-unstyled"></ul></div>'),
          currentSectionIndex = self.getCurrentIndex();

      if (self.options.dotsClass) {
        dotsNav.addClass(self.options.dotsClass);
      }

      for (var i = 0; i < $('.section-scroll').length; i++) {
        var title = $('.section-wrapper').eq(i).find('.section-scroll').data('section-scroll-title');
        dotsNav.find('> ul').append('<li' + (currentSectionIndex == i ? ' class="active"' : '') + '><a href="#' + i + '" data-nav-id="' + i + '"><span>' + title + '</span></a></li>');
      }

      $('.body').append(dotsNav);
      dotsNav.find('a[data-nav-id]').on('click touchstart', function (e) {
        e.preventDefault();
        var $this = $(this);
        $('.section-scroll').css({
          opacity: 0,
          transition: 'ease opacity 300ms'
        });
        self.$header.css({
          opacity: 0,
          transition: 'ease opacity 500ms'
        });
        setTimeout(function () {
          self.moveTo($('.section-wrapper').eq($this.data('nav-id')).offset().top);
          $('.section-wrapper').removeClass('active');
          $('.section-wrapper').eq($this.data('nav-id')).addClass('active');
          $('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll').css({
            opacity: 1
          });
          setTimeout(function () {
            $('.section-scroll').css({
              opacity: 1
            });
            $(window).trigger('section.scroll.change.header.color');
          }, 500);

          if ($(window).width() > 991) {
            self.changeDotsActiveState();
          }
        }, 500);
      });
      return this;
    },
    events: function events() {
      var self = this;
      $(window).on('section.scroll.ready', function () {
        $(window).scrollTop(0);
      });
      $(window).on('section.scroll.change.header.color', function () {
        var headerColor = $('.section-wrapper').eq(self.getCurrentIndex()).find('.section-scroll').data('section-scroll-header-color');
        $('#header .header-nav').removeClass('header-nav-light-text header-nav-dark-text').addClass('header-nav-' + headerColor + '-text');
        $('#header .header-nav-features').removeClass('header-nav-features-dark header-nav-features-light').addClass('header-nav-features-' + headerColor);
        $('#header .header-social-icons').removeClass('social-icons-icon-dark social-icons-icon-light').addClass('social-icons-icon-' + headerColor); // Change Logo

        if (self.options.changeHeaderLogo && headerColor != undefined) {
          if (headerColor == 'light') {
            $('#header .header-logo img').attr('src', self.options.headerLogoLight);
          } else if (headerColor == 'dark') {
            $('#header .header-logo img').attr('src', self.options.headerLogoDark);
          }
        }

        self.$header.css({
          opacity: 1
        });
      });
      $(document).ready(function () {
        $(window).afterResize(function () {
          self.updateSectionsHeight();

          if ($(window).width() < 992) {
            $('html').removeClass('overflow-hidden');
          }
        });
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSectionScroll: PluginSectionScroll
  }); // jquery plugin

  $.fn.themePluginSectionScroll = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSectionScroll($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Sort

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__sort';

  var PluginSort = function PluginSort($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSort.defaults = {
    useHash: true,
    itemSelector: '.isotope-item',
    layoutMode: 'masonry',
    filter: '*',
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    },
    stagger: 30,
    isOriginLeft: $('html').attr('dir') == 'rtl' ? false : true
  };
  PluginSort.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSort.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.isotope)) {
        return this;
      }

      var self = this,
          $source = this.options.wrapper,
          $destination = $('.sort-destination[data-sort-id="' + $source.attr('data-sort-id') + '"]'),
          $window = $(window);

      if ($destination.get(0)) {
        self.$source = $source;
        self.$destination = $destination;
        self.$loader = false;
        self.setParagraphHeight($destination);

        if (self.$destination.parents('.sort-destination-loader').get(0)) {
          self.$loader = self.$destination.parents('.sort-destination-loader');
          self.createLoader();
        }

        $destination.attr('data-filter', '*');
        $destination.one('layoutComplete', function (event, laidOutItems) {
          self.removeLoader(); // If has data-plugin-sticky on the page we need recalculate sticky position

          if ($('[data-plugin-sticky]').length) {
            setTimeout(function () {
              $('[data-plugin-sticky]').each(function () {
                $(this).data('__sticky').build();
                $(window).trigger('resize');
              });
            }, 500);
          }
        }); // IE10/11 fix

        if ($('html').hasClass('ie10') || $('html').hasClass('ie11')) {
          var padding = parseInt(self.options.wrapper.children().css('padding-left')) + parseInt(self.options.wrapper.children().css('padding-right'));
        }

        $destination.waitForImages(function () {
          $destination.isotope(self.options);
          self.events();
        });
        setTimeout(function () {
          self.removeLoader();
        }, 3000);
      }

      return this;
    },
    events: function events() {
      var self = this,
          filter = null,
          $window = $(window);
      self.$source.find('a').click(function (e) {
        e.preventDefault();
        filter = $(this).parent().data('option-value');
        self.setFilter(filter);

        if (e.originalEvent) {
          self.$source.trigger('filtered');
        }

        return this;
      });
      self.$destination.trigger('filtered');
      self.$source.trigger('filtered');

      if (self.options.useHash) {
        self.hashEvents();
      }

      $window.on('resize sort.resize', function () {
        setTimeout(function () {
          self.$destination.isotope('layout');
        }, 300);
      });
      setTimeout(function () {
        $window.trigger('sort.resize');
      }, 300);
      return this;
    },
    setFilter: function setFilter(filter) {
      var self = this,
          page = false,
          currentFilter = filter;
      self.$source.find('.active').removeClass('active');
      self.$source.find('li[data-option-value="' + filter + '"], li[data-option-value="' + filter + '"] > a').addClass('active');
      self.options.filter = currentFilter;

      if (self.$destination.attr('data-current-page')) {
        currentFilter = currentFilter + '[data-page-rel=' + self.$destination.attr('data-current-page') + ']';
      }

      self.$destination.attr('data-filter', filter).isotope({
        filter: currentFilter
      }).one('arrangeComplete', function (event, filteredItems) {
        if (self.options.useHash) {
          if (window.location.hash != '' || self.options.filter.replace('.', '') != '*') {
            window.location.hash = self.options.filter.replace('.', '');
          }
        }

        $(window).trigger('scroll');
      }).trigger('filtered');
      return this;
    },
    hashEvents: function hashEvents() {
      var self = this,
          hash = null,
          hashFilter = null,
          initHashFilter = '.' + location.hash.replace('#', ''); // Check if has scroll to section trough URL hash and prevent the sort plugin from show nothing

      if ($(location.hash).length) {
        initHashFilter = '.';
      }

      if (initHashFilter != '.' && initHashFilter != '.*') {
        self.setFilter(initHashFilter);
      }

      $(window).on('hashchange', function (e) {
        hashFilter = '.' + location.hash.replace('#', '');
        hash = hashFilter == '.' || hashFilter == '.*' ? '*' : hashFilter;
        self.setFilter(hash);
      });
      return this;
    },
    setParagraphHeight: function setParagraphHeight() {
      var self = this,
          minParagraphHeight = 0,
          paragraphs = $('span.thumb-info-caption p', self.$destination);
      paragraphs.each(function () {
        if ($(this).height() > minParagraphHeight) {
          minParagraphHeight = $(this).height() + 10;
        }
      });
      paragraphs.height(minParagraphHeight);
      return this;
    },
    createLoader: function createLoader() {
      var self = this;
      var loaderTemplate = ['<div class="bounce-loader">', '<div class="bounce1"></div>', '<div class="bounce2"></div>', '<div class="bounce3"></div>', '</div>'].join('');
      self.$loader.append(loaderTemplate);
      return this;
    },
    removeLoader: function removeLoader() {
      var self = this;

      if (self.$loader) {
        self.$loader.removeClass('sort-destination-loader-showing');
        setTimeout(function () {
          self.$loader.addClass('sort-destination-loader-loaded');
        }, 300);
      }
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSort: PluginSort
  }); // jquery plugin

  $.fn.themePluginSort = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSort($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Star Rating

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__starrating';

  var PluginStarRating = function PluginStarRating($el, opts) {
    return this.initialize($el, opts);
  };

  PluginStarRating.defaults = {
    theme: 'krajee-fas',
    color: 'primary',
    showClear: false,
    showCaption: false
  };
  PluginStarRating.prototype = {
    initialize: function initialize($el, opts) {
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginStarRating.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.rating)) {
        return this;
      }

      var self = this;
      self.options.wrapper.rating(self.options);
      self.options.wrapper.parents('.rating-container').addClass('rating-' + self.options.color);

      if (self.options.extraClass) {
        self.options.wrapper.parents('.rating-container').addClass(self.options.extraClass);
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginStarRating: PluginStarRating
  }); // jquery plugin

  $.fn.themePluginStarRating = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginStarRating($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Sticky

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__sticky';

  var PluginSticky = function PluginSticky($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSticky.defaults = {
    minWidth: 991,
    activeClass: 'sticky-active'
  };
  PluginSticky.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSticky.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (!$.isFunction($.fn.pin)) {
        return this;
      }

      var self = this,
          $window = $(window);
      self.options.wrapper.pin(self.options);

      if (self.options.wrapper.hasClass('sticky-wrapper-transparent')) {
        self.options.wrapper.parent().addClass('position-absolute w-100');
      }

      $window.afterResize(function () {
        self.options.wrapper.removeAttr('style').removeData('pin');
        self.options.wrapper.pin(self.options);
        $window.trigger('scroll');
      }); // Change Logo Src

      if (self.options.wrapper.find('img').attr('data-change-src')) {
        var $logo = self.options.wrapper.find('img'),
            logoSrc = $logo.attr('src'),
            logoNewSrc = $logo.attr('data-change-src');

        self.changeLogoSrc = function (activate) {
          if (activate) {
            $logo.attr('src', logoNewSrc);
          } else {
            $logo.attr('src', logoSrc);
          }
        };
      }

      return this;
    },
    events: function events() {
      var self = this,
          $window = $(window),
          $logo = self.options.wrapper.find('img'),
          sticky_activate_flag = true,
          sticky_deactivate_flag = false,
          class_to_check = self.options.wrapper.hasClass('sticky-wrapper-effect-1') ? 'sticky-effect-active' : 'sticky-active';
      $window.on('scroll sticky.effect.active', function () {
        if (self.options.wrapper.hasClass(class_to_check)) {
          if (sticky_activate_flag) {
            if ($logo.attr('data-change-src')) {
              self.changeLogoSrc(true);
            }

            sticky_activate_flag = false;
            sticky_deactivate_flag = true;
          }
        } else {
          if (sticky_deactivate_flag) {
            if ($logo.attr('data-change-src')) {
              self.changeLogoSrc(false);
            }

            sticky_deactivate_flag = false;
            sticky_activate_flag = true;
          }
        }
      });
      var is_backing = false;

      if (self.options.stickyStartEffectAt) {
        // First Load
        if (self.options.stickyStartEffectAt < $window.scrollTop()) {
          self.options.wrapper.addClass('sticky-effect-active');
          $window.trigger('sticky.effect.active');
        }

        $window.on('scroll', function () {
          if (self.options.stickyStartEffectAt < $window.scrollTop()) {
            self.options.wrapper.addClass('sticky-effect-active');
            is_backing = true;
            $window.trigger('sticky.effect.active');
          } else {
            if (is_backing) {
              self.options.wrapper.find('.sticky-body').addClass('position-fixed');
              is_backing = false;
            }

            if ($window.scrollTop() == 0) {
              self.options.wrapper.find('.sticky-body').removeClass('position-fixed');
            }

            self.options.wrapper.removeClass('sticky-effect-active');
          }
        });
      } // Refresh Sticky Plugin if click in a data-toggle="collapse"


      if ($('[data-bs-toggle="collapse"]').get(0)) {
        $('[data-bs-toggle="collapse"]').on('click', function () {
          setTimeout(function () {
            self.build();
            $(window).trigger('scroll');
          }, 1000);
        });
      }
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSticky: PluginSticky
  }); // jquery plugin

  $.fn.themePluginSticky = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSticky($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Toggle

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__toggle';

  var PluginToggle = function PluginToggle($el, opts) {
    return this.initialize($el, opts);
  };

  PluginToggle.defaults = {
    duration: 350,
    isAccordion: false
  };
  PluginToggle.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $wrapper = this.options.wrapper,
          $items = $wrapper.find('> .toggle'),
          $el = null;
      $items.each(function () {
        $el = $(this);

        if ($el.hasClass('active')) {
          $el.find('> p').addClass('preview-active');
          $el.find('> .toggle-content').slideDown(self.options.duration);
        }

        self.events($el);
      });

      if (self.options.isAccordion) {
        self.options.duration = self.options.duration / 2;
      }

      return this;
    },
    events: function events($el) {
      var self = this,
          previewParCurrentHeight = 0,
          previewParAnimateHeight = 0,
          toggleContent = null;
      $el.find('> label, > .toggle-title').click(function (e) {
        var $this = $(this),
            parentSection = $this.parent(),
            parentWrapper = $this.parents('.toggle'),
            previewPar = null,
            closeElement = null;

        if (self.options.isAccordion && typeof e.originalEvent != 'undefined') {
          closeElement = parentWrapper.find('.toggle.active > label, .toggle.active > .toggle-title');

          if (closeElement[0] == $this[0]) {
            return;
          }
        }

        parentSection.toggleClass('active'); // Preview Paragraph

        if (parentSection.find('> p').get(0)) {
          previewPar = parentSection.find('> p');
          previewParCurrentHeight = previewPar.css('height');
          previewPar.css('height', 'auto');
          previewParAnimateHeight = previewPar.css('height');
          previewPar.css('height', previewParCurrentHeight);
        } // Content


        toggleContent = parentSection.find('> .toggle-content');

        if (parentSection.hasClass('active')) {
          $(previewPar).animate({
            height: previewParAnimateHeight
          }, self.options.duration, function () {
            $(this).addClass('preview-active');
          });
          toggleContent.slideDown(self.options.duration, function () {
            if (closeElement) {
              closeElement.trigger('click');
            }
          });
        } else {
          $(previewPar).animate({
            height: 0
          }, self.options.duration, function () {
            $(this).removeClass('preview-active');
          });
          toggleContent.slideUp(self.options.duration);
        }
      });
    }
  }; // expose to scope

  $.extend(theme, {
    PluginToggle: PluginToggle
  }); // jquery plugin

  $.fn.themePluginToggle = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginToggle($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Tweets

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__tweets';

  var PluginTweets = function PluginTweets($el, opts) {
    return this.initialize($el, opts);
  };

  PluginTweets.defaults = {
    username: null,
    count: 2,
    URL: 'php/twitter-feed.php',
    iconColor: false
  };
  PluginTweets.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginTweets.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      if (this.options.username == null || this.options.username == '') {
        return this;
      }

      var self = this,
          $wrapper = this.options.wrapper;
      $.ajax({
        type: 'GET',
        data: {
          twitter_screen_name: self.options.username,
          tweets_to_display: self.options.count,
          icon_color: self.options.iconColor
        },
        url: self.options.URL
      }).done(function (html) {
        $wrapper.html(html).find('a').attr('target', '_blank');
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginTweets: PluginTweets
  }); // jquery plugin

  $.fn.themePluginTweets = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginTweets($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Validation

(function (theme, $) {
  theme = theme || {};
  $.extend(theme, {
    PluginValidation: {
      defaults: {
        formClass: 'needs-validation',
        validator: {
          highlight: function highlight(element) {
            $(element).addClass('is-invalid').removeClass('is-valid').parent().removeClass('has-success').addClass('has-danger');
          },
          success: function success(label, element) {
            $(element).removeClass('is-invalid').addClass('is-valid').parent().removeClass('has-danger').addClass('has-success').find('label.error').remove();
          },
          errorPlacement: function errorPlacement(error, element) {
            if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
              error.appendTo(element.parent().parent());
            } else {
              error.insertAfter(element);
            }
          }
        },
        validateCaptchaURL: 'php/contact-form-verify-captcha.php',
        refreshCaptchaURL: 'php/contact-form-refresh-captcha.php'
      },
      initialize: function initialize(opts) {
        initialized = true;
        this.setOptions(opts).build();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts);
        return this;
      },
      build: function build() {
        var self = this;

        if (!$.isFunction($.validator)) {
          return this;
        }

        self.addMethods();
        self.setMessageGroups();
        $.validator.setDefaults(self.options.validator);
        $('.' + self.options.formClass).validate();
        return this;
      },
      addMethods: function addMethods() {
        var self = this;
        $.validator.addMethod('captcha', function (value, element, params) {
          var captchaValid = false;
          $.ajax({
            url: self.options.validateCaptchaURL,
            type: 'POST',
            async: false,
            dataType: 'json',
            data: {
              captcha: $.trim(value)
            },
            success: function success(data) {
              if (data.response == 'success') {
                captchaValid = true;
              }
            }
          });

          if (captchaValid) {
            return true;
          }
        }, ''); // Refresh Captcha

        $('#refreshCaptcha').on('click', function (e) {
          e.preventDefault();
          $.get(self.options.refreshCaptchaURL, function (url) {
            $('#captcha-image').attr('src', url);
          });
        });
      },
      setMessageGroups: function setMessageGroups() {
        $('.checkbox-group[data-msg-required], .radio-group[data-msg-required]').each(function () {
          var message = $(this).data('msg-required');
          $(this).find('input').attr('data-msg-required', message);
        });
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Video Background

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__videobackground';

  var PluginVideoBackground = function PluginVideoBackground($el, opts) {
    return this.initialize($el, opts);
  };

  PluginVideoBackground.defaults = {
    overlay: false,
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%',
    posterType: 'detect',
    className: 'vide-video-wrapper'
  };
  PluginVideoBackground.prototype = {
    initialize: function initialize($el, opts) {
      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
        path: this.$el.data('video-path'),
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this;

      if (!$.isFunction($.fn.vide) || !this.options.path) {
        return this;
      }

      if (this.options.overlay) {
        var overlayClass = this.options.overlayClass;
        this.options.wrapper.prepend($('<div />').addClass(overlayClass));
      }

      this.options.wrapper.vide(this.options.path, this.options).first().css('z-index', 0); // Change Poster

      self.changePoster(); // Initialize Vide inside a carousel

      if (self.options.wrapper.closest('.owl-carousel').get(0)) {
        self.options.wrapper.closest('.owl-carousel').on('initialized.owl.carousel', function () {
          $('.owl-item.cloned').find('[data-plugin-video-background] .vide-video-wrapper').remove();
          $('.owl-item.cloned').find('[data-plugin-video-background]').vide(self.options.path, self.options).first().css('z-index', 0);
          self.changePoster(self.options.wrapper.closest('.owl-carousel'));
        });
      } // Play Video Button


      var $playButton = self.options.wrapper.find('.video-background-play');

      if ($playButton.get(0)) {
        var $playWrapper = self.options.wrapper.find('.video-background-play-wrapper');
        self.options.wrapper.find('.video-background-play').on('click', function (e) {
          e.preventDefault();

          if ($playWrapper.get(0)) {
            $playWrapper.animate({
              opacity: 0
            }, 300, function () {
              $playWrapper.parent().height($playWrapper.outerHeight());
              $playWrapper.remove();
            });
          } else {
            $playButton.animate({
              opacity: 0
            }, 300, function () {
              $playButton.remove();
            });
          }

          setTimeout(function () {
            self.options.wrapper.find('video')[0].play();
          }, 500);
        });
      }

      $(window).trigger('vide.video.inserted.on.dom');
      return this;
    },
    changePoster: function changePoster($carousel) {
      var self = this; // If it's inside carousel

      if ($carousel && self.options.changePoster) {
        $carousel.find('.owl-item [data-plugin-video-background] .vide-video-wrapper').css({
          'background-image': 'url(' + self.options.changePoster + ')'
        });
        return this;
      }

      if (self.options.changePoster) {
        self.options.wrapper.find('.vide-video-wrapper').css({
          'background-image': 'url(' + self.options.changePoster + ')'
        });
      }

      return this;
    },
    events: function events() {
      var self = this; // Initialize

      self.options.wrapper.on('video.background.initialize', function () {
        self.build();
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginVideoBackground: PluginVideoBackground
  }); // jquery plugin

  $.fn.themePluginVideoBackground = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginVideoBackground($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Account

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Account: {
      defaults: {
        wrapper: $('#headerAccount')
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      events: function events() {
        var self = this;
        $(window).on('load', function () {
          $(document).ready(function () {
            setTimeout(function () {
              self.$wrapper.find('input').on('focus', function () {
                self.$wrapper.addClass('open');
                $(document).mouseup(function (e) {
                  if (!self.$wrapper.is(e.target) && self.$wrapper.has(e.target).length === 0) {
                    self.$wrapper.removeClass('open');
                  }
                });
              });
            }, 1500);
          });
        });
        $('#headerSignUp').on('click', function (e) {
          e.preventDefault();
          self.$wrapper.addClass('signup').removeClass('signin').removeClass('recover');
          self.$wrapper.find('.signup-form input:first').focus();
        });
        $('#headerSignIn').on('click', function (e) {
          e.preventDefault();
          self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
          self.$wrapper.find('.signin-form input:first').focus();
        });
        $('#headerRecover').on('click', function (e) {
          e.preventDefault();
          self.$wrapper.addClass('recover').removeClass('signup').removeClass('signin');
          self.$wrapper.find('.recover-form input:first').focus();
        });
        $('#headerRecoverCancel').on('click', function (e) {
          e.preventDefault();
          self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
          self.$wrapper.find('.signin-form input:first').focus();
        });
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Nav

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Nav: {
      defaults: {
        wrapper: $('#mainNav'),
        scrollDelay: 600,
        scrollAnimation: 'easeOutQuad'
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        var self = this,
            $html = $('html'),
            $header = $('#header'),
            $headerNavMain = $('#header .header-nav-main'),
            thumbInfoPreview; // Preview Thumbs

        if (self.$wrapper.find('a[data-thumb-preview]').length) {
          self.$wrapper.find('a[data-thumb-preview]').each(function () {
            thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview').append($('<span />').addClass('thumb-info-wrapper').append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')));
            $(this).append(thumbInfoPreview);
          });
        } // Side Header / Side Header Hamburguer Sidebar (Reverse Dropdown)


        if ($html.hasClass('side-header') || $html.hasClass('side-header-hamburguer-sidebar')) {
          // Side Header Right / Side Header Hamburguer Sidebar Right
          if ($html.hasClass('side-header-right') || $html.hasClass('side-header-hamburguer-sidebar-right')) {
            if (!$html.hasClass('side-header-right-no-reverse')) {
              $header.find('.dropdown-submenu').addClass('dropdown-reverse');
            }
          }
        } else {
          // Reverse
          var checkReverseFlag = false;

          self.checkReverse = function () {
            if (!checkReverseFlag) {
              self.$wrapper.find('.dropdown, .dropdown-submenu').removeClass('dropdown-reverse');
              self.$wrapper.find('.dropdown:not(.manual):not(.dropdown-mega), .dropdown-submenu:not(.manual)').each(function () {
                if (!$(this).find('.dropdown-menu').visible(false, true, 'horizontal')) {
                  $(this).addClass('dropdown-reverse');
                }
              });
              checkReverseFlag = true;
            }
          };

          $(window).on('resize', function () {
            checkReverseFlag = false;
          });
          $header.on('mouseover', function () {
            self.checkReverse();
          });
        } // Clone Items


        if ($headerNavMain.hasClass('header-nav-main-clone-items')) {
          $headerNavMain.find('nav > ul > li > a').each(function () {
            var parent = $(this).parent(),
                clone = $(this).clone(),
                clone2 = $(this).clone(),
                wrapper = $('<span class="wrapper-items-cloned"></span>'); // Config Classes

            $(this).addClass('item-original');
            clone2.addClass('item-two'); // Insert on DOM

            parent.prepend(wrapper);
            wrapper.append(clone).append(clone2);
          });
        } // Floating


        if ($('#header.header-floating-icons').length && $(window).width() > 991) {
          var menuFloatingAnim = {
            $menuFloating: $('#header.header-floating-icons .header-container > .header-row'),
            build: function build() {
              var self = this;
              self.init();
            },
            init: function init() {
              var self = this,
                  divisor = 0;
              $(window).scroll(function () {
                var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()),
                    st = $(this).scrollTop();
                divisor = $(document).height() / $(window).height();
                self.$menuFloating.find('.header-column > .header-row').css({
                  transform: 'translateY( calc(' + scrollPercent + 'vh - ' + st / divisor + 'px) )'
                });
              });
            }
          };
          menuFloatingAnim.build();
        } // Slide


        if ($('.header-nav-links-vertical-slide').length) {
          var slideNavigation = {
            $mainNav: $('#mainNav'),
            $mainNavItem: $('#mainNav li'),
            build: function build() {
              var self = this;
              self.menuNav();
            },
            menuNav: function menuNav() {
              var self = this;
              self.$mainNavItem.on('click', function (e) {
                var currentMenuItem = $(this),
                    currentMenu = $(this).parent(),
                    nextMenu = $(this).find('ul').first(),
                    prevMenu = $(this).closest('.next-menu'),
                    isSubMenu = currentMenuItem.hasClass('dropdown') || currentMenuItem.hasClass('dropdown-submenu'),
                    isBack = currentMenuItem.hasClass('back-button'),
                    nextMenuHeightDiff = nextMenu.find('> li').length * nextMenu.find('> li').outerHeight() - nextMenu.outerHeight(),
                    prevMenuHeightDiff = prevMenu.find('> li').length * prevMenu.find('> li').outerHeight() - prevMenu.outerHeight();

                if (isSubMenu) {
                  currentMenu.addClass('next-menu');
                  nextMenu.addClass('visible');
                  currentMenu.css({
                    overflow: 'visible',
                    'overflow-y': 'visible'
                  });

                  if (nextMenuHeightDiff > 0) {
                    nextMenu.css({
                      overflow: 'hidden',
                      'overflow-y': 'scroll'
                    });
                  }

                  for (i = 0; i < nextMenu.find('> li').length; i++) {
                    if (nextMenu.outerHeight() < $('.header-row-side-header').outerHeight() - 100) {
                      nextMenu.css({
                        height: nextMenu.outerHeight() + nextMenu.find('> li').outerHeight()
                      });
                    }
                  }

                  nextMenu.css({
                    'padding-top': nextMenuHeightDiff + 'px'
                  });
                }

                if (isBack) {
                  currentMenu.parent().parent().removeClass('next-menu');
                  currentMenu.removeClass('visible');

                  if (prevMenuHeightDiff > 0) {
                    prevMenu.css({
                      overflow: 'hidden',
                      'overflow-y': 'scroll'
                    });
                  }
                }

                e.stopPropagation();
              });
            }
          };
          $(window).trigger('resize');

          if ($(window).width() > 991) {
            slideNavigation.build();
          }

          $(document).ready(function () {
            $(window).afterResize(function () {
              if ($(window).width() > 991) {
                slideNavigation.build();
              }
            });
          });
        } // Header Nav Main Mobile Dark


        if ($('.header-nav-main-mobile-dark').length) {
          $('#header:not(.header-transparent-dark-bottom-border):not(.header-transparent-light-bottom-border)').addClass('header-no-border-bottom');
        } // Keyboard Navigation / Accessibility


        if ($(window).width() > 991) {
          var focusFlag = false;
          $header.find('.header-nav-main nav > ul > li > a').on('focus', function () {
            if ($(window).width() > 991) {
              if (!focusFlag) {
                focusFlag = true;
                $(this).trigger('blur');
                self.focusMenuWithChildren();
              }
            }
          });
        }

        return this;
      },
      focusMenuWithChildren: function focusMenuWithChildren() {
        // Get all the link elements within the primary menu.
        var links,
            i,
            len,
            menu = document.querySelector('html:not(.side-header):not(.side-header-hamburguer-sidebar):not(.side-header-overlay-full-screen) .header-nav-main > nav');

        if (!menu) {
          return false;
        }

        links = menu.getElementsByTagName('a'); // Each time a menu link is focused or blurred, toggle focus.

        for (i = 0, len = links.length; i < len; i++) {
          links[i].addEventListener('focus', toggleFocus, true);
          links[i].addEventListener('blur', toggleFocus, true);
        } //Sets or removes the .focus class on an element.


        function toggleFocus() {
          var self = this; // Move up through the ancestors of the current link until we hit .primary-menu.

          while (-1 === self.className.indexOf('header-nav-main')) {
            // On li elements toggle the class .focus.
            if ('li' === self.tagName.toLowerCase()) {
              if (-1 !== self.className.indexOf('accessibility-open')) {
                self.className = self.className.replace(' accessibility-open', '');
              } else {
                self.className += ' accessibility-open';
              }
            }

            self = self.parentElement;
          }
        }
      },
      events: function events() {
        var self = this,
            $html = $('html'),
            $header = $('#header'),
            $window = $(window),
            headerBodyHeight = $('.header-body').outerHeight();

        if ($header.hasClass('header')) {
          $header = $('.header');
        }

        $header.find('a[href="#"]').on('click', function (e) {
          e.preventDefault();
        }); // Mobile Arrows

        if ($html.hasClass('side-header-hamburguer-sidebar')) {
          $header.find('.dropdown-toggle, .dropdown-submenu > a').append('<i class="fas fa-chevron-down fa-chevron-right"></i>');
        } else {
          $header.find('.dropdown-toggle, .dropdown-submenu > a').append('<i class="fas fa-chevron-down"></i>');
        }

        $header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-chevron-down, .dropdown-submenu a[href!="#"] .fa-chevron-down').on('click', function (e) {
          e.preventDefault();

          if ($window.width() < 992) {
            $(this).closest('li').toggleClass('open'); // Adjust Header Body Height

            var height = $header.hasClass('header-effect-shrink') && $html.hasClass('sticky-header-active') ? theme.StickyHeader.options.stickyHeaderContainerHeight : headerBodyHeight;
            $('.header-body').animate({
              height: $('.header-nav-main nav').outerHeight(true) + height + 10
            }, 0);
          }
        });
        $header.find('li a.active').addClass('current-page-active'); // Add Open Class

        $header.find('.header-nav-click-to-open .dropdown-toggle[href="#"], .header-nav-click-to-open .dropdown-submenu a[href="#"], .header-nav-click-to-open .dropdown-toggle > i').on('click', function (e) {
          if (!$('html').hasClass('side-header-hamburguer-sidebar') && $window.width() > 991) {
            e.preventDefault();
            e.stopPropagation();
          }

          if ($window.width() > 991) {
            e.preventDefault();
            e.stopPropagation();
            $header.find('li a.active').removeClass('active');

            if ($(this).prop('tagName') == 'I') {
              $(this).parent().addClass('active');
            } else {
              $(this).addClass('active');
            }

            if (!$(this).closest('li').hasClass('open')) {
              var $li = $(this).closest('li'),
                  isSub = false;

              if ($(this).prop('tagName') == 'I') {
                $('#header .dropdown.open').removeClass('open');
                $('#header .dropdown-menu .dropdown-submenu.open').removeClass('open');
              }

              if ($(this).parent().hasClass('dropdown-submenu')) {
                isSub = true;
              }

              $(this).closest('.dropdown-menu').find('.dropdown-submenu.open').removeClass('open');
              $(this).parent('.dropdown').parent().find('.dropdown.open').removeClass('open');

              if (!isSub) {
                $(this).parent().find('.dropdown-submenu.open').removeClass('open');
              }

              $li.addClass('open');
              $(document).off('click.nav-click-to-open').on('click.nav-click-to-open', function (e) {
                if (!$li.is(e.target) && $li.has(e.target).length === 0) {
                  $li.removeClass('open');
                  $li.parents('.open').removeClass('open');
                  $header.find('li a.active').removeClass('active');
                  $header.find('li a.current-page-active').addClass('active');
                }
              });
            } else {
              $(this).closest('li').removeClass('open');
              $header.find('li a.active').removeClass('active');
              $header.find('li a.current-page-active').addClass('active');
            }

            $window.trigger({
              type: 'resize',
              from: 'header-nav-click-to-open'
            });
          }
        }); // Collapse Nav

        $header.find('[data-collapse-nav]').on('click', function (e) {
          $(this).parents('.collapse').removeClass('show');
        }); // Top Features

        $header.find('.header-nav-features-toggle').on('click', function (e) {
          e.preventDefault();
          var $toggleParent = $(this).parent();

          if (!$(this).siblings('.header-nav-features-dropdown').hasClass('show')) {
            var $dropdown = $(this).siblings('.header-nav-features-dropdown');
            $('.header-nav-features-dropdown.show').removeClass('show');
            $dropdown.addClass('show');
            $(document).off('click.header-nav-features-toggle').on('click.header-nav-features-toggle', function (e) {
              if (!$toggleParent.is(e.target) && $toggleParent.has(e.target).length === 0) {
                $('.header-nav-features-dropdown.show').removeClass('show');
              }
            });

            if ($(this).attr('data-focus')) {
              $('#' + $(this).attr('data-focus')).focus();
            }
          } else {
            $(this).siblings('.header-nav-features-dropdown').removeClass('show');
          }
        }); // Hamburguer Menu

        var $hamburguerMenuBtn = $('.hamburguer-btn:not(.side-panel-toggle)'),
            $hamburguerSideHeader = $('#header.side-header, #header.side-header-overlay-full-screen');
        $hamburguerMenuBtn.on('click', function () {
          if ($(this).attr('data-set-active') != 'false') {
            $(this).toggleClass('active');
          }

          $hamburguerSideHeader.toggleClass('side-header-hide');
          $html.toggleClass('side-header-hide');
          $window.trigger('resize');
        });
        $('.hamburguer-close:not(.side-panel-toggle)').on('click', function () {
          $('.hamburguer-btn:not(.hamburguer-btn-side-header-mobile-show)').trigger('click');
        }); // Set Header Body Height when open mobile menu

        $('.header-nav-main nav').on('show.bs.collapse', function () {
          $(this).removeClass('closed'); // Add Mobile Menu Opened Class

          $('html').addClass('mobile-menu-opened');
          $('.header-body').animate({
            height: $('.header-body').outerHeight() + $('.header-nav-main nav').outerHeight(true) + 10
          }); // Header Below Slider / Header Bottom Slider - Scroll to menu position

          if ($('#header').is('.header-bottom-slider, .header-below-slider') && !$('html').hasClass('sticky-header-active')) {
            self.scrollToTarget($('#header'), 0);
          }
        }); // Set Header Body Height when collapse mobile menu

        $('.header-nav-main nav').on('hide.bs.collapse', function () {
          $(this).addClass('closed'); // Remove Mobile Menu Opened Class

          $('html').removeClass('mobile-menu-opened');
          $('.header-body').animate({
            height: $('.header-body').outerHeight() - $('.header-nav-main nav').outerHeight(true)
          }, function () {
            $(this).height('auto');
          });
        }); // Header Effect Shrink - Adjust header body height on mobile

        $window.on('stickyHeader.activate', function () {
          if ($window.width() < 992 && $header.hasClass('header-effect-shrink')) {
            if ($('.header-btn-collapse-nav').attr('aria-expanded') == 'true') {
              $('.header-body').animate({
                height: $('.header-nav-main nav').outerHeight(true) + theme.StickyHeader.options.stickyHeaderContainerHeight + ($('.header-nav-bar').length ? $('.header-nav-bar').outerHeight() : 0)
              });
            }
          }
        });
        $window.on('stickyHeader.deactivate', function () {
          if ($window.width() < 992 && $header.hasClass('header-effect-shrink')) {
            if ($('.header-btn-collapse-nav').attr('aria-expanded') == 'true') {
              $('.header-body').animate({
                height: headerBodyHeight + $('.header-nav-main nav').outerHeight(true) + 10
              });
            }
          }
        }); // Remove Open Class on Resize		

        $window.on('resize.removeOpen', function (e) {
          if (e.from == 'header-nav-click-to-open') {
            return;
          }

          setTimeout(function () {
            if ($window.width() > 991) {
              $header.find('.dropdown.open').removeClass('open');
            }
          }, 100);
        }); // Side Header - Change value of initial header body height

        $(document).ready(function () {
          if ($window.width() > 991) {
            var flag = false;
            $window.on('resize', function (e) {
              if (e.from == 'header-nav-click-to-open') {
                return;
              }

              $header.find('.dropdown.open').removeClass('open');

              if ($window.width() < 992 && flag == false) {
                headerBodyHeight = $('.header-body').outerHeight();
                flag = true;
                setTimeout(function () {
                  flag = false;
                }, 500);
              }
            });
          }
        }); // Side Header - Set header height on mobile

        if ($html.hasClass('side-header')) {
          if ($window.width() < 992) {
            $header.css({
              height: $('.header-body .header-container').outerHeight() + (parseInt($('.header-body').css('border-top-width')) + parseInt($('.header-body').css('border-bottom-width')))
            });
          }

          $(document).ready(function () {
            $window.afterResize(function () {
              if ($window.width() < 992) {
                $header.css({
                  height: $('.header-body .header-container').outerHeight() + (parseInt($('.header-body').css('border-top-width')) + parseInt($('.header-body').css('border-bottom-width')))
                });
              } else {
                $header.css({
                  height: ''
                });
              }
            });
          });
        } // Anchors Position


        if ($('[data-hash]').length) {
          $('[data-hash]').on('mouseover', function () {
            var $this = $(this);

            if (!$this.data('__dataHashBinded')) {
              var target = $this.attr('href'),
                  offset = $this.is("[data-hash-offset]") ? $this.data('hash-offset') : 0,
                  delay = $this.is("[data-hash-delay]") ? $this.data('hash-delay') : 0,
                  force = $this.is("[data-hash-force]") ? true : false,
                  windowWidth = $(window).width(); // Hash Offset SM

              if ($this.is("[data-hash-offset-sm]") && windowWidth > 576) {
                offset = $this.data('hash-offset-sm');
              } // Hash Offset MD


              if ($this.is("[data-hash-offset-md]") && windowWidth > 768) {
                offset = $this.data('hash-offset-md');
              } // Hash Offset LG


              if ($this.is("[data-hash-offset-lg]") && windowWidth > 992) {
                offset = $this.data('hash-offset-lg');
              } // Hash Offset XL


              if ($this.is("[data-hash-offset-xl]") && windowWidth > 1200) {
                offset = $this.data('hash-offset-xl');
              } // Hash Offset XXL


              if ($this.is("[data-hash-offset-xxl]") && windowWidth > 1400) {
                offset = $this.data('hash-offset-xxl');
              }

              if (!$(target).length) {
                target = target.split('#');
                target = '#' + target[1];
              }

              if (target.indexOf('#') != -1 && $(target).length) {
                $this.on('click', function (e) {
                  e.preventDefault();

                  if (!$(e.target).is('i') || force) {
                    setTimeout(function () {
                      // Close Collapse if open
                      $this.parents('.collapse.show').collapse('hide'); // Close Side Header

                      $hamburguerSideHeader.addClass('side-header-hide');
                      $html.addClass('side-header-hide');
                      $window.trigger('resize');
                      self.scrollToTarget(target, offset); // Data Hash Trigger Click

                      if ($this.data('hash-trigger-click')) {
                        var $clickTarget = $($this.data('hash-trigger-click')),
                            clickDelay = $this.data('hash-trigger-click-delay') ? $this.data('hash-trigger-click-delay') : 0;

                        if ($clickTarget.length) {
                          setTimeout(function () {
                            // If is a "Tabs" plugin link
                            if ($clickTarget.closest('.nav-tabs').length) {
                              new bootstrap.Tab($clickTarget[0]).show();
                            } else {
                              $clickTarget.trigger('click');
                            }
                          }, clickDelay);
                        }
                      }
                    }, delay);
                  }

                  return;
                });
              }

              $(this).data('__dataHashBinded', true);
            }
          });
        } // Floating


        if ($('#header.header-floating-icons').length) {
          $('#header.header-floating-icons [data-hash]').off().each(function () {
            var target = $(this).attr('href'),
                offset = $(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0;

            if ($(target).length) {
              $(this).on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({
                  scrollTop: $(target).offset().top - offset
                }, 600, 'easeOutQuad', function () {});
                return;
              });
            }
          });
        } // Side Panel Toggle


        if ($('.side-panel-toggle').length) {
          var init_html_class = $('html').attr('class');
          $('.side-panel-toggle').on('click', function (e) {
            var extra_class = $(this).data('extra-class'),
                delay = extra_class ? 100 : 0,
                isActive = $(this).data('is-active') ? $(this).data('is-active') : false;
            e.preventDefault();

            if (isActive) {
              $('html').removeClass('side-panel-open');
              $(this).data('is-active', false);
              return false;
            }

            if (extra_class) {
              $('.side-panel-wrapper').css('transition', 'none');
              $('html').removeClass().addClass(init_html_class).addClass(extra_class);
            }

            setTimeout(function () {
              $('.side-panel-wrapper').css('transition', '');
              $('html').toggleClass('side-panel-open');
            }, delay);
            $(this).data('is-active', true);
          });
          $(document).on('click', function (e) {
            if (!$(e.target).closest('.side-panel-wrapper').length && !$(e.target).hasClass('side-panel-toggle')) {
              $('.hamburguer-btn.side-panel-toggle:not(.side-panel-close)').removeClass('active');
              $('html').removeClass('side-panel-open');
            }
          });
        }

        return this;
      },
      scrollToTarget: function scrollToTarget(target, offset) {
        var self = this,
            targetPosition = $(target).offset().top;
        $('body').addClass('scrolling');
        $('html, body').animate({
          scrollTop: $(target).offset().top - offset
        }, self.options.scrollDelay, self.options.scrollAnimation, function () {
          $('body').removeClass('scrolling'); // If by some reason the scroll finishes in a wrong position, this code will run the scrollToTarget() again until get the correct position
          // We need do it just one time to prevent infinite recursive loop at scrollToTarget() function

          if ($(target).offset().top != targetPosition) {
            self.scrollToTarget(target, offset);
          }
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Newsletter

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Newsletter: {
      defaults: {
        wrapper: $('#newsletterForm')
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).build();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        if (!$.isFunction($.fn.validate)) {
          return this;
        }

        var self = this,
            $email = self.$wrapper.find('#newsletterEmail'),
            $success = $('#newsletterSuccess'),
            $error = $('#newsletterError');
        self.$wrapper.validate({
          submitHandler: function submitHandler(form) {
            $.ajax({
              type: 'POST',
              url: self.$wrapper.attr('action'),
              data: {
                'email': $email.val()
              },
              dataType: 'json',
              success: function success(data) {
                if (data.response == 'success') {
                  $success.removeClass('d-none');
                  $error.addClass('d-none');
                  $email.val('').blur().closest('.control-group').removeClass('success').removeClass('error');
                } else {
                  $error.html(data.message);
                  $error.removeClass('d-none');
                  $success.addClass('d-none');
                  $email.blur().closest('.control-group').removeClass('success').addClass('error');
                }
              }
            });
          },
          rules: {
            newsletterEmail: {
              required: true,
              email: true
            }
          },
          errorPlacement: function errorPlacement(error, element) {}
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Search

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Search: {
      defaults: {
        wrapper: $('#searchForm')
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).build();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        if (!$.isFunction($.fn.validate)) {
          return this;
        }

        this.$wrapper.validate({
          errorPlacement: function errorPlacement(error, element) {}
        }); // Search Reveal

        theme.fn.execOnceTroughEvent('#header', 'mouseover.search.reveal', function () {
          $('.header-nav-features-search-reveal').each(function () {
            var $el = $(this),
                $header = $('#header'),
                $html = $('html');
            $el.find('.header-nav-features-search-show-icon').on('click', function () {
              $el.addClass('show');
              $header.addClass('search-show');
              $html.addClass('search-show');
              $('#headerSearch').focus();
            });
            $el.find('.header-nav-features-search-hide-icon').on('click', function () {
              $el.removeClass('show');
              $header.removeClass('search-show');
              $html.removeClass('search-show');
            });
          });
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Sticky Header

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    StickyHeader: {
      defaults: {
        wrapper: $('#header'),
        headerBody: $('#header .header-body'),
        stickyEnabled: true,
        stickyEnableOnBoxed: true,
        stickyEnableOnMobile: false,
        stickyStartAt: 0,
        stickyStartAtElement: false,
        stickySetTop: 0,
        stickyEffect: '',
        stickyHeaderContainerHeight: false,
        stickyChangeLogo: false,
        stickyChangeLogoWrapper: true,
        stickyForce: false,
        stickyScrollUp: false,
        stickyScrollValue: 0
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;

        if (this.$wrapper.hasClass('header')) {
          this.$wrapper = $('.header[data-plugin-options]');
        }

        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        if ($(window).width() < 992 && this.options.stickyEnableOnMobile == false) {
          $('html').addClass('sticky-header-mobile-disabled');
          return this;
        }

        if (!this.options.stickyEnableOnBoxed && $('html').hasClass('boxed') || $('html').hasClass('side-header-hamburguer-sidebar') && !this.options.stickyForce || !this.options.stickyEnabled) {
          return this;
        }

        var self = this;

        if (self.options.wrapper.hasClass('header')) {
          self.options.wrapper = $('.header');
          self.options.headerBody = $('.header .header-body');
        }

        var $html = $('html'),
            $window = $(window),
            sideHeader = $html.hasClass('side-header'),
            initialHeaderTopHeight = self.options.wrapper.find('.header-top').outerHeight(),
            initialHeaderContainerHeight = self.options.wrapper.find('.header-container').outerHeight(),
            minHeight; // HTML Classes

        $html.addClass('sticky-header-enabled');

        if (parseInt(self.options.stickySetTop) < 0) {
          $html.addClass('sticky-header-negative');
        }

        if (self.options.stickyScrollUp) {
          $html.addClass('sticky-header-scroll-direction');
        } // Notice Top Bar First Load


        if ($('.notice-top-bar').get(0)) {
          if (parseInt(self.options.stickySetTop) == 1 || self.options.stickyEffect == 'shrink') {
            $('.body').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
              setTimeout(function () {
                if (!$html.hasClass('sticky-header-active')) {
                  self.options.headerBody.animate({
                    top: $('.notice-top-bar').outerHeight()
                  }, 300, function () {
                    if ($html.hasClass('sticky-header-active')) {
                      self.options.headerBody.css('top', 0);
                    }
                  });
                }
              }, 0);
            });
          }
        } // Set Start At


        if (self.options.stickyStartAtElement) {
          var $stickyStartAtElement = $(self.options.stickyStartAtElement);
          $(window).on('scroll resize sticky.header.resize', function () {
            self.options.stickyStartAt = $stickyStartAtElement.offset().top;
          });
          $(window).trigger('sticky.header.resize');
        } // Define Min Height value


        if (self.options.wrapper.find('.header-top').get(0)) {
          minHeight = initialHeaderTopHeight + initialHeaderContainerHeight;
        } else {
          minHeight = initialHeaderContainerHeight;
        } // Set Wrapper Min-Height


        if (!sideHeader) {
          if (!$('.header-logo-sticky-change').get(0)) {
            self.options.wrapper.css('height', self.options.headerBody.outerHeight());
          } else {
            $window.on('stickyChangeLogo.loaded', function () {
              self.options.wrapper.css('height', self.options.headerBody.outerHeight());
            });
          }

          if (self.options.stickyEffect == 'shrink') {
            // Prevent wrong visualization of header when reload on middle of page
            $(document).ready(function () {
              if ($window.scrollTop() >= self.options.stickyStartAt) {
                self.options.wrapper.find('.header-container').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                  self.options.headerBody.css('position', 'fixed');
                });
              } else {
                if (!$html.hasClass('boxed')) {
                  self.options.headerBody.css('position', 'fixed');
                }
              }
            });
            self.options.wrapper.find('.header-container').css('height', initialHeaderContainerHeight);
            self.options.wrapper.find('.header-top').css('height', initialHeaderTopHeight);
          }
        } // Sticky Header Container Height


        if (self.options.stickyHeaderContainerHeight) {
          self.options.wrapper.find('.header-container').css('height', self.options.wrapper.find('.header-container').outerHeight());
        } // Boxed


        if ($html.hasClass('boxed') && self.options.stickyEffect == 'shrink') {
          self.boxedLayout();
        } // Check Sticky Header / Flags prevent multiple runs at same time


        var activate_flag = true,
            deactivate_flag = false,
            initialStickyStartAt = self.options.stickyStartAt;

        self.checkStickyHeader = function () {
          // Notice Top Bar
          var $noticeTopBar = $('.notice-top-bar');

          if ($noticeTopBar.get(0)) {
            self.options.stickyStartAt = $noticeTopBar.data('sticky-start-at') ? $noticeTopBar.data('sticky-start-at') : $('.notice-top-bar').outerHeight();
          } else {
            if ($html.hasClass('boxed')) {
              self.options.stickyStartAt = initialStickyStartAt + 25;
            } else {
              self.options.stickyStartAt = initialStickyStartAt;
            }
          }

          if ($window.width() > 991 && $html.hasClass('side-header')) {
            $html.removeClass('sticky-header-active');
            activate_flag = true;
            return;
          }

          if ($window.scrollTop() >= parseInt(self.options.stickyStartAt)) {
            if (activate_flag) {
              self.activateStickyHeader();
              activate_flag = false;
              deactivate_flag = true;
            }
          } else {
            if (deactivate_flag) {
              self.deactivateStickyHeader();
              deactivate_flag = false;
              activate_flag = true;
            }
          } // Scroll Up


          if (self.options.stickyScrollUp) {
            // Get the new Value
            self.options.stickyScrollNewValue = window.pageYOffset; //Subtract the two and conclude

            if (self.options.stickyScrollValue - self.options.stickyScrollNewValue < 0) {
              $html.removeClass('sticky-header-scroll-up').addClass('sticky-header-scroll-down');
            } else if (self.options.stickyScrollValue - self.options.stickyScrollNewValue > 0) {
              $html.removeClass('sticky-header-scroll-down').addClass('sticky-header-scroll-up');
            } // Update the old value


            self.options.stickyScrollValue = self.options.stickyScrollNewValue;
          }
        }; // Activate Sticky Header


        self.activateStickyHeader = function () {
          if ($window.width() < 992) {
            if (self.options.stickyEnableOnMobile == false) {
              self.deactivateStickyHeader();
              self.options.headerBody.css({
                position: 'relative'
              });
              return false;
            }
          } else {
            if (sideHeader) {
              self.deactivateStickyHeader();
              return;
            }
          }

          $html.addClass('sticky-header-active'); // Sticky Effect - Reveal

          if (self.options.stickyEffect == 'reveal') {
            self.options.headerBody.css('top', '-' + self.options.stickyStartAt + 'px');
            self.options.headerBody.animate({
              top: self.options.stickySetTop
            }, 400, function () {});
          } // Sticky Effect - Shrink


          if (self.options.stickyEffect == 'shrink') {
            // If Header Top
            if (self.options.wrapper.find('.header-top').get(0)) {
              self.options.wrapper.find('.header-top').css({
                height: 0,
                'min-height': 0,
                overflow: 'hidden'
              });
            } // Header Container


            if (self.options.stickyHeaderContainerHeight) {
              self.options.wrapper.find('.header-container').css({
                height: self.options.stickyHeaderContainerHeight,
                'min-height': 0
              });
            } else {
              self.options.wrapper.find('.header-container').css({
                height: initialHeaderContainerHeight / 3 * 2,
                // two third of container height
                'min-height': 0
              });
              var y = initialHeaderContainerHeight - initialHeaderContainerHeight / 3 * 2;
              $('.main').css({
                transform: 'translate3d(0, -' + y + 'px, 0)',
                transition: 'ease transform 300ms'
              }).addClass('has-sticky-header-transform');

              if ($html.hasClass('boxed')) {
                self.options.headerBody.css('position', 'fixed');
              }
            }
          }

          self.options.headerBody.css('top', self.options.stickySetTop);

          if (self.options.stickyChangeLogo) {
            self.changeLogo(true);
          } // Set Elements Style


          if ($('[data-sticky-header-style]').length) {
            $('[data-sticky-header-style]').each(function () {
              var $el = $(this),
                  css = theme.fn.getOptions($el.data('sticky-header-style-active')),
                  opts = theme.fn.getOptions($el.data('sticky-header-style'));

              if ($window.width() > opts.minResolution) {
                $el.css(css);
              }
            });
          }

          $.event.trigger({
            type: 'stickyHeader.activate'
          });
        }; // Deactivate Sticky Header


        self.deactivateStickyHeader = function () {
          $html.removeClass('sticky-header-active');

          if ($(window).width() < 992 && self.options.stickyEnableOnMobile == false) {
            return false;
          } // Sticky Effect - Shrink


          if (self.options.stickyEffect == 'shrink') {
            // Boxed Layout
            if ($html.hasClass('boxed')) {
              // Set Header Body Position Absolute
              self.options.headerBody.css('position', 'absolute');

              if ($window.scrollTop() > $('.body').offset().top) {
                // Set Header Body Position Fixed
                self.options.headerBody.css('position', 'fixed');
              }
            } else {
              // Set Header Body Position Fixed
              self.options.headerBody.css('position', 'fixed');
            } // If Header Top


            if (self.options.wrapper.find('.header-top').get(0)) {
              self.options.wrapper.find('.header-top').css({
                height: initialHeaderTopHeight,
                overflow: 'visible'
              }); // Fix [data-icon] issue when first load is on middle of the page

              if (self.options.wrapper.find('.header-top [data-icon]').length) {
                theme.fn.intObsInit('.header-top [data-icon]:not(.svg-inline--fa)', 'themePluginIcon');
              }
            } // Header Container


            self.options.wrapper.find('.header-container').css({
              height: initialHeaderContainerHeight
            });
          }

          self.options.headerBody.css('top', 0);

          if (self.options.stickyChangeLogo) {
            self.changeLogo(false);
          } // Set Elements Style


          if ($('[data-sticky-header-style]').length) {
            $('[data-sticky-header-style]').each(function () {
              var $el = $(this),
                  css = theme.fn.getOptions($el.data('sticky-header-style-deactive')),
                  opts = theme.fn.getOptions($el.data('sticky-header-style'));

              if ($window.width() > opts.minResolution) {
                $el.css(css);
              }
            });
          }

          $.event.trigger({
            type: 'stickyHeader.deactivate'
          });
        }; // Always Sticky


        if (parseInt(self.options.stickyStartAt) <= 0) {
          self.activateStickyHeader();
        } // Set Logo


        if (self.options.stickyChangeLogo) {
          var $logoWrapper = self.options.wrapper.find('.header-logo'),
              $logo = $logoWrapper.find('img'),
              logoWidth = $logo.attr('width'),
              logoHeight = $logo.attr('height'),
              logoSmallTop = parseInt($logo.attr('data-sticky-top') ? $logo.attr('data-sticky-top') : 0),
              logoSmallWidth = parseInt($logo.attr('data-sticky-width') ? $logo.attr('data-sticky-width') : 'auto'),
              logoSmallHeight = parseInt($logo.attr('data-sticky-height') ? $logo.attr('data-sticky-height') : 'auto');

          if (self.options.stickyChangeLogoWrapper) {
            $logoWrapper.css({
              'width': $logo.outerWidth(true),
              'height': $logo.outerHeight(true)
            });
          }

          self.changeLogo = function (activate) {
            if (activate) {
              $logo.css({
                'top': logoSmallTop,
                'width': logoSmallWidth,
                'height': logoSmallHeight
              });
            } else {
              $logo.css({
                'top': 0,
                'width': logoWidth,
                'height': logoHeight
              });
            }
          };

          $.event.trigger({
            type: 'stickyChangeLogo.loaded'
          });
        } // Side Header


        var headerBodyHeight,
            flag = false;

        self.checkSideHeader = function () {
          if ($window.width() < 992 && flag == false) {
            headerBodyHeight = self.options.headerBody.height();
            flag = true;
          }

          if (self.options.stickyStartAt == 0 && sideHeader) {
            self.options.wrapper.css('min-height', 0);
          }

          if (self.options.stickyStartAt > 0 && sideHeader && $window.width() < 992) {
            self.options.wrapper.css('min-height', headerBodyHeight);
          }
        };

        return this;
      },
      events: function events() {
        var self = this;

        if ($(window).width() < 992 && this.options.stickyEnableOnMobile == false) {
          return this;
        }

        if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || $('html').hasClass('side-header-hamburguer-sidebar') && !this.options.stickyForce || !this.options.stickyEnabled) {
          return this;
        }

        if (!self.options.alwaysStickyEnabled) {
          $(window).on('scroll resize', function () {
            if ($(window).width() < 992 && self.options.stickyEnableOnMobile == false) {
              self.options.headerBody.css({
                position: ''
              });

              if (self.options.stickyEffect == 'shrink') {
                self.options.wrapper.find('.header-top').css({
                  height: ''
                });
              }

              self.deactivateStickyHeader();
            } else {
              self.checkStickyHeader();
            }
          });
        } else {
          self.activateStickyHeader();
        }

        $(window).on('load resize', function () {
          self.checkSideHeader();
        });
        $(window).on('layout.boxed', function () {
          self.boxedLayout();
        });
        return this;
      },
      boxedLayout: function boxedLayout() {
        var self = this,
            $window = $(window);

        if ($('html').hasClass('boxed') && self.options.stickyEffect == 'shrink') {
          if (parseInt(self.options.stickyStartAt) == 0 && $window.width() > 991) {
            self.options.stickyStartAt = 30;
          } // Set Header Body Position Absolute


          self.options.headerBody.css({
            position: 'absolute',
            top: 0
          }); // Set position absolute because top margin from boxed layout

          $window.on('scroll', function () {
            if ($window.scrollTop() > $('.body').offset().top) {
              self.options.headerBody.css({
                'position': 'fixed',
                'top': 0
              });
            } else {
              self.options.headerBody.css({
                'position': 'absolute',
                'top': 0
              });
            }
          });
        }

        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]);

/***/ }),

/***/ "./assets/themes/startup/js/views/view.contact.js":
/*!********************************************************!*\
  !*** ./assets/themes/startup/js/views/view.contact.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");

__webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");

/*
Name: 			View - Contact
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	9.3.0
*/
(function ($) {
  'use strict';
  /*
  Custom Rules
  */
  // No White Space

  $.validator.addMethod("noSpace", function (value, element) {
    if ($(element).attr('required')) {
      return value.search(/^(?! *$)[^]+$/) == 0;
    }

    return true;
  }, 'Please fill this empty field.');
  /*
  Assign Custom Rules on Fields
  */

  $.validator.addClassRules({
    'form-control': {
      noSpace: true
    }
  });
  /*
  Contact Form: Basic
  */

  $('.contact-form').each(function () {
    $(this).validate({
      errorPlacement: function errorPlacement(error, element) {
        if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
          error.appendTo(element.closest('.form-group'));
        } else if (element.is('select') && element.closest('.custom-select-1')) {
          error.appendTo(element.closest('.form-group'));
        } else {
          if (element.closest('.form-group').length) {
            error.appendTo(element.closest('.form-group'));
          } else {
            error.insertAfter(element);
          }
        }
      },
      submitHandler: function submitHandler(form) {
        var $form = $(form),
            $messageSuccess = $form.find('.contact-form-success'),
            $messageError = $form.find('.contact-form-error'),
            $submitButton = $(this.submitButton),
            $errorMessage = $form.find('.mail-error-message'),
            submitButtonText = $submitButton.val();
        $submitButton.val($submitButton.data('loading-text') ? $submitButton.data('loading-text') : 'Loading...').attr('disabled', true); // Fields Data

        var formData = $form.serializeArray(),
            data = {};
        $(formData).each(function (index, obj) {
          if (data[obj.name]) {
            data[obj.name] = data[obj.name] + ', ' + obj.value;
          } else {
            data[obj.name] = obj.value;
          }
        }); // Google Recaptcha v2

        if (data["g-recaptcha-response"] != undefined) {
          data["g-recaptcha-response"] = $form.find('#g-recaptcha-response').val();
        } // Ajax Submit


        $.ajax({
          type: 'POST',
          url: $form.attr('action'),
          data: data
        }).always(function (data, textStatus, jqXHR) {
          $errorMessage.empty().hide();

          if (data.response == 'success') {
            // Uncomment the code below to redirect for a thank you page
            // self.location = 'thank-you.html';
            $messageSuccess.removeClass('d-none');
            $messageError.addClass('d-none'); // Reset Form

            $form.find('.form-control').val('').blur().parent().removeClass('has-success').removeClass('has-danger').find('label.error').remove();

            if ($messageSuccess.offset().top - 80 < $(window).scrollTop()) {
              $('html, body').animate({
                scrollTop: $messageSuccess.offset().top - 80
              }, 300);
            }

            $form.find('.form-control').removeClass('error');
            $submitButton.val(submitButtonText).attr('disabled', false);
            return;
          } else if (data.response == 'error' && typeof data.errorMessage !== 'undefined') {
            $errorMessage.html(data.errorMessage).show();
          } else {
            $errorMessage.html(data.responseText).show();
          }

          $messageError.removeClass('d-none');
          $messageSuccess.addClass('d-none');

          if ($messageError.offset().top - 80 < $(window).scrollTop()) {
            $('html, body').animate({
              scrollTop: $messageError.offset().top - 80
            }, 300);
          }

          $form.find('.has-success').removeClass('has-success');
          $submitButton.val(submitButtonText).attr('disabled', false);
        });
      }
    });
  });
  /*
  Contact Form: Advanced
  */

  $('#contactFormAdvanced').validate({
    onkeyup: false,
    onclick: false,
    onfocusout: false,
    rules: {
      'captcha': {
        captcha: true
      },
      'checkboxes[]': {
        required: true
      },
      'radios': {
        required: true
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
        error.appendTo(element.closest('.form-group'));
      } else if (element.is('select') && element.closest('.custom-select-1')) {
        error.appendTo(element.closest('.form-group'));
      } else {
        error.insertAfter(element);
      }
    }
  });
  /*
  Contact Form: reCaptcha v3
  */

  $('.contact-form-recaptcha-v3').each(function () {
    $(this).validate({
      errorPlacement: function errorPlacement(error, element) {
        if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
          error.appendTo(element.closest('.form-group'));
        } else if (element.is('select') && element.closest('.custom-select-1')) {
          error.appendTo(element.closest('.form-group'));
        } else {
          error.insertAfter(element);
        }
      },
      submitHandler: function submitHandler(form) {
        var $form = $(form),
            $messageSuccess = $form.find('.contact-form-success'),
            $messageError = $form.find('.contact-form-error'),
            $submitButton = $(this.submitButton),
            $errorMessage = $form.find('.mail-error-message'),
            submitButtonText = $submitButton.val();
        $submitButton.val($submitButton.data('loading-text') ? $submitButton.data('loading-text') : 'Loading...').attr('disabled', true);
        var recaptchaSrcURL = $('#google-recaptcha-v3').attr('src'),
            newURL = new URL(recaptchaSrcURL),
            site_key = newURL.searchParams.get("render");
        grecaptcha.execute(site_key, {
          action: 'contact_us'
        }).then(function (token) {
          // Fields Data
          var formData = $form.serializeArray(),
              data = {};
          $(formData).each(function (index, obj) {
            data[obj.name] = obj.value;
          }); // Recaptcha v3 Token

          data["g-recaptcha-response"] = token; // Ajax Submit

          $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: data
          }).always(function (data, textStatus, jqXHR) {
            $errorMessage.empty().hide();

            if (data.response == 'success') {
              // Uncomment the code below to redirect for a thank you page
              // self.location = 'thank-you.html';
              $messageSuccess.removeClass('d-none');
              $messageError.addClass('d-none'); // Reset Form

              $form.find('.form-control').val('').blur().parent().removeClass('has-success').removeClass('has-danger').find('label.error').remove();

              if ($messageSuccess.offset().top - 80 < $(window).scrollTop()) {
                $('html, body').animate({
                  scrollTop: $messageSuccess.offset().top - 80
                }, 300);
              }

              $form.find('.form-control').removeClass('error');
              $submitButton.val(submitButtonText).attr('disabled', false);
              return;
            } else if (data.response == 'error' && typeof data.errorMessage !== 'undefined') {
              $errorMessage.html(data.errorMessage).show();
            } else {
              $errorMessage.html(data.responseText).show();
            }

            $messageError.removeClass('d-none');
            $messageSuccess.addClass('d-none');

            if ($messageError.offset().top - 80 < $(window).scrollTop()) {
              $('html, body').animate({
                scrollTop: $messageError.offset().top - 80
              }, 300);
            }

            $form.find('.has-success').removeClass('has-success');
            $submitButton.val(submitButtonText).attr('disabled', false);
          });
        });
      }
    });
  });
}).apply(this, [jQuery]);

/***/ }),

/***/ "./assets/themes/startup/vendor/bootstrap/js/bootstrap.bundle.min.js":
/*!***************************************************************************!*\
  !*** ./assets/themes/startup/vendor/bootstrap/js/bootstrap.bundle.min.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

__webpack_require__(/*! core-js/modules/esnext.global-this.js */ "./node_modules/core-js/modules/esnext.global-this.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-names.js */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");

__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var t = "transitionend",
      e = function e(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i2 = t.getAttribute("href");

      if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
      _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#".concat(_i2.split("#")[1])), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
    }

    return e;
  },
      i = function i(t) {
    var i = e(t);
    return i && document.querySelector(i) ? i : null;
  },
      n = function n(t) {
    var i = e(t);
    return i ? document.querySelector(i) : null;
  },
      s = function s(e) {
    e.dispatchEvent(new Event(t));
  },
      o = function o(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      r = function r(t) {
    return o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
  },
      a = function a(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var s = i[n],
          r = e[n],
          a = r && o(r) ? "element" : null == (l = r) ? "".concat(l) : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(s).test(a)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(a, "\" but expected type \"").concat(s, "\"."));
    });
  },
      l = function l(t) {
    return !(!o(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility");
  },
      c = function c(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      h = function h(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e2 = t.getRootNode();

      return _e2 instanceof ShadowRoot ? _e2 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
  },
      d = function d() {},
      u = function u(t) {
    t.offsetHeight;
  },
      f = function f() {
    var _window = window,
        t = __webpack_provided_window_dot_jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      p = [],
      m = function m() {
    return "rtl" === document.documentElement.dir;
  },
      g = function g(t) {
    var e;
    e = function e() {
      var e = f();

      if (e) {
        var _i3 = t.NAME,
            _n2 = e.fn[_i3];
        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
          return e.fn[_i3] = _n2, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", function () {
      p.forEach(function (t) {
        return t();
      });
    }), p.push(e)) : e();
  },
      _ = function _(t) {
    "function" == typeof t && t();
  },
      b = function b(e, i) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!n) return void _(e);

    var o = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(i) + 5;

    var r = !1;

    var a = function a(_ref) {
      var n = _ref.target;
      n === i && (r = !0, i.removeEventListener(t, a), _(e));
    };

    i.addEventListener(t, a), setTimeout(function () {
      r || s(i);
    }, o);
  },
      v = function v(t, e, i, n) {
    var s = t.indexOf(e);
    if (-1 === s) return t[!i && n ? t.length - 1 : 0];
    var o = t.length;
    return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
  },
      y = /[^.]*(?=\..*)\.|.*/,
      w = /\..*/,
      E = /::\d+$/,
      A = {};

  var T = 1;
  var O = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      C = /^(mouseenter|mouseleave)/i,
      k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function L(t, e) {
    return e && "".concat(e, "::").concat(T++) || t.uidEvent || T++;
  }

  function x(t) {
    var e = L(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e];
  }

  function D(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s = 0, _o = n.length; _s < _o; _s++) {
      var _o2 = t[n[_s]];
      if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
    }

    return null;
  }

  function S(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = P(t);
    return k.has(o) || (o = t), [n, s, o];
  }

  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), C.test(e)) {
      var _t2 = function _t2(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t2(n) : i = _t2(i);
    }

    var _S = S(e, i, n),
        _S2 = _slicedToArray(_S, 3),
        o = _S2[0],
        r = _S2[1],
        a = _S2[2],
        l = x(t),
        c = l[a] || (l[a] = {}),
        h = D(c, r, o ? i : null);

    if (h) return void (h.oneOff = h.oneOff && s);
    var d = L(r, e.replace(y, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r) return s.delegateTarget = _r, n.oneOff && j.off(t, s.type, e, i), i.apply(_r, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && j.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function I(t, e, i, n, s) {
    var o = D(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function P(t) {
    return t = t.replace(w, ""), O[t] || t;
  }

  var j = {
    on: function on(t, e, i, n) {
      N(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      N(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _S3 = S(e, i, n),
          _S4 = _slicedToArray(_S3, 3),
          s = _S4[0],
          o = _S4[1],
          r = _S4[2],
          a = r !== e,
          l = x(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void I(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n3 = s[o];
              I(t, e, i, _n3.originalHandler, _n3.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (i) {
        var n = i.replace(E, "");

        if (!a || e.includes(n)) {
          var _e3 = h[i];
          I(t, l, r, _e3.originalHandler, _e3.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = f(),
          s = P(e),
          o = e !== s,
          r = k.has(s);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return i[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  },
      M = new Map(),
      H = {
    set: function set(t, e, i) {
      M.has(t) || M.set(t, new Map());
      var n = M.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return M.has(t) && M.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!M.has(t)) return;
      var i = M.get(t);
      i["delete"](e), 0 === i.size && M["delete"](t);
    }
  };

  var B = /*#__PURE__*/function () {
    function B(t) {
      _classCallCheck(this, B);

      (t = r(t)) && (this._element = t, H.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(B, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        H.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        b(t, e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return H.get(r(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.1.3";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);

    return B;
  }();

  var R = function R(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
        s = t.NAME;
    j.on(document, i, "[data-bs-dismiss=\"".concat(s, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)) return;
      var o = n(this) || this.closest(".".concat(s));
      t.getOrCreateInstance(o)[e]();
    });
  };

  var W = /*#__PURE__*/function (_B) {
    _inherits(W, _B);

    var _super = _createSuper(W);

    function W() {
      _classCallCheck(this, W);

      return _super.apply(this, arguments);
    }

    _createClass(W, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), j.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = W.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return W;
  }(B);

  R(W, "close"), g(W);
  var $ = '[data-bs-toggle="button"]';

  var z = /*#__PURE__*/function (_B2) {
    _inherits(z, _B2);

    var _super2 = _createSuper(z);

    function z() {
      _classCallCheck(this, z);

      return _super2.apply(this, arguments);
    }

    _createClass(z, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = z.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);

    return z;
  }(B);

  function q(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function F(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  j.on(document, "click.bs.button.data-api", $, function (t) {
    t.preventDefault();
    var e = t.target.closest($);
    z.getOrCreateInstance(e).toggle();
  }), g(z);
  var U = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(F(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(F(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return q(t.getAttribute("data-bs-".concat(F(e))));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + window.pageYOffset,
        left: e.left + window.pageXOffset
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      V = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode;

      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
        n.matches(e) && i.push(n), n = n.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return "".concat(t, ":not([tabindex^=\"-\"])");
      }).join(", ");
      return this.find(e, t).filter(function (t) {
        return !c(t) && l(t);
      });
    }
  },
      K = "carousel",
      X = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Y = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      Q = "next",
      G = "prev",
      Z = "left",
      J = "right",
      tt = {
    ArrowLeft: J,
    ArrowRight: Z
  },
      et = "slid.bs.carousel",
      it = "active",
      nt = ".active.carousel-item";

  var st = /*#__PURE__*/function (_B3) {
    _inherits(st, _B3);

    var _super3 = _createSuper(st);

    function st(t, e) {
      var _this3;

      _classCallCheck(this, st);

      _this3 = _super3.call(this, t), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = V.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(st, [{
      key: "next",
      value: function next() {
        this._slide(Q);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && l(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(G);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this4 = this;

        this._activeElement = V.findOne(nt, this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void j.one(this._element, et, function () {
          return _this4.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var i = t > e ? Q : G;

        this._slide(i, this._items[t]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, X), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), a(K, t, Y), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && j.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), j.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var t = function t(_t3) {
          return _this6._pointerEvent && ("pen" === _t3.pointerType || "touch" === _t3.pointerType);
        },
            e = function e(_e4) {
          t(_e4) ? _this6.touchStartX = _e4.clientX : _this6._pointerEvent || (_this6.touchStartX = _e4.touches[0].clientX);
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            n = function n(e) {
          t(e) && (_this6.touchDeltaX = e.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        V.find(".carousel-item img", this._element).forEach(function (t) {
          j.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), j.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), j.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), j.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = tt[t.key];
        e && (t.preventDefault(), this._slide(e));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? V.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === Q;
        return v(this._items, e, i, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var i = this._getItemIndex(t),
            n = this._getItemIndex(V.findOne(nt, this._element));

        return j.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e5 = V.findOne(".active", this._indicatorsElement);

          _e5.classList.remove(it), _e5.removeAttribute("aria-current");

          var _i4 = V.find("[data-bs-target]", this._indicatorsElement);

          for (var _e6 = 0; _e6 < _i4.length; _e6++) {
            if (Number.parseInt(_i4[_e6].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _i4[_e6].classList.add(it), _i4[_e6].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || V.findOne(nt, this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this7 = this;

        var i = this._directionToOrder(t),
            n = V.findOne(nt, this._element),
            s = this._getItemIndex(n),
            o = e || this._getItemByOrder(i, n),
            r = this._getItemIndex(o),
            a = Boolean(this._interval),
            l = i === Q,
            c = l ? "carousel-item-start" : "carousel-item-end",
            h = l ? "carousel-item-next" : "carousel-item-prev",
            d = this._orderToDirection(i);

        if (o && o.classList.contains(it)) return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(o, d).defaultPrevented) return;
        if (!n || !o) return;
        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

        var f = function f() {
          j.trigger(_this7._element, et, {
            relatedTarget: o,
            direction: d,
            from: s,
            to: r
          });
        };

        if (this._element.classList.contains("slide")) {
          o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);

          var _t4 = function _t4() {
            o.classList.remove(c, h), o.classList.add(it), n.classList.remove(it, h, c), _this7._isSliding = !1, setTimeout(f, 0);
          };

          this._queueCallback(_t4, n, !0);
        } else n.classList.remove(it), o.classList.add(it), this._isSliding = !1, f();

        a && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [J, Z].includes(t) ? m() ? t === Z ? G : Q : t === Z ? Q : G : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [Q, G].includes(t) ? m() ? t === G ? Z : J : t === G ? J : Z : t;
      }
    }], [{
      key: "Default",
      get: function get() {
        return X;
      }
    }, {
      key: "NAME",
      get: function get() {
        return K;
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = st.getOrCreateInstance(t, e);
        var n = i._config;
        "object" == _typeof(e) && (n = _objectSpread(_objectSpread({}, n), e));
        var s = "string" == typeof e ? e : n.slide;
        if ("number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          st.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = n(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread(_objectSpread({}, U.getDataAttributes(e)), U.getDataAttributes(this)),
            s = this.getAttribute("data-bs-slide-to");

        s && (i.interval = !1), st.carouselInterface(e, i), s && st.getInstance(e).to(s), t.preventDefault();
      }
    }]);

    return st;
  }(B);

  j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j.on(window, "load.bs.carousel.data-api", function () {
    var t = V.find('[data-bs-ride="carousel"]');

    for (var _e7 = 0, _i5 = t.length; _e7 < _i5; _e7++) {
      st.carouselInterface(t[_e7], st.getInstance(t[_e7]));
    }
  }), g(st);
  var ot = "collapse",
      rt = {
    toggle: !0,
    parent: null
  },
      at = {
    toggle: "boolean",
    parent: "(null|element)"
  },
      lt = "show",
      ct = "collapse",
      ht = "collapsing",
      dt = "collapsed",
      ut = ":scope .collapse .collapse",
      ft = '[data-bs-toggle="collapse"]';

  var pt = /*#__PURE__*/function (_B4) {
    _inherits(pt, _B4);

    var _super4 = _createSuper(pt);

    function pt(t, e) {
      var _this8;

      _classCallCheck(this, pt);

      _this8 = _super4.call(this, t), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(e), _this8._triggerArray = [];
      var n = V.find(ft);

      for (var _t5 = 0, _e8 = n.length; _t5 < _e8; _t5++) {
        var _e9 = n[_t5],
            _s2 = i(_e9),
            _o3 = V.find(_s2).filter(function (t) {
          return t === _this8._element;
        });

        null !== _s2 && _o3.length && (_this8._selector = _s2, _this8._triggerArray.push(_e9));
      }

      _this8._initializeChildren(), _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown()), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(pt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t,
            e = [];

        if (this._config.parent) {
          var _t6 = V.find(ut, this._config.parent);

          e = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function (e) {
            return !_t6.includes(e);
          });
        }

        var i = V.findOne(this._selector);

        if (e.length) {
          var _n4 = e.find(function (t) {
            return i !== t;
          });

          if (t = _n4 ? pt.getInstance(_n4) : null, t && t._isTransitioning) return;
        }

        if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e.forEach(function (e) {
          i !== e && pt.getOrCreateInstance(e, {
            toggle: !1
          }).hide(), t || H.set(e, "bs.collapse", null);
        });

        var n = this._getDimension();

        this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var s = "scroll".concat(n[0].toUpperCase() + n.slice(1));
        this._queueCallback(function () {
          _this9._isTransitioning = !1, _this9._element.classList.remove(ht), _this9._element.classList.add(ct, lt), _this9._element.style[n] = "", j.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[n] = "".concat(this._element[s], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), u(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
        var e = this._triggerArray.length;

        for (var _t7 = 0; _t7 < e; _t7++) {
          var _e10 = this._triggerArray[_t7],
              _i6 = n(_e10);

          _i6 && !this._isShown(_i6) && this._addAriaAndCollapsedClass([_e10], !1);
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this10._isTransitioning = !1, _this10._element.classList.remove(ht), _this10._element.classList.add(ct), j.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(lt);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, rt), U.getDataAttributes(this._element)), t)).toggle = Boolean(t.toggle), t.parent = r(t.parent), a(ot, t, at), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        var _this11 = this;

        if (!this._config.parent) return;
        var t = V.find(ut, this._config.parent);
        V.find(ft, this._config.parent).filter(function (e) {
          return !t.includes(e);
        }).forEach(function (t) {
          var e = n(t);
          e && _this11._addAriaAndCollapsedClass([t], _this11._isShown(e));
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        t.length && t.forEach(function (t) {
          e ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return rt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ot;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = {};
          "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
          var i = pt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);

    return pt;
  }(B);

  j.on(document, "click.bs.collapse.data-api", ft, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = i(this);
    V.find(e).forEach(function (t) {
      pt.getOrCreateInstance(t, {
        toggle: !1
      }).toggle();
    });
  }), g(pt);
  var mt = "top",
      gt = "bottom",
      _t = "right",
      bt = "left",
      vt = "auto",
      yt = [mt, gt, _t, bt],
      wt = "start",
      Et = "end",
      At = "clippingParents",
      Tt = "viewport",
      Ot = "popper",
      Ct = "reference",
      kt = yt.reduce(function (t, e) {
    return t.concat([e + "-" + wt, e + "-" + Et]);
  }, []),
      Lt = [].concat(yt, [vt]).reduce(function (t, e) {
    return t.concat([e, e + "-" + wt, e + "-" + Et]);
  }, []),
      xt = "beforeRead",
      Dt = "read",
      St = "afterRead",
      Nt = "beforeMain",
      It = "main",
      Pt = "afterMain",
      jt = "beforeWrite",
      Mt = "write",
      Ht = "afterWrite",
      Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];

  function Rt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function Wt(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function $t(t) {
    return t instanceof Wt(t).Element || t instanceof Element;
  }

  function zt(t) {
    return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
  }

  function qt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var Ft = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        zt(s) && Rt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          zt(n) && Rt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function Ut(t) {
    return t.split("-")[0];
  }

  function Vt(t, e) {
    var i = t.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1
    };
  }

  function Kt(t) {
    var e = Vt(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function Xt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && qt(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function Yt(t) {
    return Wt(t).getComputedStyle(t);
  }

  function Qt(t) {
    return ["table", "td", "th"].indexOf(Rt(t)) >= 0;
  }

  function Gt(t) {
    return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function Zt(t) {
    return "html" === Rt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
  }

  function Jt(t) {
    return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
  }

  function te(t) {
    for (var e = Wt(t), i = Jt(t); i && Qt(i) && "static" === Yt(i).position;) {
      i = Jt(i);
    }

    return i && ("html" === Rt(i) || "body" === Rt(i) && "static" === Yt(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Yt(t).position) return null;

      for (var i = Zt(t); zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;) {
        var n = Yt(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function ee(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var ie = Math.max,
      ne = Math.min,
      se = Math.round;

  function oe(t, e, i) {
    return ie(t, ne(e, i));
  }

  function re(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function ae(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var le = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = Ut(i.placement),
          l = ee(a),
          c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return re("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : ae(t, yt));
        }(s.padding, i),
            d = Kt(o),
            u = "y" === l ? mt : bt,
            f = "y" === l ? gt : _t,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = te(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            E = oe(v, w, y),
            A = l;

        i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Xt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function ce(t) {
    return t.split("-")[1];
  }

  var he = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function de(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.variation,
        r = t.offsets,
        a = t.position,
        l = t.gpuAcceleration,
        c = t.adaptive,
        h = t.roundOffsets,
        d = !0 === h ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: se(se(e * n) / n) || 0,
        y: se(se(i * n) / n) || 0
      };
    }(r) : "function" == typeof h ? h(r) : r,
        u = d.x,
        f = void 0 === u ? 0 : u,
        p = d.y,
        m = void 0 === p ? 0 : p,
        g = r.hasOwnProperty("x"),
        _ = r.hasOwnProperty("y"),
        b = bt,
        v = mt,
        y = window;

    if (c) {
      var w = te(i),
          E = "clientHeight",
          A = "clientWidth";
      w === Wt(i) && "static" !== Yt(w = Gt(i)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), w = w, s !== mt && (s !== bt && s !== _t || o !== Et) || (v = gt, m -= w[E] - n.height, m *= l ? 1 : -1), s !== bt && (s !== mt && s !== gt || o !== Et) || (b = _t, f -= w[A] - n.width, f *= l ? 1 : -1);
    }

    var T,
        O = Object.assign({
      position: a
    }, c && he);
    return l ? Object.assign({}, O, ((T = {})[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, O, ((e = {})[v] = _ ? m + "px" : "", e[b] = g ? f + "px" : "", e.transform = "", e));
  }

  var ue = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: Ut(e.placement),
        variation: ce(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  };
  var fe = {
    passive: !0
  };
  var pe = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = Wt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, fe);
      }), a && l.addEventListener("resize", i.update, fe), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, fe);
        }), a && l.removeEventListener("resize", i.update, fe);
      };
    },
    data: {}
  };
  var me = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function ge(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return me[t];
    });
  }

  var _e = {
    start: "end",
    end: "start"
  };

  function be(t) {
    return t.replace(/start|end/g, function (t) {
      return _e[t];
    });
  }

  function ve(t) {
    var e = Wt(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function ye(t) {
    return Vt(Gt(t)).left + ve(t).scrollLeft;
  }

  function we(t) {
    var e = Yt(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Ee(t) {
    return ["html", "body", "#document"].indexOf(Rt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ee(Zt(t));
  }

  function Ae(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ee(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = Wt(n),
        r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
        a = e.concat(r);
    return s ? a : a.concat(Ae(Zt(r)));
  }

  function Te(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Oe(t, e) {
    return e === Tt ? Te(function (t) {
      var e = Wt(t),
          i = Gt(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + ye(t),
        y: a
      };
    }(t)) : zt(e) ? function (t) {
      var e = Vt(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Te(function (t) {
      var e,
          i = Gt(t),
          n = ve(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + ye(t),
          l = -n.scrollTop;
      return "rtl" === Yt(s || i).direction && (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Gt(t)));
  }

  function Ce(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? Ut(s) : null,
        r = s ? ce(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case mt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case gt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case _t:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case bt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? ee(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case wt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case Et:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function ke(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? At : o,
        a = i.rootBoundary,
        l = void 0 === a ? Tt : a,
        c = i.elementContext,
        h = void 0 === c ? Ot : c,
        d = i.altBoundary,
        u = void 0 !== d && d,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = re("number" != typeof p ? p : ae(p, yt)),
        g = h === Ot ? Ct : Ot,
        _ = t.rects.popper,
        b = t.elements[u ? g : h],
        v = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = Ae(Zt(t)),
            i = ["absolute", "fixed"].indexOf(Yt(t).position) >= 0 && zt(t) ? te(t) : t;
        return $t(i) ? e.filter(function (t) {
          return $t(t) && Xt(t, i) && "body" !== Rt(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Oe(t, i);
        return e.top = ie(n.top, e.top), e.right = ne(n.right, e.right), e.bottom = ne(n.bottom, e.bottom), e.left = ie(n.left, e.left), e;
      }, Oe(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l),
        y = Vt(t.elements.reference),
        w = Ce({
      reference: y,
      element: _,
      strategy: "absolute",
      placement: s
    }),
        E = Te(Object.assign({}, _, w)),
        A = h === Ot ? E : y,
        T = {
      top: v.top - A.top + m.top,
      bottom: A.bottom - v.bottom + m.bottom,
      left: v.left - A.left + m.left,
      right: A.right - v.right + m.right
    },
        O = t.modifiersData.offset;

    if (h === Ot && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1,
            i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }

    return T;
  }

  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? Lt : l,
        h = ce(n),
        d = h ? a ? kt : kt.filter(function (t) {
      return ce(t) === h;
    }) : yt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = ke(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[Ut(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var xe = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = Ut(g), b = l || (_ !== g && p ? function (t) {
          if (Ut(t) === vt) return [];
          var e = ge(t);
          return [be(t), e, be(e)];
        }(g) : [ge(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat(Ut(i) === vt ? Le(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), A = !0, T = v[0], O = 0; O < v.length; O++) {
          var C = v[O],
              k = Ut(C),
              L = ce(C) === wt,
              x = [mt, gt].indexOf(k) >= 0,
              D = x ? "width" : "height",
              S = ke(e, {
            placement: C,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              N = x ? L ? _t : bt : L ? gt : mt;
          y[D] > w[D] && (N = ge(N));
          var I = ge(N),
              P = [];

          if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every(function (t) {
            return t;
          })) {
            T = C, A = !1;
            break;
          }

          E.set(C, P);
        }

        if (A) for (var j = function j(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function De(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function Se(t) {
    return [mt, _t, gt, bt].some(function (e) {
      return t[e] >= 0;
    });
  }

  var Ne = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ke(e, {
        elementContext: "reference"
      }),
          a = ke(e, {
        altBoundary: !0
      }),
          l = De(r, n),
          c = De(a, s, o),
          h = Se(l),
          d = Se(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  },
      Ie = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = Lt.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = Ut(t),
              s = [bt, mt].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      Pe = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = Ce({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      je = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ke(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = Ut(e.placement),
          b = ce(e.placement),
          v = !b,
          y = ee(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          C = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? mt : bt,
              L = "y" === y ? gt : _t,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              N = E[y] - g[L],
              I = f ? -T[x] / 2 : 0,
              P = b === wt ? A[x] : T[x],
              j = b === wt ? -T[x] : -A[x],
              M = e.elements.arrow,
              H = f && M ? Kt(M) : {
            width: 0,
            height: 0
          },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              R = B[k],
              W = B[L],
              $ = oe(0, A[x], H[x]),
              z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O,
              q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O,
              F = e.elements.arrow && te(e.elements.arrow),
              U = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              K = E[y] + z - V - U,
              X = E[y] + q - V;

          if (o) {
            var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
            E[y] = Y, C[y] = Y - D;
          }

          if (a) {
            var Q = "x" === y ? mt : bt,
                G = "x" === y ? gt : _t,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
            E[w] = et, C[w] = et - Z;
          }
        }

        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"]
  };

  function Me(t, e, i) {
    void 0 === i && (i = !1);
    var n = zt(e);
    zt(e) && function (t) {
      var e = t.getBoundingClientRect();
      e.width, t.offsetWidth, e.height, t.offsetHeight;
    }(e);
    var s,
        o,
        r = Gt(e),
        a = Vt(t),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        c = {
      x: 0,
      y: 0
    };
    return (n || !n && !i) && (("body" !== Rt(e) || we(r)) && (l = (s = e) !== Wt(s) && zt(s) ? {
      scrollLeft: (o = s).scrollLeft,
      scrollTop: o.scrollTop
    } : ve(s)), zt(e) ? ((c = Vt(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = ye(r))), {
      x: a.left + l.scrollLeft - c.x,
      y: a.top + l.scrollTop - c.y,
      width: a.width,
      height: a.height
    };
  }

  function He(t) {
    var e = new Map(),
        i = new Set(),
        n = [];

    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n);
        }
      }), n.push(t);
    }

    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      i.has(t.name) || s(t);
    }), n;
  }

  var Be = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function Re() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function We(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? Be : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Be, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          h = {
        state: a,
        setOptions: function setOptions(i) {
          var s = "function" == typeof i ? i(a.options) : i;
          d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
            reference: $t(t) ? Ae(t) : t.contextElement ? Ae(t.contextElement) : [],
            popper: Ae(e)
          };

          var r,
              c,
              u = function (t) {
            var e = He(t);
            return Bt.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(c).map(function (t) {
            return c[t];
          })));

          return a.orderedModifiers = u.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: h,
                options: n
              });
              l.push(o || function () {});
            }
          }), h.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (Re(e, i)) {
              a.rects = {
                reference: Me(e, te(i), "fixed" === a.options.strategy),
                popper: Kt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            h.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          d(), c = !0;
        }
      };
      if (!Re(t, e)) return h;

      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }

  var $e = We(),
      ze = We({
    defaultModifiers: [pe, Pe, ue, Ft]
  }),
      qe = We({
    defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne]
  });
  var Fe = Object.freeze({
    __proto__: null,
    popperGenerator: We,
    detectOverflow: ke,
    createPopperBase: $e,
    createPopper: qe,
    createPopperLite: ze,
    top: mt,
    bottom: gt,
    right: _t,
    left: bt,
    auto: vt,
    basePlacements: yt,
    start: wt,
    end: Et,
    clippingParents: At,
    viewport: Tt,
    popper: Ot,
    reference: Ct,
    variationPlacements: kt,
    placements: Lt,
    beforeRead: xt,
    read: Dt,
    afterRead: St,
    beforeMain: Nt,
    main: It,
    afterMain: Pt,
    beforeWrite: jt,
    write: Mt,
    afterWrite: Ht,
    modifierPhases: Bt,
    applyStyles: Ft,
    arrow: le,
    computeStyles: ue,
    eventListeners: pe,
    flip: xe,
    hide: Ne,
    offset: Ie,
    popperOffsets: Pe,
    preventOverflow: je
  }),
      Ue = "dropdown",
      Ve = "Escape",
      Ke = "Space",
      Xe = "ArrowUp",
      Ye = "ArrowDown",
      Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
      Ge = "click.bs.dropdown.data-api",
      Ze = "keydown.bs.dropdown.data-api",
      Je = "show",
      ti = '[data-bs-toggle="dropdown"]',
      ei = ".dropdown-menu",
      ii = m() ? "top-end" : "top-start",
      ni = m() ? "top-start" : "top-end",
      si = m() ? "bottom-end" : "bottom-start",
      oi = m() ? "bottom-start" : "bottom-end",
      ri = m() ? "left-start" : "right-start",
      ai = m() ? "right-start" : "left-start",
      li = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      ci = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var hi = /*#__PURE__*/function (_B5) {
    _inherits(hi, _B5);

    var _super5 = _createSuper(hi);

    function hi(t, e) {
      var _this12;

      _classCallCheck(this, hi);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar();
      return _this12;
    }

    _createClass(hi, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _ref4;

        if (c(this._element) || this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };
        if (j.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
        var e = hi.getParentFromElement(this._element);
        this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return j.on(t, "mouseover", d);
        }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), j.trigger(this._element, "shown.bs.dropdown", t);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (c(this._element) || !this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(hi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref5;

        j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (t) {
          return j.off(t, "mouseover", d);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), U.getDataAttributes(this._element)), t), a(Ue, t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(Ue.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var e = this._element;
        "parent" === this._config.reference ? e = t : o(this._config.reference) ? e = r(this._config.reference) : "object" == _typeof(this._config.reference) && (e = this._config.reference);

        var i = this._getPopperConfig(),
            n = i.modifiers.find(function (t) {
          return "applyStyles" === t.name && !1 === t.enabled;
        });

        this._popper = qe(e, this._menu, i), n && U.setDataAttribute(this._menu, "popper", "static");
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(Je);
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return V.next(this._element, ei)[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return ri;
        if (t.classList.contains("dropstart")) return ai;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this13._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
        i.length && v(i, e, t === Ye, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return li;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ci;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ue;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = hi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
        var e = V.find(ti);

        for (var _i7 = 0, _n5 = e.length; _i7 < _n5; _i7++) {
          var _n6 = hi.getInstance(e[_i7]);

          if (!_n6 || !1 === _n6._config.autoClose) continue;
          if (!_n6._isShown()) continue;
          var _s3 = {
            relatedTarget: _n6._element
          };

          if (t) {
            var _e11 = t.composedPath(),
                _i8 = _e11.includes(_n6._menu);

            if (_e11.includes(_n6._element) || "inside" === _n6._config.autoClose && !_i8 || "outside" === _n6._config.autoClose && _i8) continue;
            if (_n6._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            "click" === t.type && (_s3.clickEvent = t);
          }

          _n6._completeHide(_s3);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return n(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ve && (t.key !== Ye && t.key !== Xe || t.target.closest(ei)) : !Qe.test(t.key)) return;
        var e = this.classList.contains(Je);
        if (!e && t.key === Ve) return;
        if (t.preventDefault(), t.stopPropagation(), c(this)) return;
        var i = this.matches(ti) ? this : V.prev(this, ti)[0],
            n = hi.getOrCreateInstance(i);
        if (t.key !== Ve) return t.key === Xe || t.key === Ye ? (e || n.show(), void n._selectMenuItem(t)) : void (e && t.key !== Ke || hi.clearMenus());
        n.hide();
      }
    }]);

    return hi;
  }(B);

  j.on(document, Ze, ti, hi.dataApiKeydownHandler), j.on(document, Ze, ei, hi.dataApiKeydownHandler), j.on(document, Ge, hi.clearMenus), j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j.on(document, Ge, ti, function (t) {
    t.preventDefault(), hi.getOrCreateInstance(this).toggle();
  }), g(hi);
  var di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      ui = ".sticky-top";

  var fi = /*#__PURE__*/function () {
    function fi() {
      _classCallCheck(this, fi);

      this._element = document.body;
    }

    _createClass(fi, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(di, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(ui, "marginRight", function (e) {
          return e - t;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this14 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this14._element && window.innerWidth > t.clientWidth + n) return;

          _this14._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t)[e];
          t.style[e] = "".concat(i(Number.parseFloat(s)), "px");
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight");
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style[e];
        i && U.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = U.getDataAttribute(t, e);
          void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        o(t) ? e(t) : V.find(t, this._element).forEach(e);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return fi;
  }();

  var pi = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
      mi = {
    className: "string",
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  },
      gi = "show",
      _i = "mousedown.bs.backdrop";

  var bi = /*#__PURE__*/function () {
    function bi(t) {
      _classCallCheck(this, bi);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(bi, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && u(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation(function () {
          _(t);
        })) : _(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this15 = this;

        this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation(function () {
          _this15.dispose(), _(t);
        })) : _(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t8 = document.createElement("div");

          _t8.className = this._config.className, this._config.isAnimated && _t8.classList.add("fade"), this._element = _t8;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, pi), "object" == _typeof(t) ? t : {})).rootElement = r(t.rootElement), a("backdrop", t, mi), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        this._isAppended || (this._config.rootElement.append(this._getElement()), j.on(this._getElement(), _i, function () {
          _(_this16._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (j.off(this._element, _i), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        b(t, this._getElement(), this._config.isAnimated);
      }
    }]);

    return bi;
  }();

  var vi = {
    trapElement: null,
    autofocus: !0
  },
      yi = {
    trapElement: "element",
    autofocus: "boolean"
  },
      wi = ".bs.focustrap",
      Ei = "backward";

  var Ai = /*#__PURE__*/function () {
    function Ai(t) {
      _classCallCheck(this, Ai);

      this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
    }

    _createClass(Ai, [{
      key: "activate",
      value: function activate() {
        var _this17 = this;

        var _this$_config = this._config,
            t = _this$_config.trapElement,
            e = _this$_config.autofocus;
        this._isActive || (e && t.focus(), j.off(document, wi), j.on(document, "focusin.bs.focustrap", function (t) {
          return _this17._handleFocusin(t);
        }), j.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this17._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, j.off(document, wi));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = t.target,
            i = this._config.trapElement;
        if (e === document || e === i || i.contains(e)) return;
        var n = V.focusableChildren(i);
        0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ei : "forward");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, vi), "object" == _typeof(t) ? t : {}), a("focustrap", t, yi), t;
      }
    }]);

    return Ai;
  }();

  var Ti = "modal",
      Oi = "Escape",
      Ci = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      ki = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  },
      Li = "hidden.bs.modal",
      xi = "show.bs.modal",
      Di = "resize.bs.modal",
      Si = "click.dismiss.bs.modal",
      Ni = "keydown.dismiss.bs.modal",
      Ii = "mousedown.dismiss.bs.modal",
      Pi = "modal-open",
      ji = "show",
      Mi = "modal-static";

  var Hi = /*#__PURE__*/function (_B6) {
    _inherits(Hi, _B6);

    var _super6 = _createSuper(Hi);

    function Hi(t, e) {
      var _this18;

      _classCallCheck(this, Hi);

      _this18 = _super6.call(this, t), _this18._config = _this18._getConfig(e), _this18._dialog = V.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._focustrap = _this18._initializeFocusTrap(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1, _this18._scrollBar = new fi();
      return _this18;
    }

    _createClass(Hi, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        this._isShown || this._isTransitioning || j.trigger(this._element, xi, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._dialog, Ii, function () {
          j.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this20 = this;

        if (!this._isShown || this._isTransitioning) return;
        if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var t = this._isAnimated();

        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j.off(this._element, Si), j.off(this._dialog, Ii), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return j.off(t, ".bs.modal");
        }), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Hi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new bi({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ai({
          trapElement: this._element
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ci), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), a(Ti, t, ki), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this21 = this;

        var e = this._isAnimated(),
            i = V.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u(this._element), this._element.classList.add(ji), this._queueCallback(function () {
          _this21._config.focus && _this21._focustrap.activate(), _this21._isTransitioning = !1, j.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, e);
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        this._isShown ? j.on(this._element, Ni, function (t) {
          _this22._config.keyboard && t.key === Oi ? (t.preventDefault(), _this22.hide()) : _this22._config.keyboard || t.key !== Oi || _this22._triggerBackdropTransition();
        }) : j.off(this._element, Ni);
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        this._isShown ? j.on(window, Di, function () {
          return _this23._adjustDialog();
        }) : j.off(window, Di);
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(Pi), _this24._resetAdjustments(), _this24._scrollBar.reset(), j.trigger(_this24._element, Li);
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this25 = this;

        j.on(this._element, Si, function (t) {
          _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var _this$_element = this._element,
            t = _this$_element.classList,
            e = _this$_element.scrollHeight,
            i = _this$_element.style,
            n = e > document.documentElement.clientHeight;
        !n && "hidden" === i.overflowY || t.contains(Mi) || (n || (i.overflowY = "hidden"), t.add(Mi), this._queueCallback(function () {
          t.remove(Mi), n || _this26._queueCallback(function () {
            i.overflowY = "";
          }, _this26._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        (!i && t && !m() || i && !t && m()) && (this._element.style.paddingLeft = "".concat(e, "px")), (i && !t && !m() || !i && t && m()) && (this._element.style.paddingRight = "".concat(e, "px"));
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ci;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ti;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = Hi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return Hi;
  }(B);

  j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this27 = this;

    var e = n(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), j.one(e, xi, function (t) {
      t.defaultPrevented || j.one(e, Li, function () {
        l(_this27) && _this27.focus();
      });
    });
    var i = V.findOne(".modal.show");
    i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
  }), R(Hi), g(Hi);
  var Bi = "offcanvas",
      Ri = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Wi = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  },
      $i = "show",
      zi = ".offcanvas.show",
      qi = "hidden.bs.offcanvas";

  var Fi = /*#__PURE__*/function (_B7) {
    _inherits(Fi, _B7);

    var _super7 = _createSuper(Fi);

    function Fi(t, e) {
      var _this28;

      _classCallCheck(this, Fi);

      _this28 = _super7.call(this, t), _this28._config = _this28._getConfig(e), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._focustrap = _this28._initializeFocusTrap(), _this28._addEventListeners();
      return _this28;
    }

    _createClass(Fi, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this29 = this;

        this._isShown || j.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new fi().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback(function () {
          _this29._config.scroll || _this29._focustrap.activate(), j.trigger(_this29._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        this._isShown && (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback(function () {
          _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || new fi().reset(), j.trigger(_this30._element, qi);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Fi.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ri), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), a(Bi, t, Wi), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new bi({
          className: "offcanvas-backdrop",
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ai({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        j.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this32._config.keyboard && "Escape" === t.key && _this32.hide();
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return Bi;
      }
    }, {
      key: "Default",
      get: function get() {
        return Ri;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Fi.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Fi;
  }(B);

  j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this33 = this;

    var e = n(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)) return;
    j.one(e, qi, function () {
      l(_this33) && _this33.focus();
    });
    var i = V.findOne(zi);
    i && i !== e && Fi.getInstance(i).hide(), Fi.getOrCreateInstance(e).toggle(this);
  }), j.on(window, "load.bs.offcanvas.data-api", function () {
    return V.find(zi).forEach(function (t) {
      return Fi.getOrCreateInstance(t).show();
    });
  }), R(Fi), g(Fi);

  var Ui = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Xi = function Xi(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !Ui.has(i) || Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t9 = 0, _e12 = n.length; _t9 < _e12; _t9++) {
      if (n[_t9].test(i)) return !0;
    }

    return !1;
  };

  function Yi(t, e, i) {
    var _ref7;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t10, _i9) {
      var _ref8;

      var i = s[_t10],
          n = i.nodeName.toLowerCase();

      if (!Object.keys(e).includes(n)) {
        i.remove();
        return "continue";
      }

      var o = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(i.attributes)),
          r = [].concat(e["*"] || [], e[n] || []);

      o.forEach(function (t) {
        Xi(t, r) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t10 = 0, _i9 = s.length; _t10 < _i9; _t10++) {
      var _ret = _loop(_t10, _i9);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var Qi = "tooltip",
      Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Zi = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Ji = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: m() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: m() ? "right" : "left"
  },
      tn = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      en = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  },
      nn = "fade",
      sn = "show",
      on = "show",
      rn = "out",
      an = ".tooltip-inner",
      ln = ".modal",
      cn = "hide.bs.modal",
      hn = "hover",
      dn = "focus";

  var un = /*#__PURE__*/function (_B8) {
    _inherits(un, _B8);

    var _super8 = _createSuper(un);

    function un(t, e) {
      var _this34;

      _classCallCheck(this, un);

      if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this34 = _super8.call(this, t), _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34._config = _this34._getConfig(e), _this34.tip = null, _this34._setListeners();
      return _this34;
    }

    _createClass(un, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e13 = this._initializeOnDelegatedTarget(t);

          _e13._activeTrigger.click = !_e13._activeTrigger.click, _e13._isWithActiveTrigger() ? _e13._enter(null, _e13) : _e13._leave(null, _e13);
        } else {
          if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), j.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(un.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _n$classList,
            _ref9,
            _this35 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = j.trigger(this._element, this.constructor.Event.SHOW),
            e = h(this._element),
            i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !i) return;
        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);

        var n = this.getTipElement(),
            s = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME);

        n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(nn);

        var o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
            r = this._getAttachment(o);

        this._addAttachmentClass(r);

        var a = this._config.container;
        H.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), j.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n, this._getPopperConfig(r)), n.classList.add(sn);

        var l = this._resolvePossibleFunction(this._config.customClass);

        l && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (t) {
          j.on(t, "mouseover", d);
        });
        var c = this.tip.classList.contains(nn);

        this._queueCallback(function () {
          var t = _this35._hoverState;
          _this35._hoverState = null, j.trigger(_this35._element, _this35.constructor.Event.SHOWN), t === rn && _this35._leave(null, _this35);
        }, this.tip, c);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref10,
            _this36 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove(sn), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (t) {
          return j.off(t, "mouseover", d);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains(nn);
        this._queueCallback(function () {
          _this36._isWithActiveTrigger() || (_this36._hoverState !== on && t.remove(), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), j.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._disposePopper());
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        t.innerHTML = this._config.template;
        var e = t.children[0];
        return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), an);
      }
    }, {
      key: "_sanitizeAndSetContent",
      value: function _sanitizeAndSetContent(t, e, i) {
        var n = V.findOne(i, t);
        e || !n ? this.setElementContent(n, e) : n.remove();
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return o(e) ? (e = r(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Yi(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title") || this._config.title;

        return this._resolvePossibleFunction(t);
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this37._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t.call(this._element) : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this38 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this38._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this38._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(t)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Ji[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) j.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (t) {
            return _this39.toggle(t);
          });else if ("manual" !== t) {
            var _e14 = t === hn ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
                _i10 = t === hn ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;

            j.on(_this39._element, _e14, _this39._config.selector, function (t) {
              return _this39._enter(t);
            }), j.on(_this39._element, _i10, _this39._config.selector, function (t) {
              return _this39._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this39._element && _this39.hide();
        }, j.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0), e.getTipElement().classList.contains(sn) || e._hoverState === on ? e._hoverState = on : (clearTimeout(e._timeout), e._hoverState = on, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          e._hoverState === on && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? dn : hn] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = rn, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          e._hoverState === rn && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t11 in this._activeTrigger) {
          if (this._activeTrigger[_t11]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = U.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          Gi.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a(Qi, t, this.constructor.DefaultType), t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _e15 in this._config) {
          this.constructor.Default[_e15] !== this._config[_e15] && (t[_e15] = this._config[_e15]);
        }

        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
            i = t.getAttribute("class").match(e);
        null !== i && i.length > 0 && i.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-tooltip";
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return tn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Qi;
      }
    }, {
      key: "Event",
      get: function get() {
        return en;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zi;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = un.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return un;
  }(B);

  g(un);

  var fn = _objectSpread(_objectSpread({}, un.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      pn = _objectSpread(_objectSpread({}, un.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      mn = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var gn = /*#__PURE__*/function (_un) {
    _inherits(gn, _un);

    var _super9 = _createSuper(gn);

    function gn() {
      _classCallCheck(this, gn);

      return _super9.apply(this, arguments);
    }

    _createClass(gn, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-popover";
      }
    }], [{
      key: "Default",
      get: function get() {
        return fn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return mn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return pn;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = gn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return gn;
  }(un);

  g(gn);
  var _n = "scrollspy",
      bn = {
    offset: 10,
    method: "auto",
    target: ""
  },
      vn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      yn = "active",
      wn = ".nav-link, .list-group-item, .dropdown-item",
      En = "position";

  var An = /*#__PURE__*/function (_B9) {
    _inherits(An, _B9);

    var _super10 = _createSuper(An);

    function An(t, e) {
      var _this40;

      _classCallCheck(this, An);

      _this40 = _super10.call(this, t), _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(e), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, j.on(_this40._scrollElement, "scroll.bs.scrollspy", function () {
        return _this40._process();
      }), _this40.refresh(), _this40._process();
      return _this40;
    }

    _createClass(An, [{
      key: "refresh",
      value: function refresh() {
        var _this41 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : En,
            e = "auto" === this._config.method ? t : this._config.method,
            n = e === En ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(wn, this._config.target).map(function (t) {
          var s = i(t),
              o = s ? V.findOne(s) : null;

          if (o) {
            var _t12 = o.getBoundingClientRect();

            if (_t12.width || _t12.height) return [U[e](o).top + n, s];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this41._offsets.push(t[0]), _this41._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        j.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(An.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, bn), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target = r(t.target) || document.documentElement, a(_n, t, vn), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t13 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t13 && this._activate(_t13);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e16 = this._offsets.length; _e16--;) {
            this._activeTarget !== this._targets[_e16] && t >= this._offsets[_e16] && (void 0 === this._offsets[_e16 + 1] || t < this._offsets[_e16 + 1]) && this._activate(this._targets[_e16]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();
        var e = wn.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            i = V.findOne(e.join(","), this._config.target);
        i.classList.add(yn), i.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn) : V.parents(i, ".nav, .list-group").forEach(function (t) {
          V.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add(yn);
          }), V.prev(t, ".nav-item").forEach(function (t) {
            V.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add(yn);
            });
          });
        }), j.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        V.find(wn, this._config.target).filter(function (t) {
          return t.classList.contains(yn);
        }).forEach(function (t) {
          return t.classList.remove(yn);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return bn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return _n;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = An.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return An;
  }(B);

  j.on(window, "load.bs.scrollspy.data-api", function () {
    V.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new An(t);
    });
  }), g(An);
  var Tn = "active",
      On = "fade",
      Cn = "show",
      kn = ".active",
      Ln = ":scope > li > .active";

  var xn = /*#__PURE__*/function (_B10) {
    _inherits(xn, _B10);

    var _super11 = _createSuper(xn);

    function xn() {
      _classCallCheck(this, xn);

      return _super11.apply(this, arguments);
    }

    _createClass(xn, [{
      key: "show",
      value: function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
        var t;

        var e = n(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var _e17 = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;

          t = V.find(_e17, i), t = t[t.length - 1];
        }

        var s = t ? j.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (j.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== s && s.defaultPrevented) return;

        this._activate(this._element, i);

        var o = function o() {
          j.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this42._element
          }), j.trigger(_this42._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, i) {
        var _this43 = this;

        var n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V.children(e, kn) : V.find(Ln, e))[0],
            s = i && n && n.classList.contains(On),
            o = function o() {
          return _this43._transitionComplete(t, n, i);
        };

        n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove(Tn);

          var _t14 = V.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t14 && _t14.classList.remove(Tn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add(Tn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u(t), t.classList.contains(On) && t.classList.add(Cn);
        var n = t.parentNode;

        if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
          var _e18 = t.closest(".dropdown");

          _e18 && V.find(".dropdown-toggle", _e18).forEach(function (t) {
            return t.classList.add(Tn);
          }), t.setAttribute("aria-expanded", !0);
        }

        i && i();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = xn.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return xn;
  }(B);

  j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this) || xn.getOrCreateInstance(this).show();
  }), g(xn);
  var Dn = "toast",
      Sn = "hide",
      Nn = "show",
      In = "showing",
      Pn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      jn = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var Mn = /*#__PURE__*/function (_B11) {
    _inherits(Mn, _B11);

    var _super12 = _createSuper(Mn);

    function Mn(t, e) {
      var _this44;

      _classCallCheck(this, Mn);

      _this44 = _super12.call(this, t), _this44._config = _this44._getConfig(e), _this44._timeout = null, _this44._hasMouseInteraction = !1, _this44._hasKeyboardInteraction = !1, _this44._setListeners();
      return _this44;
    }

    _createClass(Mn, [{
      key: "show",
      value: function show() {
        var _this45 = this;

        j.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback(function () {
          _this45._element.classList.remove(In), j.trigger(_this45._element, "shown.bs.toast"), _this45._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        this._element.classList.contains(Nn) && (j.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback(function () {
          _this46._element.classList.add(Sn), _this46._element.classList.remove(In), _this46._element.classList.remove(Nn), j.trigger(_this46._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), _get(_getPrototypeOf(Mn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, jn), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), a(Dn, t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this47 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this47.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this48 = this;

        j.on(this._element, "mouseover.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), j.on(this._element, "mouseout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        }), j.on(this._element, "focusin.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), j.on(this._element, "focusout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "DefaultType",
      get: function get() {
        return Pn;
      }
    }, {
      key: "Default",
      get: function get() {
        return jn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Dn;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Mn.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Mn;
  }(B);

  return R(Mn), g(Mn), {
    Alert: W,
    Button: z,
    Carousel: st,
    Collapse: pt,
    Dropdown: hi,
    Modal: Hi,
    Offcanvas: Fi,
    Popover: gn,
    ScrollSpy: An,
    Tab: xn,
    Toast: Mn,
    Tooltip: un
  };
});

/***/ }),

/***/ "./assets/themes/startup/vendor/isotope/jquery.isotope.min.js":
/*!********************************************************************!*\
  !*** ./assets/themes/startup/vendor/isotope/jquery.isotope.min.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__factory, __WEBPACK_LOCAL_MODULE_2__module;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__factory, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_4__exports;var __WEBPACK_LOCAL_MODULE_5__array, __WEBPACK_LOCAL_MODULE_5__factory, __WEBPACK_LOCAL_MODULE_5__exports, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_6__exports;var __WEBPACK_LOCAL_MODULE_7__array, __WEBPACK_LOCAL_MODULE_7__factory, __WEBPACK_LOCAL_MODULE_7__exports, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_LOCAL_MODULE_8__array, __WEBPACK_LOCAL_MODULE_8__factory, __WEBPACK_LOCAL_MODULE_8__exports, __WEBPACK_LOCAL_MODULE_8__;var __WEBPACK_LOCAL_MODULE_9__array, __WEBPACK_LOCAL_MODULE_9__factory, __WEBPACK_LOCAL_MODULE_9__exports, __WEBPACK_LOCAL_MODULE_9__;var __WEBPACK_LOCAL_MODULE_10__array, __WEBPACK_LOCAL_MODULE_10__factory, __WEBPACK_LOCAL_MODULE_10__exports, __WEBPACK_LOCAL_MODULE_10__;var __WEBPACK_LOCAL_MODULE_11__array, __WEBPACK_LOCAL_MODULE_11__factory, __WEBPACK_LOCAL_MODULE_11__exports, __WEBPACK_LOCAL_MODULE_11__;var __WEBPACK_LOCAL_MODULE_12__array, __WEBPACK_LOCAL_MODULE_12__factory, __WEBPACK_LOCAL_MODULE_12__exports, __WEBPACK_LOCAL_MODULE_12__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_13__, __WEBPACK_LOCAL_MODULE_13__factory, __WEBPACK_LOCAL_MODULE_13__module;var __WEBPACK_LOCAL_MODULE_14__array, __WEBPACK_LOCAL_MODULE_14__factory, __WEBPACK_LOCAL_MODULE_14__exports, __WEBPACK_LOCAL_MODULE_14__;var __WEBPACK_LOCAL_MODULE_15__array, __WEBPACK_LOCAL_MODULE_15__factory, __WEBPACK_LOCAL_MODULE_15__exports, __WEBPACK_LOCAL_MODULE_15__;var __WEBPACK_LOCAL_MODULE_16__array, __WEBPACK_LOCAL_MODULE_16__factory, __WEBPACK_LOCAL_MODULE_16__exports, __WEBPACK_LOCAL_MODULE_16__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (i) {
    return e(t, i);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function (t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, o) {
      var n,
          s = "$()." + i + '("' + e + '")';
      return t.each(function (t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n;
      }), void 0 !== n ? n : t;
    }

    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
      });
    }

    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = n.call(arguments, 1);
        return u(this, t, e);
      }

      return h(this, t), this;
    }, o(a));
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = i);
  }

  var n = Array.prototype.slice,
      s = t.console,
      r = "undefined" == typeof s ? function () {} : function (t) {
    s.error(t);
  };
  return o(e || t.jQuery), i;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_1__factory = (e), (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_1__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports)) : __WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__factory)) : 0;
}("undefined" != typeof window ? window : this, function () {
  function t() {}

  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          o = i[t] = i[t] || [];
      return o.indexOf(e) == -1 && o.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
          o = i[t] = i[t] || {};
      return o[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var o = i.indexOf(e);
      return o != -1 && i.splice(o, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      i = i.slice(0), e = e || [];

      for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
        var s = i[n],
            r = o && o[s];
        r && (this.off(t, s), delete o[s]), s.apply(this, e);
      }

      return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_2__factory = (e), (typeof __WEBPACK_LOCAL_MODULE_2__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_2__module = { id: "get-size/get-size", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__factory.call(__WEBPACK_LOCAL_MODULE_2__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_2__module.exports, __WEBPACK_LOCAL_MODULE_2__module)), (__WEBPACK_LOCAL_MODULE_2__module.loaded = true), __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__module.exports)) : __WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__factory)) : 0;
}(window, function () {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e;
  }

  function e() {}

  function i() {
    for (var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, e = 0; e < h; e++) {
      var i = u[e];
      t[i] = 0;
    }

    return t;
  }

  function o(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
  }

  function n() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var n = o(e);
      r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
    }
  }

  function s(e) {
    if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == _typeof(e) && e.nodeType) {
      var s = o(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;

      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
            c = s[f],
            m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m;
      }

      var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);

      x !== !1 && (a.width = x + (I ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
    }
  }

  var r,
      a = "undefined" == typeof console ? e : function (t) {
    console.error(t);
  },
      u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      h = u.length,
      d = !1;
  return s;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_LOCAL_MODULE_3__factory = (e), (typeof __WEBPACK_LOCAL_MODULE_3__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_3__module = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__factory.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module)), (__WEBPACK_LOCAL_MODULE_3__module.loaded = true), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports)) : __WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__factory)) : 0;
}(window, function () {
  "use strict";

  var t = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";

    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
          n = o + "MatchesSelector";
      if (t[n]) return n;
    }
  }();

  return function (e, i) {
    return e[t](i);
  };
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_4__ = (function (i) {
    return e(t, i);
  }).apply(__WEBPACK_LOCAL_MODULE_4__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_4__ === undefined && (__WEBPACK_LOCAL_MODULE_4__ = __WEBPACK_LOCAL_MODULE_4__exports)) : 0;
}(window, function (t, e) {
  var i = {};
  i.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  }, i.modulo = function (t, e) {
    return (t % e + e) % e;
  };
  var o = Array.prototype.slice;
  i.makeArray = function (t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == _typeof(t) && "number" == typeof t.length;
    return e ? o.call(t) : [t];
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1);
  }, i.getParent = function (t, i) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, e(t, i)) return t;
    }
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, i.filterFindElements = function (t, o) {
    t = i.makeArray(t);
    var n = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);
        e(t, o) && n.push(t);

        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
          n.push(i[s]);
        }
      }
    }), n;
  }, i.debounceMethod = function (t, e, i) {
    i = i || 100;
    var o = t.prototype[e],
        n = e + "Timeout";

    t.prototype[e] = function () {
      var t = this[n];
      clearTimeout(t);
      var e = arguments,
          s = this;
      this[n] = setTimeout(function () {
        o.apply(s, e), delete s[n];
      }, i);
    };
  }, i.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };
  var n = t.console;
  return i.htmlInit = function (e, o) {
    i.docReady(function () {
      var s = i.toDashed(o),
          r = "data-" + s,
          a = document.querySelectorAll("[" + r + "]"),
          u = document.querySelectorAll(".js-" + s),
          h = i.makeArray(a).concat(i.makeArray(u)),
          d = r + "-options",
          l = t.jQuery;
      h.forEach(function (t) {
        var i,
            s = t.getAttribute(r) || t.getAttribute(d);

        try {
          i = s && JSON.parse(s);
        } catch (a) {
          return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
        }

        var u = new e(t, i);
        l && l.data(t, o, u);
      });
    });
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_5__array = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__], __WEBPACK_LOCAL_MODULE_5__factory = (e),
		(typeof __WEBPACK_LOCAL_MODULE_5__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_5__ = __WEBPACK_LOCAL_MODULE_5__factory.apply(__WEBPACK_LOCAL_MODULE_5__exports = {}, __WEBPACK_LOCAL_MODULE_5__array)), __WEBPACK_LOCAL_MODULE_5__ === undefined && (__WEBPACK_LOCAL_MODULE_5__ = __WEBPACK_LOCAL_MODULE_5__exports)) :
			(__WEBPACK_LOCAL_MODULE_5__ = __WEBPACK_LOCAL_MODULE_5__factory)
		)) : 0;
}(window, function (t, e) {
  "use strict";

  function i(t) {
    for (var e in t) {
      return !1;
    }

    return e = null, !0;
  }

  function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create());
  }

  function n(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend"
  }[r],
      h = {
    transform: a,
    transition: r,
    transitionDuration: r + "Duration",
    transitionProperty: r + "Property",
    transitionDelay: r + "Delay"
  },
      d = o.prototype = Object.create(t.prototype);
  d.constructor = o, d._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    });
  }, d.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, d.getSize = function () {
    this.size = e(this.element);
  }, d.css = function (t) {
    var e = this.element.style;

    for (var i in t) {
      var o = h[i] || i;
      e[o] = t[i];
    }
  }, d.getPosition = function () {
    var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        o = t[e ? "left" : "right"],
        n = t[i ? "top" : "bottom"],
        s = parseFloat(o),
        r = parseFloat(n),
        a = this.layout.size;

    o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
  }, d.layoutPosition = function () {
    var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        o = this.layout._getOption("originTop"),
        n = i ? "paddingLeft" : "paddingRight",
        s = i ? "left" : "right",
        r = i ? "right" : "left",
        a = this.position.x + t[n];

    e[s] = this.getXValue(a), e[r] = "";
    var u = o ? "paddingTop" : "paddingBottom",
        h = o ? "top" : "bottom",
        d = o ? "bottom" : "top",
        l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
  }, d.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, d.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, d._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
        o = this.position.y,
        n = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
    var s = t - i,
        r = e - o,
        a = {};
    a.transform = this.getTranslate(s, r), this.transition({
      to: a,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    });
  }, d.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
        o = this.layout._getOption("originTop");

    return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
  }, d.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e);
  }, d._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);

    for (var e in t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, d.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;

    for (var i in t.onTransitionEnd) {
      e.onEnd[i] = t.onTransitionEnd[i];
    }

    for (i in t.to) {
      e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    }

    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null;
    }

    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
  };
  var l = "opacity," + n(a);
  d.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1);
    }
  }, d.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, d.onotransitionend = function (t) {
    this.ontransitionend(t);
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          o = f[t.propertyName] || t.propertyName;

      if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
        var n = e.onEnd[o];
        n.call(this), delete e.onEnd[o];
      }

      this.emitEvent("transitionEnd", [this]);
    }
  }, d.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
  }, d._removeStyles = function (t) {
    var e = {};

    for (var i in t) {
      e[i] = "";
    }

    this.css(e);
  };
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function () {
    this.css(c);
  }, d.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
  }, d.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this]);
  }, d.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem();
    }), void this.hide()) : void this.removeElem();
  }, d.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, d.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";

    for (var i in e) {
      return i;
    }
  }, d.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"));
  }, d.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    });
  }, o;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_5__], __WEBPACK_LOCAL_MODULE_6__ = (function (i, o, n, s) {
    return e(t, i, o, n, s);
  }).apply(__WEBPACK_LOCAL_MODULE_6__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_6__ === undefined && (__WEBPACK_LOCAL_MODULE_6__ = __WEBPACK_LOCAL_MODULE_6__exports)) : 0;
}(window, function (t, e, i, o, n) {
  "use strict";

  function s(t, e) {
    var i = o.getQueryElement(t);
    if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
    var n = ++l;
    this.element.outlayerGUID = n, f[n] = this, this._create();

    var s = this._getOption("initLayout");

    s && this.layout();
  }

  function r(t) {
    function e() {
      t.apply(this, arguments);
    }

    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var n = m[o] || 1;
    return i * n;
  }

  var u = t.console,
      h = t.jQuery,
      d = function d() {},
      l = 0,
      f = {};

  s.namespace = "outlayer", s.Item = n, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var c = s.prototype;
  o.extend(c, e.prototype), c.option = function (t) {
    o.extend(this.options, t);
  }, c._getOption = function (t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, c._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);

    var t = this._getOption("resize");

    t && this.bindResize();
  }, c.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, c._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
      var s = e[n],
          r = new i(s, this);
      o.push(r);
    }

    return o;
  }, c._filterFindItemElements = function (t) {
    return o.filterFindElements(t, this.options.itemSelector);
  }, c.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element;
    });
  }, c.layout = function () {
    this._resetLayout(), this._manageStamps();

    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    this.layoutItems(this.items, e), this._isLayoutInited = !0;
  }, c._init = c.layout, c._resetLayout = function () {
    this.getSize();
  }, c.getSize = function () {
    this.size = i(this.element);
  }, c._getMeasurement = function (t, e) {
    var o,
        n = this.options[t];
    n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
  }, c.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, c._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored;
    });
  }, c._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function (t) {
        var o = this._getItemLayoutPosition(t);

        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
      }, this), this._processLayoutQueue(i);
    }
  }, c._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    };
  }, c._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, c.updateStagger = function () {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
  }, c._positionItem = function (t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
  }, c._postLayout = function () {
    this.resizeContainer();
  }, c.resizeContainer = function () {
    var t = this._getOption("resizeContainer");

    if (t) {
      var e = this._getContainerSize();

      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, c._emitCompleteOnItems = function (t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e]);
    }

    function o() {
      r++, r == s && i();
    }

    var n = this,
        s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function (e) {
      e.once(t, o);
    });
  }, c.dispatchEvent = function (t, e, i) {
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
      var n = h.Event(e);
      n.type = t, this.$element.trigger(n, i);
    } else this.$element.trigger(t, i);
  }, c.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0);
  }, c.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored;
  }, c.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
  }, c.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      o.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, c._find = function (t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
  }, c._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, c._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    };
  }, c._manageStamp = d, c._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        o = this._boundingRect,
        n = i(t),
        s = {
      left: e.left - o.left - n.marginLeft,
      top: e.top - o.top - n.marginTop,
      right: o.right - e.right - n.marginRight,
      bottom: o.bottom - e.bottom - n.marginBottom
    };
    return s;
  }, c.handleEvent = o.handleEvent, c.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0;
  }, c.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1;
  }, c.onresize = function () {
    this.resize();
  }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, c.needsResizeLayout = function () {
    var t = i(this.element),
        e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth;
  }, c.addItems = function (t) {
    var e = this._itemize(t);

    return e.length && (this.items = this.items.concat(e)), e;
  }, c.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, c.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, c.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }, c.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }, c.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e);
  }, c.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e);
  }, c.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i;
    }
  }, c.getItems = function (t) {
    t = o.makeArray(t);
    var e = [];
    return t.forEach(function (t) {
      var i = this.getItem(t);
      i && e.push(i);
    }, this), e;
  }, c.remove = function (t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), o.removeFrom(this.items, t);
    }, this);
  }, c.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy();
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
  }, s.data = function (t) {
    t = o.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e];
  }, s.create = function (t, e) {
    var i = r(s);
    return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return s.Item = n, s;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_7__array = [__WEBPACK_LOCAL_MODULE_6__], __WEBPACK_LOCAL_MODULE_7__factory = (e),
		(typeof __WEBPACK_LOCAL_MODULE_7__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_7__ = __WEBPACK_LOCAL_MODULE_7__factory.apply(__WEBPACK_LOCAL_MODULE_7__exports = {}, __WEBPACK_LOCAL_MODULE_7__array)), __WEBPACK_LOCAL_MODULE_7__ === undefined && (__WEBPACK_LOCAL_MODULE_7__ = __WEBPACK_LOCAL_MODULE_7__exports)) :
			(__WEBPACK_LOCAL_MODULE_7__ = __WEBPACK_LOCAL_MODULE_7__factory)
		)) : 0;
}(window, function (t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments);
  }

  var i = e.prototype = Object.create(t.Item.prototype),
      o = i._create;
  i._create = function () {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
  }, i.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
          e = this.layout._sorters;

      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this);
      }
    }
  };
  var n = i.destroy;
  return i.destroy = function () {
    n.apply(this, arguments), this.css({
      display: ""
    });
  }, e;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_8__array = [__WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_6__], __WEBPACK_LOCAL_MODULE_8__factory = (e),
		(typeof __WEBPACK_LOCAL_MODULE_8__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_8__ = __WEBPACK_LOCAL_MODULE_8__factory.apply(__WEBPACK_LOCAL_MODULE_8__exports = {}, __WEBPACK_LOCAL_MODULE_8__array)), __WEBPACK_LOCAL_MODULE_8__ === undefined && (__WEBPACK_LOCAL_MODULE_8__ = __WEBPACK_LOCAL_MODULE_8__exports)) :
			(__WEBPACK_LOCAL_MODULE_8__ = __WEBPACK_LOCAL_MODULE_8__factory)
		)) : 0;
}(window, function (t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
  }

  var o = i.prototype,
      n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return n.forEach(function (t) {
    o[t] = function () {
      return e.prototype[t].apply(this.isotope, arguments);
    };
  }), o.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element),
        i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight;
  }, o._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  }, o.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  }, o.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  }, o.getSegmentSize = function (t, e) {
    var i = t + e,
        o = "outer" + e;

    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e];
    }
  }, o.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element);
  }, o.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  }, o.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size;
  }, i.modes = {}, i.create = function (t, e) {
    function n() {
      i.apply(this, arguments);
    }

    return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_9__array = [__WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_2__], __WEBPACK_LOCAL_MODULE_9__factory = (e),
		(typeof __WEBPACK_LOCAL_MODULE_9__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_9__ = __WEBPACK_LOCAL_MODULE_9__factory.apply(__WEBPACK_LOCAL_MODULE_9__exports = {}, __WEBPACK_LOCAL_MODULE_9__array)), __WEBPACK_LOCAL_MODULE_9__ === undefined && (__WEBPACK_LOCAL_MODULE_9__ = __WEBPACK_LOCAL_MODULE_9__exports)) :
			(__WEBPACK_LOCAL_MODULE_9__ = __WEBPACK_LOCAL_MODULE_9__factory)
		)) : 0;
}(window, function (t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];

    for (var t = 0; t < this.cols; t++) {
      this.colYs.push(0);
    }

    this.maxY = 0, this.horizontalColIndex = 0;
  }, o.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth;
    }

    var o = this.columnWidth += this.gutter,
        n = this.containerWidth + this.gutter,
        s = n / o,
        r = o - n % o,
        a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1);
  }, o.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
        i = t ? this.element.parentNode : this.element,
        o = e(i);

    this.containerWidth = o && o.innerWidth;
  }, o._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
        i = e && e < 1 ? "round" : "ceil",
        o = Math[i](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);

    for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
      x: this.columnWidth * s.col,
      y: s.y
    }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
      this.colYs[h] = a;
    }

    return r;
  }, o._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
        i = Math.min.apply(Math, e);

    return {
      col: e.indexOf(i),
      y: i
    };
  }, o._getTopColGroup = function (t) {
    if (t < 2) return this.colYs;

    for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
      e[o] = this._getColGroupY(o, t);
    }

    return e;
  }, o._getColGroupY = function (t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i);
  }, o._getHorizontalColPosition = function (t, e) {
    var i = this.horizontalColIndex % this.cols,
        o = t > 1 && i + t > this.cols;
    i = o ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    };
  }, o._manageStamp = function (t) {
    var i = e(t),
        o = this._getElementOffset(t),
        n = this._getOption("originLeft"),
        s = n ? o.left : o.right,
        r = s + i.outerWidth,
        a = Math.floor(s / this.columnWidth);

    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);

    for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
      this.colYs[l] = Math.max(d, this.colYs[l]);
    }
  }, o._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, o._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }

    return (this.cols - t) * this.columnWidth - this.gutter;
  }, o.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth;
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_10__array = [__WEBPACK_LOCAL_MODULE_8__, __WEBPACK_LOCAL_MODULE_9__], __WEBPACK_LOCAL_MODULE_10__factory = (e),
		(typeof __WEBPACK_LOCAL_MODULE_10__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_10__ = __WEBPACK_LOCAL_MODULE_10__factory.apply(__WEBPACK_LOCAL_MODULE_10__exports = {}, __WEBPACK_LOCAL_MODULE_10__array)), __WEBPACK_LOCAL_MODULE_10__ === undefined && (__WEBPACK_LOCAL_MODULE_10__ = __WEBPACK_LOCAL_MODULE_10__exports)) :
			(__WEBPACK_LOCAL_MODULE_10__ = __WEBPACK_LOCAL_MODULE_10__factory)
		)) : 0;
}(window, function (t, e) {
  "use strict";

  var i = t.create("masonry"),
      o = i.prototype,
      n = {
    _getElementOffset: !0,
    layout: !0,
    _getMeasurement: !0
  };

  for (var s in e.prototype) {
    n[s] || (o[s] = e.prototype[s]);
  }

  var r = o.measureColumns;

  o.measureColumns = function () {
    this.items = this.isotope.filteredItems, r.call(this);
  };

  var a = o._getOption;
  return o._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_11__array = [__WEBPACK_LOCAL_MODULE_8__], __WEBPACK_LOCAL_MODULE_11__factory = (e),
		(typeof __WEBPACK_LOCAL_MODULE_11__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_11__ = __WEBPACK_LOCAL_MODULE_11__factory.apply(__WEBPACK_LOCAL_MODULE_11__exports = {}, __WEBPACK_LOCAL_MODULE_11__array)), __WEBPACK_LOCAL_MODULE_11__ === undefined && (__WEBPACK_LOCAL_MODULE_11__ = __WEBPACK_LOCAL_MODULE_11__exports)) :
			(__WEBPACK_LOCAL_MODULE_11__ = __WEBPACK_LOCAL_MODULE_11__factory)
		)) : 0;
}(window, function (t) {
  "use strict";

  var e = t.create("fitRows"),
      i = e.prototype;
  return i._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
  }, i._getContainerSize = function () {
    return {
      height: this.maxY
    };
  }, e;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_12__array = [__WEBPACK_LOCAL_MODULE_8__], __WEBPACK_LOCAL_MODULE_12__factory = (e),
		(typeof __WEBPACK_LOCAL_MODULE_12__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_12__ = __WEBPACK_LOCAL_MODULE_12__factory.apply(__WEBPACK_LOCAL_MODULE_12__exports = {}, __WEBPACK_LOCAL_MODULE_12__array)), __WEBPACK_LOCAL_MODULE_12__ === undefined && (__WEBPACK_LOCAL_MODULE_12__ = __WEBPACK_LOCAL_MODULE_12__exports)) :
			(__WEBPACK_LOCAL_MODULE_12__ = __WEBPACK_LOCAL_MODULE_12__factory)
		)) : 0;
}(window, function (t) {
  "use strict";

  var e = t.create("vertical", {
    horizontalAlignment: 0
  }),
      i = e.prototype;
  return i._resetLayout = function () {
    this.y = 0;
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    };
  }, i._getContainerSize = function () {
    return {
      height: this.y
    };
  }, e;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_7__, __WEBPACK_LOCAL_MODULE_8__, __WEBPACK_LOCAL_MODULE_10__, __WEBPACK_LOCAL_MODULE_11__, __WEBPACK_LOCAL_MODULE_12__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function (t, e, i, o, n, s, r) {
  function a(t, e) {
    return function (i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];

        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h;
        }
      }

      return 0;
    };
  }

  var u = t.jQuery,
      h = String.prototype.trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
      d = e.create("isotope", {
    layoutMode: "masonry",
    isJQueryFiltering: !0,
    sortAscending: !0
  });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];

    for (var t in r.modes) {
      this._initLayoutMode(t);
    }
  }, l.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this);
  }, l._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var o = t[i];
      o.id = this.itemGUID++;
    }

    return this._updateItemsSortData(t), t;
  }, l._initLayoutMode = function (t) {
    var e = r.modes[t],
        i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
  }, l.layout = function () {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
  }, l._layout = function () {
    var t = this._getIsInstant();

    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
  }, l.arrange = function (t) {
    this.option(t), this._getIsInstant();

    var e = this._filter(this.items);

    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
  }, l._init = l.arrange, l._hideReveal = function (t) {
    this.reveal(t.needReveal), this.hide(t.needHide);
  }, l._getIsInstant = function () {
    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    return this._isInstant = e, e;
  }, l._bindArrangeComplete = function () {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
    }

    var e,
        i,
        o,
        n = this;
    this.once("layoutComplete", function () {
      e = !0, t();
    }), this.once("hideComplete", function () {
      i = !0, t();
    }), this.once("revealComplete", function () {
      o = !0, t();
    });
  }, l._filter = function (t) {
    var e = this.options.filter;
    e = e || "*";

    for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];

      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
      }
    }

    return {
      matches: i,
      needReveal: o,
      needHide: n
    };
  }, l._getFilterTest = function (t) {
    return u && this.options.isJQueryFiltering ? function (e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function (e) {
      return t(e.element);
    } : function (e) {
      return o(e.element, t);
    };
  }, l.updateSortData = function (t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
  }, l._getSorters = function () {
    var t = this.options.getSortData;

    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i);
    }
  }, l._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];
      o.updateSortData();
    }
  };

  var f = function () {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
      return t = a ? function (t) {
        return t && a(r(t));
      } : function (t) {
        return t && r(t);
      };
    }

    function e(t, e) {
      return t ? function (e) {
        return e.getAttribute(t);
      } : function (t) {
        var i = t.querySelector(e);
        return i && i.textContent;
      };
    }

    return t;
  }();

  d.sortDataParsers = {
    parseInt: function (_parseInt) {
      function parseInt(_x) {
        return _parseInt.apply(this, arguments);
      }

      parseInt.toString = function () {
        return _parseInt.toString();
      };

      return parseInt;
    }(function (t) {
      return parseInt(t, 10);
    }),
    parseFloat: function (_parseFloat) {
      function parseFloat(_x2) {
        return _parseFloat.apply(this, arguments);
      }

      parseFloat.toString = function () {
        return _parseFloat.toString();
      };

      return parseFloat;
    }(function (t) {
      return parseFloat(t);
    })
  }, l._sort = function () {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e);
    }
  }, l._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] != this.sortHistory[e]) return !1;
    }

    return !0;
  }, l._mode = function () {
    var t = this.options.layoutMode,
        e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e;
  }, l._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, l._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t);
  }, l._manageStamp = function (t) {
    this._mode()._manageStamp(t);
  }, l._getContainerSize = function () {
    return this._mode()._getContainerSize();
  }, l.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  }, l.appended = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i = this._filterRevealAdded(e);

      this.filteredItems = this.filteredItems.concat(i);
    }
  }, l.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      this._resetLayout(), this._manageStamps();

      var i = this._filterRevealAdded(e);

      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
    }
  }, l._filterRevealAdded = function (t) {
    var e = this._filter(t);

    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
  }, l.insert = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i,
          o,
          n = e.length;

      for (i = 0; i < n; i++) {
        o = e[i], this.element.appendChild(o.element);
      }

      var s = this._filter(e).matches;

      for (i = 0; i < n; i++) {
        e[i].isLayoutInstant = !0;
      }

      for (this.arrange(), i = 0; i < n; i++) {
        delete e[i].isLayoutInstant;
      }

      this.reveal(s);
    }
  };
  var c = l.remove;
  return l.remove = function (t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);

    for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];
      n.removeFrom(this.filteredItems, s);
    }
  }, l.shuffle = function () {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random();
    }

    this.options.sortBy = "random", this._sort(), this._layout();
  }, l._noTransition = function (t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o = t.apply(this, e);
    return this.options.transitionDuration = i, o;
  }, l.getFilteredItemElements = function () {
    return this.filteredItems.map(function (t) {
      return t.element;
    });
  }, d;
});
/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

!function (a, b) {
   true ? !(__WEBPACK_LOCAL_MODULE_13__factory = (b), (typeof __WEBPACK_LOCAL_MODULE_13__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_13__module = { id: "packery/js/rect", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_13__ = __WEBPACK_LOCAL_MODULE_13__factory.call(__WEBPACK_LOCAL_MODULE_13__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_13__module.exports, __WEBPACK_LOCAL_MODULE_13__module)), (__WEBPACK_LOCAL_MODULE_13__module.loaded = true), __WEBPACK_LOCAL_MODULE_13__ === undefined && (__WEBPACK_LOCAL_MODULE_13__ = __WEBPACK_LOCAL_MODULE_13__module.exports)) : __WEBPACK_LOCAL_MODULE_13__ = __WEBPACK_LOCAL_MODULE_13__factory)) : 0;
}(window, function () {
  function a(b) {
    for (var c in a.defaults) {
      this[c] = a.defaults[c];
    }

    for (c in b) {
      this[c] = b[c];
    }
  }

  a.defaults = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  var b = a.prototype;
  return b.contains = function (a) {
    var b = a.width || 0,
        c = a.height || 0;
    return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c;
  }, b.overlaps = function (a) {
    var b = this.x + this.width,
        c = this.y + this.height,
        d = a.x + a.width,
        e = a.y + a.height;
    return this.x < d && b > a.x && this.y < e && c > a.y;
  }, b.getMaximalFreeRects = function (b) {
    if (!this.overlaps(b)) return !1;
    var c,
        d = [],
        e = this.x + this.width,
        f = this.y + this.height,
        g = b.x + b.width,
        h = b.y + b.height;
    return this.y < b.y && (c = new a({
      x: this.x,
      y: this.y,
      width: this.width,
      height: b.y - this.y
    }), d.push(c)), e > g && (c = new a({
      x: g,
      y: this.y,
      width: e - g,
      height: this.height
    }), d.push(c)), f > h && (c = new a({
      x: this.x,
      y: h,
      width: this.width,
      height: f - h
    }), d.push(c)), this.x < b.x && (c = new a({
      x: this.x,
      y: this.y,
      width: b.x - this.x,
      height: this.height
    }), d.push(c)), d;
  }, b.canFit = function (a) {
    return this.width >= a.width && this.height >= a.height;
  }, a;
}), function (a, b) {
  if (true) !(__WEBPACK_LOCAL_MODULE_14__array = [__WEBPACK_LOCAL_MODULE_13__], __WEBPACK_LOCAL_MODULE_14__factory = (b),
		(typeof __WEBPACK_LOCAL_MODULE_14__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_14__ = __WEBPACK_LOCAL_MODULE_14__factory.apply(__WEBPACK_LOCAL_MODULE_14__exports = {}, __WEBPACK_LOCAL_MODULE_14__array)), __WEBPACK_LOCAL_MODULE_14__ === undefined && (__WEBPACK_LOCAL_MODULE_14__ = __WEBPACK_LOCAL_MODULE_14__exports)) :
			(__WEBPACK_LOCAL_MODULE_14__ = __WEBPACK_LOCAL_MODULE_14__factory)
		));else { var c; }
}(window, function (a) {
  function b(a, b, c) {
    this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset();
  }

  var c = b.prototype;
  c.reset = function () {
    this.spaces = [];
    var b = new a({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height
    });
    this.spaces.push(b), this.sorter = d[this.sortDirection] || d.downwardLeftToRight;
  }, c.pack = function (a) {
    for (var b = 0; b < this.spaces.length; b++) {
      var c = this.spaces[b];

      if (c.canFit(a)) {
        this.placeInSpace(a, c);
        break;
      }
    }
  }, c.columnPack = function (a) {
    for (var b = 0; b < this.spaces.length; b++) {
      var c = this.spaces[b],
          d = c.x <= a.x && c.x + c.width >= a.x + a.width && c.height >= a.height - .01;

      if (d) {
        a.y = c.y, this.placed(a);
        break;
      }
    }
  }, c.rowPack = function (a) {
    for (var b = 0; b < this.spaces.length; b++) {
      var c = this.spaces[b],
          d = c.y <= a.y && c.y + c.height >= a.y + a.height && c.width >= a.width - .01;

      if (d) {
        a.x = c.x, this.placed(a);
        break;
      }
    }
  }, c.placeInSpace = function (a, b) {
    a.x = b.x, a.y = b.y, this.placed(a);
  }, c.placed = function (a) {
    for (var b = [], c = 0; c < this.spaces.length; c++) {
      var d = this.spaces[c],
          e = d.getMaximalFreeRects(a);
      e ? b.push.apply(b, e) : b.push(d);
    }

    this.spaces = b, this.mergeSortSpaces();
  }, c.mergeSortSpaces = function () {
    b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
  }, c.addSpace = function (a) {
    this.spaces.push(a), this.mergeSortSpaces();
  }, b.mergeRects = function (a) {
    var b = 0,
        c = a[b];

    a: for (; c;) {
      for (var d = 0, e = a[b + d]; e;) {
        if (e == c) d++;else {
          if (e.contains(c)) {
            a.splice(b, 1), c = a[b];
            continue a;
          }

          c.contains(e) ? a.splice(b + d, 1) : d++;
        }
        e = a[b + d];
      }

      b++, c = a[b];
    }

    return a;
  };
  var d = {
    downwardLeftToRight: function downwardLeftToRight(a, b) {
      return a.y - b.y || a.x - b.x;
    },
    rightwardTopToBottom: function rightwardTopToBottom(a, b) {
      return a.x - b.x || a.y - b.y;
    }
  };
  return b;
}), function (a, b) {
   true ? !(__WEBPACK_LOCAL_MODULE_15__array = [__WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_13__], __WEBPACK_LOCAL_MODULE_15__factory = (b),
		(typeof __WEBPACK_LOCAL_MODULE_15__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_15__ = __WEBPACK_LOCAL_MODULE_15__factory.apply(__WEBPACK_LOCAL_MODULE_15__exports = {}, __WEBPACK_LOCAL_MODULE_15__array)), __WEBPACK_LOCAL_MODULE_15__ === undefined && (__WEBPACK_LOCAL_MODULE_15__ = __WEBPACK_LOCAL_MODULE_15__exports)) :
			(__WEBPACK_LOCAL_MODULE_15__ = __WEBPACK_LOCAL_MODULE_15__factory)
		)) : 0;
}(window, function (a, b) {
  var c = document.documentElement.style,
      d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
      e = function e() {
    a.Item.apply(this, arguments);
  },
      f = e.prototype = Object.create(a.Item.prototype),
      g = f._create;

  f._create = function () {
    g.call(this), this.rect = new b();
  };

  var h = f.moveTo;
  return f.moveTo = function (a, b) {
    var c = Math.abs(this.position.x - a),
        d = Math.abs(this.position.y - b),
        e = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > c && 1 > d;
    return e ? void this.goTo(a, b) : void h.apply(this, arguments);
  }, f.enablePlacing = function () {
    this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0;
  }, f.disablePlacing = function () {
    this.isPlacing = !1;
  }, f.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]);
  }, f.showDropPlaceholder = function () {
    var a = this.dropPlaceholder;
    a || (a = this.dropPlaceholder = document.createElement("div"), a.className = "packery-drop-placeholder", a.style.position = "absolute"), a.style.width = this.size.width + "px", a.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(a);
  }, f.positionDropPlaceholder = function () {
    this.dropPlaceholder.style[d] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
  }, f.hideDropPlaceholder = function () {
    this.layout.element.removeChild(this.dropPlaceholder);
  }, e;
}), function (a, b) {
   true ? !(__WEBPACK_LOCAL_MODULE_16__array = [__WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_13__, __WEBPACK_LOCAL_MODULE_14__, __WEBPACK_LOCAL_MODULE_15__], __WEBPACK_LOCAL_MODULE_16__factory = (b),
		(typeof __WEBPACK_LOCAL_MODULE_16__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_16__ = __WEBPACK_LOCAL_MODULE_16__factory.apply(__WEBPACK_LOCAL_MODULE_16__exports = {}, __WEBPACK_LOCAL_MODULE_16__array)), __WEBPACK_LOCAL_MODULE_16__ === undefined && (__WEBPACK_LOCAL_MODULE_16__ = __WEBPACK_LOCAL_MODULE_16__exports)) :
			(__WEBPACK_LOCAL_MODULE_16__ = __WEBPACK_LOCAL_MODULE_16__factory)
		)) : 0;
}(window, function (a, b, c, d, e) {
  function f(a, b) {
    return a.position.y - b.position.y || a.position.x - b.position.x;
  }

  function g(a, b) {
    return a.position.x - b.position.x || a.position.y - b.position.y;
  }

  function h(a, b) {
    var c = b.x - a.x,
        d = b.y - a.y;
    return Math.sqrt(c * c + d * d);
  }

  c.prototype.canFit = function (a) {
    return this.width >= a.width - 1 && this.height >= a.height - 1;
  };

  var i = b.create("packery");
  i.Item = e;
  var j = i.prototype;
  j._create = function () {
    b.prototype._create.call(this), this.packer = new d(), this.shiftPacker = new d(), this.isEnabled = !0, this.dragItemCount = 0;
    var a = this;
    this.handleDraggabilly = {
      dragStart: function dragStart() {
        a.itemDragStart(this.element);
      },
      dragMove: function dragMove() {
        a.itemDragMove(this.element, this.position.x, this.position.y);
      },
      dragEnd: function dragEnd() {
        a.itemDragEnd(this.element);
      }
    }, this.handleUIDraggable = {
      start: function start(b, c) {
        c && a.itemDragStart(b.currentTarget);
      },
      drag: function drag(b, c) {
        c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
      },
      stop: function stop(b, c) {
        c && a.itemDragEnd(b.currentTarget);
      }
    };
  }, j._resetLayout = function () {
    this.getSize(), this._getMeasurements();
    var a, b, c;
    this._getOption("horizontal") ? (a = 1 / 0, b = this.size.innerHeight + this.gutter, c = "rightwardTopToBottom") : (a = this.size.innerWidth + this.gutter, b = 1 / 0, c = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = a, this.packer.height = this.shiftPacker.height = b, this.packer.sortDirection = this.shiftPacker.sortDirection = c, this.packer.reset(), this.maxY = 0, this.maxX = 0;
  }, j._getMeasurements = function () {
    this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width");
  }, j._getItemLayoutPosition = function (a) {
    if (this._setRectSize(a.element, a.rect), this.isShifting || this.dragItemCount > 0) {
      var b = this._getPackMethod();

      this.packer[b](a.rect);
    } else this.packer.pack(a.rect);

    return this._setMaxXY(a.rect), a.rect;
  }, j.shiftLayout = function () {
    this.isShifting = !0, this.layout(), delete this.isShifting;
  }, j._getPackMethod = function () {
    return this._getOption("horizontal") ? "rowPack" : "columnPack";
  }, j._setMaxXY = function (a) {
    this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY);
  }, j._setRectSize = function (b, c) {
    var d = a(b),
        e = d.outerWidth,
        f = d.outerHeight;
    (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height);
  }, j._applyGridGutter = function (a, b) {
    if (!b) return a + this.gutter;
    b += this.gutter;
    var c = a % b,
        d = c && 1 > c ? "round" : "ceil";
    return a = Math[d](a / b) * b;
  }, j._getContainerSize = function () {
    return this._getOption("horizontal") ? {
      width: this.maxX - this.gutter
    } : {
      height: this.maxY - this.gutter
    };
  }, j._manageStamp = function (a) {
    var b,
        d = this.getItem(a);
    if (d && d.isPlacing) b = d.rect;else {
      var e = this._getElementOffset(a);

      b = new c({
        x: this._getOption("originLeft") ? e.left : e.right,
        y: this._getOption("originTop") ? e.top : e.bottom
      });
    }
    this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
  }, j.sortItemsByPosition = function () {
    var a = this._getOption("horizontal") ? g : f;
    this.items.sort(a);
  }, j.fit = function (a, b, c) {
    var d = this.getItem(a);
    d && (this.stamp(d.element), d.enablePlacing(), this.updateShiftTargets(d), b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, this.shift(d, b, c), this._bindFitEvents(d), d.moveTo(d.rect.x, d.rect.y), this.shiftLayout(), this.unstamp(d.element), this.sortItemsByPosition(), d.disablePlacing());
  }, j._bindFitEvents = function (a) {
    function b() {
      d++, 2 == d && c.dispatchEvent("fitComplete", null, [a]);
    }

    var c = this,
        d = 0;
    a.once("layout", b), this.once("layoutComplete", b);
  }, j.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout());
  }, j.needsResizeLayout = function () {
    var b = a(this.element),
        c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
    return b[c] != this.size[c];
  }, j.resizeShiftPercentLayout = function () {
    var b = this._getItemsForLayout(this.items),
        c = this._getOption("horizontal"),
        d = c ? "y" : "x",
        e = c ? "height" : "width",
        f = c ? "rowHeight" : "columnWidth",
        g = c ? "innerHeight" : "innerWidth",
        h = this[f];

    if (h = h && h + this.gutter) {
      this._getMeasurements();

      var i = this[f] + this.gutter;
      b.forEach(function (a) {
        var b = Math.round(a.rect[d] / h);
        a.rect[d] = b * i;
      });
    } else {
      var j = a(this.element)[g] + this.gutter,
          k = this.packer[e];
      b.forEach(function (a) {
        a.rect[d] = a.rect[d] / k * j;
      });
    }

    this.shiftLayout();
  }, j.itemDragStart = function (a) {
    if (this.isEnabled) {
      this.stamp(a);
      var b = this.getItem(a);
      b && (b.enablePlacing(), b.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(b));
    }
  }, j.updateShiftTargets = function (a) {
    this.shiftPacker.reset(), this._getBoundingRect();

    var b = this._getOption("originLeft"),
        d = this._getOption("originTop");

    this.stamps.forEach(function (a) {
      var e = this.getItem(a);

      if (!e || !e.isPlacing) {
        var f = this._getElementOffset(a),
            g = new c({
          x: b ? f.left : f.right,
          y: d ? f.top : f.bottom
        });

        this._setRectSize(a, g), this.shiftPacker.placed(g);
      }
    }, this);

    var e = this._getOption("horizontal"),
        f = e ? "rowHeight" : "columnWidth",
        g = e ? "height" : "width";

    this.shiftTargetKeys = [], this.shiftTargets = [];
    var h,
        i = this[f];

    if (i = i && i + this.gutter) {
      var j = Math.ceil(a.rect[g] / i),
          k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
      h = (k - j) * i;

      for (var l = 0; k > l; l++) {
        this._addShiftTarget(l * i, 0, h);
      }
    } else h = this.shiftPacker[g] + this.gutter - a.rect[g], this._addShiftTarget(0, 0, h);

    var m = this._getItemsForLayout(this.items),
        n = this._getPackMethod();

    m.forEach(function (a) {
      var b = a.rect;
      this._setRectSize(a.element, b), this.shiftPacker[n](b), this._addShiftTarget(b.x, b.y, h);
      var c = e ? b.x + b.width : b.x,
          d = e ? b.y : b.y + b.height;
      if (this._addShiftTarget(c, d, h), i) for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
        var k = e ? c : b.x + i * j,
            l = e ? b.y + i * j : d;

        this._addShiftTarget(k, l, h);
      }
    }, this);
  }, j._addShiftTarget = function (a, b, c) {
    var d = this._getOption("horizontal") ? b : a;

    if (!(0 !== d && d > c)) {
      var e = a + "," + b,
          f = -1 != this.shiftTargetKeys.indexOf(e);
      f || (this.shiftTargetKeys.push(e), this.shiftTargets.push({
        x: a,
        y: b
      }));
    }
  }, j.shift = function (a, b, c) {
    var d,
        e = 1 / 0,
        f = {
      x: b,
      y: c
    };
    this.shiftTargets.forEach(function (a) {
      var b = h(a, f);
      e > b && (d = a, e = b);
    }), a.rect.x = d.x, a.rect.y = d.y;
  };
  var k = 120;
  j.itemDragMove = function (a, b, c) {
    function d() {
      f.shift(e, b, c), e.positionDropPlaceholder(), f.layout();
    }

    var e = this.isEnabled && this.getItem(a);

    if (e) {
      b -= this.size.paddingLeft, c -= this.size.paddingTop;
      var f = this,
          g = new Date();
      this._itemDragTime && g - this._itemDragTime < k ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(d, k)) : (d(), this._itemDragTime = g);
    }
  }, j.itemDragEnd = function (a) {
    function b() {
      d++, 2 == d && (c.element.classList.remove("is-positioning-post-drag"), c.hideDropPlaceholder(), e.dispatchEvent("dragItemPositioned", null, [c]));
    }

    var c = this.isEnabled && this.getItem(a);

    if (c) {
      clearTimeout(this.dragTimeout), c.element.classList.add("is-positioning-post-drag");
      var d = 0,
          e = this;
      c.once("layout", b), this.once("layoutComplete", b), c.moveTo(c.rect.x, c.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), c.disablePlacing(), this.unstamp(c.element);
    }
  }, j.bindDraggabillyEvents = function (a) {
    this._bindDraggabillyEvents(a, "on");
  }, j.unbindDraggabillyEvents = function (a) {
    this._bindDraggabillyEvents(a, "off");
  }, j._bindDraggabillyEvents = function (a, b) {
    var c = this.handleDraggabilly;
    a[b]("dragStart", c.dragStart), a[b]("dragMove", c.dragMove), a[b]("dragEnd", c.dragEnd);
  }, j.bindUIDraggableEvents = function (a) {
    this._bindUIDraggableEvents(a, "on");
  }, j.unbindUIDraggableEvents = function (a) {
    this._bindUIDraggableEvents(a, "off");
  }, j._bindUIDraggableEvents = function (a, b) {
    var c = this.handleUIDraggable;
    a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop);
  };
  var l = j.destroy;
  return j.destroy = function () {
    l.apply(this, arguments), this.isEnabled = !1;
  }, i.Rect = c, i.Packer = d, i;
}), function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__, __WEBPACK_LOCAL_MODULE_16__], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function (a, b) {
  var c = a.create("packery"),
      d = c.prototype,
      e = {
    _getElementOffset: !0,
    _getMeasurement: !0
  };

  for (var f in b.prototype) {
    e[f] || (d[f] = b.prototype[f]);
  }

  var g = d._resetLayout;

  d._resetLayout = function () {
    this.packer = this.packer || new b.Packer(), this.shiftPacker = this.shiftPacker || new b.Packer(), g.apply(this, arguments);
  };

  var h = d._getItemLayoutPosition;

  d._getItemLayoutPosition = function (a) {
    return a.rect = a.rect || new b.Rect(), h.call(this, a);
  };

  var i = d.needsResizeLayout;

  d.needsResizeLayout = function () {
    return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : i.call(this);
  };

  var j = d._getOption;
  return d._getOption = function (a) {
    return "horizontal" == a ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : j.apply(this.isotope, arguments);
  }, c;
});

/***/ }),

/***/ "./assets/themes/startup/vendor/jquery.appear/jquery.appear.min.js":
/*!*************************************************************************!*\
  !*** ./assets/themes/startup/vendor/jquery.appear/jquery.appear.min.js ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (n) {
  n.fn.appear = function (r, e) {
    var d = n.extend({
      data: void 0,
      one: !0,
      accX: 0,
      accY: 0
    }, e);
    return this.each(function () {
      var s,
          a,
          e,
          u = n(this);
      u.appeared = !1, r ? (s = n(window), a = function a() {
        var e, a, r, n, p, t, c, i, o, f;
        u.is(":visible") ? (e = s.scrollLeft(), a = s.scrollTop(), r = (f = u.offset()).left, n = f.top, p = d.accX, t = d.accY, c = u.height(), i = s.height(), o = u.width(), f = s.width(), a <= n + c + t && n <= a + i + t && e <= r + o + p && r <= e + f + p ? u.appeared || u.trigger("appear", d.data) : u.appeared = !1) : u.appeared = !1;
      }, e = function e() {
        var e;
        u.appeared = !0, d.one && (s.unbind("scroll", a), 0 <= (e = n.inArray(a, n.fn.appear.checks)) && n.fn.appear.checks.splice(e, 1)), r.apply(this, arguments);
      }, d.one ? u.one("appear", d.data, e) : u.bind("appear", d.data, e), s.scroll(a), n.fn.appear.checks.push(a), a()) : u.trigger("appear", d.data);
    });
  }, n.extend(n.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function checkAll() {
      var e = n.fn.appear.checks.length;
      if (0 < e) for (; e--;) {
        n.fn.appear.checks[e]();
      }
    },
    run: function run() {
      n.fn.appear.timeout && clearTimeout(n.fn.appear.timeout), n.fn.appear.timeout = setTimeout(n.fn.appear.checkAll, 20);
    }
  }), n.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (e, a) {
    var r = n.fn[a];
    r && (n.fn[a] = function () {
      var e = r.apply(this, arguments);
      return n.fn.appear.run(), e;
    });
  });
});

/***/ }),

/***/ "./assets/themes/startup/vendor/jquery.cookie/jquery.cookie.min.js":
/*!*************************************************************************!*\
  !*** ./assets/themes/startup/vendor/jquery.cookie/jquery.cookie.min.js ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (s) {
  var n = /\+/g;

  function f(e) {
    return x.raw ? e : encodeURIComponent(e);
  }

  function m(e, o) {
    e = x.raw ? e : function (e) {
      0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));

      try {
        return e = decodeURIComponent(e.replace(n, " ")), x.json ? JSON.parse(e) : e;
      } catch (e) {}
    }(e);
    return s.isFunction(o) ? o(e) : e;
  }

  var x = s.cookie = function (e, o, n) {
    var i, r;
    if (void 0 !== o && !s.isFunction(o)) return "number" == typeof (n = s.extend({}, x.defaults, n)).expires && (r = n.expires, (i = n.expires = new Date()).setTime(+i + 864e5 * r)), document.cookie = [f(e), "=", (r = o, f(x.json ? JSON.stringify(r) : String(r))), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("");

    for (var t = e ? void 0 : {}, c = document.cookie ? document.cookie.split("; ") : [], u = 0, a = c.length; u < a; u++) {
      var d = c[u].split("="),
          p = (p = d.shift(), x.raw ? p : decodeURIComponent(p)),
          d = d.join("=");

      if (e && e === p) {
        t = m(d, o);
        break;
      }

      e || void 0 === (d = m(d)) || (t[p] = d);
    }

    return t;
  };

  x.defaults = {}, s.removeCookie = function (e, o) {
    return void 0 !== s.cookie(e) && (s.cookie(e, "", s.extend({}, o, {
      expires: -1
    })), !s.cookie(e));
  };
});

/***/ }),

/***/ "./assets/themes/startup/vendor/jquery.easing/jquery.easing.min.js":
/*!*************************************************************************!*\
  !*** ./assets/themes/startup/vendor/jquery.easing/jquery.easing.min.js ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
      return factory($);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.easing.jswing = $.easing.swing;
  var pow = Math.pow,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      PI = Math.PI,
      c1 = 1.70158,
      c2 = c1 * 1.525,
      c3 = c1 + 1,
      c4 = 2 * PI / 3,
      c5 = 2 * PI / 4.5;

  function bounceOut(x) {
    var n1 = 7.5625,
        d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + .75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + .9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + .984375;
    }
  }

  $.extend($.easing, {
    def: "easeOutQuad",
    swing: function swing(x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function easeInQuad(x) {
      return x * x;
    },
    easeOutQuad: function easeOutQuad(x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function easeInOutQuad(x) {
      return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function easeInCubic(x) {
      return x * x * x;
    },
    easeOutCubic: function easeOutCubic(x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function easeInOutCubic(x) {
      return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function easeInQuart(x) {
      return x * x * x * x;
    },
    easeOutQuart: function easeOutQuart(x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function easeInOutQuart(x) {
      return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function easeInQuint(x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function easeOutQuint(x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function easeInOutQuint(x) {
      return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function easeInSine(x) {
      return 1 - cos(x * PI / 2);
    },
    easeOutSine: function easeOutSine(x) {
      return sin(x * PI / 2);
    },
    easeInOutSine: function easeInOutSine(x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function easeInExpo(x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function easeInOutExpo(x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function easeInCirc(x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function easeOutCirc(x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function easeInOutCirc(x) {
      return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function easeInElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function easeOutElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1;
    },
    easeInOutElastic: function easeInOutElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeInBack: function easeInBack(x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function easeOutBack(x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function easeInOutBack(x) {
      return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function easeInBounce(x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function easeInOutBounce(x) {
      return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    }
  });
});

/***/ }),

/***/ "./assets/themes/startup/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js":
/*!***************************************************************************************!*\
  !*** ./assets/themes/startup/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js ***!
  \***************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a) {
    return b(a);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (a) {
  var b = function b(a, _b) {
    var c,
        d = document.createElement("canvas");
    a.appendChild(d), "object" == (typeof G_vmlCanvasManager === "undefined" ? "undefined" : _typeof(G_vmlCanvasManager)) && G_vmlCanvasManager.initElement(d);
    var e = d.getContext("2d");
    d.width = d.height = _b.size;
    var f = 1;
    window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [_b.size, "px"].join(""), d.width = d.height = _b.size * f, e.scale(f, f)), e.translate(_b.size / 2, _b.size / 2), e.rotate((-0.5 + _b.rotate / 180) * Math.PI);
    var g = (_b.size - _b.lineWidth) / 2;
    _b.scaleColor && _b.scaleLength && (g -= _b.scaleLength + 2), Date.now = Date.now || function () {
      return +new Date();
    };

    var h = function h(a, b, c) {
      c = Math.min(Math.max(-1, c || 0), 1);
      var d = 0 >= c ? !0 : !1;
      e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke();
    },
        i = function i() {
      var a, c;
      e.lineWidth = 1, e.fillStyle = _b.scaleColor, e.save();

      for (var d = 24; d > 0; --d) {
        d % 6 === 0 ? (c = _b.scaleLength, a = 0) : (c = .6 * _b.scaleLength, a = _b.scaleLength - c), e.fillRect(-_b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
      }

      e.restore();
    },
        j = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(),
        k = function k() {
      _b.scaleColor && i(), _b.trackColor && h(_b.trackColor, _b.trackWidth || _b.lineWidth, 1);
    };

    this.getCanvas = function () {
      return d;
    }, this.getCtx = function () {
      return e;
    }, this.clear = function () {
      e.clearRect(_b.size / -2, _b.size / -2, _b.size, _b.size);
    }, this.draw = function (a) {
      _b.scaleColor || _b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, _b.size * f, _b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = _b.lineCap;
      var d;
      d = "function" == typeof _b.barColor ? _b.barColor(a) : _b.barColor, h(d, _b.lineWidth, a / 100);
    }.bind(this), this.animate = function (a, c) {
      var d = Date.now();

      _b.onStart(a, c);

      var e = function () {
        var f = Math.min(Date.now() - d, _b.animate.duration),
            g = _b.easing(this, f, a, c - a, _b.animate.duration);

        this.draw(g), _b.onStep(a, c, g), f >= _b.animate.duration ? _b.onStop(a, c) : j(e);
      }.bind(this);

      j(e);
    }.bind(this);
  },
      c = function c(a, _c) {
    var d = {
      barColor: "#ef1e25",
      trackColor: "#f9f9f9",
      scaleColor: "#dfe0e0",
      scaleLength: 5,
      lineCap: "round",
      lineWidth: 3,
      trackWidth: void 0,
      size: 110,
      rotate: 0,
      animate: {
        duration: 1e3,
        enabled: !0
      },
      easing: function easing(a, b, c, d, e) {
        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
      },
      onStart: function onStart(a, b) {},
      onStep: function onStep(a, b, c) {},
      onStop: function onStop(a, b) {}
    };
    if ("undefined" != typeof b) d.renderer = b;else {
      if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
      d.renderer = SVGRenderer;
    }

    var e = {},
        f = 0,
        g = function () {
      this.el = a, this.options = e;

      for (var b in d) {
        d.hasOwnProperty(b) && (e[b] = _c && "undefined" != typeof _c[b] ? _c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
      }

      "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
        duration: e.animate,
        enabled: !0
      }), "boolean" != typeof e.animate || e.animate || (e.animate = {
        duration: 1e3,
        enabled: e.animate
      }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")));
    }.bind(this);

    this.update = function (a) {
      return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this;
    }.bind(this), this.disableAnimation = function () {
      return e.animate.enabled = !1, this;
    }, this.enableAnimation = function () {
      return e.animate.enabled = !0, this;
    }, g();
  };

  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});

/***/ }),

/***/ "./assets/themes/startup/vendor/jquery.gmap/jquery.gmap.min.js":
/*!*********************************************************************!*\
  !*** ./assets/themes/startup/vendor/jquery.gmap/jquery.gmap.min.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.string.anchor.js */ "./node_modules/core-js/modules/es.string.anchor.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

!function (t) {
  t.fn.gMap = function (e, o) {
    switch (e) {
      case "addMarker":
        return t(this).trigger("gMap.addMarker", [o.latitude, o.longitude, o.content, o.icon, o.popup]);

      case "centerAt":
        return t(this).trigger("gMap.centerAt", [o.latitude, o.longitude, o.zoom]);

      case "clearMarkers":
        return t(this).trigger("gMap.clearMarkers");
    }

    var m = t.extend({}, t.fn.gMap.defaults, e);
    return this.each(function () {
      var l = new google.maps.Map(this);
      t(this).data("gMap.reference", l);
      var e = new google.maps.Geocoder();
      m.address ? e.geocode({
        address: m.address
      }, function (e, o) {
        e && e.length && l.setCenter(e[0].geometry.location);
      }) : m.latitude && m.longitude ? l.setCenter(new google.maps.LatLng(m.latitude, m.longitude)) : t.isArray(m.markers) && 0 < m.markers.length ? m.markers[0].address ? e.geocode({
        address: m.markers[0].address
      }, function (e, o) {
        e && 0 < e.length && l.setCenter(e[0].geometry.location);
      }) : l.setCenter(new google.maps.LatLng(m.markers[0].latitude, m.markers[0].longitude)) : l.setCenter(new google.maps.LatLng(34.885931, 9.84375)), l.setZoom(m.zoom), l.setMapTypeId(google.maps.MapTypeId[m.maptype]);
      var o = {
        scrollwheel: m.scrollwheel,
        disableDoubleClickZoom: !m.doubleclickzoom
      };
      !1 === m.controls ? t.extend(o, {
        disableDefaultUI: !0
      }) : 0 !== m.controls.length && t.extend(o, m.controls, {
        disableDefaultUI: !0
      }), l.setOptions(o);
      var d = new google.maps.Marker(),
          o = new google.maps.MarkerImage(m.icon.image);
      o.size = new google.maps.Size(m.icon.iconsize[0], m.icon.iconsize[1]), o.anchor = new google.maps.Point(m.icon.iconanchor[0], m.icon.iconanchor[1]), d.setIcon(o), m.icon.shadow && ((o = new google.maps.MarkerImage(m.icon.shadow)).size = new google.maps.Size(m.icon.shadowsize[0], m.icon.shadowsize[1]), o.anchor = new google.maps.Point(m.icon.shadowanchor[0], m.icon.shadowanchor[1]), d.setShadow(o)), t(this).bind("gMap.centerAt", function (e, o, a, n) {
        n && l.setZoom(n), l.panTo(new google.maps.LatLng(parseFloat(o), parseFloat(a)));
      });
      var c,
          a,
          p = [];
      t(this).bind("gMap.clearMarkers", function () {
        for (; p[0];) {
          p.pop().setMap(null);
        }
      }), t(this).bind("gMap.addMarker", function (e, o, a, n, s, t) {
        var r,
            i = new google.maps.LatLng(parseFloat(o), parseFloat(a)),
            g = new google.maps.Marker({
          position: i
        });
        s ? ((i = new google.maps.MarkerImage(s.image)).size = new google.maps.Size(s.iconsize[0], s.iconsize[1]), i.anchor = new google.maps.Point(s.iconanchor[0], s.iconanchor[1]), g.setIcon(i), s.shadow && ((i = new google.maps.MarkerImage(s.shadow)).size = new google.maps.Size(s.shadowsize[0], s.shadowsize[1]), i.anchor = new google.maps.Point(s.shadowanchor[0], s.shadowanchor[1]), d.setShadow(i))) : (g.setIcon(d.getIcon()), g.setShadow(d.getShadow())), n && ("_latlng" === n && (n = o + ", " + a), r = new google.maps.InfoWindow({
          content: m.html_prepend + n + m.html_append
        }), google.maps.event.addListener(g, "click", function () {
          c && c.close(), r.open(l, g), c = r;
        }), t && google.maps.event.addListenerOnce(l, "tilesloaded", function () {
          r.open(l, g);
        })), g.setMap(l), p.push(g);
      });

      for (var n = this, s = 0; s < m.markers.length; s++) {
        (a = m.markers[s]).address ? ("_address" === a.html && (a.html = a.address), e.geocode({
          address: a.address
        }, function (a) {
          return function (e, o) {
            e && 0 < e.length && t(n).trigger("gMap.addMarker", [e[0].geometry.location.lat(), e[0].geometry.location.lng(), a.html, a.icon, a.popup]);
          };
        }(a))) : t(this).trigger("gMap.addMarker", [a.latitude, a.longitude, a.html, a.icon, a.popup]);
      }
    });
  }, t.fn.gMap.defaults = {
    address: "",
    latitude: 0,
    longitude: 0,
    zoom: 1,
    markers: [],
    controls: [],
    scrollwheel: !1,
    doubleclickzoom: !0,
    maptype: "ROADMAP",
    html_prepend: '<div class="gmap_marker">',
    html_append: "</div>",
    icon: {
      image: "http://www.google.com/mapfiles/marker.png",
      shadow: "http://www.google.com/mapfiles/shadow50.png",
      iconsize: [20, 34],
      shadowsize: [37, 34],
      iconanchor: [9, 34],
      shadowanchor: [6, 34]
    }
  };
}(jQuery);

/***/ }),

/***/ "./assets/themes/startup/vendor/jquery.validation/jquery.validate.min.js":
/*!*******************************************************************************!*\
  !*** ./assets/themes/startup/vendor/jquery.validation/jquery.validate.min.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (a) {
  a.extend(a.fn, {
    validate: function validate(b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e);
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    },
    valid: function valid() {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList));
      }), c.errorList = d), b;
    },
    rules: function rules(b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0],
          k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");

      if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
        if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;

          case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
              i[b] = f[b], delete f[b];
            }), i) : (delete e[j.name], f);
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
          required: h
        }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
          remote: h
        })), g;
      }
    }
  });

  var b = function b(a) {
    return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };

  a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function blank(c) {
      return !b("" + a(c).val());
    },
    filled: function filled(c) {
      var d = a(c).val();
      return null !== d && !!b("" + d);
    },
    unchecked: function unchecked(b) {
      return !a(b).prop("checked");
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c);
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
      },
      onfocusout: function onfocusout(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      },
      onkeyup: function onkeyup(b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
      },
      onclick: function onclick(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function highlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      },
      unhighlight: function unhighlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      }
    },
    setDefaults: function setDefaults(b) {
      a.extend(a.validator.defaults, b);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}."),
      step: a.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        function b(b) {
          var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");

          if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
            var e = a.data(this.form, "validator"),
                f = "on" + b.type.replace(/^validate/, ""),
                g = e.settings;
            g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
          }
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c,
            d = this.currentForm,
            e = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            e[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      },
      form: function form() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
          this.check(b[a]);
        }

        return this.valid();
      },
      element: function element(b) {
        var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
        return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h;
      },
      showErrors: function showErrors(b) {
        if (b) {
          var c = this;
          a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return {
              message: a,
              element: c.findByName(b)[0]
            };
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }

        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(b);
      },
      resetElements: function resetElements(a) {
        var b;
        if (this.settings.unhighlight) for (b = 0; a[b]; b++) {
          this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
        } else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(a) {
        var b,
            c = 0;

        for (b in a) {
          void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
        }

        return c;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
        } catch (b) {}
      },
      findLastActive: function findLastActive() {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      },
      elements: function elements() {
        var b = this,
            c = {};
        return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name"),
              e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
          return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0);
        });
      },
      clean: function clean(b) {
        return a(b)[0];
      },
      errors: function errors() {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
      },
      reset: function reset() {
        this.resetInternals(), this.currentElements = a([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(a) {
        this.reset(), this.toHide = this.errorsFor(a);
      },
      elementValue: function elementValue(b) {
        var c,
            d,
            e = a(b),
            f = b.type,
            g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
        return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
      },
      check: function check(b) {
        b = this.validationTargetFor(this.clean(b));
        var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
          return b;
        }).length,
            i = !1,
            j = this.elementValue(b);
        "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);

        for (d in g) {
          e = {
            method: d,
            parameters: g[d]
          };

          try {
            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
              i = !0;
              continue;
            }

            if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1;
          } catch (k) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k;
          }
        }

        if (!i) return this.objectLength(g) && this.successList.push(b), !0;
      },
      customDataMessage: function customDataMessage(b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      },
      customMessage: function customMessage(a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b]);
      },
      findDefined: function findDefined() {
        for (var a = 0; a < arguments.length; a++) {
          if (void 0 !== arguments[a]) return arguments[a];
        }
      },
      defaultMessage: function defaultMessage(b, c) {
        "string" == typeof c && (c = {
          method: c
        });
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
            e = /\$?\{(\d+)\}/g;
        return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
      },
      formatAndAdd: function formatAndAdd(a, b) {
        var c = this.defaultMessage(a, b);
        this.errorList.push({
          message: c,
          element: a,
          method: b.method
        }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
      },
      addWrapper: function addWrapper(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      },
      defaultShowErrors: function defaultShowErrors() {
        var a, b, c;

        for (a = 0; this.errorList[a]; a++) {
          c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        }

        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
          this.showLabel(this.successList[a]);
        }
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) {
          this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return a(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(b, c) {
        var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
        h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
      },
      errorsFor: function errorsFor(b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
      },
      escapeCssMeta: function escapeCssMeta(a) {
        return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      },
      validationTargetFor: function validationTargetFor(b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
      },
      checkable: function checkable(a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function findByName(b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
      },
      getLength: function getLength(b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;

          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
        }

        return b.length;
      },
      depend: function depend(a, b) {
        return !this.dependTypes[_typeof(a)] || this.dependTypes[_typeof(a)](a, b);
      },
      dependTypes: {
        "boolean": function boolean(a) {
          return a;
        },
        string: function string(b, c) {
          return !!a(b, c.form).length;
        },
        "function": function _function(a, b) {
          return a(b);
        }
      },
      optional: function optional(b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      },
      startRequest: function startRequest(b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
      },
      stopRequest: function stopRequest(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(b, c) {
        return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, {
            method: c
          })
        });
      },
      destroy: function destroy() {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    },
    classRules: function classRules(b) {
      var c = {},
          d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    },
    normalizeAttributeRule: function normalizeAttributeRule(a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
    },
    attributeRules: function attributeRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      }

      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function dataRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
      }

      return e;
    },
    staticRules: function staticRules(b) {
      var c = {},
          d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    },
    normalizeRules: function normalizeRules(b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];

        if (e.param || e.depends) {
          var f = !0;

          switch (_typeof(e.depends)) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;

            case "function":
              f = e.depends.call(c, c);
          }

          f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
        }
      }), a.each(b, function (a, d) {
        b[a] = "function" == typeof d && "normalizer" !== a ? d(c) : d;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var a;
        b[this] && (Array.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(a[0]), Number(a[1])]));
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    },
    normalizeRule: function normalizeRule(b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }

      return b;
    },
    addMethod: function addMethod(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    },
    methods: {
      required: function required(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";

        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0;
        }

        return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
      },
      email: function email(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      },
      url: function url(a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
      },
      date: function () {
        var a = !1;
        return function (b, c) {
          return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
        };
      }(),
      dateISO: function dateISO(a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
      },
      number: function number(a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      },
      digits: function digits(a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      minlength: function minlength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d >= c;
      },
      maxlength: function maxlength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d <= c;
      },
      rangelength: function rangelength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d >= c[0] && d <= c[1];
      },
      min: function min(a, b, c) {
        return this.optional(b) || a >= c;
      },
      max: function max(a, b, c) {
        return this.optional(b) || a <= c;
      },
      range: function range(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      },
      step: function step(b, c, d) {
        var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function k(a) {
          var b = ("" + a).match(/(?:\.(\d+))?$/);
          return b && b[1] ? b[1].length : 0;
        },
            l = function l(a) {
          return Math.round(a * Math.pow(10, e));
        },
            m = !0;

        if (j) throw new Error(g);
        return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
      },
      equalTo: function equalTo(b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      },
      remote: function remote(b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";
        e = "string" == typeof e && e || "remote";
        var f,
            g,
            h,
            i = this.previousValue(c, e);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
          url: d
        } || d, h = a.param(a.extend({
          data: b
        }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: g,
          context: f.currentForm,
          success: function success(a) {
            var d,
                g,
                h,
                j = a === !0 || "true" === a;
            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
              method: e,
              parameters: b
            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
          }
        }, d)), "pending");
      }
    }
  });
  var c,
      d = {};
  return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, c) {
    var e = a.port;
    "abort" === a.mode && (d[e] && d[e].abort(), d[e] = c);
  }) : (c = a.ajax, a.ajax = function (b) {
    var e = ("mode" in b ? b : a.ajaxSettings).mode,
        f = ("port" in b ? b : a.ajaxSettings).port;
    return "abort" === e ? (d[f] && d[f].abort(), d[f] = c.apply(this, arguments), d[f]) : c.apply(this, arguments);
  }), a;
});

/***/ }),

/***/ "./assets/themes/startup/vendor/lazysizes/lazysizes.min.js":
/*!*****************************************************************!*\
  !*** ./assets/themes/startup/vendor/lazysizes/lazysizes.min.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/*! lazysizes - v5.3.2 */
!function (e) {
  var t = function (u, D, f) {
    "use strict";

    var k, H;

    if (function () {
      var e;
      var t = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        fastLoadedClass: "ls-is-cached",
        iframeLoadMode: 0,
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: true,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: true,
        ricTimeout: 0,
        throttleDelay: 125
      };
      H = u.lazySizesConfig || u.lazysizesConfig || {};

      for (e in t) {
        if (!(e in H)) {
          H[e] = t[e];
        }
      }
    }(), !D || !D.getElementsByClassName) {
      return {
        init: function init() {},
        cfg: H,
        noSupport: true
      };
    }

    var O = D.documentElement,
        i = u.HTMLPictureElement,
        P = "addEventListener",
        $ = "getAttribute",
        q = u[P].bind(u),
        I = u.setTimeout,
        U = u.requestAnimationFrame || I,
        o = u.requestIdleCallback,
        j = /^picture$/i,
        r = ["load", "error", "lazyincluded", "_lazyloaded"],
        a = {},
        G = Array.prototype.forEach,
        J = function J(e, t) {
      if (!a[t]) {
        a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
      }

      return a[t].test(e[$]("class") || "") && a[t];
    },
        K = function K(e, t) {
      if (!J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
      }
    },
        Q = function Q(e, t) {
      var a;

      if (a = J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").replace(a, " "));
      }
    },
        V = function V(t, a, e) {
      var i = e ? P : "removeEventListener";

      if (e) {
        V(t, a);
      }

      r.forEach(function (e) {
        t[i](e, a);
      });
    },
        X = function X(e, t, a, i, r) {
      var n = D.createEvent("Event");

      if (!a) {
        a = {};
      }

      a.instance = k;
      n.initEvent(t, !i, !r);
      n.detail = a;
      e.dispatchEvent(n);
      return n;
    },
        Y = function Y(e, t) {
      var a;

      if (!i && (a = u.picturefill || H.pf)) {
        if (t && t.src && !e[$]("srcset")) {
          e.setAttribute("srcset", t.src);
        }

        a({
          reevaluate: true,
          elements: [e]
        });
      } else if (t && t.src) {
        e.src = t.src;
      }
    },
        Z = function Z(e, t) {
      return (getComputedStyle(e, null) || {})[t];
    },
        s = function s(e, t, a) {
      a = a || e.offsetWidth;

      while (a < H.minSize && t && !e._lazysizesWidth) {
        a = t.offsetWidth;
        t = t.parentNode;
      }

      return a;
    },
        ee = function () {
      var a, i;
      var t = [];
      var r = [];
      var n = t;

      var s = function s() {
        var e = n;
        n = t.length ? r : t;
        a = true;
        i = false;

        while (e.length) {
          e.shift()();
        }

        a = false;
      };

      var e = function e(_e, t) {
        if (a && !t) {
          _e.apply(this, arguments);
        } else {
          n.push(_e);

          if (!i) {
            i = true;
            (D.hidden ? I : U)(s);
          }
        }
      };

      e._lsFlush = s;
      return e;
    }(),
        te = function te(a, e) {
      return e ? function () {
        ee(a);
      } : function () {
        var e = this;
        var t = arguments;
        ee(function () {
          a.apply(e, t);
        });
      };
    },
        ae = function ae(e) {
      var a;
      var i = 0;
      var r = H.throttleDelay;
      var n = H.ricTimeout;

      var t = function t() {
        a = false;
        i = f.now();
        e();
      };

      var s = o && n > 49 ? function () {
        o(t, {
          timeout: n
        });

        if (n !== H.ricTimeout) {
          n = H.ricTimeout;
        }
      } : te(function () {
        I(t);
      }, true);
      return function (e) {
        var t;

        if (e = e === true) {
          n = 33;
        }

        if (a) {
          return;
        }

        a = true;
        t = r - (f.now() - i);

        if (t < 0) {
          t = 0;
        }

        if (e || t < 9) {
          s();
        } else {
          I(s, t);
        }
      };
    },
        ie = function ie(e) {
      var t, a;
      var i = 99;

      var r = function r() {
        t = null;
        e();
      };

      var n = function n() {
        var e = f.now() - a;

        if (e < i) {
          I(n, i - e);
        } else {
          (o || r)(r);
        }
      };

      return function () {
        a = f.now();

        if (!t) {
          t = I(n, i);
        }
      };
    },
        e = function () {
      var v, m, c, h, e;
      var y, z, g, p, C, b, A;
      var n = /^img$/i;
      var d = /^iframe$/i;
      var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
      var _ = 0;
      var w = 0;
      var M = 0;
      var N = -1;

      var L = function L(e) {
        M--;

        if (!e || M < 0 || !e.target) {
          M = 0;
        }
      };

      var x = function x(e) {
        if (A == null) {
          A = Z(D.body, "visibility") == "hidden";
        }

        return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden");
      };

      var W = function W(e, t) {
        var a;
        var i = e;
        var r = x(e);
        g -= t;
        b += t;
        p -= t;
        C += t;

        while (r && (i = i.offsetParent) && i != D.body && i != O) {
          r = (Z(i, "opacity") || 1) > 0;

          if (r && Z(i, "overflow") != "visible") {
            a = i.getBoundingClientRect();
            r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1;
          }
        }

        return r;
      };

      var t = function t() {
        var e, t, a, i, r, n, s, o, l, u, f, c;
        var d = k.elements;

        if ((h = H.loadMode) && M < 8 && (e = d.length)) {
          t = 0;
          N++;

          for (; t < e; t++) {
            if (!d[t] || d[t]._lazyRace) {
              continue;
            }

            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
              R(d[t]);
              continue;
            }

            if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
              n = w;
            }

            if (!u) {
              u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
              k._defEx = u;
              f = u * H.expFactor;
              c = H.hFac;
              A = null;

              if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) {
                w = f;
                N = 0;
              } else if (h > 1 && N > 1 && M < 6) {
                w = u;
              } else {
                w = _;
              }
            }

            if (l !== n) {
              y = innerWidth + n * c;
              z = innerHeight + n;
              s = n * -1;
              l = n;
            }

            a = d[t].getBoundingClientRect();

            if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) {
              R(d[t]);
              r = true;

              if (M > 9) {
                break;
              }
            } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
              i = v[0] || d[t];
            }
          }

          if (i && !r) {
            R(i);
          }
        }
      };

      var a = ae(t);

      var S = function S(e) {
        var t = e.target;

        if (t._lazyCache) {
          delete t._lazyCache;
          return;
        }

        L(e);
        K(t, H.loadedClass);
        Q(t, H.loadingClass);
        V(t, B);
        X(t, "lazyloaded");
      };

      var i = te(S);

      var B = function B(e) {
        i({
          target: e.target
        });
      };

      var T = function T(e, t) {
        var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;

        if (a == 0) {
          e.contentWindow.location.replace(t);
        } else if (a == 1) {
          e.src = t;
        }
      };

      var F = function F(e) {
        var t;
        var a = e[$](H.srcsetAttr);

        if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
          e.setAttribute("media", t);
        }

        if (a) {
          e.setAttribute("srcset", a);
        }
      };

      var s = te(function (t, e, a, i, r) {
        var n, s, o, l, u, f;

        if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
          if (i) {
            if (a) {
              K(t, H.autosizesClass);
            } else {
              t.setAttribute("sizes", i);
            }
          }

          s = t[$](H.srcsetAttr);
          n = t[$](H.srcAttr);

          if (r) {
            o = t.parentNode;
            l = o && j.test(o.nodeName || "");
          }

          f = e.firesLoad || "src" in t && (s || n || l);
          u = {
            target: t
          };
          K(t, H.loadingClass);

          if (f) {
            clearTimeout(c);
            c = I(L, 2500);
            V(t, B, true);
          }

          if (l) {
            G.call(o.getElementsByTagName("source"), F);
          }

          if (s) {
            t.setAttribute("srcset", s);
          } else if (n && !l) {
            if (d.test(t.nodeName)) {
              T(t, n);
            } else {
              t.src = n;
            }
          }

          if (r && (s || l)) {
            Y(t, {
              src: n
            });
          }
        }

        if (t._lazyRace) {
          delete t._lazyRace;
        }

        Q(t, H.lazyClass);
        ee(function () {
          var e = t.complete && t.naturalWidth > 1;

          if (!f || e) {
            if (e) {
              K(t, H.fastLoadedClass);
            }

            S(u);
            t._lazyCache = true;
            I(function () {
              if ("_lazyCache" in t) {
                delete t._lazyCache;
              }
            }, 9);
          }

          if (t.loading == "lazy") {
            M--;
          }
        }, true);
      });

      var R = function R(e) {
        if (e._lazyRace) {
          return;
        }

        var t;
        var a = n.test(e.nodeName);
        var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
        var r = i == "auto";

        if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
          return;
        }

        t = X(e, "lazyunveilread").detail;

        if (r) {
          re.updateElem(e, true, e.offsetWidth);
        }

        e._lazyRace = true;
        M++;
        s(e, t, r, i, a);
      };

      var r = ie(function () {
        H.loadMode = 3;
        a();
      });

      var o = function o() {
        if (H.loadMode == 3) {
          H.loadMode = 2;
        }

        r();
      };

      var l = function l() {
        if (m) {
          return;
        }

        if (f.now() - e < 999) {
          I(l, 999);
          return;
        }

        m = true;
        H.loadMode = 3;
        a();
        q("scroll", o, true);
      };

      return {
        _: function _() {
          e = f.now();
          k.elements = D.getElementsByClassName(H.lazyClass);
          v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
          q("scroll", a, true);
          q("resize", a, true);
          q("pageshow", function (e) {
            if (e.persisted) {
              var t = D.querySelectorAll("." + H.loadingClass);

              if (t.length && t.forEach) {
                U(function () {
                  t.forEach(function (e) {
                    if (e.complete) {
                      R(e);
                    }
                  });
                });
              }
            }
          });

          if (u.MutationObserver) {
            new MutationObserver(a).observe(O, {
              childList: true,
              subtree: true,
              attributes: true
            });
          } else {
            O[P]("DOMNodeInserted", a, true);
            O[P]("DOMAttrModified", a, true);
            setInterval(a, 999);
          }

          q("hashchange", a, true);
          ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
            D[P](e, a, true);
          });

          if (/d$|^c/.test(D.readyState)) {
            l();
          } else {
            q("load", l);
            D[P]("DOMContentLoaded", a);
            I(l, 2e4);
          }

          if (k.elements.length) {
            t();

            ee._lsFlush();
          } else {
            a();
          }
        },
        checkElems: a,
        unveil: R,
        _aLSL: o
      };
    }(),
        re = function () {
      var a;
      var n = te(function (e, t, a, i) {
        var r, n, s;
        e._lazysizesWidth = i;
        i += "px";
        e.setAttribute("sizes", i);

        if (j.test(t.nodeName || "")) {
          r = t.getElementsByTagName("source");

          for (n = 0, s = r.length; n < s; n++) {
            r[n].setAttribute("sizes", i);
          }
        }

        if (!a.detail.dataAttr) {
          Y(e, a.detail);
        }
      });

      var i = function i(e, t, a) {
        var i;
        var r = e.parentNode;

        if (r) {
          a = s(e, r, a);
          i = X(e, "lazybeforesizes", {
            width: a,
            dataAttr: !!t
          });

          if (!i.defaultPrevented) {
            a = i.detail.width;

            if (a && a !== e._lazysizesWidth) {
              n(e, r, i, a);
            }
          }
        }
      };

      var e = function e() {
        var e;
        var t = a.length;

        if (t) {
          e = 0;

          for (; e < t; e++) {
            i(a[e]);
          }
        }
      };

      var t = ie(e);
      return {
        _: function _() {
          a = D.getElementsByClassName(H.autosizesClass);
          q("resize", t);
        },
        checkElems: t,
        updateElem: i
      };
    }(),
        t = function t() {
      if (!t.i && D.getElementsByClassName) {
        t.i = true;

        re._();

        e._();
      }
    };

    return I(function () {
      H.init && t();
    }), k = {
      cfg: H,
      autoSizer: re,
      loader: e,
      init: t,
      uP: Y,
      aC: K,
      rC: Q,
      hC: J,
      fire: X,
      gW: s,
      rAF: ee
    };
  }(e, e.document, Date);

  e.lazySizes = t, "object" == ( false ? 0 : _typeof(module)) && module.exports && (module.exports = t);
}("undefined" != typeof window ? window : {});

/***/ }),

/***/ "./assets/themes/startup/vendor/magnific-popup/jquery.magnific-popup.min.js":
/*!**********************************************************************************!*\
  !*** ./assets/themes/startup/vendor/magnific-popup/jquery.magnific-popup.min.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!__webpack_provided_window_dot_jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");
    return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a.transition) return !0;

    for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }

    return !1;
  };

  t.prototype = {
    constructor: t,
    init: function init() {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    },
    open: function open(c) {
      var e;

      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g,
            h = c.items;

        for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;

      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;

      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }

      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
          n = {};

      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();

        o && (n.marginRight = o);
      }

      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    },
    close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    },
    _close: function _close() {
      y(h);
      var c = r + " " + q + " ";

      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }

      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    },
    updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();

      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;

      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }

      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    },
    appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    },
    parseEl: function parseEl(c) {
      var d,
          e = b.items[c];

      if (e.tagName ? e = {
        el: a(e)
      } : (d = e.type, e = {
        data: e,
        src: e.src
      }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        }

        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }

      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    },
    addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };

      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    },
    _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;

      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    },
    _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;

        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;

        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;

        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);

          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }

      return b.scrollbarSize;
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    },
    close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d;
  };

  var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };

  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      },
      getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);

          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");

          return c.inlineElement = f, f;
        }

        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      }
    }
  });

  var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };

  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      },
      getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function success(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          },
          error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), "";
      }
    }
  });

  var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;

    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || "";
    }

    return "";
  };

  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var c = b.st.image,
            d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function resizeImage() {
        var a = b.currItem;

        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      },
      findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };

        e(1);
      },
      getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");

        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }

        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      }
    }
  });

  var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };

  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";

        if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
                f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };

          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a);
              }

              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function _getOffset(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      }
    }
  });

  var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");
      c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };

  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      },
      getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      }
    }
  });

  var S = function S(a) {
    var c = b.items.length;
    return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };

  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      },
      next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      },
      prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      },
      goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);

        for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }

        for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      },
      _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      }
    }
  }), A();
});

/***/ }),

/***/ "./assets/themes/startup/vendor/owl.carousel/owl.carousel.min.js":
/*!***********************************************************************!*\
  !*** ./assets/themes/startup/vendor/owl.carousel/owl.carousel.min.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-names.js */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this.settings.margin || "",
          c = !this.settings.autoWidth,
          d = this.settings.rtl,
          e = {
        width: "auto",
        "margin-left": d ? b : "",
        "margin-right": d ? "" : b
      };
      !c && this.$stage.children().css(e), a.css = e;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          c = null,
          d = this._items.length,
          e = !this.settings.autoWidth,
          f = [];

      for (a.items = {
        merge: !1,
        width: b
      }; d--;) {
        c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      }

      this._widths = f;
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var b = [],
          c = this._items,
          d = this.settings,
          e = Math.max(2 * d.items, 4),
          f = 2 * Math.ceil(c.length / 2),
          g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
          h = "",
          i = "";

      for (g /= 2; g > 0;) {
        b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
      }

      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
        d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      }

      this._coordinates = f;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var a = this.settings.stagePadding,
          b = this._coordinates,
          c = {
        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
        "padding-left": a || "",
        "padding-right": a || ""
      };
      this.$stage.css(c);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this._coordinates.length,
          c = !this.settings.autoWidth,
          d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) {
        a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      } else c && (a.css.width = a.items.width, d.css(a.css));
    }
  }, {
    filter: ["items"],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var a,
          b,
          c,
          d,
          e = this.settings.rtl ? 1 : -1,
          f = 2 * this.settings.stagePadding,
          g = this.coordinates(this.current()) + f,
          h = g + this.width() * e,
          i = [];

      for (c = 0, d = this._coordinates.length; c < d; c++) {
        a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      }

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
    }
  }], e.prototype.initializeStage = function () {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
      "class": this.settings.stageClass
    }).wrap(a("<div/>", {
      "class": this.settings.stageOuterClass
    })), this.$element.append(this.$stage.parent()));
  }, e.prototype.initializeItems = function () {
    var b = this.$element.find(".owl-item");
    if (b.length) return this._items = b.get().map(function (b) {
      return a(b);
    }), this._mergers = this._items.map(function () {
      return 1;
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
  }, e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var a, b, c;
      a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a);
    }

    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.isVisible = function () {
    return !this.settings.checkVisibility || this.$element.is(":visible");
  }, e.prototype.setup = function () {
    var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a));
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data;
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a];
    }, this._invalidated), e = {}; b < c;) {
      (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    }

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function (a) {
    var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function (b, c) {
    var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
    return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
      return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e;
    }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e;
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    });
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0;
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;

    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b;
    });
  }, e.prototype.reset = function (a) {
    (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
        e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0);
  }, e.prototype.maximum = function (a) {
    var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
      if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);) {
        ;
      }
      f = b + 1;
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2;
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function f(a) {
      return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
    };

    return b === d ? a.map(this._clones, function (a, b) {
      return f(b);
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null;
    });
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed;
  }, e.prototype.coordinates = function (b) {
    var c,
        e = 1,
        f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update();
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a);
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a);
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType;
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    });
  }, e.prototype.remove = function (a) {
    (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }));
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

    for (var d in this._plugins) {
      this._plugins[d].destroy();
    }

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;

    switch (b) {
      case "<":
        return d ? a > c : a < c;

      case ">":
        return d ? a < c : a > c;

      case ">=":
        return d ? a <= c : a >= c;

      case "<=":
        return d ? a >= c : a <= c;
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        i = a.camelCase(a.grep(["on", b, d], function (a) {
      return a;
    }).join("-").toLowerCase()),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j);
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
        }, a.event.special[b.name].owl = !0;
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d;
    }, this)));
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0;
    }, this));
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
          f = d.data("owl.carousel");
      f || (f = new e(this, "object" == _typeof(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function () {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
          var c = this._core.settings,
              e = c.center && Math.ceil(c.items / 2) || c.items,
              f = c.center && -1 * e || 0,
              g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
              h = this._core.clones().length,
              i = a.proxy(function (a, b) {
            this.load(b);
          }, this);

          for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) {
            this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
          }
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    lazyLoad: !1,
    lazyLoadEager: 0
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
        e = d && d.find(".owl-lazy");

    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e,
          f = a(d),
          g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
        this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("srcset", g) : (e = new Image(), e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this), e.src = g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this._core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  var e = function e(c) {
    this._core = c, this._previousHeight = null, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var d = this;
    a(b).on("load", function () {
      d._core.settings.autoHeight && d.update();
    }), a(b).resize(function () {
      d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
        d.update();
      }, 250));
    });
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
        c = b + this._core.settings.items,
        d = this._core.settings.lazyLoad,
        e = this._core.$stage.children().toArray().slice(b, c),
        f = [],
        g = 0;

    a.each(e, function (b, c) {
      f.push(a(c).height());
    }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a);
    }, this));
  };

  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(),
        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
        e = a.attr("data-width") || this._core.settings.videoWidth,
        f = a.attr("data-height") || this._core.settings.videoHeight,
        g = a.attr("href");

    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar";
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    var d,
        e,
        f,
        g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
        h = b.find("img"),
        i = "src",
        j = "",
        k = this._core.settings,
        l = function l(c) {
      e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
        "class": "owl-video-tn " + j,
        srcType: c
      }) : a("<div/>", {
        "class": "owl-video-tn",
        style: "opacity:1;background-image:url(" + c + ")"
      }), b.after(d), b.after(e);
    };

    if (b.wrap(a("<div/>", {
      "class": "owl-video-wrapper",
      style: g
    })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a[0].thumbnail_large, l(f);
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a.framegrab_url, l(f);
      }
    });
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function (b) {
    var c,
        d = a(b.target),
        e = d.closest("." + this._core.settings.itemClass),
        f = this._videos[e.attr("data-video")],
        g = f.width || "100%",
        h = f.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function () {
    var a, b;

    this._core.$element.off("click.owl.video");

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type);
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
          c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this.core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c);
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };

  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype._next = function (d) {
    this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
  }, e.prototype.read = function () {
    return new Date().getTime() - this._time;
  }, e.prototype.play = function (c, d) {
    var e;
    this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"));
  }, e.prototype.pause = function () {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call));
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b,
        c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this));

    for (b in this._overrides) {
      this._core[b] = a.proxy(this[b], this);
    }
  }, e.prototype.destroy = function () {
    var a, b, c, d, e;
    e = this._core.settings;

    for (a in this._handlers) {
      this.$element.off(a, this._handlers[a]);
    }

    for (b in this._controls) {
      "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
    }

    for (d in this.overides) {
      this._core[d] = this._overrides[d];
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, e.prototype.update = function () {
    var a,
        b,
        c,
        d = this._core.clones().length / 2,
        e = d + this._core.items().length,
        f = this._core.maximum(!0),
        g = this._core.settings,
        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0, ++c;
      }

      b += this._core.mergers(this._core.relative(a));
    }
  }, e.prototype.draw = function () {
    var b,
        c = this._core.settings,
        d = this._core.items().length <= c.items,
        e = this._core.relative(this._core.current()),
        f = c.loop || c.rewind;

    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    };
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());

    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b;
    }, this)).pop();
  }, e.prototype.getPosition = function (b) {
    var c,
        d,
        e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content;
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
              e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null;
          }).join();

          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
          e = this._core.$stage.children(),
          f = this._hashes[c] && e.index(this._hashes[c]);

      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
    }, this));
  };

  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");

    for (c in this._handlers) {
      this._core.$element.off(c, this._handlers[c]);
    }

    for (d in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[d] && (this[d] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1;
    }), e;
  }

  function f(a) {
    return e(a, !0);
  }

  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      j = {
    csstransforms: function csstransforms() {
      return !!e("transform");
    },
    csstransforms3d: function csstransforms3d() {
      return !!e("perspective");
    },
    csstransitions: function csstransitions() {
      return !!e("transition");
    },
    cssanimations: function cssanimations() {
      return !!e("animation");
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/***/ }),

/***/ "./assets/themes/startup/vendor/vide/jquery.vide.min.js":
/*!**************************************************************!*\
  !*** ./assets/themes/startup/vendor/vide/jquery.vide.min.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (g) {
  "use strict";

  var f = "vide",
      n = {
    volume: 1,
    playbackRate: 1,
    muted: !0,
    loop: !0,
    autoplay: !0,
    position: "50% 50%",
    posterType: "detect",
    resizing: !0,
    bgColor: "transparent",
    className: ""
  },
      h = "Not implemented";

  function s(e) {
    for (var t, o, i, n, s = {}, r = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), a = 0, p = r.length; a < p && -1 === (o = r[a]).search(/^(http|https|ftp):\/\//) && -1 !== o.search(":"); a++) {
      t = o.indexOf(":"), i = o.substring(0, t), "string" == typeof (n = "string" == typeof (n = (n = o.substring(t + 1)) || void 0) ? "true" === n || "false" !== n && n : n) && (n = isNaN(n) ? n : +n), s[i] = n;
    }

    return null == i && null == n ? e : s;
  }

  function i(e, t, o) {
    if (this.$element = g(e), "string" == typeof t && (t = s(t)), o ? "string" == typeof o && (o = s(o)) : o = {}, "string" == typeof t) t = t.replace(/\.\w*$/, "");else if ("object" == _typeof(t)) for (var i in t) {
      t.hasOwnProperty(i) && (t[i] = t[i].replace(/\.\w*$/, ""));
    }
    this.settings = g.extend({}, n, o), this.path = t;

    try {
      this.init();
    } catch (e) {
      if (e.message !== h) throw e;
    }
  }

  i.prototype.init = function () {
    var e,
        t,
        o,
        i,
        n = this,
        s = n.path,
        r = s,
        a = "",
        p = n.$element,
        c = n.settings,
        d = function (e) {
      for (var t, o = (e = "" + e).split(/\s+/), i = "50%", n = "50%", s = 0, r = o.length; s < r; s++) {
        "left" === (t = o[s]) ? i = "0%" : "right" === t ? i = "100%" : "top" === t ? n = "0%" : "bottom" === t ? n = "100%" : "center" === t ? 0 === s ? i = "50%" : n = "50%" : 0 === s ? i = t : n = t;
      }

      return {
        x: i,
        y: n
      };
    }(c.position),
        u = c.posterType;

    function l() {
      i(this.src);
    }

    t = n.$wrapper = g("<div>").addClass(c.className).css({
      position: "absolute",
      "z-index": -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "hidden",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": "cover",
      "background-color": c.bgColor,
      "background-repeat": "no-repeat",
      "background-position": d.x + " " + d.y
    }), "object" == _typeof(s) && (s.poster ? r = s.poster : s.mp4 ? r = s.mp4 : s.webm ? r = s.webm : s.ogv && (r = s.ogv)), "detect" === u ? (i = function i(e) {
      t.css("background-image", "url(" + e + ")");
    }, g('<img src="' + (o = r) + '.gif">').on("load", l), g('<img src="' + o + '.jpg">').on("load", l), g('<img src="' + o + '.jpeg">').on("load", l), g('<img src="' + o + '.png">').on("load", l)) : "none" !== u && t.css("background-image", "url(" + r + "." + u + ")"), "static" === p.css("position") && p.css("position", "relative"), p.prepend(t), e = "object" == _typeof(s) ? (s.mp4 && (a += '<source src="' + s.mp4 + '.mp4" type="video/mp4">'), s.webm && (a += '<source src="' + s.webm + '.webm" type="video/webm">'), s.ogv && (a += '<source src="' + s.ogv + '.ogv" type="video/ogg">'), n.$video = g("<video>" + a + "</video>")) : n.$video = g('<video><source src="' + s + '.mp4" type="video/mp4"><source src="' + s + '.webm" type="video/webm"><source src="' + s + '.ogv" type="video/ogg"></video>');

    try {
      e.prop({
        autoplay: c.autoplay,
        loop: c.loop,
        volume: c.volume,
        muted: c.muted,
        defaultMuted: c.muted,
        playbackRate: c.playbackRate,
        defaultPlaybackRate: c.playbackRate,
        playsInline: !0
      });
    } catch (e) {
      throw new Error(h);
    }

    e.css({
      margin: "auto",
      position: "absolute",
      "z-index": -1,
      top: d.y,
      left: d.x,
      "-webkit-transform": "translate(-" + d.x + ", -" + d.y + ")",
      "-ms-transform": "translate(-" + d.x + ", -" + d.y + ")",
      "-moz-transform": "translate(-" + d.x + ", -" + d.y + ")",
      transform: "translate(-" + d.x + ", -" + d.y + ")",
      visibility: "hidden",
      opacity: 0
    }).on("canplaythrough." + f, function () {
      n.resize();
    }).on("playing." + f, function () {
      e.css({
        visibility: "visible",
        opacity: 1
      }), t.css("background-image", "none");
    });
    d = window.navigator.userAgent;
    (d.match(/iPad/i) || d.match(/iPhone/i)) && c.autoplay && 1 == c.muted && (e.css({
      visibility: "visible",
      opacity: 1
    }), t.css("background-image", "none")), p.on("resize." + f, function () {
      c.resizing && n.resize();
    }), t.append(e);
  }, i.prototype.getVideoObject = function () {
    return this.$video[0];
  }, i.prototype.resize = function () {
    var e, t, o, i, n;
    this.$video && (n = this.$wrapper, t = (i = (e = this.$video)[0]).videoHeight, o = i.videoWidth, (i = n.height()) / t < (n = n.width()) / o ? e.css({
      width: n + 2,
      height: "auto"
    }) : e.css({
      width: "auto",
      height: i + 2
    }));
  }, i.prototype.destroy = function () {
    delete g[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove();
  }, g[f] = {
    lookup: []
  }, g.fn[f] = function (e, t) {
    var o;
    return this.each(function () {
      (o = g.data(this, f)) && o.destroy(), (o = new i(this, e, t)).index = g[f].lookup.push(o) - 1, g.data(this, f, o);
    }), this;
  }, g(document).ready(function () {
    var e = g(window);
    e.on("resize." + f, function () {
      for (var e, t = g[f].lookup.length, o = 0; o < t; o++) {
        (e = g[f].lookup[o]) && e.settings.resizing && e.resize();
      }
    }), e.on("unload." + f, function () {
      return !1;
    }), g(document).find("[data-vide-bg]").each(function (e, t) {
      var o = g(t),
          i = o.data(f + "-options"),
          t = o.data(f + "-bg");
      o[f](t, i);
    });
  });
});

/***/ }),

/***/ "./assets/themes/startup/vendor/vivus/vivus.min.js":
/*!*********************************************************!*\
  !*** ./assets/themes/startup/vendor/vivus/vivus.min.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

!function () {
  "use strict";

  function n(t) {
    if (void 0 === t) throw new Error('Pathformer [constructor]: "element" parameter is required');
    if (t.constructor === String && !(t = document.getElementById(t))) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
    if (!(t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
    this.el = t, this.scan(t);
  }

  var r, e, t, p;

  function i(t, e, n) {
    r(), this.isReady = !1, this.setElement(t, e), this.setOptions(e), this.setCallback(n), this.isReady && this.init();
  }

  n.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"], n.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], n.prototype.scan = function (t) {
    for (var e, n, r, i = t.querySelectorAll(this.TYPES.join(",")), a = 0; a < i.length; a++) {
      n = (0, this[(e = i[a]).tagName.toLowerCase() + "ToPath"])(this.parseAttr(e.attributes)), r = this.pathMaker(e, n), e.parentNode.replaceChild(r, e);
    }
  }, n.prototype.lineToPath = function (t) {
    var e = {},
        n = t.x1 || 0,
        r = t.y1 || 0,
        i = t.x2 || 0,
        a = t.y2 || 0;
    return e.d = "M" + n + "," + r + "L" + i + "," + a, e;
  }, n.prototype.rectToPath = function (t) {
    var e = {},
        n = parseFloat(t.x) || 0,
        r = parseFloat(t.y) || 0,
        i = parseFloat(t.width) || 0,
        a = parseFloat(t.height) || 0;

    if (t.rx || t.ry) {
      var o = parseInt(t.rx, 10) || -1,
          s = parseInt(t.ry, 10) || -1;
      o = Math.min(Math.max(o < 0 ? s : o, 0), i / 2), s = Math.min(Math.max(s < 0 ? o : s, 0), a / 2), e.d = "M " + (n + o) + "," + r + " L " + (n + i - o) + "," + r + " A " + o + "," + s + ",0,0,1," + (n + i) + "," + (r + s) + " L " + (n + i) + "," + (r + a - s) + " A " + o + "," + s + ",0,0,1," + (n + i - o) + "," + (r + a) + " L " + (n + o) + "," + (r + a) + " A " + o + "," + s + ",0,0,1," + n + "," + (r + a - s) + " L " + n + "," + (r + s) + " A " + o + "," + s + ",0,0,1," + (n + o) + "," + r;
    } else e.d = "M" + n + " " + r + " L" + (n + i) + " " + r + " L" + (n + i) + " " + (r + a) + " L" + n + " " + (r + a) + " Z";

    return e;
  }, n.prototype.polylineToPath = function (t) {
    var e,
        n,
        r = {},
        i = t.points.trim().split(" ");

    if (-1 === t.points.indexOf(",")) {
      var a = [];

      for (e = 0; e < i.length; e += 2) {
        a.push(i[e] + "," + i[e + 1]);
      }

      i = a;
    }

    for (n = "M" + i[0], e = 1; e < i.length; e++) {
      -1 !== i[e].indexOf(",") && (n += "L" + i[e]);
    }

    return r.d = n, r;
  }, n.prototype.polygonToPath = function (t) {
    var e = n.prototype.polylineToPath(t);
    return e.d += "Z", e;
  }, n.prototype.ellipseToPath = function (t) {
    var e = {},
        n = parseFloat(t.rx) || 0,
        r = parseFloat(t.ry) || 0,
        i = parseFloat(t.cx) || 0,
        a = parseFloat(t.cy) || 0,
        o = i - n,
        s = a,
        h = parseFloat(i) + parseFloat(n),
        l = a;
    return e.d = "M" + o + "," + s + "A" + n + "," + r + " 0,1,1 " + h + "," + l + "A" + n + "," + r + " 0,1,1 " + o + "," + l, e;
  }, n.prototype.circleToPath = function (t) {
    var e = {},
        n = parseFloat(t.r) || 0,
        r = parseFloat(t.cx) || 0,
        i = parseFloat(t.cy) || 0,
        a = r - n,
        o = i,
        s = parseFloat(r) + parseFloat(n),
        h = i;
    return e.d = "M" + a + "," + o + "A" + n + "," + n + " 0,1,1 " + s + "," + h + "A" + n + "," + n + " 0,1,1 " + a + "," + h, e;
  }, n.prototype.pathMaker = function (t, e) {
    var n,
        r,
        i = document.createElementNS("http://www.w3.org/2000/svg", "path");

    for (n = 0; n < t.attributes.length; n++) {
      r = t.attributes[n], -1 === this.ATTR_WATCH.indexOf(r.name) && i.setAttribute(r.name, r.value);
    }

    for (n in e) {
      i.setAttribute(n, e[n]);
    }

    return i;
  }, n.prototype.parseAttr = function (t) {
    for (var e, n = {}, r = 0; r < t.length; r++) {
      if (e = t[r], -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
      n[e.name] = e.value;
    }

    return n;
  }, i.LINEAR = function (t) {
    return t;
  }, i.EASE = function (t) {
    return -Math.cos(t * Math.PI) / 2 + .5;
  }, i.EASE_OUT = function (t) {
    return 1 - Math.pow(1 - t, 3);
  }, i.EASE_IN = function (t) {
    return Math.pow(t, 3);
  }, i.EASE_OUT_BOUNCE = function (t) {
    var e = 1 - Math.cos(t * (.5 * Math.PI)),
        n = Math.pow(e, 1.5),
        r = Math.pow(1 - t, 2);
    return 1 - r + (1 - Math.abs(Math.cos(n * (2.5 * Math.PI)))) * r;
  }, i.prototype.setElement = function (e, n) {
    var t, r;
    if (void 0 === e) throw new Error('Vivus [constructor]: "element" parameter is required');
    if (e.constructor === String && !(e = document.getElementById(e))) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');

    if (this.parentEl = e, n && n.file) {
      r = this, t = function t() {
        var t = document.createElement("div");
        t.innerHTML = this.responseText;
        var e = t.querySelector("svg");
        if (!e) throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : " + n.file);
        r.el = e, r.el.setAttribute("width", "100%"), r.el.setAttribute("height", "100%"), r.parentEl.appendChild(r.el), r.isReady = !0, r.init(), r = null;
      };
      var i = new window.XMLHttpRequest();
      return i.addEventListener("load", t), i.open("GET", n.file), void i.send();
    }

    switch (e.constructor) {
      case window.SVGSVGElement:
      case window.SVGElement:
      case window.SVGGElement:
        this.el = e, this.isReady = !0;
        break;

      case window.HTMLObjectElement:
        r = this, (t = function t(_t) {
          if (!r.isReady) {
            if (r.el = e.contentDocument && e.contentDocument.querySelector("svg"), !r.el && _t) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
            r.el && (e.getAttribute("built-by-vivus") && (r.parentEl.insertBefore(r.el, e), r.parentEl.removeChild(e), r.el.setAttribute("width", "100%"), r.el.setAttribute("height", "100%")), r.isReady = !0, r.init(), r = null);
          }
        })() || e.addEventListener("load", t);
        break;

      default:
        throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
    }
  }, i.prototype.setOptions = function (t) {
    var e = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
        n = ["inViewport", "manual", "autostart"];
    if (void 0 !== t && t.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
    if ((t = t || {}).type && -1 === e.indexOf(t.type)) throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");
    if (this.type = t.type || e[0], t.start && -1 === n.indexOf(t.start)) throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");
    if (this.start = t.start || n[0], this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/"), this.duration = p(t.duration, 120), this.delay = p(t.delay, null), this.dashGap = p(t.dashGap, 1), this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE, this.reverseStack = !!t.reverseStack, this.selfDestroy = !!t.selfDestroy, this.onReady = t.onReady, this.map = [], this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null, this.ignoreInvisible = !!t.hasOwnProperty("ignoreInvisible") && !!t.ignoreInvisible, this.animTimingFunction = t.animTimingFunction || i.LINEAR, this.pathTimingFunction = t.pathTimingFunction || i.LINEAR, this.delay >= this.duration) throw new Error("Vivus [constructor]: delay must be shorter than duration");
  }, i.prototype.setCallback = function (t) {
    if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');

    this.callback = t || function () {};
  }, i.prototype.mapping = function () {
    var t, e, n, r, i, a, o, s, h, l;

    for (s = a = o = 0, e = this.el.querySelectorAll("path"), l = !1, t = 0; t < e.length; t++) {
      if (n = e[t], !this.isInvisible(n)) {
        if (i = {
          el: n,
          length: 0,
          startAt: 0,
          duration: 0,
          isResizeSensitive: !1
        }, "non-scaling-stroke" === n.getAttribute("vector-effect")) {
          var c = n.getBoundingClientRect(),
              u = n.getBBox();
          h = Math.max(c.width / u.width, c.height / u.height), l = i.isResizeSensitive = !0;
        } else h = 1;

        i.length = Math.ceil(n.getTotalLength() * h), isNaN(i.length) ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", n) : (this.map.push(i), n.style.strokeDasharray = i.length + " " + (i.length + 2 * this.dashGap), n.style.strokeDashoffset = i.length + this.dashGap, i.length += this.dashGap, a += i.length, this.renderPath(t));
      }
    }

    for (l && console.warn("Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info."), a = 0 === a ? 1 : a, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (1 < e.length ? e.length - 1 : 1), this.reverseStack && this.map.reverse(), t = 0; t < this.map.length; t++) {
      switch (i = this.map[t], this.type) {
        case "delayed":
          i.startAt = this.delayUnit * t, i.duration = this.duration - this.delay;
          break;

        case "oneByOne":
          i.startAt = o / a * this.duration, i.duration = i.length / a * this.duration;
          break;

        case "sync":
        case "async":
        case "nsync":
          i.startAt = 0, i.duration = this.duration;
          break;

        case "scenario-sync":
          n = i.el, r = this.parseAttr(n), i.startAt = s + (p(r["data-delay"], this.delayUnit) || 0), i.duration = p(r["data-duration"], this.duration), s = void 0 !== r["data-async"] ? i.startAt : i.startAt + i.duration, this.frameLength = Math.max(this.frameLength, i.startAt + i.duration);
          break;

        case "scenario":
          n = i.el, r = this.parseAttr(n), i.startAt = p(r["data-start"], this.delayUnit) || 0, i.duration = p(r["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, i.startAt + i.duration);
      }

      o += i.length, this.frameLength = this.frameLength || this.duration;
    }
  }, i.prototype.recalc = function () {
    this.mustRecalcScale || (this.mustRecalcScale = e(function () {
      this.performLineRecalc();
    }.bind(this)));
  }, i.prototype.performLineRecalc = function () {
    for (var t, e, n, r, i, a = 0; a < this.map.length; a++) {
      (t = this.map[a]).isResizeSensitive && (n = (e = t.el).getBoundingClientRect(), r = e.getBBox(), i = Math.max(n.width / r.width, n.height / r.height), t.length = Math.ceil(e.getTotalLength() * i), e.style.strokeDasharray = t.length + " " + (t.length + 2 * this.dashGap));
    }

    this.trace(), this.mustRecalcScale = null;
  }, i.prototype.draw = function () {
    var t = this;
    if (this.currentFrame += this.speed, this.currentFrame <= 0) this.stop(), this.reset();else {
      if (!(this.currentFrame >= this.frameLength)) return this.trace(), void (this.handle = e(function () {
        t.draw();
      }));
      this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy();
    }
    this.callback(this), this.instanceCallback && (this.instanceCallback(this), this.instanceCallback = null);
  }, i.prototype.trace = function () {
    var t, e, n, r;

    for (r = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, t = 0; t < this.map.length; t++) {
      e = (r - (n = this.map[t]).startAt) / n.duration, e = this.pathTimingFunction(Math.max(0, Math.min(1, e))), n.progress !== e && (n.progress = e, n.el.style.strokeDashoffset = Math.floor(n.length * (1 - e)), this.renderPath(t));
    }
  }, i.prototype.renderPath = function (t) {
    if (this.forceRender && this.map && this.map[t]) {
      var e = this.map[t],
          n = e.el.cloneNode(!0);
      e.el.parentNode.replaceChild(n, e.el), e.el = n;
    }
  }, i.prototype.init = function () {
    this.frameLength = 0, this.currentFrame = 0, this.map = [], new n(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this);
  }, i.prototype.starter = function () {
    switch (this.start) {
      case "manual":
        return;

      case "autostart":
        this.play();
        break;

      case "inViewport":
        var t = this,
            e = function e() {
          t.isInViewport(t.parentEl, 1) && (t.play(), window.removeEventListener("scroll", e));
        };

        window.addEventListener("scroll", e), e();
    }
  }, i.prototype.getStatus = function () {
    return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress";
  }, i.prototype.reset = function () {
    return this.setFrameProgress(0);
  }, i.prototype.finish = function () {
    return this.setFrameProgress(1);
  }, i.prototype.setFrameProgress = function (t) {
    return t = Math.min(1, Math.max(0, t)), this.currentFrame = Math.round(this.frameLength * t), this.trace(), this;
  }, i.prototype.play = function (t, e) {
    if (this.instanceCallback = null, t && "function" == typeof t) this.instanceCallback = t, t = null;else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");
    return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), this.speed = t || 1, this.handle || this.draw(), this;
  }, i.prototype.stop = function () {
    return this.handle && (t(this.handle), this.handle = null), this;
  }, i.prototype.destroy = function () {
    var t, e;

    for (this.stop(), t = 0; t < this.map.length; t++) {
      (e = this.map[t]).el.style.strokeDashoffset = null, e.el.style.strokeDasharray = null, this.renderPath(t);
    }
  }, i.prototype.isInvisible = function (t) {
    var e,
        n = t.getAttribute("data-ignore");
    return null !== n ? "false" !== n : !!this.ignoreInvisible && !(e = t.getBoundingClientRect()).width && !e.height;
  }, i.prototype.parseAttr = function (t) {
    var e,
        n = {};
    if (t && t.attributes) for (var r = 0; r < t.attributes.length; r++) {
      n[(e = t.attributes[r]).name] = e.value;
    }
    return n;
  }, i.prototype.isInViewport = function (t, e) {
    var n = this.scrollY(),
        r = n + this.getViewportH(),
        i = t.getBoundingClientRect(),
        a = i.height,
        o = n + i.top;
    return o + a * (e = e || 0) <= r && n <= o + a;
  }, i.prototype.getViewportH = function () {
    var t = this.docElem.clientHeight,
        e = window.innerHeight;
    return t < e ? e : t;
  }, i.prototype.scrollY = function () {
    return window.pageYOffset || this.docElem.scrollTop;
  }, r = function r() {
    i.prototype.docElem || (i.prototype.docElem = window.document.documentElement, e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return window.setTimeout(t, 1e3 / 60);
    }, t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
      return window.clearTimeout(t);
    });
  }, p = function p(t, e) {
    var n = parseInt(t, 10);
    return 0 <= n ? n : e;
  },  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return i;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}();

/***/ }),

/***/ "./assets/themes/startup/css/custom.css":
/*!**********************************************!*\
  !*** ./assets/themes/startup/css/custom.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/css/demos/demo-startup-agency.css":
/*!*****************************************************************!*\
  !*** ./assets/themes/startup/css/demos/demo-startup-agency.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/css/skins/skin-startup-agency.css":
/*!*****************************************************************!*\
  !*** ./assets/themes/startup/css/skins/skin-startup-agency.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/css/theme-blog.css":
/*!**************************************************!*\
  !*** ./assets/themes/startup/css/theme-blog.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/css/theme-elements.css":
/*!******************************************************!*\
  !*** ./assets/themes/startup/css/theme-elements.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/css/theme-shop.css":
/*!**************************************************!*\
  !*** ./assets/themes/startup/css/theme-shop.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/css/theme.css":
/*!*********************************************!*\
  !*** ./assets/themes/startup/css/theme.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/master/style-switcher/bootstrap-colorpicker/css/bootstrap-colorpicker.css":
/*!*********************************************************************************************************!*\
  !*** ./assets/themes/startup/master/style-switcher/bootstrap-colorpicker/css/bootstrap-colorpicker.css ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/master/style-switcher/style-switcher.css":
/*!************************************************************************!*\
  !*** ./assets/themes/startup/master/style-switcher/style-switcher.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/vendor/animate/animate.compat.css":
/*!*****************************************************************!*\
  !*** ./assets/themes/startup/vendor/animate/animate.compat.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/vendor/bootstrap/css/bootstrap.min.css":
/*!**********************************************************************!*\
  !*** ./assets/themes/startup/vendor/bootstrap/css/bootstrap.min.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/vendor/fontawesome-free/css/all.min.css":
/*!***********************************************************************!*\
  !*** ./assets/themes/startup/vendor/fontawesome-free/css/all.min.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/vendor/magnific-popup/magnific-popup.min.css":
/*!****************************************************************************!*\
  !*** ./assets/themes/startup/vendor/magnific-popup/magnific-popup.min.css ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/vendor/owl.carousel/assets/owl.carousel.min.css":
/*!*******************************************************************************!*\
  !*** ./assets/themes/startup/vendor/owl.carousel/assets/owl.carousel.min.css ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/vendor/owl.carousel/assets/owl.theme.default.min.css":
/*!************************************************************************************!*\
  !*** ./assets/themes/startup/vendor/owl.carousel/assets/owl.theme.default.min.css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/vendor/simple-line-icons/css/simple-line-icons.min.css":
/*!**************************************************************************************!*\
  !*** ./assets/themes/startup/vendor/simple-line-icons/css/simple-line-icons.min.css ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/themes/startup/master/less/skin-startup-agency.less":
/*!********************************************************************!*\
  !*** ./assets/themes/startup/master/less/skin-startup-agency.less ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ecd287","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-eb72a1"], () => (__webpack_exec__("./assets/cms.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);