module.exports = {
    apps: [
        {
            name: "inventory_test",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3333", //running on port 3000
            watch: false,
        },
    ],

