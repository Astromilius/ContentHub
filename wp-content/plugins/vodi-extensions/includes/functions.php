<?php

function vodi_add_metaboxes( $post_type, $post ) {
    do_action( 'vodi_add_metaboxes', $post_type, $post );
}

add_action( 'add_meta_boxes', 'vodi_add_metaboxes', 10, 2 );

function vodi_add_metabox( $id, $title, $callback, $screen = null, $context = 'advanced', $priority = 'default', $callback_args = null ) {
    add_meta_box( $id, $title, $callback, $screen, $context, $priority, $callback_args );
}

// Redux Framework
function vodi_ext_remove_demo_mode_link() {
    if ( class_exists('ReduxFrameworkPlugin') ) {
        remove_filter( 'plugin_row_meta', array( ReduxFrameworkPlugin::get_instance(), 'plugin_metalinks'), null, 2 );
    }
}

add_action( 'init', 'vodi_ext_remove_demo_mode_link' );

// Register widgets.
function vodi_widgets_register() {
    if ( class_exists( 'Vodi' ) ) {
        include_once get_template_directory() . '/inc/widgets/class-vodi-posts-widget.php';
        register_widget( 'Vodi_Posts_widget' );

        include_once get_template_directory() . '/inc/widgets/class-vodi-tab-widget.php';
        register_widget( 'Vodi_Tabbed_Widget' );

        if ( class_exists('MasVideos_Widget') ) {
            include_once get_template_directory() . '/inc/widgets/class-vodi-tv-shows-letter-filter-widget.php';
            register_widget( 'Vodi_Tv_Shows_Letter_Filter_Widget' );
        }
    }
}

add_action( 'widgets_init', 'vodi_widgets_register' );

// Jetpack
function vodi_jetpack_remove_share() {

    remove_filter( 'the_content', 'sharing_display', 19 );
    remove_filter( 'the_excerpt', 'sharing_display', 19 );
    
    if ( class_exists( 'Jetpack_Likes' ) ) {
        remove_filter( 'the_content', array( Jetpack_Likes::init(), 'post_likes' ), 30, 1 );
    }
}
 
add_action( 'loop_start', 'vodi_jetpack_remove_share' );

// Remove U-Likes in Post
remove_filter( 'the_content', 'wp_ulike_put_posts' );

// Remove wpautop on Vodi Gutenberg Blocks
if ( ! function_exists( 'vodi_gutenberg_blocks_remove_wpautop' ) ) {
    function vodi_gutenberg_blocks_remove_wpautop( $block_content, $block ) {
        if ( substr( $block['blockName'], 0, 5 ) === 'vodi/' ) {
            remove_filter( 'the_content', 'wpautop' );
        }

        return $block_content;
    }
}

add_filter( 'render_block', 'vodi_gutenberg_blocks_remove_wpautop', 10, 2 );

// Recommended Movie Thumbnail Size Change
if ( ! function_exists( 'vodi_recommended_movies_thumbnail_size_change' ) ) {
    function vodi_recommended_movies_thumbnail_size_change() {
        add_filter( 'masvideos_movie_archive_thumbnail_size', 'vodi_recommended_movie_thumbnail_size' );
    }
}

add_action( 'vodi_recommended_movies_before', 'vodi_recommended_movies_thumbnail_size_change' );

// Recommended Movie Thumbnail Size Revert Change
if ( ! function_exists( 'vodi_recommended_movies_thumbnail_size_revert_change' ) ) {
    function vodi_recommended_movies_thumbnail_size_revert_change() {
        remove_filter( 'masvideos_movie_archive_thumbnail_size', 'vodi_recommended_movie_thumbnail_size' );
    }
}

add_action( 'vodi_recommended_movies_after', 'vodi_recommended_movies_thumbnail_size_revert_change' );