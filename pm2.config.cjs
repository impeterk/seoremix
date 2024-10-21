module.exports = {
    apps: [
        {
            name: "seoremix",
            port: "3000",
            exec_mode: "cluster",
            instances: "max",
            script: "./build/server/index.js",
            env: {
                NODE_ENV: "production",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};