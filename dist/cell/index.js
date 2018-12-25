Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		cellType: {
			type: String,
			value: 'cell'
			/*
			* cell、select
			* */
		},
		url: {
			type: String,
			value: ''
		},
		leftIcon: {
			type: String,
			value: ''
		},
		rightIcon: {
			type: String,
			value: ''
		},
		title: {
			type: String,
			value: ''
		},
		isLink: {
			type: Boolean,
			value: false
		},
		range: {
			type: Array,
			value: []
		},
		rangeKey: {
			type: String,
			value: ''
		},
		inputName: {
			type: String,
			value: ''
		}
	},

	/*
	* 父组件
	* */
	relations: {
		"../cell-group/index": {
			type: "parent"
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		isLastCell: false
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		_setLastChild: function (value) {
			this.setData({
				isLastChild: value
			})
		},
		handleClick: function () {
			const _this = this;
			if (_this.data.cellType === 'cell') {
				if (_this.data.url) {
					wx.navigateTo({
						url: _this.data.url
					});
				}
				else {
					_this.triggerEvent('click');
				}
			}
		},
		handlePicker: function ({ detail }) {
			this.triggerEvent('change', {
				value: detail.value,
				name: this.data.inputName
			});
		}
	}
})
