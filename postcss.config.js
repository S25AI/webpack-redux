'use strict';

module.exports = {
  plugins: [
    require('autoprefixer')("last 10 versions"),
    require('doiuse')({
      browsers: [
        'ie >= 10',
        'last 2 versions',
        '> 5%'
      ],
      ignore: ['rem']
    }),
    require('precss')
  ]
};