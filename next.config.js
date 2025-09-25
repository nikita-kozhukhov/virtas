const path = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
