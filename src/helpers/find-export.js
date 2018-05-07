export default function getExport(mod) {
    return mod && typeof mod === 'object' && mod.__esModule ? mod["default"] : mod;
};
