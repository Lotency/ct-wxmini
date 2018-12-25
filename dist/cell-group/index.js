Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		title: {
			type: String,
			value: ''
		}
	},

	/*
	* 子组件
	* */
	relations: {
		"../cell/index": {
			type: "child",
			linked: function () {
				this._isLastChild();
			},
			linkChanged: function () {
				this._isLastChild();
			},
			unlinked: function () {
				this._isLastChild();
			}
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		_isLastChild: function () {
			const cells = this.getRelationNodes("../cell/index");
			if (cells.length > 0) {
				const lastIndex = cells.length - 1;
				cells.forEach((cell, index) => {
					cell._setLastChild(index === lastIndex)
				});
			}
		}
	}
})
