<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'contenthub_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}xz97`25Z8wy1FpSf0bY4pcM$PO&jLAnIPrX/$2+]FO*%=JSA#FR]ikUk/yh-k)-' );
define( 'SECURE_AUTH_KEY',  'ED>E)m*z{9r1yUTG=gR7{U_$9mIcDmodf)px_Mgc}mJ:rw634joj)Wp$e/jbhh7T' );
define( 'LOGGED_IN_KEY',    'b]F>tEz{+Er^[UGRM.fVjt5/D=+&][2v=AzQ <9VI8evH3Rrr`H^=&1V&b)P2j@;' );
define( 'NONCE_KEY',        'hII*^9|9x{HH?=ezapBuo}a+M6%_jGH._V`~}GtR&g@iiMo|rfr&BYvlhb(-BF|{' );
define( 'AUTH_SALT',        'rXjTQOd~FC{hr}p=q(7X[MgXa< oEU5t(}&9%1z(VKAMnmRq_uB96>cbJV0D)+xO' );
define( 'SECURE_AUTH_SALT', '-D3mQtN=|CTJBmy~8=Q{hu8p(q%<ZB9&>@p8&}]1aD.yXqxvfHVCVw ]%-UWrlKA' );
define( 'LOGGED_IN_SALT',   'J.,I`|+X4eInG>t!}`*23nyVVPD&LjP%$B}}]wmD)2u?JaT&&}rUJJHqK$0ca,CP' );
define( 'NONCE_SALT',       '^WX9&^f@dE]IREZT/|O|9pX-KSH>m>PS`Fo&/A%CB_+c%eGGxEd$dMbymM|VKw$a' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
