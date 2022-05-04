module.exports = {
  branches: [
    "main",
    { name: 'rc', prerelease: true }
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer", {
        "preset": "angular",
        "releaseRules": [
          { "type": "refactor", "release": "patch" }
        ]
      }
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: [
          "package.json",
          "CHANGELOG.md"
        ]
      }
    ],
    "@semantic-release/github"
  ]
};
