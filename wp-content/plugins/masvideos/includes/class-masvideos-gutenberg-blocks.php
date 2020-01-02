<?php
/**
 * Gutenberg Blocks
 *
 * @package MasVideos/Classes
 * @version 1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * MasVideos Gutenberg Blocks class.
 */
class MasVideos_Gutenberg_Blocks {

    /**
     * Init blocks.
     */
    public static function init() {
        if( function_exists( 'register_block_type' ) ) {
            $blocks = array(
                'videos'    => array(
                    'attributes'        => array(
                        'limit'         => array(
                            'type'      => 'number',
                            'default'   => 10
                        ),
                        'columns'       => array(
                            'type'      => 'number',
                            'default'   => 4
                        ),
                        'orderby'       => array(
                            'type'      => 'string',
                            'default'   => 'date'
                        ),
                        'order'         => array(
                            'type'      => 'string',
                            'default'   => 'DESC'
                        ),
                        'ids'           => array(
                            'type'      => 'string',
                        ),
                        'category'      => array(
                            'type'      => 'string',
                        ),
                        'featured'      => array(
                            'type'      => 'boolean',
                            'default'   => false
                        ),
                        'top_rated'     => array(
                            'type'      => 'boolean',
                            'default'   => false
                        ),
                        'className'     => array(
                            'type'      => 'string',
                        ),
                    ),
                    'editor_script'     => 'masvideos-videos', 
                    'render_callback'   => array( 'MasVideos_Shortcodes', 'videos' ),
                ),
                'movies'    => array(
                    'attributes'        => array(
                        'limit'         => array(
                            'type'      => 'number',
                            'default'   => 10
                        ),
                        'columns'       => array(
                            'type'      => 'number',
                            'default'   => 4
                        ),
                        'orderby'       => array(
                            'type'      => 'string',
                            'default'   => 'date'
                        ),
                        'order'         => array(
                            'type'      => 'string',
                            'default'   => 'DESC'
                        ),
                        'ids'           => array(
                            'type'      => 'string',
                        ),
                        'genre'         => array(
                            'type'      => 'string',
                        ),
                        'featured'      => array(
                            'type'      => 'boolean',
                            'default'   => false
                        ),
                        'top_rated'     => array(
                            'type'      => 'boolean',
                            'default'   => false
                        ),
                        'className'     => array(
                            'type'      => 'string',
                        ),
                    ),
                    'editor_script'   => 'masvideos-movies', 
                    'render_callback' => array( 'MasVideos_Shortcodes', 'movies' ),
                ),
                'tv-shows'    => array(
                    'attributes'        => array(
                        'limit'         => array(
                            'type'      => 'number',
                            'default'   => 10
                        ),
                        'columns'       => array(
                            'type'      => 'number',
                            'default'   => 4
                        ),
                        'orderby'       => array(
                            'type'      => 'string',
                            'default'   => 'date'
                        ),
                        'order'         => array(
                            'type'      => 'string',
                            'default'   => 'DESC'
                        ),
                        'ids'           => array(
                            'type'      => 'string',
                        ),
                        'genre'         => array(
                            'type'      => 'string',
                        ),
                        'featured'      => array(
                            'type'      => 'boolean',
                            'default'   => false
                        ),
                        'top_rated'     => array(
                            'type'      => 'boolean',
                            'default'   => false
                        ),
                        'className'     => array(
                            'type'      => 'string',
                        ),
                    ),
                    'editor_script'   => 'masvideos-tv-shows', 
                    'render_callback' => array( 'MasVideos_Shortcodes', 'tv_shows' ),
                ),
            );

            $suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
            foreach ( $blocks as $block => $args ) {
                wp_register_script( $args['editor_script'], MasVideos()->plugin_url() . '/assets/js/blocks/' . $block . $suffix . '.js', array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor' ) );
                register_block_type( 'masvideos/' . $block, $args );
            }

            add_filter( 'block_categories', array( __CLASS__, 'block_categories' ), 10, 2 );
        }
    }

    public static function block_categories( $categories, $post ) {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'masvideos-blocks',
                    'title' => esc_html__( 'MAS Videos Blocks', 'masvideos' ),
                ),
            )
        );
    }
}
