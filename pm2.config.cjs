module.exports = {
    apps: [
        {
            name: "seoremix",
            port: "3000",
            exec_mode: "cluster",
            instances: "max",
            script: "npm",
            args: "start"
        },
    ],
};