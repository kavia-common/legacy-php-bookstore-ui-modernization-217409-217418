/**
 * Disable any service worker injection via Workbox in CRA build.
 * This prevents the "__WB_MANIFEST" error when no SW is used.
 */
module.exports = function override(config) {
  // Remove Workbox plugins if present
  if (config.plugins) {
    config.plugins = config.plugins.filter(
      (p) => !p || (p.constructor && p.constructor.name !== 'InjectManifest')
    );
  }
  return config;
};
