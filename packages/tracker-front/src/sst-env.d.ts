/// <reference path="..\..\..\.sst\types\index.ts" />
interface ImportMetaEnv {
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}