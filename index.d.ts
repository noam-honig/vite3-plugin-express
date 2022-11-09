export declare function express(path: string): {
    name: string;
    configureServer: (server: any) => Promise<void>;
};
