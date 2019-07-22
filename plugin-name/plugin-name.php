<?php

namespace PluginName;

use PluginName\Lib\PluginName;
use PluginName\Lib\Activator;
use PluginName\Lib\Deactivator;

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://example.com
 * @since             1.0.0
 * @package           PluginName
 *
 * @wordpress-plugin
 * Plugin Name:       WordPress Plugin Boilerplate
 * Plugin URI:        http://example.com/plugin-name-uri/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Your Name or Your Company
 * Author URI:        http://example.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       plugin-name
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( !defined( 'WPINC' ) ) {
    die;
}

define( 'PluginName_VERSION', '1.0.0' );

define( 'PluginName_DIR', str_replace( '\\', '/', __DIR__ ) );
define( 'PluginName_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );

/**
 * The class responsible for auto loading classes.
 */
require_once PluginName_DIR . '/vendor/autoload.php';

/**
 * The code that runs during plugin activation.
 * This action is documented in Lib/Activator.php
 */
register_activation_hook( __FILE__, [ Activator::class, 'activate' ] );

/**
 * The code that runs during plugin deactivation.
 * This action is documented in Lib/Deactivator.php
 */
register_deactivation_hook( __FILE__, [ Deactivator::class, 'deactivate' ] );

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
PluginName::run();
