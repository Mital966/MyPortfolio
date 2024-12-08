
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MyPortfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MyPortfolio"
  },
  {
    "renderMode": 2,
    "route": "/MyPortfolio/home"
  }
],
  assets: {
    'index.csr.html': {size: 2143, hash: '41082b9b35de0ce85e1d8847b9c440ba71fee4a9d47a40c7e83332c6dc8eae4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1175, hash: 'e285f3a27504b876f2fa21edb3088294abd13c27b0a5d9612915fbe55d3f2665', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25356, hash: 'fffc722cc79d97edc99cb9652787ccf2e66f9717f4e21635a38153907edf0a0c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 25356, hash: 'fffc722cc79d97edc99cb9652787ccf2e66f9717f4e21635a38153907edf0a0c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-JPG6MB72.css': {size: 154341, hash: 'hiiTLzejyfE', text: () => import('./assets-chunks/styles-JPG6MB72_css.mjs').then(m => m.default)}
  },
};
