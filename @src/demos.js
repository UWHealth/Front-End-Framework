import base from './index.html';
import manifest from './manifest.webmanifest';
import browserConfig from './browserconfig.xml';

export default function(data) {
    data.head = data.head || {};
    data.head.meta = data.head.meta || {};
    data.head.meta.manifest = manifest;
    data.head.links = data.head.links || {};
    data.head.links['msapplication-config'] = browserConfig;
    return base.render(data);
};
