module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },

  //用于手机查看信息
  // devServer: {
  //   host: '192.168.1.109',
  //   port: 8080,
      
  //   }
}
