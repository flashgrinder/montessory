module.exports = {
	filename: "_smart-grid",
	outputStyle: 'sass',
	mobileFirst: false,
	columns: 12,
	offset: "30px",
	container: {
		maxWidth: "1280px",
		fields: "30px"
	},
	breakPoints: {
		xl: {
			width: "1200px"
		},
		lg: {
			width: "992px"
		},
		md: {
			width: "768px"
		},
		sm: {
			width: "576px"
		},
		xs: {
			width: "400px",
			offset: "10px",
			fields: "5px"
		}
	},
	mixinNames: {
		container: "wrapper",
		row: "row-flex",
		rowFloat: "row-float",
		rowInlineBlock: "row-ib",
		rowOffsets: "row-offsets",
		column: "col",
		size: "size",
		columnFloat: "col-float",
		columnInlineBlock: "col-ib",
		columnPadding: "col-padding",
		columnOffsets: "col-offsets",
		shift: "shift",
		from: "from",
		to: "to",
		fromTo: "from-to",
		reset: "reset",
		clearfix: "clearfix",
		debug: "debug",
		uRowFlex: "u-row-flex",
		uColumn: "u-col",
		uSize: "u-size"
	},
	tab: "    ",
	defaultMediaDevice: "screen",
	detailedCalc: false
};