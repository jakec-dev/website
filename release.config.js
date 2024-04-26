// @ts-check

/**
 * @type {import('semantic-release').GlobalConfig}
 */
const releaseConfig = {
  branches: [{ name: 'master' }, '+([0-9])?(.{+([0-9]),x}).x', { name: 'beta', prerelease: true }],
  repositoryUrl: 'github:jakec-dev/website',
  plugins: [
    /**
     * Required to analyse the commits.
     *
     * @see https://github.com/semantic-release/commit-analyzer
     */
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          {
            type: 'feature',
            release: 'minor',
          },
          {
            type: 'fix',
            release: 'patch',
          },
          {
            type: 'style',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'build',
            release: 'patch',
          },
          {
            type: 'ci',
            release: 'patch',
          },
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'test',
            release: 'patch',
          },
          {
            type: 'dev',
            release: false,
          },
          {
            type: 'skip',
            release: false,
          },
        ],
      },
    ],

    /**
     * Creates or updates the CHANGELOG.md file.
     *
     * @see https://github.com/semantic-release/changelog
     */
    '@semantic-release/changelog',

    /**
     * Publishes a GitHub release.
     *
     * @see https://github.com/semantic-release/github
     */
    '@semantic-release/github',

    /**
     *
     * Only used to update package.json version. We disable the actual publish to npm step.
     *
     * @see https://github.com/semantic-release/npm
     */
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],

    /**
     * Commits assets created or updated during the release process to the project's git repository.
     *
     * @see https://github.com/semantic-release/git
     */
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  tagFormat: 'v${version}',
  // Dev options
  dryRun: false,
  ci: true,
  debug: false,
};

export default releaseConfig;
