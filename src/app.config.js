export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/index/pay'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '返回',
    navigationBarTextStyle: 'black'
  },
  subPackages: [
    {
      "root": "pages/orders/",
      "pages": [
        "index"
      ]
    },
    {
      "root": "pages/mymanagement/",
      "pages": [
        "index",
        "edit"
      ]
    },
    {
      "root": "pages/cart/",
      "pages": [
        "cart"
      ]
    },
  ]
})
