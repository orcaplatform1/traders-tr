module.exports = {
  apps: [
    {
      name: "traders-site",
      cwd: ".",
      script: "npm",
      args: "start -- -p 3002",
      namespace: "default",
      env: { NODE_ENV: "production" },
    },
  ],
};
