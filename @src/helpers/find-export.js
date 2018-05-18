export default function findExport(mod) {
    return mod && typeof mod === 'object' && mod.__esModule ? mod["default"] : mod;
};
