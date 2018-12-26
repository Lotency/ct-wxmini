// pages/cell/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		list_sex: [
			{id: 0, value: '女'},
			{id: 1, value: '男'}
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	/*
	* 事件处理
	* */
	handleClick: function () {
		console.log('点击了没有URL的菜单');
	},
	handleImage: function () {
		wx.chooseImage({
			success: res => {
				console.log(res)
			}
		});
	},
	handleInput: function (e) {
		let data = {};
		data[e.target.id] = e.detail.value;
		this.setData(data);
	},
	handlePicker: function ({ detail }) {
		let o = {};
		switch (detail.type) {
			case 'select':
				o[detail.name] = this.data[`list_${detail.name}`][parseInt(detail.value)];
				break;
			case 'select-time':
			case 'select-date':
				o[detail.name] = detail.value;
				break;
		}
		this.setData(o);
	}
})