// dist/tabs/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		current: {
			type: String,
			value: ''
		},
		tabList: {
			type: Array,
			value: []
		},
		tabKey: {
			type: String,
			value: ''
		}
	},

	externalClasses: ['l-class'],

	/**
	 * 组件的初始数据
	 */
	data: {
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		handleChange: function ({ target }) {
			this.triggerEvent('change', target.dataset);
		}
	}
})
