export default defineAppConfig({
  pages: [
    'pages/mymanagement/index',
    "pages/mymanagement/edit",
    'pages/index/index',
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
    // {
    //   "root": "pages/mymanagement/",
    //   "pages": [
    //     "index",
    //
    //   ]
    // },
    {
      "root": "pages/cart/",
      "pages": [
        "cart"
      ]
    },
    {
      "root": "pages/pay/",
      "pages": [
        "pay"
      ]
    },
    {
      "root": "pages/detailsView/",
      "pages": [
        "detailsView"
      ]
    },
  ]
})
